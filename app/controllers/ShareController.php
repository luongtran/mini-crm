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
                $profile->company_name = Input::get('company_name');
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
                
                Session::flash('msg_flash',  CommonHelper::print_msg('success','Updated success'));
                return Redirect::back();
            }
            Session::flash('msg_flash',  CommonHelper::print_msgs('error','Problem updated'));
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
                    Session::flash('msg_flash',  CommonHelper::print_msg('success','Updated success'));
                    return Redirect::back();
                 }
                  Session::flash('msg_flash',  CommonHelper::print_msg('error','Problem updated'));
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
           Session::flash('msg_flash',  CommonHelper::print_msg('error','Email or password is false!'));
           return Redirect::back()->withInput();           
	}

  
        
        public function logout()
	{
		//
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