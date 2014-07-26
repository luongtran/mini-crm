<?php

class TicketsController extends \BaseController {
    protected $layout="manager.layouts.default";
    /**
	 * Display a listing of the resource.
	 * GET /tickets
	 *
	 * @return Response
	 */
        public function __construct()
        {            
            //Common::globalXssClean();  
        }
	public function index()
	{	
             
                $list_ticket = DB::table('tickets')
                        ->where('tickets.status','<>','close')
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name'))
                        ->paginate(5); 
                if(Auth::user()->group_users == User::STAFF){
                   $list_ticket = DB::table('tickets')
                        ->where('tickets.status','<>','close')
                        ->where('tickets.assign_to','=',Auth::id())
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name'))
                        ->paginate(5);  
                }
		$this->layout->content = View::make('manager.tickets.index')->with('list_ticket',$list_ticket);  
	
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /tickets/create
	 *
	 * @return Response
	 */
	public function create()
	{
		$support_type =  DB::table('support_type')->orderBy('id', 'asc')->lists('name','id');              
                $priority = CommonHelper::list_base('priority');
                $assign_to = User::where('group_users','2')->orderBy('first_name','asc')->lists('first_name','id');
		$this->layout->content = View::make('manager.tickets.create')
                        ->with('priority',$priority)
                        ->with('support_type',$support_type)
                        ->with('assign_to',$assign_to);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /tickets
	 *
	 * @return Response
	 */
	public function store()
	{
                $validation = Validator::make(Input::all(),Ticket::$rule_client);
                if($validation->passes()){
                    $ticket = new Ticket();
                    $ticket->fill(Input::all());                    
                    $ticket->client_id = Auth::id();
                    $ticket->assign_to = Input::get('assign_to');                    
                    $ticket->status = User::STATUS_NEW;
                    $ticket->save();                    
                    $ticket->code = 'TK'.$ticket->id.'-'.Auth::id();
                    $ticket->save();
                    
                    $email = new EmailController();
                    $message = array(
                    'text'=>Input::get('description').' - <a href="'.Request::root().'/mamanger/tickets/'.$ticket->code.'">Visit</a>',
                    'subject'=>'Titcket CRM - '.Input::get("subject").' - '.rand(100,9999),
                    'to_email'=>EmailController::EMAIL_ADMIN,
                    'to_name'=>'Admin'
                    );
                    $email->manager_sendEmail($message);
                    
                    Session::flash('msg_flash',  CommonHelper::print_msg('success','Created ticket success'));
                    return Redirect::to('manager/tickets');
                }
                return Redirect::back()->withInput()->withErrors($validation);
	}

	/**
	 * Display the specified resource.
	 * GET /tickets/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{		
                           
		$ticket =DB::table('tickets')                        
                        ->join('users','users.id','=','tickets.client_id')                        
                        ->leftjoin('profiles','profiles.user_id','=','tickets.company_id')                        
                        ->where('tickets.code','=',$id)
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,tickets.support_type,tickets.priority,tickets.assign_to as assign_to,profiles.company_name,users.group_users,profiles.user_id as company_id'))
                        ->first();  
                if(Auth::user()->group_users == User::STAFF){
                 $ticket =DB::table('tickets')                        
                        ->join('users','users.id','=','tickets.client_id')                        
                        ->leftjoin('profiles','profiles.user_id','=','tickets.company_id')                        
                        ->where('tickets.code','=',$id)
                        ->where('tickets.assign_to','=',Auth::id())
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,tickets.support_type,tickets.priority,tickets.assign_to as assign_to,profiles.company_name,users.group_users,profiles.user_id as company_id'))
                        ->first();    
                }
                if($ticket){
                $list_comment = DB::table('support_tickets')->join('tickets','tickets.code','=','support_tickets.ticket_id')
                                                ->join('users','users.id','=','support_tickets.user_id')
                                                ->where('support_tickets.ticket_id','=',$ticket->code)
                                                ->orderBy('support_tickets.id','asc')
                                                ->select(DB::RAW('support_tickets.content,support_tickets.created_at,users.first_name,users.last_name'))
                                                ->get();
                
                $support_type =  DB::table('support_type')->orderBy('id', 'asc')->lists('name','id');              
                $priority = CommonHelper::list_base('priority');
                $status = CommonHelper::list_base('status');
                $assign_to = User::where('group_users','2')->orderBy('first_name','asc')->lists('first_name','id');
		
		$this->layout->content = View::make('manager.tickets.show')->with('ticket',$ticket)->with('list_comment',$list_comment)
                                        ->with('support_type',$support_type)
                                        ->with('priority',$priority)
                                        ->with('assign_to',$assign_to)
                                        ->with('status',$status);
                }else{
                    return Redirect::to('manager/tickets');
                }
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /tickets/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
	
              
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /tickets/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$ticket = Ticket::where('code',$id)->first();
                if(Auth::user()->group_users == User::MANAGER):  
                $ticket->assign_to = Input::get('assign_to');
                endif;
                $ticket->status = Input::get('status');
                $ticket->support_type = Input::get('support_type');
                $ticket->priority = Input::get('priority');
                $ticket->update();
                return Redirect::back();
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /tickets/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}
        
          public function addComment($id='')
	{
            if($id!='')
            {
                $comment = new SupportTicket();
                $comment->user_id = Auth::id();
                $comment->ticket_id = $id;
                $comment->content = Input::get('content');
                $comment->save();
                
                $ticket = Ticket::where('code','=',$id)->first();
                $ticket->status = User::STATUS_PROCESS;
                $ticket->update();
                /*send email client*/
                $client  = DB::table('tickets')->leftjoin('users','users.id','=','tickets.client_id')->where('tickets.code',$id)
                        ->first();                
                $email = new EmailController();
                    $message = array(
                    'text'=>Input::get('content').' - <a href="'.Request::root().'/client/customer/ticket/'.$ticket->code.'">Visit</a>',
                    'subject'=>'Titcket CRM - '.$client->subject.' - '.$id,
                    'to_email'=>$client->email,
                    'to_name'=>$client->first_name
                    );
                $email->manager_sendEmail($message);
                
                return Redirect::to('manager/tickets/'.$id);
            }
	}
        
        public function filter()
        {
            if(Input::get('key'))
            {
                $list_ticket = DB::table('tickets')
                        //->where('tickets.server_id','<>','0')
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->where('tickets.status','=',Input::get('key'))
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name'))
                        ->paginate(5); 
                if(Auth::user()->group_users == User::STAFF){
                   $list_ticket = DB::table('tickets')
                        ->where('tickets.assign_to','=',Auth::id())
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->where('tickets.status','=',Input::get('key'))
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name'))
                        ->paginate(5); 
                }
                $parameter_panginate = ['key'=>Input::get('key')];
		$this->layout->content = View::make('manager.tickets.index')->with('list_ticket',$list_ticket)
                        ->with('parameter_panginate',$parameter_panginate);
            }
        }
         public function find()
        {
            if(Input::get('key_find'))
            {
                $list_ticket = DB::table('tickets')
                        //->where('tickets.server_id','<>','0')
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->where('tickets.status','like','%'.Input::get('key_find').'%')
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name'))
                        ->paginate(5); 
                $parameter_panginate = ['key_find'=>Input::get('key_find')];
		$this->layout->content = View::make('manager.tickets.index')->with('list_ticket',$list_ticket)
                           ->with('parameter_panginate',$parameter_panginate);
            }
        }

}