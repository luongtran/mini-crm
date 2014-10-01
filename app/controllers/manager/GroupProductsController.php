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
            $group_products = GroupProduct::all();
            $this->layout->page = trans('form.group_product');
            $this->layout->page =trans('form.group_product');
            $this->layout->breadcrumb = [['link'=>'manager/group-products','title'=>trans('form.group_product')]];         
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
            $this->layout->page = trans('form.group_product');
            $this->layout->page = trans('form.group_product');
            $this->layout->breadcrumb = [['link'=>'manager/group-products','title'=>trans('form.group_product')],['link'=>'manager/group-products/create','title'=>trans('form.addNew')]];    
            $this->layout->content = View::make('manager.group_products.create');                
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /products
	 *
	 * @return Response
	 */
	public function store()
	{
		$validation = Validator::make(Input::all(),GroupProduct::$rule);
                if($validation->passes())
                {
                    $GroupProduct = new GroupProduct;
                    $GroupProduct->fill(Input::all());
                    $GroupProduct->save();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.create')));
                    return Redirect::to('manager/group-products');
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
            $group_product = GroupProduct::find($id);            
            if($group_product)                           
            {
                $this->layout->page = "Group products";
                $this->layout->page = "Group products";
                $this->layout->breadcrumb = [['link'=>'manager/group-products','title'=>'Products'],['link'=>'','title'=>'Show']];    
           
            	$this->layout->content = View::make('manager.group_products.show',compact('group_product'));
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
            $group_product = GroupProduct::find($id);            
            if($group_product)                           
            {
            	$this->layout->content = View::make('manager.group_products.edit',compact('group_product'));
            }
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
		$validation = Validator::make(Input::all(),GroupProduct::$rule);
                if($validation->passes())
                {
                    $GroupProduct =GroupProduct::find($id);
                    $GroupProduct->fill(Input::all());
                    $GroupProduct->update();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.update')));
                    return Redirect::to('manager/group-products');
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
	     $check =  Product::where('group_products','=',$id)->count();
             if($check==0)
             {
             	 $GroupProduct = GroupProduct::find($id);             	
                 $GroupProduct->delete();
                 Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.delete')));
                 return Redirect::back();
             }
             Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.exist_relationship',array('name'=>'Group product','with_name'=>'Product'))));
             return Redirect::back();
	}


	public function find()
	{
		// $keyword = Input::get('key_find');
		// $GroupProduct = GroupProduct::where('name','like','%'.$keyword.'%')->paginate(15);
		// $par_link=['key_find'=>$keyword];
		// $breadcrumb = array(array('link'=>'manager/group-products','title'=>trans('title.form.group_product')),array('link'=>'manager/group-products#','title'=>trans('common.button.search')));
		// $this->layout->content = View::make('client.new.index')
		// 	->with('breadcrumb',$breadcrumb)
		// 	->with('lists',$GroupProduct)
		// 	->with('par_link',$par_link);
	}

}