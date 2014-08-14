<?php

class GroupProductsController extends \BaseController {
        protected $layout="manager.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /products
	 *
	 * @return Response
	 */
	public function index()
	{
            $group_products = GroupProduct::paginate(5);
            $this->layout->content = View::make('manager.group_products.index')->with('group_products',$group_products);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /products/create
	 *
	 * @return Response
	 */
	public function create()
	{
            $group_products = DB::table('purchase_group_products')->orderBy('name', 'asc')->lists('name','id');
            $this->layout->content = View::make('manager.products.create')->with('group_products',$group_products);                
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /products
	 *
	 * @return Response
	 */
	public function store()
	{
		$validation = Validator::make(Input::all(),Product::$rule);
                if($validation->passes())
                {
                    $product = new Product;
                    $product->fill(Input::all());
                    $product->save();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success','Created succcess'));
                    return Redirect::route('manager.products.index');
                }
                Session::flash('msg_flash',  CommonHelper::print_msg('error','Please enter all field!'));
                return Redirect::back()->withInput()->withErrors($validation);
	}

	/**
	 * Display the specified resource.
	 * GET /products/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
            $product = Product::where('purchase_products.id','=',$id)->leftJoin('purchase_group_products','purchase_group_products.id','=','purchase_products.group_products')
                    ->first(['purchase_products.id','purchase_products.name','purchase_products.description','purchase_products.created_at',
                            'purchase_products.updated_at','purchase_products.cost','purchase_products.discount',
                            'purchase_group_products.name as group_name'
                           ]);
            if($product)                           
            {
            $this->layout->content = View::make('manager.products.show')->with('product',$product);                            
            }
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /products/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
	     $product = Product::where('purchase_products.id','=',$id)->leftJoin('purchase_group_products','purchase_group_products.id','=','purchase_products.group_products')
                    ->first(['purchase_products.id','purchase_products.name','purchase_products.description','purchase_products.created_at',
                            'purchase_products.updated_at','purchase_products.cost','purchase_products.discount',
                            'purchase_group_products.name as group_name','profiles.address','profiles.phone_number'
                           ]);
            $group_products = DB::table('purchase_group_products')->orderBy('name', 'asc')->lists('name','id');
            $this->layout->content = View::make('manager.products.edit')->with('group_products',$group_products)->with('product',$product);                            
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /products/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$validation = Validator::make(Input::all(),Product::$rule_edit);
                if($validation->passes()){
                    $product = Product::find($id);
                    $product->fill(Input::all());
                    $product->update();                    
                    Session::flash('msg_flash',  CommonHelper::print_msg('success','Updated succcess'));
                    return Redirect::route('manager.products.index');
                }
                  Session::flash('msg_flash',  CommonHelper::print_msg('error','Please enter all field!'));
                return Redirect::back()->withInput()->withErrors($validation);
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /products/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
	     $check = PurchaseDetail::where('product_id','=',$id)->count();
             if($check==0)
             {
                 Product::find($id)->delete();
                 Session::flash('msg_flash',  CommonHelper::print_msg('warning','Delete succcess'));
                 return Redirect::route('manager.products.index');
             }
             Session::flash('msg_flash',  CommonHelper::print_msg('error','Can not delete this product, have relationship with table Purchar'));
             return Redirect::route('manager.products.index');
	}


	public function find()
	{

		$keyword = Input::get('key_find');
		$GroupProduct = GroupProduct::where('name','like','%'.$keyword.'%')->paginate(15);
		$par_link=['key_find'=>$keyword];
		$breadcrumb = array(array('link'=>'manager/group-products','title'=>trans('title.form.group_product')),array('link'=>'manager/group-products#','title'=>trans('common.button.search')));
		$this->layout->content = View::make('client.new.index')
			->with('breadcrumb',$breadcrumb)
			->with('lists',$GroupProduct)
			->with('par_link',$par_link);
	}

}