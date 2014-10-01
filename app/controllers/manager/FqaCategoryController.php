<?php

class FqaCategoryController extends BaseController {
        protected  $layout = "manager.layouts.default";
        /**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
                $listCategory = FqaCategory::paginate(10);
                $this->layout->page = trans('form.group_fqa');
                $this->layout->title = trans('form.group_fqa');
                $this->layout->breadcrumb = [['link'=>'manager/fqa-category','title'=>'Fqa Category']];    
		$this->layout->content = View::make('manager.fqa_category.index',  compact('listCategory'));
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
                $breadcrumb = [['link'=>'manager/fqa-category','title'=>'Fqa Category'],['link'=>'','title'=>'Create']];    
		$this->layout->content = View::make('manager.fqa_category.create',  compact('breadcrumb'));            
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{ 
		$validation = Validator::make(Input::all(),FqaCategory::$rule);
                if($validation->passes())
                {
                    $Category = new FqaCategory;
                    $Category->fill(Input::all());
                    $Category->save();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.create')));
                    return Redirect::to('manager/fqa-category');
                }
                Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.required_fields')));
                return Redirect::back()->withInput()->withErrors($validation);
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{            
                $breadcrumb = [['link'=>'manager/fqa-category','title'=>'Fqa Category'],['link'=>'','title'=>'View']];   
		$category = FqaCategory::find($id);            
                if($category)                           
                {
                    $this->layout->content = View::make('manager.fqa_category.show',compact('category','breadcrumb'));
                }
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{            
            $breadcrumb = [['link'=>'manager/fqa-category','title'=>'Fqa Category'],['link'=>'','title'=>'Edit']];   
            $category = FqaCategory::find($id);            
            if($category)                           
            {
            	$this->layout->content = View::make('manager.fqa_category.edit',compact('category','breadcrumb'));
            }
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{          
		$validation = Validator::make(Input::all(),FqaCategory::$rule);               
                if($validation->passes())
                {                    
                    $category =FqaCategory::find($id);
                    $category->fill(Input::all());
                    $category->update();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.update')));
                    return Redirect::to('manager/fqa-category');
                }
                Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.required_fields')));      
                return Redirect::back()->withInput()->withErrors($validation);
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{		
	     $check =  Fqa::where('category_id','=',$id)->count();
             if($check==0)
             {
             	 $category = FqaCategory::find($id);             	
                 $category->delete();
                 Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.delete')));
                 return Redirect::back();
             }
             Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.exist_relationship',array('name'=>'FqaCategory','with_name'=>'Fqas'))));
             return Redirect::back();
	}


}
