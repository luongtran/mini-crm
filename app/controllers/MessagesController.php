<?php

class MessagesController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /messages
	 *
	 * @return Response
	 */
    
        public function getMessage()
	{
            if(Auth::check())
            {
            $message = Message::where('assign_to','=',99)->get();
            return Response::json($message);            
            }
            return false;
	}
        public function getCountMessage()
	{
             if(Auth::check())
            {
            $count = Message::where('assign_to','=',99)->count();            
            return $count;            
            }
            return 0;
	}
        
	/**
	 * Show the form for creating a new resource.
	 * GET /messages/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /messages
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /messages/{id}
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
	 * GET /messages/{id}/edit
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
	 * PUT /messages/{id}
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
	 * DELETE /messages/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}