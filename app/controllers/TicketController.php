<?php

class TicketController extends \BaseController {
 protected $layout = "client.layouts.default";
	/**
	 * Display a listing of the resource.
	 * GET /tickets
	 *
	 * @return Response
	 */
	public function index()
	{
                if(Auth::User()->group_users == User::EMPLOYEE)
                {
                  $user_id = Auth::User()->customer_id;   
                }                
                else if(Auth::User()->group_users == User::CUSTOMER)
                {
                  $user_id = Auth::id();   
                }
                $list_ticket = DB::table('tickets')
                        ->where('tickets.company_id','=',$user_id)
                        ->where('tickets.status','<>','close')
                        ->join('users','users.id','=','tickets.client_id')                        
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name'))
                        ->get();    
               
		$this->layout->content = View::make('client.ticket.index')->with('list_ticket',$list_ticket);  
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
		$this->layout->content = View::make('client.ticket.create')
                        ->with('priority',$priority)
                        ->with('support_type',$support_type);
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
                    if(Auth::user()->group_users == User::EMPLOYEE)
                    {
                       $ticket->company_id = Auth::user()->customer_id;
                    }
                    if(Auth::user()->group_users == User::CUSTOMER)
                    {
                       $ticket->company_id = Auth::id();
                    }
                    $ticket->status = User::STATUS_NEW;
                    $ticket->save();                    
                    $ticket->code = 'TK'.$ticket->id.'-'.Auth::id();
                    $ticket->save();
                    
                    $email = new EmailController();
                    /*send email to admin*/
                    $message = array(
                    'text'=>Input::get('description').' - <a href="'.Request::root().'/mamanger/tickets/'.$ticket->code.'">Visit</a>',
                    'subject'=>'Titcket CRM - '.Input::get("subject").' - '.$ticket->code,
                    'to_email'=>EmailController::EMAIL_ADMIN,
                    'to_name'=>'Admin',
                    'attach'=>''
                    ); 
                    $email->manager_sendEmail($message);
                    /*send email to client*/
                    $message = array(
                    'text'=>Input::get('description').' - <a href="'.Request::root().'/client/customer/tickets/'.$ticket->code.'">Visit</a>',
                    'subject'=>'Titcket CRM - '.Input::get("subject").' - '.$ticket->code,
                    'to_email'=>Auth::user()->email,
                    'to_name'=>'Customer - Ticket'
                    );  
                    $email->manager_sendEmail($message);
                    
                    Session::flash('msg_flash',  CommonHelper::print_msg('success','Created ticket success'));
                    return Redirect::to('client/customer/ticket');
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
                if(Auth::User()->group_users == User::EMPLOYEE)
                {
                  $user_id = Auth::User()->customer_id;   
                }                
                else if(Auth::User()->group_users == User::CUSTOMER)
                {
                  $user_id = Auth::id();   
                }
		$ticket = DB::table('tickets')
                        ->where('tickets.company_id','=',$user_id)
                        ->join('users','users.id','=','tickets.client_id')                        
                        ->join('support_type','support_type.id','=','tickets.support_type')                        
                        ->where('tickets.code','=',$id)
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,support_type.name as support_type,tickets.priority'))
                        ->first();  
                if($ticket){
                $list_comment = DB::table('support_tickets')->join('tickets','tickets.code','=','support_tickets.ticket_id')
                                                ->join('users','users.id','=','support_tickets.user_id')
                                                ->where('support_tickets.ticket_id','=',$ticket->code)
                                                ->orderBy('support_tickets.id','asc')
                                                ->select(DB::RAW('support_tickets.content,support_tickets.created_at,users.first_name,users.last_name'))
                                                ->get();
              
		$this->layout->content = View::make('client.ticket.show')->with('ticket',$ticket)->with('list_comment',$list_comment);  
                }else{
                    return Redirect::to('client/customer/ticket');
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
		//
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
		//
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
                $comment->content = CommonHelper::removeXSS(Input::get('content'));
                $comment->save();
                
                $ticket = Ticket::where('code','=',$id)->first();
                $ticket->status = User::STATUS_PROCESS;
                $ticket->update();
                return Redirect::to('client/customer/ticket/'.$id);
            }
	}
        
        
        public function filter()
        {
            if(Input::get('key'))
            {                             
                 if(Auth::User()->group_users == User::EMPLOYEE)
                {
                  $user_id = Auth::User()->customer_id;   
                }                
                else if(Auth::User()->group_users == User::CUSTOMER)
                {
                  $user_id = Auth::id();   
                }
                $list_ticket = DB::table('tickets')
                        ->where('tickets.company_id','=',$user_id)
                        ->where('tickets.status','=',Input::get('key'))                        
                        ->join('users','users.id','=','tickets.client_id')                        
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name'))
                        ->get(); 
                
		$this->layout->content = View::make('client.ticket.index')->with('list_ticket',$list_ticket);                        
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