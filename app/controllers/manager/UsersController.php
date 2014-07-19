<?php

class UsersController extends \BaseController {
    protected  $layout = "manager.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /users
	 *
	 * @return Response
	 */
	public function index()
	{
             //$list = User::paginate(5);  
             $list = DB::table('users')->leftJoin('group_users','group_users.id','=','users.group_users')
                     ->orderBy('users.id','desc')
                     ->select(DB::RAW('users.id,users.first_name,users.email,users.activated,group_users.name,users.created_at'))
                     ->paginate(5);
             $group_users = GroupUser::all();
             $this->layout->content = View::make('manager.users.index')->with('list',$list)->with('group_name',$group_users);
	}
       
               
        /**
	 * Show the form for creating a new resource.
	 * GET /users/create
	 *
	 * @return Response
	 */
	public function getAdd()
	{
	    //return View::make('users.create')->render();
            //return Response::view('users.create');  
            $group_users = DB::table('group_users')->orderBy('name', 'asc')->lists('name','id');
            $this->layout->content = View::make('manager.users.create')->with('group_users',$group_users);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /users
	 *
	 * @return Response
	 */
	public function store()
	{          
            $validation = Validator::make(Input::all(),User::$rule);
            if($validation->passes()){                
                $user = new User;
                $user->fill(Input::all());
                $user->password = Hash::make(Input::get('password'));                
                $user->save();
                Session::flash('msg_flash', CommonHelper::print_msg('success','Created success'));
               return $this->index();
                //Redirect::to('users');
            }
           // else{
              Session::flash('msg_flash', CommonHelper::print_msgs('error',$validation->messages()));
               // return $this->getAdd(); 
               // return Response::view('users.create');            
              // return  View::make('users.create')->render();
                // return View::back()->withInput();
              //Redirect::back->withInput()->withErrors($validation);
              return Redirect::back()->withInput()->withErrors($validation);
               // return Response::json($user->toArray());;
           // }
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
		$user = User::find($id);                    
                $this->layout->content = View::make('manager.users.show')->with('user',$user);
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
		$user = User::find($id);             
                $group_users = DB::table('group_users')->orderBy('name', 'asc')->lists('name','id');
                $this->layout->content = View::make('manager.users.edit')->with('user',$user)->with('group_users',$group_users);
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
                if(Input::get('password')){
                $user->password = Hash::make(Input::get('password'));                
                }
                $user->group_users = Input::get('group_users');
                $user->first_name = Input::get('first_name');
                $user->activated = Input::get('activated');     
                $user->update();
                Session::flash('msg_flash', CommonHelper::print_msg('success','Updated success'));
                return $this->index();
                     
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
            User::find($id)->delete(); 
            Session::flash('msg_flash', CommonHelper::print_msg('success','Have deleted!'));
            return Redirect::to('users');
	}
        
        public function changeStatus($id,$type){
            $user = User::find($id);
            $user->activated = $type;
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
                         $this->changeStatus($id,1);
                        } 
                         break;   
                     case'pending': 
                          foreach($list_check as $user=>$id){
                          $this->changeStatus($id,0);
                        } 
                         break;   
                     case'del':
                        foreach($list_check as $user=>$id){
                         $this->destroy($id);
                        } 
                        break;
                }
                return Redirect::to('users');
           }
          else{                
                Session::flash('msg_flash', CommonHelper::print_msg('warning','Please choose users'));
                return Redirect::back()->withInput();     
          }
        }
        
        public function filter()
        {
            $filter = Input::get('field_filter');
            if($filter){             
             $list = DB::table('users')->leftJoin('group_users','group_users.id','=','users.group_users')
                     ->where('group_users.name','=',$filter)
                     ->orderBy('users.id','desc')
                     ->select(DB::RAW('users.id,users.first_name,users.email,users.activated,group_users.name,users.created_at'))
                     ->paginate(3);
             $group_users = GroupUser::all();
             $this->layout->content = View::make('manager.users.filter')->with('list',$list)->with('group_name',$group_users)
                     ->with('field_filter',$filter);
            }
        }

}