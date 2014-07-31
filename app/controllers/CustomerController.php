<?php

class CustomerController extends \BaseController {
    protected $layout = "client.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /customers
	 *
	 * @return Response
	 */
	public function index()
	{
           Session::flash('msg_flash','<h2>Welcome to CRM </h2>'); 
          $this->layout->content = View::make('client.customer.index');  
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /customers/create
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('client.customer.create');
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /customers
	 *
	 * @return Response
	 */
	public function store()
	{	   
            $rule =['email'=>'required|email|unique:users',
                    'password'=>'required|confirmed',
                    'password_confirmation'=>'required',
                    'employee_count'=>'required|numeric|min:1',
                    'company_name'=>'required|min:3',
                    'phone_number'=>'required',
                    'contact_employee_company'=>'required|min:6',
                    ];
            $validation = Validator::make(Input::all(),$rule);            
            if($validation->passes())
            {
               $customer = new User();
               $customer->email = Input::get('email');
               $customer->password = Hash::make(Input::get('email'));
               $customer->activated = 0;
               $customer->group_users = User::CUSTOMER;
               $customer->code_forget = md5(Input::get('email'));
               $customer->first_name = Input::get('contact_employee_company');
               $customer->last_name = 'MR/MS';
               $customer->ip = Request::getClientIp();
               $customer->save();
               
               $profile = new Profile();
               $profile->fill(Input::all());
               $profile->user_id = $customer->id;               
               $profile->save();
               
               /*send email*/
               $email = new EmailController();
               $data=array(
                   'subject'=>'Create account from  system crm '.rand(1000,9999),
                   'text'=>'Welcome to CRM, thank you have use system us  <a href="'.Request::root().'/active-customer/'.$customer->id.'?token='.$customer->code_forget.'">Please active my account at</a>
                           <p>User: '.Input::get('email').'</p><p>Pass: '.Input::get('password').'</p>',
                   'to_email'=>Input::get('email'),
                   'to_name'=>Input::get('company_name'),
               );
               $email->manager_sendEmail($data);               
               Session::flash('msg_flash', CommonHelper::print_msg('success','Register success'));
               return Redirect::to('/');
            } 
            Session::flash('msg_flash',  CommonHelper::print_msg('error','Please enter full'));
            return Redirect::back()->withInput()->withErrors($validation);
        }

	/**
	 * Display the specified resource.
	 * GET /customers/{id}
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
	 * GET /customers/{id}/edit
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
	 * PUT /customers/{id}
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
	 * DELETE /customers/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}
        
        public function active($id)
	{        
            $user  = User::find($id);        
            if($user)
            {
                if(Input::get('token')==$user->code_forget)
                {
                    $user->activated = 1;
                    $user->update();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success','Active success, please sign'));
                    return Redirect::to('crm-login');                    
                }
            }
            Session::flash('msg_flash',  CommonHelper::print_msg('error','Problem with active , please contact manager system'));
            return Redirect::to('/');  
	}

}