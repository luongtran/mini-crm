<?php

class LanguageController extends \BaseController {
	protected $layout = "manager.layouts.default";
	/**
	 * Display a listing of the resource.
	 * GET /languages
	 *
	 * @return Response
	 */

    public function getChangeLanguage($lang) {
        Session::put('current_locale', $lang);
        return Redirect::to(Input::get('return_url'));        
    }

	public function index()
	{
		$list =  Language::all();
		$breadcrumb = [['link'=>'manager/languages','title'=>'Language']];
		$this->layout->content = View::make('manager.languages.index')
					->with('lists',$list)
					->with('breadcrumb',$breadcrumb);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /languages/create
	 *
	 * @return Response
	 */
	public function create()
	{
		$breadcrumb = array(array('link'=>'manager/languages','title'=>'Language'),array('link'=>'#','title'=>'create'));			
		$this->layout->content = View::make('manager.languages.create')
		->with('breadcrumb',$breadcrumb);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /languages
	 *
	 * @return Response
	 */
	public function store()
	{
			
		$validation = Validator::make(Input::all(),array('name'=>'required|unique:languages','code'=>'required|unique:languages'));
		if($validation->passes())
		{
			$language = new Language();	
			$language->fill(Input::all());
			$language->save();
			Session::flash('msg_flash',CommonHelper::print_msg('success','Created successfully'));	
			return Redirect::to('manager/languages');
		}
		Session::flash('msg_flash',CommonHelper::print_msg('error','Created problem!'));
		return Redirect::back()->withInput()->withErrors($validation);		
	}

	/**
	 * Display the specified resource.
	 * GET /languages/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$Language = Language::find($id);		
		if($Language)
		{
		$breadcrumb = array(array('link'=>'manager/languages','title'=>'Languages'),array('link'=>'#','title'=>'show'));		
		$this->layout->content = View::make('manager.languages.show')		
			 ->with('view',$Language)->with('breadcrumb',$breadcrumb);
		}
		else
		{			
		}
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /languages/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$Language = Language::find($id);		
		if($Language)
		{
		$breadcrumb = array(array('link'=>'manager/languages','title'=>'Languages'),array('link'=>'#','title'=>'Edit'));		
		$this->layout->content = View::make('manager.languages.edit')	
			 ->with('view',$Language)->with('breadcrumb',$breadcrumb);
		}
		else
		{			
		}
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /languages/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		
		$language = Language::find($id);
		if($language)
		{
			$validation= Validator::make(Input::all(),array('name'=>'required','code'=>'required'));
			if($validation->passes())
			{
				$language->fill(Input::all());
				$language->update();
				Session::flash('msg_flash',CommonHelper::print_msg('success','Updated successfully'));	
				return Redirect::to('manager/languages');	
			}
			Session::flash('msg_flash',CommonHelper::print_msg('error','Edit problem'));	
			return Redirect::back()->withInput()->withErrors($validation);
			
		}
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /languages/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
			
		$language = Language::find($id);
		if($language)
		{
			$language->delete();
			Session::flash('msg_flash',CommonHelper::print_msg('success','Updated successfully'));	
			return Redirect::to('manager/languages');				
		}
		Session::flash('msg_flash',CommonHelper::print_msg('error',"You cant'n delete this record"));	
		//return Redirect::back()->withInput()->withErrors($validation);
		return Redirect::to('manager/languages');	
	}


	public function find()
	{
		$keyword = Input::get('key_find');
		$new = Language::where('name','like','%'.$keyword.'%')->orWhere('code','like','%'.$keyword.'%')->paginate(5);
		$par_link=['key_find'=>$keyword];

		$this->layout->content = View::make('manager.languages.index')
			->with('breadcrumb',array(array('link'=>'manager/languages','title'=>'Language'),array('link'=>'#','title'=>'Search')))
			->with('lists',$new)
			->with('par_link',$par_link);
	}

}