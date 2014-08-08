<?php

class NewsController extends \BaseController {
		protected $layout = "manager.layouts.default";
		const ModuleName = 'News';
	/**
	 * Display a listing of the resource.
	 * GET /news
	 *
	 * @return Response
	 */
	public function index()
	{
	   $breadcrumb = array(array('link'=>'manager/news','title'=>'News'));	
	   $lists = News::with('NewCategory')->paginate(5);
	   //dd($lists);
	   $this->layout->content = View::make('manager.news.index')->with('lists',$lists)
	   ->with('breadcrumb',$breadcrumb);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /news/create
	 *
	 * @return Response
	 */
	public function create()
	{		
		$breadcrumb = array(array('link'=>'manager/news','title'=>'News'),array('link'=>'#','title'=>'create'));
		$category =  NewCategory::orderBy('name','asc')->lists('name','id');		
		$this->layout->content = View::make('manager.news.create')->with('category',$category)
		->with('breadcrumb',$breadcrumb);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /news
	 *
	 * @return Response
	 */
	public function store()
	{		
		$validation = Validator::make(Input::all(),News::$rule);
		if($validation->passes())
		{
			$news = new News();	
			$news->fill(Input::all());
			$news->permalink = Str::slug(Input::get('title'), '_');
			$news->save();
			Session::flash('msg_flash',CommonHelper::print_msg('success','Created successfully'));	
			return Redirect::to('manager/news');
		}
		Session::flash('msg_flash',CommonHelper::print_msg('error','Created problem!'));
		return Redirect::back()->withInput()->withErrors($validation);		
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
		$new = News::find($id);		
		if($new)
		{
		$breadcrumb = array(array('link'=>'manager/news','title'=>'News'),array('link'=>'#','title'=>'show'));		
		$this->layout->content = View::make('manager.news.show')		
			 ->with('view',$new)->with('breadcrumb',$breadcrumb);
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
		$news = News::find($id);
		if($news)
		{
			$category  = NewCategory::lists('name','id');
			$this->layout->content = View::make('manager.news.edit')
			->with('breadcrumb',array(array('link'=>'manager/news','title'=>'News'),array('link'=>'#','title'=>'Edit')))
			->with('view',$news)->with('category',$category);
		}
		
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
		
		$news = News::find($id);
		if($news)
		{
			$validation= Validator::make(Input::all(),News::$rule);
			if($validation->passes())
			{
				$news->fill(Input::all());
				$news->update();
				Session::flash('msg_flash',CommonHelper::print_msg('success','Updated successfully'));	
				return Redirect::to('manager/news');	
			}
			Session::flash('msg_flash',CommonHelper::print_msg('error','Edit problem'));	
			return Redirect::back()->withInput()->withErrors($validation);
			
		}
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
		
		$news = News::find($id);
		if($news)
		{
			$news->delete();
			Session::flash('msg_flash',CommonHelper::print_msg('success','Updated successfully'));	
			return Redirect::to('manager/news');				
		}
		Session::flash('msg_flash',CommonHelper::print_msg('error',"You cant'n delete this record"));	
		//return Redirect::back()->withInput()->withErrors($validation);
		return Redirect::to('manager/news');	
	}

	public function find()
	{
		$keyword = Input::get('key_find');
		$new = News::where('title','like','%'.$keyword.'%')->orWhere('content','like','%'.$keyword.'%')->paginate(5);
		$par_link=['key_find'=>$keyword];

		$this->layout->content = View::make('manager.news.index')
			->with('breadcrumb',array(array('link'=>'manager/news','title'=>'News'),array('link'=>'#','title'=>'Search')))
			->with('lists',$new)
			->with('par_link',$par_link);
	}



	/*client*/
	public function showClient($id)
	{		
		
	}

}