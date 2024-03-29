<?php

class FqasController extends \BaseController {
		protected $layout="manager.layouts.default";		
		const ModuleName='FAQ';
	/**
	 * Display a listing of the resource.
	 * GET /fqas
	 *
	 * @return Response
	 */
	public function index()
	{		   
		    $lists = Fqa::with('FqaCategory')->orderBy('id','desc')->get();	
                    $this->layout->page = trans('form.fqa');
                    $this->layout->title = trans('form.fqa');
                    $this->layout->breadcrumb = array(['link'=>'fqa','title'=>trans('form.fqa')]);                    
		    $this->layout->content = View::make('manager.fqas.index')			
			->with('lists',$lists);			
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /fqas/create
	 *
	 * @return Response
	 */
	public function create()
	{
		$this->layout->content = View::make('manager.fqas.create')
		->with('breadcrumb',array(array('link'=>'manager/fqa','title'=>trans('title.form.faq')),array('link'=>'create','title'=>trans('common.button.create'))));
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /fqas
	 *
	 * @return Response
	 */
	public function store()
	{		
		$validation = Validator::make(Input::all(),Fqa::$rule);
		if($validation->passes())
		{
			$fqa = new Fqa();	
			$fqa->fill(Input::all());
			$fqa->save();
			Session::flash('msg_flash',CommonHelper::print_msg('success',trans('message.create')));	
			return Redirect::to('manager/fqa');
		}
		Session::flash('msg_flash',CommonHelper::print_msg('error',trans('message.required_fields')));
		return Redirect::back()->withInput()->withErrors($validation);		
	}

	/**
	 * Display the specified resource.
	 * GET /fqas/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$fqa = Fqa::find($id);		
		if($fqa)
		{
		$this->layout->content = View::make('manager.fqas.show')
		->with('breadcrumb',array(array('link'=>'manager/fqa','title'=>trans('title.form.faq')),array('link'=>'manager/fqa#','title'=>trans('common.button.show'))))
		->with('view',$fqa);
		}
		else
		{
			
		}
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /fqas/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$fqa = Fqa::find($id);
		if($fqa)
		{
			$category  = FqaCategory::lists('name','id');
			$this->layout->content = View::make('manager.fqas.edit')
			->with('breadcrumb',array(array('link'=>'manager/fqa','title'=>trans('title.form.faq')),array('link'=>'manager/fqa#','title'=>trans('common.button.edit'))))
			->with('view',$fqa)->with('category',$category);
		}
		
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /fqas/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$fqa = Fqa::find($id);
		if($fqa)
		{
			$validation= Validator::make(Input::all(),Fqa::$rule);
			if($validation->passes())
			{
				$fqa->title = Input::get('title');
				$fqa->content = Input::get('content');
				$fqa->category_id = Input::get('category_id');
				$fqa->update();
				Session::flash('msg_flash',CommonHelper::print_msg('success',trans('message.update')));	
				return Redirect::to('manager/fqa');	
			}
			Session::flash('msg_flash',CommonHelper::print_msg('success',trans('message.required_fields')));	
			return Redirect::back()->withInput()->withErrors($validation);
			
		}
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /fqas/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$fqa = Fqa::find($id);
		if($fqa)
		{
			$fqa->delete();
			Session::flash('msg_flash',CommonHelper::print_msg('success',trans('message.delete')));	
			return Redirect::to('manager/fqa');				
		}
		Session::flash('msg_flash',CommonHelper::print_msg('error',trans('message.error_delete')));	
		//return Redirect::back()->withInput()->withErrors($validation);
		return Redirect::to('manager/fqa');	
	}

	public function find()
	{
		$keyword = Input::get('key_find');
		$fqa = Fqa::where('title','like','%'.$keyword.'%')->orWhere('content','like','%'.$keyword.'%')->paginate(5);
		$par_link=['key_find'=>$keyword];

		$this->layout->content = View::make('manager.fqas.index')
			->with('breadcrumb',array(array('link'=>'manager/fqa','title'=>trans('title.form.faq')),array('link'=>'manager/fqa#','title'=>trans('common.button.search'))))
			->with('lists',$fqa)
			->with('par_link',$par_link);
	}

}