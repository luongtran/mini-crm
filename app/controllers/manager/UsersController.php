<?php

class UsersController extends \BaseController {
    protected  $layout = "manager.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /users
	 *
	 * @return Response
	 */
        public function __construct()
        {            
            //Common::globalXssClean();  
        }             
	public function index()
	{
             /*breadcumb*/
            $listNav = [
                        ['link'=>'manager/users','title'=>'User'],
			['link'=>'#','title'=>'Index']
                     ];                    
            $breadcumb = CommonHelper::breadcumb($listNav);
            /*breadcumb*/              
             $list = DB::table('users')->leftJoin('group_users','group_users.id','=','users.group_users')
                     ->orderBy('users.id','desc')
                     ->where('users.trash','<>',1)
                     ->select(DB::RAW("users.id,users.email,CONCAT(users.first_name,' ',users.last_name) as fullname,users.activated,group_users.name,users.created_at"))
                     ->paginate(5);

          $t= User::with('groupUser')->get();

        

             $group_users = GroupUser::all();
             $this->layout->content = View::make('manager.users.index')
                     ->with('list',$list)
                     ->with('group_name',$group_users)
                     ->with('breadcumb',$breadcumb);
	}
       
               
        /**
	 * Show the form for creating a new resource.
	 * GET /users/create
	 *
	 * @return Response
	 */
	public function create()
	{	
            /*breadcumb*/
            $listNav = [
                        ['link'=>'manager/users','title'=>'User'],
			['link'=>'#','title'=>'Index']
                     ];                    
            $breadcumb = CommonHelper::breadcumb($listNav);
            /*breadcumb*/            
            $group_users = DB::table('group_users')->orderBy('name', 'asc')->lists('name','id');
            $this->layout->content = View::make('manager.users.create')
                    ->with('group_users',$group_users)
                    ->with('breadcumb',$breadcumb);            
	}

	public function store()
	{          
            $validation = Validator::make(Input::all(),User::$rule_create_users);
            if($validation->passes()){                
                $user = new User;
                $user->fill(Input::all());
                $user->group_users = Input::get('group_users');
                $user->manager_id = Auth::id();
                $user->password = Hash::make(Input::get('password'));
                $user->ip = Request::getClientIp();               
                $user->code_forget = md5(Input::get('email'));                                
                $user->save();
                $profile = new Profile();
                $profile->user_id = $user->id;                
                $profile->save();

               /*send email*/
               $email = new EmailController();
               $data=array(
                   'subject'=>'Create account staff from system crm '.rand(1000,9999),
                   'text'=>'Welcome to CRM, thank you have use system us  <a href="'.Request::root().'/active-customer/'.$user->id.'?token='.$user->code_forget.'">Please active my account at</a>
                           <p>User: '.Input::get('email').'</p><p>Pass: '.Input::get('password').'</p>',
                   'to_email'=>Input::get('email'),
                   'to_name'=>Input::get('first_name'),
               );
               $email->manager_sendEmail($data);  
                Session::flash('msg_flash', CommonHelper::print_msg('success',trans('message.create')));
                return Redirect::route('manager.users.index');
            }          
            //Session::flash('msg_flash', CommonHelper::print_msgs('error',$validation->messages()));
            Session::flash('msg_flash', CommonHelper::print_msg('error','Please check all field'));
            return Redirect::back()->withInput()->withErrors($validation);         
	}

	/**
	 * Display the specified resource.
	 * GET /users/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
            /*breadcumb*/
            $listNav = [
                        ['link'=>'manager/users','title'=>'User'],
			['link'=>'#','title'=>'Show']
                     ];                    
            $breadcumb = CommonHelper::breadcumb($listNav);
            /*breadcumb*/   
		$user = User::find($id);                    
                $this->layout->content = View::make('manager.users.show')
                        ->with('user',$user)
                        ->with('breadcumb',$breadcumb);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /users/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
              /*breadcumb*/
            $listNav = [
                        ['link'=>'manager/users','title'=>'User'],
			['link'=>'#','title'=>'Edit']
                     ];                    
            $breadcumb = CommonHelper::breadcumb($listNav);
            /*breadcumb*/    
            
		$user = User::find($id);
                if($user)
                {
                $group_users = DB::table('group_users')->orderBy('name', 'asc')->lists('name','id');
                $this->layout->content = View::make('manager.users.edit')
                        ->with('user',$user)
                        ->with('group_users',$group_users)
                        ->with('breadcumb',$breadcumb);
                }
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /users/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
            $rule=array('password'=>'confirmed');
	    $validation = Validator::make(Input::all(),$rule);
            if($validation->passes()){                                
                $user = User::find($id);
                if($user)
                {                
                    if(Input::get('password')){
                        $user->password = Hash::make(Input::get('password'));                
                    }
                    $user->group_users = Input::get('group_users');
                    $user->first_name = Input::get('first_name');
                    $user->last_name = Input::get('last_name');
                    $user->activated = Input::get('activated');     
                    $user->update();
                    Session::flash('msg_flash', CommonHelper::print_msg('success','Updated success'));                    
                }                
                return Redirect::route('manager.users.index');
            }
              Session::flash('msg_flash', CommonHelper::print_msgs('error',$validation->messages()));
              return Redirect::back()->withInput()->withErrors($validation);       
	}
        
	/**
	 * Remove the specified resource from storage.
	 * DELETE /users/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
            $user =  User::where('trash',1)->where('id',$id)->first();            
            if($user)
            {  
                $upload = Upload::where("user_id",'=',$user->id)->first();
                if($upload)
                {
                $image = new ImagesController();
                $image->destroy($upload->id);                    
                }
                
                $user->delete();
                Session::flash('msg_flash', CommonHelper::print_msg('success','You have deleted success!'));
            }
            else
            {
                Session::flash('msg_flash', CommonHelper::print_msg('warning',"You can't delete this record ".$id));
            }
            return Redirect::route('manager.users.index');
	}
        
        public function update_feild($id,$feild,$value){
            $user = User::find($id);
            $user->$feild = $value;
            $user->update();            
            Session::flash('msg_flash', CommonHelper::print_msg('success','Changed status'));
        }

        public function action()
        {
         $list_check = Input::get('checkID');
         if($list_check){
                switch(Input::get('action'))
                {
                     case'active': 
                        foreach($list_check as $user=>$id){
                         $this->update_feild($id,'activated',1);
                        } 
                         break;   
                     case'pending': 
                          foreach($list_check as $user=>$id){
                          $this->update_feild($id,'activated',0);
                        } 
                         break;  
                     case'trash':
                        foreach($list_check as $user=>$id){
                         $this->update_feild($id,'trash',1);
                        } 
                        break;    
                     case'del':
                        foreach($list_check as $user=>$id){
                         $this->destroy($id);
                        } 
                        break;
                }
                return Redirect::to('manager/users');
           }
          else{                
                Session::flash('msg_flash', CommonHelper::print_msg('warning','Please choose users'));
                return Redirect::back()->withInput();     
          }
        }
        
        public function filter()
        {
             /*breadcumb*/
            $listNav = [
                        ['link'=>'manager/users','title'=>'User'],
			['link'=>'#','title'=>'Edit']
                     ];                    
            $breadcumb = CommonHelper::breadcumb($listNav);
            /*breadcumb*/  
            
            
            $filter = Input::get('field_filter');
            if($filter){             
             $list = DB::table('users')->leftJoin('group_users','group_users.id','=','users.group_users')
                     ->where('group_users.name','=',$filter)
                     ->where('users.trash','=',0)
                     ->orderBy('users.id','desc')
                     ->select(DB::RAW("users.id,users.email,CONCAT(users.first_name,' ',users.last_name) as fullname,users.activated,group_users.name,users.created_at"))
                     ->paginate(5);
             if(Input::get('field_filter')=='trash'){
                $list = DB::table('users')->leftJoin('group_users','group_users.id','=','users.group_users')
                     ->where('trash','=',1)
                     ->orderBy('users.id','desc')
                     ->select(DB::RAW("users.id,users.email,CONCAT(users.first_name,' ',users.last_name) as fullname,users.activated,group_users.name,users.created_at"))
                     ->paginate(5);  
             }
             
             $group_users = GroupUser::all();
             $this->layout->content = View::make('manager.users.filter')->with('list',$list)->with('group_name',$group_users)
                     ->with('field_filter',$filter)
                     ->with('breadcumb',$breadcumb);
            }
        }
        
        public function find()
        {
             /*breadcumb*/
            $listNav = [
                        ['link'=>'manager/users','title'=>'User'],
			['link'=>'#','title'=>'Edit']
                     ];                    
            $breadcumb = CommonHelper::breadcumb($listNav);
            /*breadcumb*/  
            
            $key_find = Input::get('key_find');
            if($key_find){             
             $list = DB::table('users')->leftJoin('group_users','group_users.id','=','users.group_users')
                     ->where('first_name','like','%'.$key_find.'%')
                     ->orderBy('users.first_name','desc')
                     ->select(DB::RAW("users.id,users.email,CONCAT(users.first_name,' ',users.last_name) as fullname,users.activated,group_users.name,users.created_at"))
                     ->paginate(5);
             $group_users = GroupUser::all();
             
             $this->layout->content = View::make('manager.users.filter')->with('list',$list)->with('group_name',$group_users)
                     ->with('field_filter',$key_find)
                     ->with('breadcumb',$breadcumb);
             
            }
        }

}