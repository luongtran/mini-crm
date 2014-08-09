<?php

class FqaController extends \BaseController {
		protected $layout="client.layouts.default";		
		const ModuleName='FAQ';
	/**
	 * Display a listing of the resource.
	 * GET /fqas
	 *
	 * @return Response
	 */
	public function index()
	{
		    $lists = Fqa::with('FqaCategory')->orderBy('view','desc')->paginate(5);		   
			$this->layout->content = View::make('client.fqa.index')
			->with('breadcrumb',array(array('link'=>'client/faq','title'=>'FAQ')))
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
		// $this->layout->content = View::make('client.fqa.create')
		// ->with('breadcrumb',array(array('link'=>'client/fqa','title'=>'FAQ'),array('link'=>'create','title'=>'Create')));
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /fqas
	 *
	 * @return Response
	 */
	public function store()
	{		
		// $validation = Validator::make(Input::all(),Fqa::$rule);
		// if($validation->passes())
		// {
		// 	$fqa = new Fqa();	
		// 	$fqa->fill(Input::all());
		// 	$fqa->save();
		// 	Session::flash('msg_flash',CommonHelper::print_msg('success','Created successfully'));	
		// 	return Redirect::to('client/fqa');
		// }
		// Session::flash('msg_flash',CommonHelper::print_msg('error','Created problem!'));
		// return Redirect::back()->withInput()->withErrors($validation);		
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
	     $fqa->view = ($fqa->view)+1;	
	     $fqa->update();	
		 $this->layout->content = View::make('client.fqa.show')
		->with('breadcrumb',array(array('link'=>'client/fqa','title'=>'FAQ'),array('link'=>'client/fqa#','title'=>'Show')))
		->with('view',$fqa);
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
		// $fqa = Fqa::find($id);
		// if($fqa)
		// {
		// 	$this->layout->content = View::make('manager.fqas.edit')
		// 	->with('breadcrumb',array(array('link'=>'manager/fqa','title'=>'FQA'),array('link'=>'manager/fqa#','title'=>'Edit')))
		// 	->with('view',$fqa);
		// }
		
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
		// $fqa = Fqa::find($id);
		// if($fqa)
		// {
		// 	$validation= Validator::make(Input::all(),Fqa::$rule);
		// 	if($validation->passes())
		// 	{
		// 		$fqa->title = Input::get('title');
		// 		$fqa->content = Input::get('content');
		// 		$fqa->category = Input::get('category');
		// 		$fqa->update();
		// 		Session::flash('msg_flash',CommonHelper::print_msg('success','Updated successfully'));	
		// 		return Redirect::to('manager/fqa');	
		// 	}
		// 	Session::flash('msg_flash',CommonHelper::print_msg('success','Edit problem'));	
		// 	return Redirect::back()->withInput()->withErrors($validation);
			
		// }
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
		// $fqa = Fqa::find($id);
		// if($fqa)
		// {
		// 	$fqa->delete();
		// 	Session::flash('msg_flash',CommonHelper::print_msg('success','Updated successfully'));	
		// 	return Redirect::to('manager/fqa');				
		// }
		// Session::flash('msg_flash',CommonHelper::print_msg('error',"You cant'n delete this record"));	
		// //return Redirect::back()->withInput()->withErrors($validation);
		// return Redirect::to('manager/fqa');	
	}

	public function find()
	{
		$keyword = Input::get('key_find');
		$fqa = Fqa::where('title','like','%'.$keyword.'%')->orWhere('content','like','%'.$keyword.'%')->paginate(5);
		$par_link=['key_find'=>$keyword];

		$this->layout->content = View::make('client.fqa.index')
			->with('breadcrumb',array(array('link'=>'client/fqa','title'=>'FAQ'),array('link'=>'client/fqa#','title'=>'Search')))
			->with('lists',$fqa)
			->with('par_link',$par_link);
	}

}