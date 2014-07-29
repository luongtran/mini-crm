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
                $view = DB::table('users')
                        ->leftJoin('profiles','users.id','=','profiles.user_id')
                        ->where('users.id',Auth::id())
                        ->first(['users.email','users.created_at','users.updated_at',
                                'users.first_name','users.last_name','profiles.address','profiles.company_name',
                                'profiles.phone_number','profiles.avatar','users.display_name'
                            ]);
                  return View::make('share.profile.manager_profile')->with('view',$view);
                }
                
                if(Auth::user()->group_users == User::CUSTOMER || Auth::user()->group_users == User::EMPLOYEE)               
                {
                $view = DB::table('profiles')
                        ->rightJoin('users','users.id','=','profiles.user_id')
                        ->where('users.id',Auth::id())
                        ->first();
                  return View::make('share.profile.client_profile');
                }
            }
            return false;
        }
        
        public function updateProfile()
        {                      
            $rule = ['avatar'=>'image','phone_number'=>'numeric','display_name'=>'required|min:4'];
            $validation = Validator::make(Input::all(),$rule);
            if($validation->passes())
            {                
                $profile = Profile::where('user_id',Auth::id())->first();                
                /*update image*/
                $image =  Input::file('avatar');                
                if($image){
                $path= $image->getRealPath();
                $type= $image->getClientOriginalExtension();
                $data = file_get_contents($path);
                $base64 = 'data:image/'.$type .';base64,'.base64_encode($data);
                $profile->avatar = $base64;                   
                }
                /*end update image to base 64*/     
                $profile->address = Input::get('address');
                $profile->phone_number = Input::get('phone_number');
                $profile->update();
                
                $user = User::where('id','=',$profile->user_id)->first();                                
                $user->display_name = Input::get('display_name');
                $user->update();
                
                Session::flash('msg_flash',  CommonHelper::print_msg('success','Update success'));
                return Redirect::back();
            }
            Session::flash('msg_flash',  CommonHelper::print_msgs('error','Problem update'));
            return Redirect::back()->withInput()->withErrors($validation);
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
                if(Auth::user()->group_users == User::EMPLOYEE){
                return Redirect::to('client/customer');    
                }
                else if(Auth::user()->group_users == User::CUSTOMER){
                return Redirect::to('client/customer');        
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