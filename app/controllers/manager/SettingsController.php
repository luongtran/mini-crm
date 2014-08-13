<?php

class SettingsController extends \BaseController {
	protected $layout ="manager.layouts.default";
	/**
	 * Display a listing of the resource.
	 * GET /settings
	 *
	 * @return Response
	 */
	public function index()
	{
		$this->layout->content = View::make('manager.settings.index');
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /settings/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /settings
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /settings/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show()
	{
		$setting = Setting::all();
		return View::make('manager.settings.show')->with('setting',$setting);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /settings/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit()
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /settings/{id}
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
	 * DELETE /settings/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}