<?php

class NewController extends \BaseController {
	protected $layout = "client.layouts.default";
	/**
	 * Display a listing of the resource.
	 * GET /news
	 *
	 * @return Response
	 */
	public function index()
	{
		$breadcrumb = array(array('link'=>'client/news','title'=>trans('title.form.news')));
		$lists = News::paginate(20);
		$this->layout->content = View::make('client.new.index')->with('lists',$lists)->with('breadcrumb',$breadcrumb);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /news/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /news
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /news/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$new = News::where('permalink','=',$id)->first();		
		if($new)
		{
		$breadcrumb = array(array('link'=>'client/news','title'=>trans('title.form.news')),array('link'=>'client/news#','title'=>trans('common.button.show')));		
		$listNew = News::where('id','<>',$new->id)
          						->orderBy('id','desc')
          						->paginate(10);

		return View::make('client.new.show')->with('view',$new)->with('breadcrumb',$breadcrumb)->with('listNew',$listNew);
		}
		else
		{			
		}
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /news/{id}/edit
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
	 * PUT /news/{id}
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
	 * DELETE /news/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

	public function find()
	{

		$keyword = Input::get('key_find');
		$new = News::where('title','like','%'.$keyword.'%')->orWhere('content','like','%'.$keyword.'%')->paginate(15);
		$par_link=['key_find'=>$keyword];
		$breadcrumb = array(array('link'=>'client/news','title'=>trans('title.form.news')),array('link'=>'client/news#','title'=>trans('common.button.search')));
		$this->layout->content = View::make('client.new.index')
			->with('breadcrumb',$breadcrumb)
			->with('lists',$new)
			->with('par_link',$par_link);
	}

}