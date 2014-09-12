<?php

class PrioritiesController extends BaseController {
        protected  $layout = "manager.layouts.default";
        /**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
                $listCategory = Priority::paginate(10);
                $breadcrumb = [['link'=>'manager/proprities','title'=>'Priority']];    
		$this->layout->content = View::make('manager.priority.index',  compact('listCategory','breadcrumb'));
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
                $breadcrumb = [['link'=>'manager/proprities','title'=>'Proprity'],['link'=>'link','title'=>'Proprity']];    
		$this->layout->content = View::make('manager.sector.create',  compact('breadcrumb'));            
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
                    $Category = new Priority;
                    $Category->fill(Input::all());
                    $Category->save();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.create')));
                    return Redirect::to('manager/priorities');
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
                $breadcrumb = [['link'=>'manager/priorities','title'=>'Sector'],['link'=>'sectors','title'=>'View']];   
		$category = Sector::find($id);            
                if($category)                           
                {
                    $this->layout->content = View::make('manager.sector.show',compact('category','breadcrumb'));
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
            $category = Sector::find($id);            
            if($category)                           
            {
            	$this->layout->content = View::make('manager.sector.edit',compact('category','breadcrumb'));
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
                    $category =Sector::find($id);
                    $category->fill(Input::all());
                    $category->update();
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.update')));
                    return Redirect::to('manager/sectors');
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
	     $check =  Profile::where('sector_id','=',$id)->count();
             if($check==0)
             {
             	 $category = Sector::find($id);             	
                 $category->delete();
                 Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.delete')));
                 return Redirect::back();
             }
             Session::flash('msg_flash',  CommonHelper::print_msg('error',trans('message.exist_relationship',array('name'=>'Sector','with_name'=>'User'))));
             return Redirect::back();
	}


}
