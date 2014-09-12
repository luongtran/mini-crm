<?php

class TicketController extends \BaseController {
 protected $layout = "client.layouts.default";
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
                if(Auth::User()->group_users == User::EMPLOYEE)
                {
                  $user_id = Auth::User()->customer_id;   
                }                
                else if(Auth::User()->group_users == User::CUSTOMER)
                {
                  $user_id = Auth::id();   
                }                 
                     
                $list_ticket = DB::table('tickets')
                        ->where('tickets.client_id','=',$user_id)
                        ->where('tickets.close','<>',1)
                        ->join('users','users.id','=','tickets.author_id')                        
                        ->leftJoin('status','status.id','=','tickets.status')                        
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,status.name as status,users.first_name,users.last_name'))
                        ->paginate(5);  

               // $list_ticket = Ticket::with('Profile')->where('tickets.client_id','=',$user_id)->paginate(5);         
        $breadcrumb=[['link'=>'client/tickets','title'=>trans('title.form.ticket')]];       
		$this->layout->content = View::make('client.ticket.index')
            ->with('list_ticket',$list_ticket)
            ->with('breadcrumb',$breadcrumb);  
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
                $breadcrumb=[['link'=>'client/tickets','title'=>trans('title.form.ticket')],['link'=>'client/tickets','title'=>trans('common.button.create')]]; 
		        $this->layout->content = View::make('client.ticket.create')
                        ->with('priority',$priority)
                        ->with('support_type',$support_type)
                        ->with('breadcrumb',$breadcrumb);
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
                    $ticket->author_id = Auth::id();
                    if(Auth::user()->group_users == User::EMPLOYEE)
                    {
                       $user = User::where('id','=',Auth::id())->first(); 
                       $ticket->client_id = $user->customer_id;
                    }
                    if(Auth::user()->group_users == User::CUSTOMER)
                    {
                       $ticket->client_id = Auth::id();
                    }
                    $ticket->status = Ticket::S_NEW;  
                    $ticket->save();                    
                    $ticket->code = 'TK'.$ticket->id.'-'.Auth::id();
                    $ticket->save();
                    /*add file*/
                    if(Input::file('file'))
                    {
                       $image = new ImagesController();                                       
                       $path = "asset/share/uploads/ticket";      
                       $image->store_single(Input::file('file'),$path,$type_content='ticket_id',$ticket->code,'ticket'); 
                    }
                                                        
                    /*save activity*/                                                            
                    $activity = new TicketActivity();
                    $activity->ticket_id = $ticket->code;
                    $activity->event = TicketActivity::create;
                    $activity->author_id = Auth::id();                    
                    $activity->title = '<b>'.Auth::user()->first_name.' '.Auth::user()->last_name.'</b> '.TicketActivity::create.' the ticket';
                    $activity->save();

                    /*save history*/
                    // $History = new TicketHistory();
                    // $History->ticket_id = $ticket->code;                   
                    // $History->status = Ticket::ST_new;                                        
                    // $History->priority = Input::get('priority');   
                    // $History->save();

                    /*send email to admin*/
                    $email = new EmailController();                    
                    $message = array(
                    'text'=>Input::get('description').' </br> <a href="'.Request::root().'/manager/tickets/'.$ticket->code.'">Visit link</a>',
                    'subject'=>'Titcket CRM - '.Input::get("subject").' - '.$ticket->code,
                    'to_email'=>EmailController::EMAIL_ADMIN,
                    'to_name'=>'Admin',
                    'attach'=>''
                    ); 
                    $email->manager_sendEmail($message);
                    /*send email to client*/
                    $message = array(
                    'text'=>Input::get('description').' - <a href="'.Request::root().'/client/tickets/'.$ticket->code.'">Visit</a>',
                    'subject'=>'Titcket CRM - '.Input::get("subject").' - '.$ticket->code,
                    'to_email'=>Auth::user()->email,
                    'to_name'=>'Customer - Ticket'
                    );  
                    $email->manager_sendEmail($message);                    
                    
                    Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.create')));
                    return Redirect::to('client/tickets');
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
                        ->where('tickets.client_id','=',$user_id)
                        ->join('users','users.id','=','tickets.client_id')                        
                        ->join('profiles','profiles.user_id','=','users.id')
                        ->join('support_type','support_type.id','=','tickets.support_type')                        
                        ->leftjoin('status','status.id','=','tickets.status')                        
                        ->where('tickets.code','=',$id)
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,status.name as status,tickets.status as status_id,users.first_name,users.last_name,support_type.name as support_type,tickets.priority,profiles.company_name,tickets.close as close'))
                        ->first();  
                if($ticket){
                $list_comment = DB::table('support_tickets')->join('tickets','tickets.code','=','support_tickets.ticket_id')
                                                ->join('users','users.id','=','support_tickets.user_id')
                                                ->where('support_tickets.ticket_id','=',$ticket->code)
                                                ->orderBy('support_tickets.id','asc')
                                                ->select(DB::RAW('support_tickets.content,support_tickets.created_at,users.first_name,users.last_name,users.avatar'))
                                                ->get();
              
                $attach = Upload::where('ticket_id','=',$ticket->code)->get();   
                //$news = News::where('category_id',1)->orderBy('id','desc')->paginate(5); 
                $news = News::orderBy('id','desc')->paginate(5); 
                $breadcrumb=[['link'=>'client/tickets','title'=>trans('title.form.ticket')],['link'=>'client/tickets','title'=>$id]]; 
		        $this->layout->content = View::make('client.ticket.show')->with('ticket',$ticket)
                        ->with('list_comment',$list_comment)
                        ->with('attach',$attach)
                        ->with('news',$news)
                        ->with('breadcrumb',$breadcrumb);                      
                }
		else
		{
                    return Redirect::to('client/tickets');
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
                if(Input::get('content'))               
                {

                    $comment->save(); 
                    $ticket = Ticket::where('code','=',$id)->first();
                    $ticket->status = Ticket::S_INPROCESS;
                    $ticket->update();

                    $server_id = User::find($ticket->server_id);
                    if($server_id)
                    {
                        /*send message to staff*/
                        $data = array(
                        'content'=>$comment->content.' - <a href="'.Request::root().'/manager/tickets/'.$ticket->code.'">Visit</a>',
                        'title'=>'Titcket CRM From customer - '.$ticket->subject.' - '.$ticket->code.'',
                        'assign_to'=>$server_id->id,
                        'type'=>'work'                  
                        );                 
                        $send_msm = new MessagesController();                            
                        $send_msm->addMessage($data);                    
                    }

                    /*save activity*/                                                            
                    $activity = new TicketActivity();
                    $activity->ticket_id = $ticket->code;
                    $activity->event = TicketActivity::reply;
                    $activity->author_id = Auth::id();                    
                    $activity->title = '<b>'.Auth::user()->firstname.' '.Auth::user()->last_name.'</b> '.TicketActivity::reply.' the ticket';
                    $activity->content = Input::get('content');
                    $activity->save();

                }
                return Redirect::to('client/tickets/'.$id);
            }
	}
        
        
        public function filter()
        {
             if(Input::get('key'))
            {
                 $user_id = Auth::id();
                 if(Auth::user()->group_users == User::EMPLOYEE)
                 {
                   $user_id = User::find($user_id)->customer_id;
                 } 
                 
                $list_ticket = DB::table('tickets')
                        ->where('tickets.status','=',Input::get('key'))
                        ->where('tickets.client_id','=',$user_id)
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->leftJoin('status','status.id','=','tickets.status')  
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,status.name as status,users.first_name,users.last_name,tickets.author_id,tickets.client_id'))
                        ->paginate(5); 

                if(Input::get('key')==Ticket::S_CLOSE) :
                    $list_ticket = DB::table('tickets')
                        ->where('tickets.close','=',1)
                        ->where('tickets.client_id','=',$user_id)
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->leftJoin('status','status.id','=','tickets.status')  
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,status.name as status,users.first_name,users.last_name,tickets.author_id,tickets.client_id'))
                        ->paginate(5); 
                endif;        


               
                $parameter_panginate = ['key'=>Input::get('key')];
		$this->layout->content = View::make('client.ticket.index')->with('list_ticket',$list_ticket)
                        ->with('parameter_panginate',$parameter_panginate);
            }
        }
         public function find()
        {
            if(Input::get('key_find'))
            {
                
                 $user_id = Auth::id();
                 if(Auth::user()->group_users == User::EMPLOYEE)
                 {
                   $user_id = User::find($user_id)->customer_id;
                 } 
                 $list_ticket = DB::table('tickets')                       
                        ->join('users','users.id','=','tickets.client_id')                
                        ->leftJoin('status','status.id','=','tickets.status')  
                        ->where('tickets.client_id','=',$user_id)
                        ->where(function($query) {
                            $query->where('tickets.code', 'LIKE', '%'.Input::get('key_find').'%');
                            $query->orWhere('tickets.subject', 'LIKE', '%'.Input::get('key_find').'%');
                        })
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,status.name as status,users.first_name,users.last_name,tickets.author_id,tickets.client_id'))
                        ->paginate(5); 



                $parameter_panginate = ['key_find'=>Input::get('key_find')];
                $breadcrumb=[['link'=>'client/tickets','title'=>trans('title.form.ticket')],['link'=>'client/tickets#','title'=>trans('common.button.search')]]; 
	           	$this->layout->content = View::make('client.ticket.index')->with('list_ticket',$list_ticket)
                             ->with('parameter_panginate',$parameter_panginate)
                             ->with('breadcrumb',$breadcrumb);
            }
           
        }

}