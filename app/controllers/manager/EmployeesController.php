<?php

class EmployeesController extends \BaseController {
    protected $layout = "manager.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /manager/employees
	 *
	 * @return Response
	 */
	public function index($id)
	{
	    $employee = User::where('customer_id','=',$id)->paginate(5);
            $customer = Profile::where('user_id','=',$id)->first();
            $this->layout->content = View::make('manager.employees.index')->with('list',$employee)->with('customer',$customer);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /manager/employees/create
	 *
	 * @return Response
	 */
	public function create($id)
	{
            $this->layout->content = View::make('manager.employees.create')->with('customer_id',$id);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /manager/employees
	 *
	 * @return Response
	 */
	public function store($id)
	{
	   $validation = Validator::make(Input::all(),Employees::$rule);
           if($validation->passes()){
               $employee = new User;
               $employee->fill(Input::all());
               $employee->password = Hash::make(Input::get('password'));
               $employee->group_users = User::EMPLOYEE;
               $employee->customer_id = $id;
               $employee->save();
               
                $email = new EmailController();
                $message = array(
                    'text'=>'<p>Username: '.Input::get('email').'</p><p>Password: '.Input::get('password').'</p>
                    <a href="'.Request::root().'/crm-login">Login at </a>'
                    ,
                    'subject'=>'Create account customer by Admin CRM '.rand(100,9999),
                    'to_email'=>Input::get('email'),
                    'to_name'=>Input::get('first_name')
                    );     
                if($email->manager_sendEmail($message))
                {
                Session::flash('msg_flash',  CommonHelper::print_msg('success','Created success'));
                }
                
               return Redirect::to('manager/customer/'.$id.'/employees');
           }
           //Session::flash('msg_flash',  CommonHelper::print_msgs('error',$validation->messages()));
           return Redirect::back()->withInput()->withErrors($validation);
	}

	/**
	 * Display the specified resource.
	 * GET /manager/employees/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($customer_id,$id)
	{
            $profile = DB::table('profiles')->rightJoin('users','profiles.user_id','=','users.id')
                                         ->where('users.id',$id)
                                         ->first();
            $customer = DB::table('users')->rightJoin('profiles','profiles.user_id','=','users.id')
                                         ->where('users.id',$customer_id)
                                         ->first();           
            //dd($profile);
	    $this->layout->content = View::make('manager.employees.show')->with('profile',$profile);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /manager/employees/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($customer_id,$id)
	{
		$profile = DB::table('users')->leftJoin('profiles','profiles.user_id','=','users.id')
                                    ->where('users.id',$id)
                                    ->first(['users.id','users.customer_id','last_name','first_name',
                                     'users.activated','profiles.address','profiles.phone_number','email'
                                        ]);
                $company = Profile::where('user_id','=',$customer_id)->first();
                $this->layout->content = View::make('manager.employees.edit')->with('profile',$profile)->with('company',$company);
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /manager/employees/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($customer_id,$id)
	{
		$validation = Validator::make(Input::all(),Employees::$rule_edit);
                if($validation->passes()){
                    $employee = User::find($id);
                    $employee->fill(Input::all());
                    if(Input::get('password')){
                        $employee->password = Hash::make(Input::get('password'));
                    }
                    $employee->update();
                 
                    $check = Profile::where('user_id','=',$id)->first();
                    if($check){
                        $profile = Profile::find($check->id);
                        $profile->fill(Input::all());
                        $profile->update();
                    }
                    else{
                        $profile = new Profile;
                        $profile->fill(Input::all());
                        $profile->user_id = $id;
                        $profile->save();                        
                    }
                    
                     Session::flash('msg_flash', CommonHelper::print_msg('success','Created success'));
                     return Redirect::to('manager/customer/'.$customer_id.'/employees');
                }
                Session::flash('msg_flash', CommonHelper::print_msg('error','Please enter full fields success'));
                return Redirect::back()->withInput()->withErrors($validation);
                
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /manager/employees/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($customer_id,$id)
	{
           Profile::where('user_id','=',$id)->delete(); 
	   User::find($id)->delete();           
           return Redirect::back();
	}
        public function find($customer_id)
        {
            $key = Input::get('key_find');
            if($key){
            $employee = DB::table('users')->leftJoin('profiles','profiles.user_id','=','users.id')
                                    ->where('users.customer_id',$customer_id)
                                    ->where('first_name','like','%'.$key.'%')
                                    ->get(['users.id','users.customer_id','last_name','first_name',
                                     'users.activated','profiles.address','profiles.phone_number','email',
                                        'users.created_at'
                                        ]);
            
            $customer = Profile::where('user_id','=',$customer_id)->first();
            $this->layout->content = View::make('manager.employees.search')->with('list',$employee)->with('customer',$customer);
            }            
        }

}