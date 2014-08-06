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
                            ->join('users','users.id','=','purchases.customer_id')
                            ->join('profiles','profiles.user_id','=','users.id')
                            ->leftjoin('purchase_products','purchase_products.id','=','purchase_detail.product_id')
                            ->groupBy('purchases.id')
                            ->orderBy('purchases.id','desc')
                            ->select(DB::RAW("purchases.id,purchases.code,purchases.created_at,profiles.company_name,count(purchase_detail.id)as amount,sum(purchase_products.cost)as total"))
                            ->paginate(5);
                //dd($purchase);
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
		$product = Product::all();
		$this->layout->content = View::make('manager.purchases.create');
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /purchases
	 *
	 * @return Response
	 */
	public function store()
	{
		//
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
                            ->join('users','users.id','=','purchases.customer_id')
                            ->join('profiles','profiles.user_id','=','users.id')
                            ->join('purchase_products','purchase_products.id','=','purchase_detail.product_id')
                            ->where('purchases.code','=',$id)
                            ->orderBy('purchases.id','desc')
                            ->select(DB::RAW("purchases.id,purchases.code,purchases.created_at,profiles.company_name,purchase_products.cost cost,purchase_products.discount as discount,purchase_products.name as product_name,purchase_detail.expiry"))
                            ->get();
               //dd($purchases);
            $this->layout->content =  View::make('manager.purchases.show')->with('purchases',$purchases);
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
		//
	}

}