<?php

class ProductsController extends \BaseController {
        protected $layout="manager.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /products
	 *
	 * @return Response
	 */
	public function index()
	{   
            $products = Product::with('GroupProduct')->orderBy('purchase_products.id','desc')->get();
            $this->layout->page = trans('form.product');
            $this->layout->title = trans('form.product');
            $this->layout->breadcrumb = [['link'=>'manager/products','title'=>trans('form.product')]];              
	    $this->layout->content = View::make('manager.products.index',compact('products'));		  							
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /products/create
	 *
	 * @return Response
	 */
	public function create()
	{            
            $this->layout->page = trans('form.product');
            $this->layout->title = trans('form.product');
            $this->layout->breadcrumb = [['link'=>'manager/products','title'=>trans('form.product')],['link'=>'manager/products#','title'=>trans('form.addNew')]];           
            $this->layout->content = View::make('manager.products.create');
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
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.create')));
                    return Redirect::route('manager.products.index');
                }
                Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.required_fields')));
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
            $this->layout->page = trans('form.product');
            $this->layout->title = trans('form.product');
            $this->layout->breadcrumb = [['link'=>'manager/products','title'=>'Products'],['link'=>'manager/products#','title'=>trans('common.button.show')]];           
            $product = Product::where('purchase_products.id','=',$id)->leftJoin('purchase_group_products','purchase_group_products.id','=','purchase_products.group_products')
                    ->first(['purchase_products.id','purchase_products.name','purchase_products.description','purchase_products.created_at',
                            'purchase_products.updated_at','purchase_products.cost','purchase_products.discount',
                            'purchase_group_products.name as group_name'
                           ]);
            $this->layout->content = View::make('manager.products.show',compact('breadcrumb','product'));
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
            $this->layout->page = trans('form.product');
            $this->layout->title = trans('form.product');
            
	    $this->layout->breadcrumb = [['link'=>'manager/products','title'=>'Products'],['link'=>'manager/products#','title'=>trans('common.button.edit')]];           
	    $product = Product::where('purchase_products.id','=',$id)->leftJoin('purchase_group_products','purchase_group_products.id','=','purchase_products.group_products')
                    ->first(['purchase_products.id','purchase_products.name','purchase_products.description','purchase_products.created_at',
                            'purchase_products.updated_at','purchase_products.cost','purchase_products.discount',
                            'purchase_group_products.name as group_name','purchase_products.activated'
                           ]);        
           $this->layout->content = View::make('manager.products.edit',compact('breadcrumb','product'));
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
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.update')));
                    return Redirect::route('manager.products.index');
                }
                  Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.required_fields')));
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
                 Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.delete')));
                 return Redirect::route('manager.products.index');
             }
             Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.exist_relationship',array('name'=>'Product','with_name'=>'Purchase'))));
             return Redirect::route('manager.products.index');
	}
        
        public function find()
	{
             $key_find = Input::get('key_find');
             if($key_find){
             $products = DB::table('purchase_products')->leftjoin('purchase_group_products','purchase_group_products.id','=','purchase_products.group_products')
                        ->orderBy('purchase_products.id','desc')
                        ->where('purchase_products.name','like','%'.$key_find.'%')
                        ->select(DB::RAW('purchase_products.id,purchase_products.name,purchase_products.created_at,purchase_products.activated,purchase_products.cost,purchase_products.discount,purchase_group_products.name as group_name'))
                        ->paginate(20);
	          $this->layout->content = View::make('manager.products.index')->with('products',$products);                          
             }
    }


}