<?php

class ShareController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /share
	 *
	 * @return Response
	 */
        public function viewProfile()
        {
            if(Auth::check)
            {
                $view = DB::table('profiles')
                        ->rightJoin('users','users.id','=','profiles.user_id')
                        ->where('users.id',Auth::id())
                        ->first();
            }
            return false;
        }
        /**
	 * Show the form for creating a new resource.
	 * GET /share/create
	 *
	 * @return Response
	 */
	public function login()
	{            
           $input = array('email'=>Input::get('email'),'password'=>Input::get('password'));
           $remeber = Input::get('remember');
           if(Auth::attempt($input,$remeber)){
                Session::flash('msg_flash',  CommonHelper::print_msg('error','Login success'));
                return Redirect::to('manager/customer');
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