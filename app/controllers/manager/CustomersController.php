<?php

class  CustomersController extends \BaseController {
    protected  $layout = "manager.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /manager/customers
	 *
	 * @return Response
	 */
	public function index()
	{          
            $list= DB::table('profiles')
                 ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                 ->leftJoin('sector', 'sector.id', '=', 'profiles.sector_id')
                 ->where('group_users','=',User::CUSTOMER)
                 ->orderBy('users.id','desc')
                 ->select(DB::raw('users.id,users.email,sector.name,users.created_at,users.activated,profiles.company_name,profiles.employee_count'))   
                 ->paginate(5);            
            $this->layout->content = View::make('manager.customers.index')->with('list',$list);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /manager/customers/create
	 *
	 * @return Response
	 */
	public function create()
	{		
            $sector = DB::table('sector')->orderBy('name', 'asc')->lists('name','id');
            $this->layout->content = View::make('manager.customers.create')->with('sector',$sector);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /manager/customers
	 *
	 * @return Response
	 */
	public function store()
	{
            $validation = Validator::make(Input::all(),Profile::$rule);
            if($validation->passes()){
                $customer = new User;
                $customer->fill(Input::all());
                $customer->password = Hash::make(Input::get('password'));
                $customer->group_users = User::CUSTOMER;
                $customer->save();
                
                $profile = new Profile;
                $profile->user_id = $customer->id;
                $profile->fill(Input::all());          
                $profile->save();
                Session::flash('msg_flash',  CommonHelper::print_msg('success','Created success'));
                return Redirect::to('manager/customer');
            }
            Session::flash('msg_flash',  CommonHelper::print_msg('error','Please check all field!'));
            //Session::flash('msg_flash',  CommonHelper::print_msgs('error',$validation->messages()));
            return Redirect::back()->withInput()->withErrors($validation);
	}

	/**
	 * Display the specified resource.
	 * GET /manager/customers/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
            $profile = DB::table('profiles')
                     ->rightJoin('users','users.id','=','profiles.user_id')
                    ->leftJoin('sector','sector.id','=','profiles.sector_id')
                     ->where('users.id','=',$id)
                     ->select(DB::raw('users.id,username,first_name,email,last_name,users.created_at,users.updated_at,company_name,phone_number,employee_count,address,contact_employee_company,activated,sector.name as name_sector'))
                     ->first();  
            $this->layout->content = View::make('manager.customers.show')->with('profile',$profile);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /manager/customers/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
          $sector = DB::table('sector')->orderBy('name', 'asc')->lists('name','id');                  
          $customer = DB::table('profiles')
                 ->rightJoin('users', 'users.id', '=', 'profiles.user_id')->where('users.id','=',$id)                 
                 ->first();            
          $this->layout->content = View::make('manager.customers.edit')
                 ->with('customer',$customer)
                 ->with('sector',$sector);                     
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /manager/customers/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$validation = Validator::make(Input::all(),Profile::$rule_profile);
                if($validation->passes()){
                    $customer = User::find($id);
                    if(Input::get('password')){
                    $customer->password = Input::get('password');
                    }
                    $customer->activated= Input::get('activated');
                    $customer->first_name= Input::get('first_name');
                    $customer->last_name= Input::get('last_name');
                    $customer->update();
                    
                    $check = Profile::where('user_id','=',$id)->first();
                    if($check){
                        $profile = Profile::find($check->id);
                        $profile->fill(Input::all());
                        $profile->update();
                    }
                    else{
                        $profile = new Profile;
                        $profile->fill(Input::all());
                        $profile->user_id = $customer->id;
                        $profile->save();                        
                    }
                    
                    Session::flash('msg_flash', CommonHelper::print_msg('success','Updated success'));
                    return Redirect::to('manager/customer');
                }
                 Session::flash('msg_flash', CommonHelper::print_msgs('error',$validation->messages()));
                 //Session::flash('msg_flash', CommonHelper::print_msg('error','Please enter all field!'));
                 return Redirect::back()->withInput()->withErrors($validation);
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /manager/customers/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		User::find($id)->delete();
                Profile::where('user_id','=',$id)->delete();
                Session::flash('msg_flash', CommonHelper::print_msg('success','Deleted success'));
                return Redirect::to('manager/customer');
	}
        
        public function find()
        {           
            if(Input::get('field_find')&&Input::get('filter'))
            {
              if(Input::get('field_find')=='all')
              {                   
                 $customer = DB::table('profiles')
                 ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                 ->where('group_users','=',User::CUSTOMER)
                 ->where('username','like','%'.Input::get('key_find').'%')
                 ->paginate(5);                      
              }
              else
              {                
                 if(Input::get('filter')=='like'){
                    $customer = DB::table('profiles')
                    ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                    ->where('group_users','=',User::CUSTOMER)
                    ->where(Input::get('field_find'),'like','%'.Input::get('key_find').'%')
                    ->paginate(5);  
                 }
                 else if(Input::get('filter')=='big'){
                    $customer = DB::table('profiles')
                    ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                    ->where('group_users','=',User::CUSTOMER)
                    ->where('employee_count','>=','100')
                    ->paginate(5);              
                 }
                 else if(Input::get('filter')=='small'){
                    $customer = DB::table('profiles')
                    ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                    ->where('group_users','=',User::CUSTOMER)
                    ->where(Input::get('field_find'),'<=',Input::get('key_find'))
                    ->paginate(5);   
                 }
                  else if((Input::get('filter')=='asc')||(Input::get('filter')=='desc')){
                    $customer = DB::table('profiles')
                    ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                    ->where('group_users','=',User::CUSTOMER)
                    ->where(Input::get('field_find'),'like','%'.Input::get('key_find').'%')
                    ->orderBy(Input::get('field_find'),Input::get('filter'))
                    ->paginate(5);   
                 }
                  else {
                    $customer = DB::table('profiles')
                    ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                    ->where(Input::get('field_find'),'=',Input::get('key_find'))
                    ->where('group_users','=',User::CUSTOMER)
                    ->paginate(5);   
                  }
              }             
               
               //dd($customer);             
               $this->layout->content = View::make('manager.customers.search')->with('list',$customer)
                       ->with('field',Input::get('field_find'))
                       ->with('key',Input::get('key_find'))
                       ->with('filter',Input::get('filter'));
              
            }
        }

}