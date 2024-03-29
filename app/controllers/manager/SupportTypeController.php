<?php

class SupportTypeController extends BaseController {
        protected  $layout = "manager.layouts.default";
        /**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
                $listCategory = SupportType::all();
                $this->layout->page = trans('form.support_type');
                $this->layout->title = trans('form.support_type');
                $this->layout->breadcrumb = [['link'=>'manager/support-type','title'=>'Support type']];    
		$this->layout->content = View::make('manager.support_type.index',  compact('listCategory'));
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
                $breadcrumb = [['link'=>'manager/support-type','title'=>'Support type'],['link'=>'manager/support-type','title'=>'Create']];    
		$this->layout->content = View::make('manager.support_type.create',  compact('breadcrumb'));            
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{ 
		$validation = Validator::make(Input::all(),Priority::$rule);
                if($validation->passes())
                {
                    $Category = new SupportType;
                    $Category->fill(Input::all());
                    $Category->save();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.create')));
                    return Redirect::to('manager/support-type');
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
                $breadcrumb = [['link'=>'manager/support-type','title'=>'Support type'],['link'=>'manager/support-type','title'=>'view']];    
		$category = SupportType::find($id);            
                if($category)                           
                {
                    $this->layout->content = View::make('manager.support_type.show',compact('category','breadcrumb'));
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
            $breadcrumb = [['link'=>'manager/sectors','title'=>'Priority'],['link'=>'priorities','title'=>'Edit']];   
            $category = SupportType::find($id);            
            if($category)                           
            {
            	$this->layout->content = View::make('manager.support_type.edit',compact('category','breadcrumb'));
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
		$validation = Validator::make(Input::all(),Sector::$rule);
                if($validation->passes())
                {
                    $category =SupportType::find($id);
                    $category->fill(Input::all());
                    $category->update();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.update')));
                    return Redirect::to('manager/support-type');
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
	     $check =  Ticket::where('support_type','=',$id)->count();
             if($check==0)
             {
             	 $category = SupportType::find($id);             	
                 $category->delete();
                 Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.delete')));
                 return Redirect::back();
             }
             Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.exist_relationship',array('name'=>'Sector','with_name'=>'User'))));
             return Redirect::back();
	}


}
