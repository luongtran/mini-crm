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
                            ->select(DB::RAW("purchases.id,purchases.code,purchases.created_at,profiles.company_name,count(purchase_detail.id)as amount,sum(purchase_products.cost)as total"))
                            ->paginate(5);
        
                $this->layout->content =  View::make('manager.purchases.index')->with('purchases',$purchases);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /purchases/create
	 *
	 * @return Response
	 */
	public function create()
	{
		   $breadcrumb = [
                          ['link'=>'manager/purchases','title'=>trans('title.form.invoice')],
			              ['link'=>'manager/purchases#','title'=>trans('common.button.create')]
                         ];  
		$customer = User::where('group_users',User::CUSTOMER)->join('profiles','profiles.user_id','=','users.id')
					->select(DB::RAW('company_name,users.id as id'))->lists('company_name','id');				
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
		$perchase = new Purchase();
		$perchase->fill(Input::all());
		$perchase->user_id = Auth::id();
		$perchase->save();
		$perchase->code = 'CRM'.$perchase->id.'-OTHER';
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
               $breadcrumb = [
                          ['link'=>'manager/purchases','title'=>trans('title.form.invoice')],
			              ['link'=>'manager/purchases#','title'=>trans('common.button.show')]
                         ];  
            $this->layout->content =  View::make('manager.purchases.show',compact('breadcrumb','purchases'));
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
            Session::flash('msg_flash',  CommonHelper::print_msg('warning','Feature not active'));             
			//$invoice->delete();
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