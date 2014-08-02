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
            $message = Message::where('assign_to','=',Auth::id())->where('activated','<>',1)->orderBy('id','desc')->get();
            return Response::json($message);            
            }          
	}
        public function getCountMessage()
	{
             if(Auth::check())
            {
            $count = Message::where('assign_to','=',Auth::id())->where('activated','<>',1)->count();            
            return Response::json($count);            
            }           
	}
        
        
        public function addMessage($data)
        {
            /*Parametor*/
            /* title,content,type,assign to*/
               $message = new Message();
               $message->title = $data['title'];
               $message->content = $data['content'];                       
               $message->activated = 0;
               $message->type = $data['type'];               
               $message->assign_to = $data['assign_to'];
               $message->from = Auth::id();
               $message->save();
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
            $message = Message::find($id);    
            if($message)
            {                
               	$message->activated=1;    
               	$message->update();
               	if((Auth::user()->group_users == User::MANAGER)||(Auth::user()->group_users == User::STAFF))
               	return View::make('share.message.show')->with('message',$message);    
               	else
				return View::make('share.message.show_client')->with('message',$message);                   
            }	    
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