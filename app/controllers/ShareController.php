<?php
use Intervention\Image\ImageManagerStatic as Image;
class ShareController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /share
	 *
	 * @return Response
	 */
        public function viewProfile()
        {
            if(Auth::check())
            {
                if(Auth::user()->group_users == User::MANAGER || Auth::user()->group_users == User::STAFF)               
                {
                 $view = User::find(Auth::id());
                 return View::make('share.profile.manager_profile')->with('view',$view);
                }
                
                if(Auth::user()->group_users == User::CUSTOMER || Auth::user()->group_users == User::EMPLOYEE)               
                {
                  $view = User::find(Auth::id());         
                  return View::make('share.profile.client_profile')->with('view',$view);
                }
            }
            return false;
        }
        
        public function updateProfile()
        {                                  
            $validation = Validator::make(Input::all(),User::$rule_profile_manager);
            if($validation->passes())
            {                
                $profile = Profile::where('user_id',Auth::id())->first();
                $profile->address = Input::get('address');
                $profile->phone_number = Input::get('phone_number');
                if(Auth::user()->group_users == User::CUSTOMER){
                $profile->company_name = Input::get('company_name');
                $profile->website = Input::get('website');
                }
                $profile->update();
                
                $user = User::where('id','=',$profile->user_id)->first();                                
                $user->first_name = Input::get('first_name');
                $user->last_name = Input::get('last_name');
                 if(Input::file('avatar'))
                {
                    $check = Upload::where('user_id','=',Auth::id())->first();                                      
                    $image = new ImagesController();
                    if($check)
                    {
                      $image->destroy($check->id);   
                    }                    
                    $path = "asset/share/uploads/images/personal";      
                    $user->avatar =  $image->store(Input::file('avatar'),$path,'image',Auth::id());
                }
                
                $user->update();
                
                Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.update')));
                return Redirect::back();
            }
            Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.required_fields')));
            return Redirect::back()->withInput()->withErrors($validation);
        }

        public function updatePassword()
        {
            if(Auth::check())
            {
              $user = User::find(Auth::id());
              {
                 $validation = Validator::make(Input::all(),array('password'=>'required|confirmed|min:6','password_confirmation'=>'required|min:6'));
                 if($validation->passes())
                 {
                    $user->password = Hash::make(Input::get('password'));
                    $user->update();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.update')));
                    return Redirect::back();
                 }
                  Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.required_fields')));
                  return Redirect::back()->withInput()->withErrors($validation);

              }

            }
            return Redirect::back();
            
        }
        
        /**
	 * Show the form for creating a new resource.
	 * GET /share/create
	 *
	 * @return Response
	 */
	public function login()
	{            
           $input = array('email'=>Input::get('email'),'password'=>Input::get('password'),'activated'=>1);
           $remeber = Input::get('remember');
           if(Auth::attempt($input,$remeber)){
                                            
               $login = User::find(Auth::id());
               $login->ip = Request::getClientIp();               
               $login->last_login = date('Y/m/d h:i:s', time());
               //$login->last_position_login = date('Y/m/d h:i:s', time());               
               $login->count_access = (Auth::user()->count_access + 1);
               $login->update();               
               
               Session::flash('msg_flash',  CommonHelper::print_msg('success','Login success'));                
              
               /*Move to url old when access into*/
               /*if(Session::get('visitUrl'))
               {    
                 dd(Session::get('visitUrl'));                 
                 return Redirect::to(Session::get('visitUrl'));                  
               }*/

               /*check permission*/
               if(Auth::user()->group_users == User::EMPLOYEE){
                return Redirect::to('client/tickets');    
                }
                else if(Auth::user()->group_users == User::CUSTOMER){
                return Redirect::to('client/tickets');        
                }
                else if(Auth::user()->group_users == User::STAFF){
                return Redirect::to('manager/tickets');        
                }                
                else if(Auth::user()->group_users == User::MANAGER){
                return Redirect::to('manager');        
                }        
                
           }
           else
           {
              $input = array('email'=>Input::get('email'),'password'=>Input::get('password'));              
              if(Auth::attempt($input)){
               Session::flash('msg_flash',  CommonHelper::print_msg('warning',trans('message.account_not_active')));
              }
              else
              {
                Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.login_valid')));
              }

              return Redirect::back()->withInput();  
           }
                    
	}
  
  public function forgetPassword()
  {
     //die();
     $email = Input::get('email');
     $user =  User::where('email','=',$email)->where('activated','=',1)->first();     
     if($user)
     {
        $email = new EmailController();
          $data=array(
                   'subject'=>'Forget password',
                   'text'=>'Welcome to CRM, please click link be reset password  <a href="'.url('crm-reset-password?user='.$user->email.'&token='.$user->remember_token).'">Reset password</a>',                           
                   'to_email'=>$user->email,
                   'to_name'=>$user->first_name.' '.$user->last_name,
               );       
        if($email->manager_sendEmail($data))
          Session::flash('msg_flash',  CommonHelper::print_msg('success','Please visit email active reset password'));
        else
          Session::flash('msg_flash',  CommonHelper::print_msg('warning','Problem with address email'));


        return Redirect::to('/page/message');

     }
     else
     {
       Session::flash('msg_flash',  CommonHelper::print_msg('error',"Email  hasn't exist in system"));
       return Redirect::back()->withInput();  
     }

  }
  
  public function checkResetPassword()
  {
     $Validator = Validator::make(Input::all(),array('user'=>'email|required','token'=>'required'));
      if($Validator->passes())
      {
        $email = Input::get('user');
        $token = Input::get('token');
        $user = User::where('email','=',$email)->where('remember_token','=',$token)->first();
        if($user)
        {
          return View::make('share.resetPassword',compact('email','token'));
        }
        else
        {
          Session::flash('msg_flash',  CommonHelper::print_msg('error','Error token'));
          return Redirect::to('/page/message');
        }
      }
      Session::flash('msg_flash',  CommonHelper::print_msgs('error',$Validator->messages()));
      return Redirect::to('/page/message');
  }

  public function resetPassword()
  {
      $Validator = Validator::make(Input::all(),
        array('email'=>'email|required','token'=>'required','password'=>'required|min:6|confirmed','password_confirmation'=>'required|min:6')
        );

      if($Validator->passes())
      {
        $email = Input::get('email');
        $tokent = Input::get('token');
        $user = User::where('email','=',$email)->where('remember_token','=',$tokent)->first();
        if($user)
        {
            $user->password = Hash::make(Input::get('password'));
            $user->update();
            Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.create')));     
            $email = new EmailController();
            $data=array(
                     'subject'=>'Create new password',
                     'text'=>'<p>Welcome to CRM, you have change new password : <b>'.Input::get('password').'</b></p>At ip :'.Request::getClientIp(),                           
                     'to_email'=>$user->email,
                     'to_name'=>$user->first_name.' '.$user->last_name,
                 );       
            $email->manager_sendEmail($data);

            return Redirect::to('/page/message');
        }

      }
      Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.required_fields')));
      return Redirect::back()->withInput()->withErrors($Validator);  
  } 
   

        
        public function lockScreen()
	{
            $user=null; 
	    if(!Session::get('isLogin'))
            {
              Auth::logout();                
              return 1;
            }
            return 0;
	}
          public function lockScreen1()
	{    
             $user=null;  
             return View::make('share.log_screen')->with('user',$user)->render();
	}
         public function clearAll()
	{
		//
	}
        public function clearSession()
	{
		//
	}
        public function clearCookie()
	{
		//
	}
        
      
	

}