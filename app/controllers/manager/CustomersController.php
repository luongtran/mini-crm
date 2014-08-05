<?php
class  CustomersController extends \BaseController {
    protected  $layout = "manager.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /manager/customers
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
                        ['link'=>'manager/customers','title'=>'User'],
			['link'=>'#','title'=>'Create']
                     ];                    
            $breadcumb = CommonHelper::breadcumb($listNav);
            
            $list= DB::table('profiles')
                 ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                 ->leftJoin('sector', 'sector.id', '=', 'profiles.sector_id')
                 ->where('group_users','=',User::CUSTOMER)
                 ->orderBy('users.id','desc')
                 ->select(DB::raw('users.id,users.email,sector.name,users.created_at,users.activated,profiles.company_name,profiles.employee_count'))   
                 ->paginate(5);            
            $this->layout->content = View::make('manager.customers.index')
                    ->with('breadcumb',$breadcumb)
                    ->with('list',$list);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /manager/customers/create
	 *
	 * @return Response
	 */
	public function create()
	{
            /*breadcumb*/
            $listNav = [
                        ['link'=>'manager/customers','title'=>'User'],
			['link'=>'#','title'=>'Create']
                     ];                    
            $breadcumb = CommonHelper::breadcumb($listNav);
            
            $sector = DB::table('sector')->orderBy('name', 'asc')->lists('name','id');
            $this->layout->content = View::make('manager.customers.create')->with('sector',$sector)->with('breadcumb',$breadcumb);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /manager/customers
	 *
	 * @return Response
	 */
	public function store()
	{
            $validation = Validator::make(Input::all(),User::$rule_create_customers);
            if($validation->passes()){
                $customer = new User;
                $customer->fill(Input::all());
                $customer->password = Hash::make(Input::get('password'));
                $customer->group_users = User::CUSTOMER;
                $customer->ip = Request::getClientIp();               
                $customer->code_forget = md5(Input::get('email'));        
                
                if(Auth::user()->group_users == User::STAFF)               
                 $customer->staff_id = Auth::id();                
                else if(Auth::user()->group_users == User::MANAGER)              
                 $customer->manager_id = Auth::id();  
                
                if(Input::file('avatar'))
                {
                    $image = new ImagesController();
                    $path = "asset/share/uploads/images/personal";      
                    $customer->avatar =  $image->store(Input::file('avatar'),$path,'image',$customer->id);
                }
                                
                $customer->save();
                
                $profile = new Profile;
                $profile->user_id = $customer->id;
                $profile->fill(Input::all());          
                $profile->save();
                
                /*send email to customer*/
                $email = new EmailController();
                $message = array(
                    'text'=>'<p>Username: '.Input::get('email').'</p><p>Password: '.Input::get('password').'</p>
                     <a href="'.Request::root().'/crm-login">Login at </a>',
                    'subject'=>'Create account customer by Admin CRM '.rand(100,9999),
                    'to_email'=>Input::get('email'),
                    'to_name'=>Input::get('first_name')
                    );     
                if($email->manager_sendEmail($message))
                {
                Session::flash('msg_flash',  CommonHelper::print_msg('success','Created success'));
                }
                /*end send mail*/
                return Redirect::to('manager/customers');
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
            $profile =  User::find($id);   
            $purchases = DB::table('purchases')->join('purchase_detail','purchase_detail.purchase_id','=','purchases.id')
                            ->join('users','users.id','=','purchases.customer_id')
                            ->join('profiles','profiles.user_id','=','users.id')
                            ->join('purchase_products','purchase_products.id','=','purchase_detail.product_id')
                            ->where('users.id','=',$id)
                            ->orderBy('purchases.id','desc')
                            ->select(DB::RAW("purchases.id,purchases.code,purchases.created_at,profiles.company_name,purchase_products.cost cost,purchase_products.discount as discount,purchase_products.name as product_name,purchase_detail.expiry,purchase_detail.deadline_from"))
                            ->get();
            $documents = Upload::where('customer_id',$profile->user_id)->where('type_file','document')->orderBy('id','desc')->get();                                
            $this->layout->content = View::make('manager.customers.show')
                         ->with('profile',$profile)
                         ->with('purchases',$purchases)
                         ->with('documents',$documents);
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
             /*breadcumb*/
            $listNav = [
                        ['link'=>'manager/customers','title'=>'User'],
			['link'=>'#','title'=>'Create']
                     ];                    
          $breadcumb = CommonHelper::breadcumb($listNav);
            
          $sector = DB::table('sector')->orderBy('name', 'asc')->lists('name','id');                  
          $customer =  User::find($id);           
          $this->layout->content = View::make('manager.customers.edit')
                 ->with('customer',$customer)
                 ->with('sector',$sector)                   
                 ->with('breadcumb',$breadcumb);
      
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
		$validation = Validator::make(Input::all(),User::$rule_edit_customers);
                if($validation->passes()){                    
                    $customer = User::find($id);                   
                    if($customer)
                    {         
                            if(Input::get('password')){
                            $customer->password = Hash::make(Input::get('password'));
                            }
                            $customer->activated= Input::get('activated');
                            $customer->first_name= Input::get('first_name');
                            $customer->last_name= Input::get('last_name');
                            /*check avatar*/
                            if(Input::file('avatar')){                                
                                $image = new  ImagesController();
                                $upload = Upload::where('user_id','=',$customer->id)->first();
                                if($upload)
                                {
                                   $image->destroy($upload->id);                                  
                                }
                                $path = "asset/share/uploads/images/personal";      
                                $customer->avatar = $image->store(Input::file('avatar'), $path, 'image', $customer->id);                                
                            }
                            /*update avatar*/                            
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
                    }
                    return Redirect::to('manager/customers');
                    
                }
                 //Session::flash('msg_flash', CommonHelper::print_msgs('error',$validation->messages()));
                 Session::flash('msg_flash', CommonHelper::print_msg('error','Please enter all field!'));
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
                $check = User::where('customer_id','=',$id)->count();    
                if($check==0){
		User::find($id)->delete();
                Profile::where('user_id','=',$id)->delete();                
                Session::flash('msg_flash', CommonHelper::print_msg('success','Deleted success'));
                return Redirect::to('manager/customers');
                }                                
                Session::flash('msg_flash', CommonHelper::print_msg('error','Can not delete this customer, have relationship table employee'));
                return Redirect::to('manager/customers');
	}
        
  public function find()
        {           
            if(Input::get('field_find')&&Input::get('filter'))
            {
              if(Input::get('field_find')=='all')
              {                   
                 $customer = DB::table('profiles')
                 ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                 ->leftJoin('sector', 'sector.id', '=', 'profiles.sector_id')
                 ->where('group_users','=',User::CUSTOMER)
                 ->where('username','like','%'.Input::get('key_find').'%')
                 ->orderBy('users.id','desc')
                 ->select(DB::raw('users.id,users.email,sector.name,users.created_at,users.activated,profiles.company_name,profiles.employee_count'))   
                 ->paginate(5); 
              }
              else
              {                
                 if(Input::get('filter')=='like'){                   
                     $customer = DB::table('profiles')
                        ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                        ->leftJoin('sector', 'sector.id', '=', 'profiles.sector_id')
                        ->where('group_users','=',User::CUSTOMER)                        
                        ->where(Input::get('field_find'),'like','%'.Input::get('key_find').'%')                        
                        ->select(DB::raw('users.id,users.email,sector.name,users.created_at,users.activated,profiles.company_name,profiles.employee_count'))   
                        ->paginate(5); 
                 }
                 else if(Input::get('filter')=='big'){                     
                    $customer = DB::table('profiles')
                        ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                        ->leftJoin('sector', 'sector.id', '=', 'profiles.sector_id')
                        ->where('group_users','=',User::CUSTOMER)                        
                        ->where(Input::get('field_find'),'>=',Input::get('key_find'))                     
                        ->select(DB::raw('users.id,users.email,sector.name,users.created_at,users.activated,profiles.company_name,profiles.employee_count'))   
                        ->paginate(5); 
                 }
                 else if(Input::get('filter')=='small'){                   
                    $customer = DB::table('profiles')
                        ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                        ->leftJoin('sector', 'sector.id', '=', 'profiles.sector_id')
                        ->where('group_users','=',User::CUSTOMER)                        
                        ->where(Input::get('field_find'),'<=',Input::get('key_find'))                  
                        ->select(DB::raw('users.id,users.email,sector.name,users.created_at,users.activated,profiles.company_name,profiles.employee_count'))   
                        ->paginate(5); 
                 }
                  else if((Input::get('filter')=='asc')||(Input::get('filter')=='desc')){                  
                      $customer = DB::table('profiles')
                        ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                        ->leftJoin('sector', 'sector.id', '=', 'profiles.sector_id')
                        ->where('group_users','=',User::CUSTOMER)                        
                        ->where(Input::get('field_find'),'like','%'.Input::get('key_find').'%')              
                        ->select(DB::raw('users.id,users.email,sector.name,users.created_at,users.activated,profiles.company_name,profiles.employee_count'))   
                        ->paginate(5); 
                 }
                  else {
                    $customer = DB::table('profiles')
                        ->rightJoin('users', 'users.id', '=', 'profiles.user_id')
                        ->leftJoin('sector', 'sector.id', '=', 'profiles.sector_id')
                        ->where('group_users','=',User::CUSTOMER)                        
                        ->where(Input::get('field_find'),'=',Input::get('key_find'))
                        ->select(DB::raw('users.id,users.email,sector.name,users.created_at,users.activated,profiles.company_name,profiles.employee_count'))   
                        ->paginate(5); 
                  }
              }             
              /*parametor for paginate */             
              $par_link = ['field_find'=>Input::get('field_find'),'key_find'=>Input::get('key_find'),'filter'=>Input::get('filter')];

              $this->layout->content = View::make('manager.customers.index')->with('list',$customer)
                       ->with('par_link',$par_link);
              
            }
        }

}