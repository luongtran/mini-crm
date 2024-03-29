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
          Session::flash('msg_flash','Welcome to CRM '); 
          $new = News::orderBy('id','desc')->first();
		  if($new)
		  {
          $listNew =                                    News::where('id','<>',$new->id)
          						->orderBy('id','desc')
          						->paginate(10);
          $this->layout->content = View::make('client.customer.index')->with('new',$new)->with('listNew',$listNew);  
		  }
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /customers/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//return View::make('client.customer.create');
		$sector = Sector::all()->lists('name','id');		
		return View::make('home.start')->with('sector',$sector);
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
                    'password'=>'required|confirmed|min:6',
                    'password_confirmation'=>'required|min:6',
                    'employee_count'=>'required|numeric|min:1',
                    'company_name'=>'required|min:3|max:100|unique:profiles',
                    'phone_number'=>'required',
                    'contact_employee_company'=>'required|min:6',
                    'sector_id'=>'required'
                    ];
            $validation = Validator::make(Input::all(),$rule);            
            if($validation->passes())
            {
               $customer = new User();
               $customer->email = Input::get('email');
               $customer->password = Hash::make(Input::get('password'));
               $customer->activated = 0;
               $customer->group_users = User::CUSTOMER;
               $customer->code_forget = md5(Input::get('email'));
               /*split name default*/
               $fullname = Input::get('contact_employee_company');
               $cut_name = explode(" ", $fullname);
               $count_array = count($cut_name);     
               
               $customer->first_name = $cut_name[0];
               if($count_array>1)
               {                      
                   $customer->last_name = $cut_name[1];
                   if($count_array==3)
                   {
                    $customer->last_name = $cut_name[1]." ".$cut_name[2];   
                   }
               }
               /*end split*/               
               $customer->ip = Request::getClientIp();
               $customer->save();
               
               $profile = new Profile();
               $profile->fill(Input::all());
               $profile->user_id = $customer->id;  
               $profile->sector_id = Input::get('sector_id');  
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
               Session::flash('msg_flash', CommonHelper::print_msg('success',trans('message.create_account')));
               return Redirect::to('/page/message');
            } 
            Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.required_fields')));
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

	public function invoice()
	{
		$customer_id = Auth::id();
		if(Auth::user()->group_users == User::EMPLOYEE)
		{
			$customer_id = User::find(Auth::id())->customer_id;
		}
		$purchases = DB::table('purchases')
                            ->join('users','users.id','=','purchases.customer_id')                                                        
                            ->where('users.id','=',$customer_id)
                            ->orderBy('purchases.id','desc')
                            ->select(DB::RAW("purchases.id,purchases.code,purchases.created_at"))
                            ->get();
        $this->layout->content = View::make('client.customer.invoice')->with('purchases',$purchases);                      
	}
	public function showInvoice($id)
	{
		  $customer_id = Auth::id();
		if(Auth::user()->group_users == User::EMPLOYEE)
		{
			$customer_id = User::find(Auth::id())->customer_id;
		}
		  $purchases = DB::table('purchases')->join('purchase_detail','purchase_detail.purchase_id','=','purchases.id')
                            ->join('users','users.id','=','purchases.customer_id')                            
                            ->join('profiles','profiles.user_id','=','users.id')
                            ->join('purchase_products','purchase_products.id','=','purchase_detail.product_id')
                            ->where('purchases.code','=',$id)
                            ->where('users.id','=',$customer_id)
                            ->orderBy('purchases.id','desc')
                            ->select(DB::RAW("purchases.id,purchases.code,purchases.created_at,profiles.company_name,purchase_products.cost cost,purchase_products.discount as discount,purchase_products.name as product_name,purchase_detail.expiry"))
                            ->get();
               //dd($purchases);
          $this->layout->content =  View::make('client.customer.show_invoice')->with('purchases',$purchases);
	}

}