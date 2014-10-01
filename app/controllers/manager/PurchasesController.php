<?php
class PurchasesController extends \BaseController {
    protected $layout = "manager.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /purchases
	 *
	 * @return Response
	 */
	public function index()
	{
		$purchases = DB::table('purchases')->leftjoin('purchase_detail','purchase_detail.purchase_id','=','purchases.id')
                            ->leftjoin('users','users.id','=','purchases.customer_id')
                            ->leftjoin('profiles','profiles.user_id','=','users.id')
                            ->leftjoin('purchase_products','purchase_products.id','=','purchase_detail.product_id')
                            ->groupBy('purchases.id')
                            ->orderBy('purchases.id','desc')
                            ->select(DB::RAW("users.id as company_id,purchases.id,purchases.code,purchases.created_at,profiles.company_name,count(purchase_detail.id)as amount,sum(purchase_products.cost)as total"))
                            ->get();                 
                $this->layout->page = trans("form.invoice");
                $this->layout->title =trans("form.invoice");
                $this->layout->breadcrumb = array(['link'=>'manager/purchase','title'=>trans("form.invoice")]);
                $this->layout->content =  View::make('manager.purchases.index')->with('purchases',$purchases);
                
                /*
                Check expiry product
                var Create;
                var Now;
                var expiry;
                
                (Now[year] - Create[year] >0)
                 {
                   if(Now[month]>Create[month])
                    {
                       $total thang = ((Now[year]-Create[year])*12 + (Now[month] - Create[month]));
                    }
                    else
                    {
                       $total thang = (12 - Create[month]) + Now[month]; 
                    }
                 }
                 else
                 {
                  var check Month = Now[month] - Create[month];
                  if(Month > 6) Het  
                  if(Month = 6) Het  
                  {
                    if(Now[date]>Create[create]) con han
                    else het han
                  }
                  if(Month < 6) Het  
                 }
                  
                 
                 * 
                 *                  
                 */
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /purchases/create
	 *
	 * @return Response
	 */
	public function create()
	{
                $this->layout->page = trans("form.invoice");
                $this->layout->title =trans("form.invoice");
		$this->layout->breadcrumb = [
                                ['link'=>'manager/purchases','title'=>trans('form.invoice')],
			        ['link'=>'manager/purchases#','title'=>trans('common.button.create')]
                            ];  
		$customer = User::where('group_users',User::CUSTOMER)
                                    ->join('profiles','profiles.user_id','=','users.id')
                                    ->select(DB::RAW('CONCAT(company_name,"-ID",users.id) as company_name,users.id as id'))->lists('company_name','id');				
		$this->layout->content = View::make('manager.purchases.create',compact('breadcrumb','customer'));
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /purchases
	 *
	 * @return Response
	 */
	public function store()
	{          
            $rule = array('product_id'=>'required','expiry'=>'required');
            $validator = Validator::make(Input::all(),$rule);
            if($validator->passes()){
		$perchase = new Purchase();
		$perchase->fill(Input::all());
                $perchase->user_id = Auth::id();               
		$perchase->save();                 
                if(Input::get('type_customer')==1)
                {
                 $perchase->code = 'CRM'.$perchase->id.'-CUSTOMER';      
		 $perchase->customer_id = Input::get('customer_id');
                }
                else
                {
                 $perchase->code = 'CRM'.$perchase->id.'-OTHER';   
                }		
		$perchase->update();

		$perchase_detail = new PurchaseDetail();
		$perchase_detail->purchase_id = $perchase->id;
		$perchase_detail->product_id = Input::get('product_id');
		$perchase_detail->deadline_from = Input::get('deadline_from');
		$perchase_detail->expiry = Input::get('expiry');
		$perchase_detail->save();

		/*Need use method send email to customer .........*/
                Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.create')));             
		return Redirect::to('manager/purchases');
            }
            else
            {
                Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.required_fields')));     
                return Redirect::back()->withInput()->withErrors($validator);
            }
	}

	/**
	 * Display the specified resource.
	 * GET /purchases/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
            $purchases = DB::table('purchases')->join('purchase_detail','purchase_detail.purchase_id','=','purchases.id')
                            ->leftjoin('users','users.id','=','purchases.customer_id')
                            ->leftjoin('profiles','profiles.user_id','=','users.id')
                            ->join('purchase_products','purchase_products.id','=','purchase_detail.product_id')
                            ->where('purchases.code','=',$id)
                            ->orderBy('purchases.id','desc')
                            ->select(DB::RAW("purchases.id,purchases.code,purchases.created_at,profiles.company_name,purchase_products.cost cost,purchase_products.discount as discount,purchase_products.name as product_name,purchase_detail.expiry,purchase_detail.deadline_from,purchases.customer_order"))
                            ->get();
                $this->layout->page = trans("form.invoice");
                $this->layout->title =trans("form.invoice");
               $this->layout->breadcrumb = [
                          ['link'=>'manager/purchases','title'=>trans('title.form.invoice')],
			              ['link'=>'manager/purchases#','title'=>trans('common.button.show')]
                         ];  
            $this->layout->content =  View::make('manager.purchases.show',compact('purchases'));
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /purchases/{id}/edit
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
	 * PUT /purchases/{id}
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
	 * DELETE /purchases/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$invoice = Purchase::find($id);
		if($invoice)
		{
                      Session::flash('msg_flash',  CommonHelper::print_msg('warning','Feature not sure active'));             
		      $invoice->delete();
		}
		return Redirect::back();
	}



	     public function find()
	{
             $key_find = Input::get('key_find');
             if($key_find){
             $purchases = DB::table('purchases')->leftjoin('purchase_detail','purchase_detail.purchase_id','=','purchases.id')
                            ->leftjoin('users','users.id','=','purchases.customer_id')
                            ->leftjoin('profiles','profiles.user_id','=','users.id')
                            ->leftjoin('purchase_products','purchase_products.id','=','purchase_detail.product_id')
                            ->where('purchases.code','like','%'.$key_find.'%')
                            ->orWhere('profiles.company_name','like','%'.$key_find.'%')
                            ->groupBy('purchases.id')
                            ->orderBy('purchases.id','desc')
                            ->select(DB::RAW("purchases.id,purchases.code,purchases.created_at,profiles.company_name,count(purchase_detail.id)as amount,sum(purchase_products.cost)as total"))
                            ->paginate(5);
		   $par_link = ['field_find'=>Input::get('field_find'),'key_find'=>Input::get('key_find'),'filter'=>Input::get('filter')];
		   $breadcrumb = [
                          ['link'=>'manager/purchases','title'=>trans('title.form.invoice')],
			              ['link'=>'manager/purchases#','title'=>trans('common.button.search')]
                         ];  

	        $this->layout->content = View::make('manager.purchases.index',compact('breadcrumb','par_link','purchases'));	          				
	          				
             }
    }

}