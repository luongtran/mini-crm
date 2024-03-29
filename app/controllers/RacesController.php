<?php

class RacesController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /races
	 *
	 * @return Response
	 */
	public function index()
	{
            return View::make('races.index');
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /races/create
	 *
	 * @return Response
	 */
	public function create()
	{
		
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /races
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /races/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{     
             $level = CommonHelper::list_base('level_comment');
             $ticket = Ticket::where('code',$id)->first();
             return View::make('client.races.show')->with('level_comment',$level)->with('ticket',$ticket);
	}
        
    public  function addComment($id)                
        {           
          $check = Race::where('code_ticket','=',$id)->count();
          if($check==0)          
          {
			  $race = new Race();
		            if(Input::get('level_comment')=='other')
		            {
		             if(Input::get('level_comment')=="")   
		             $race->level_comment = "Other";
		             else
		             $race->level_comment = Input::get('level_comment');             
		             $race->comment = Input::get('content');    
		            }
		            else
		            {
		             $race->level_comment = Input::get('level_comment');   
		             $race->comment="";
		            }
		          
		          $race->code_ticket = $id;
		          $race->save();     
          }
          else
          {
            $race = Race::where('code_ticket',$id)->first();
             if(Input::get('level_comment')=='other')
            {
             if(Input::get('level_comment')=="")   
             $race->level_comment = "Other";
             else
             $race->level_comment = Input::get('level_comment');             
             $race->comment = Input::get('content');    
            }
            else
            {
             $race->comment="";   
             $race->level_comment = Input::get('level_comment');   
            }
             
            $race->code_ticket = $id;
            $race->update();   
          }

          $message = new MessagesController();
          $staff = DB::table('tickets')->where('tickets.code','=',$id)->join('users','users.id','=','tickets.server_id')->select('users.id')->first();                    
          if($staff!=null)
          {                        
            $msg = ['title'=>'Racing for me from ticket'.$id,
                              'content'=> '<p>Customer have race for you with level <b>'.Input::get('level_comment').'</b> <h3>'.Input::get('content').'</h3>',
                              'type'=>'race',
                              'assign_to'=>$staff->id
                  ];   
            $message->addMessage($msg);      
            Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.success_race')));
          }          
          return Redirect::to('client/tickets');
          
        }
        /**
	 * Show the form for editing the specified resource.
	 * GET /races/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /races/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{         
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /races/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}