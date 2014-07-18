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
               Session::flash('msg_flash', CommonHelper::print_msg('success','Created success'));
               return Redirect::to('manager/customer/'.$id.'/employee');
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
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /manager/employees/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /manager/employees/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
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

}