<?php

class HistoryControll extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /historycontroll
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /historycontroll/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /historycontroll
	 *
	 * @return Response
	 */
	public function store($user_id='',$status='',$content='',$link='')
	{
	     $history = new History;
             $history->user_id = Auth::id();
             $history->status = $status;
             $history->content = $content;
             $history->link = $link;
             $history->ip = Request::getClientIp();
             $history->position = $position;             
	}

	/**
	 * Display the specified resource.
	 * GET /historycontroll/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /historycontroll/{id}/edit
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
	 * PUT /historycontroll/{id}
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
	 * DELETE /historycontroll/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}