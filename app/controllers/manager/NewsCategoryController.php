<?php

class NewsCategoryController extends BaseController {
        protected  $layout = "manager.layouts.default";
        /**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
                $listCategory = NewsCategory::orderBy('id','desc')->paginate(10);
                $this->layout->breadcrumb = [['link'=>'manager/news-category','title'=>'News Category']];    
		$this->layout->content = View::make('manager.news_category.index',  compact('listCategory','breadcrumb'));
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
                $breadcrumb = [['link'=>'manager/new-category','title'=>'News Category'],['link'=>'','title'=>'Create']];    
		$this->layout->content = View::make('manager.news_category.create',  compact('breadcrumb'));            
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{ 
		$validation = Validator::make(Input::all(),NewsCategory::$rule);
                if($validation->passes())
                {
                    $Category = new NewsCategory;
                    $Category->fill(Input::all());
                    $Category->save();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.create')));
                    return Redirect::to('manager/news-category');
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
                $breadcrumb = [['link'=>'manager/news-category','title'=>'News Category'],['link'=>'','title'=>'View']];   
		$category = NewsCategory::find($id);            
                if($category)                           
                {
                    $this->layout->content = View::make('manager.news_category.show',compact('category','breadcrumb'));
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
            $breadcrumb = [['link'=>'manager/news-category','title'=>'News Category'],['link'=>'','title'=>'Edit']];   
            $category = NewsCategory::find($id);            
            if($category)                           
            {
            	$this->layout->content = View::make('manager.news_category.edit',compact('category','breadcrumb'));
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
		$validation = Validator::make(Input::all(),NewsCategory::$rule);
                if($validation->passes())
                {
                    $category =NewsCategory::find($id);
                    $category->fill(Input::all());
                    $category->update();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.update')));
                    return Redirect::to('manager/news-category');
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
	     $check =  News::where('category_id','=',$id)->count();
             if($check==0)
             {
             	 $category = NewsCategory::find($id);             	
                 $category->delete();
                 Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.delete')));
                 return Redirect::back();
             }
             Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.exist_relationship',array('name'=>'NewsCategory','with_name'=>'News'))));
             return Redirect::back();
	}


}
