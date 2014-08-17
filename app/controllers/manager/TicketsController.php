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
                        ->leftjoin('profiles','profiles.user_id','=','users.id')                                  
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,tickets.author_id,tickets.client_id,profiles.company_name'))
                        ->paginate(5); 
                
                if(Auth::user()->group_users == User::STAFF){
                    $list_ticket = DB::table('tickets')
                        ->where('tickets.status','<>','close')
                        ->where('tickets.server_id','=',Auth::id())
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->leftjoin('profiles','profiles.user_id','=','users.id')                              
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,tickets.author_id,tickets.client_id,profiles.company_name'))
                        ->paginate(5);  
                }                               
        $breadcrumb = [['link'=>'manager/tickets','title'=>trans('title.form.ticket')]] ;    
		$this->layout->content = View::make('manager.tickets.index')
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
                $assign_to = User::where('group_users','2')->orderBy('first_name','asc')->lists('first_name','id');
                $assign_client = User::where('group_users','=',User::CUSTOMER)
                        ->join('profiles','profiles.user_id','=','users.id')->select(DB::RAW('company_name,users.id as id'))->lists('company_name','id');                               
        $breadcrumb = [['link'=>'manager/tickets','title'=>trans('title.form.ticket')],['link'=>'manager/tickets/create','title'=>trans('common.button.create')]];    
		$this->layout->content = View::make('manager.tickets.create')
                        ->with('priority',$priority)
                        ->with('support_type',$support_type)
                        ->with('assign_to',$assign_to)
                        ->with('assign_client',$assign_client)
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
                    $ticket->client_id = Input::get('client_id');                    
                    $ticket->status = User::STATUS_NEW;                    
                    $ticket->save();           
                    
                    $ticket->code = 'TK'.$ticket->id.'-'.Auth::id();
                    if(Input::get('server_id'))
                    {
                        $ticket->server_id = Input::get('server_id'); 
                            $send_msm = new MessagesController();
                            $data = ['title'=>'Support ticket from customer'.$ticket->code,
                                   'content'=>'<a href="'.Request::root().'/manager/tickets/'.$ticket->code.'">At '.$ticket->code.'</a>', 
                                   'type'=>'work',
                                   'assign_to'=>Input::get('server_id')
                                   ];
                            $send_msm->addMessage($data);
                    }                    
                    $ticket->save();
                    
                    /*add file*/
                    if(Input::file('file'))
                    {
                       $image = new ImagesController();                                       
                       $path = "asset/share/uploads/ticket";      
                       $image->store_single(Input::file('file'),$path,$type_content='ticket_id',$ticket->code,'ticket'); 
                    }
                    /*send mail*/                                                           
                    $email = new EmailController();
                    $message = array(
                    'text'=>Input::get('description').' - <a href="'.Request::root().'/mamanger/tickets/'.$ticket->code.'">Visit</a>',
                    'subject'=>'Titcket CRM - '.Input::get("subject").' - '.$ticket->code,
                    'to_email'=>EmailController::EMAIL_ADMIN,
                    'to_name'=>'Admin'
                    );
                    $email->manager_sendEmail($message);
                    
                    $message = array(
                    'text'=>Input::get('description').' - <a href="'.Request::root().'/client/tickets/'.$ticket->code.'">Visit</a>',
                    'subject'=>'Titcket CRM - '.Input::get("subject").' - '.$ticket->code,
                    'to_email'=>User::find($ticket->client_id)->email,
                    'to_name'=>User::find($ticket->client_id)->first_name
                    );
                    $email->manager_sendEmail($message);
                    /*end*/
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
                        ->leftjoin('profiles','profiles.user_id','=','users.id')                        
                        ->where('tickets.code','=',$id)
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,tickets.support_type,tickets.priority,tickets.server_id as assign_to,profiles.company_name,users.group_users,profiles.user_id as company_id'))
                        ->first();  
                if(Auth::user()->group_users == User::STAFF){
                 $ticket =DB::table('tickets')                        
                        ->join('users','users.id','=','tickets.client_id')                        
                        ->leftjoin('profiles','profiles.user_id','=','users.id')                        
                        ->where('tickets.code','=',$id)
                        ->where('tickets.server_id','=',Auth::id())
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,tickets.support_type,tickets.priority,tickets.server_id as assign_to,profiles.company_name,users.group_users,profiles.user_id as company_id'))
                        ->first();    
                }
                
                if($ticket){
                $list_comment = DB::table('support_tickets')->join('tickets','tickets.code','=','support_tickets.ticket_id')
                                                ->join('users','users.id','=','support_tickets.user_id')
                                                ->where('support_tickets.ticket_id','=',$ticket->code)
                                                ->orderBy('support_tickets.id','asc')
                                                ->select(DB::RAW('support_tickets.content,support_tickets.created_at,users.first_name,users.last_name,users.avatar'))
                                                ->get();
                $attach = Upload::where('ticket_id','=',$ticket->code)->get();    
                
                $support_type =  DB::table('support_type')->orderBy('id', 'asc')->lists('name','id');              
                $priority = CommonHelper::list_base('priority');
                $status = CommonHelper::list_base('status');
                $assign_to = User::where('group_users','2')->orderBy('first_name','asc')->lists('first_name','id');
		
        $breadcrumb = [['link'=>'manager/tickets','title'=>trans('title.form.ticket')],['link'=>'manager/tickets#','title'=>trans('common.button.show')]] ;    
		$this->layout->content = View::make('manager.tickets.show')->with('ticket',$ticket)->with('list_comment',$list_comment)
                                        ->with('support_type',$support_type)
                                        ->with('priority',$priority)
                                        ->with('assign_to',$assign_to)
                                        ->with('status',$status)
                                        ->with('attach',$attach)
                                        ->with('breadcrumb',$breadcrumb);
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
                    if(Input::get('server_id')):                        
                            $ticket->server_id = Input::get('server_id'); 
                            $send_msm = new MessagesController();
                            $data = ['title'=>'Support ticket from customer '.$ticket->code,
                                   'content'=>'<a href="'.Request::root().'/manager/tickets/'.$ticket->code.'">At '.$ticket->code.'</a>', 
                                   'type'=>'work',
                                   'assign_to'=>Input::get('server_id')
                                   ];
                            $send_msm->addMessage($data);
                    endif;
                endif;
                $ticket->status = Input::get('status');
                $ticket->support_type = Input::get('support_type');
                $ticket->priority = Input::get('priority');
                $ticket->update();
                
               
                
                if(Input::get('status')=='close')
                {
                    /*send email to customer*/
                    $infor_client =  DB::table('users')->join('tickets','tickets.client_id','=','users.id')->where('tickets.code',$id)->select(DB::raw('users.id,users.email,users.group_users,users.first_name,users.last_name'))->first();                
                    /*check ticket employee than send employee*/       
                    $check_author =  DB::table('users')->join('tickets','tickets.author_id','=','users.id')->where('tickets.code',$id)->select(DB::raw('users.id,users.email,users.group_users,users.first_name,users.last_name'))->first();                                                                             
                    if($check_author->group_users == User::EMPLOYEE ){
                        $infor_client = $check_author;           
                    }                
                    $email = new EmailController();
                    /*send message*/
                    $send_msm = new MessagesController();
                            $data = ['title'=>'Close ticket'.$id,
                                   'content'=> '<p>Thank you!, we happy when served customer</p>
                                                </br><a href="'.Request::root().'/client/tickets/'.$ticket->code.'">Conplete ticket '.$ticket->code.'</a>
                                                </br><a href="'.Request::root().'/client/races/'.$id.'">Please Race ticket at </a>',
                                   'type'=>'work',
                                   'assign_to'=>$infor_client->id
                                   ];                    
                    $send_msm->addMessage($data);
                    /*send mail*/
                    $send_mail = array(
                        'text'=>'<p>Thank you!, we happy when served customer</p>
                        </br><a href="'.Request::root().'/client/tickets/'.$ticket->code.'">Conplete ticket '.$ticket->code.'</a>
                        </br><a href="'.Request::root().'/client/races/'.$id.'">Please Race ticket at </a>',
                        'subject'=>'Close ticket '.$id,
                        'to_email'=>$infor_client->email,
                        'to_name'=>$infor_client->first_name
                        );    
                    
                    if($email->manager_sendEmail($send_mail))
                    {
                        Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.update')));
                    }
                    /*end send mail*/
                }
                
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
		$ticket = Ticket::where('code','=',$id)->first();        
        if($ticket)
        {
            if($ticket->status == User::STATUS_CLOSE)
            {
                if(Auth::user()->group_users == User::MANAGER)
                {   
                    $support_tickets = SupportTicket::where('ticket_id','=',$id)->get();
                    foreach($support_tickets as $detail):
                        $detail->delete();
                    endforeach;
                    $ticket->delete();                    
                    Session::flash('msg_flash',CommonHelper::print_msg('success',trans('message.delete')));
                }
                else
                {
                    Session::flash('msg_flash',CommonHelper::print_msg('error',trans('message.not_permission')));
                }
            }
            else
            {
                  Session::flash('msg_flash',CommonHelper::print_msg('error',trans('message.ticket_have_close')));
            }
        }
        return Redirect::back();
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
                /*send message*/
                $send_msm = new MessagesController();                                                       
                /*send to admin*/
                            $data =['title'=>'Support ticket Admin '.$ticket->subject.' - '.$ticket->code,
                                   'content'=>Input::get('content').'<a href="'.Request::root().'/manager/tickets/'.$ticket->code.'">At '.$ticket->code.'</a>', 
                                   'type'=>'work',
                                   'assign_to'=>$ticket->client_id
                            ];
                    //$send_msm->addMessage($data);
                /*send to employee*/                                   
                if($ticket->client_id != $ticket->author_id)
                {          
                            $data =['title'=>'Support ticket Admin '.$ticket->subject.' - '.$ticket->code,
                                   'content'=>Input::get('content').'<a href="'.Request::root().'/client/tickets/'.$ticket->code.'">At '.$ticket->code.'</a>', 
                                   'type'=>'work',
                                   'assign_to'=>$ticket->author_id
                                   ];
                            $send_msm->addMessage($data);
                }


                /*send email client*/
                $client  = DB::table('tickets')->leftjoin('users','users.id','=','tickets.client_id')->where('tickets.code',$id)->first();                    
                if($ticket->author_id!=$ticket->client_id)
                {                
                 $client  = DB::table('tickets')->leftjoin('users','users.id','=','tickets.author_id')->where('tickets.code',$id)->first();                    
                }
                $email = new EmailController();
                    $message = array(
                    'text'=>Input::get('content').' - <a href="'.Request::root().'/client/tickets/'.$ticket->code.'">Visit</a>',
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
                        ->where('tickets.status','=',Input::get('key'))
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->leftjoin('profiles','profiles.user_id','=','users.id')  
                        ->orderBy('tickets.id','desc')                        
                         ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,tickets.author_id,tickets.client_id,profiles.company_name'))
                        ->paginate(5); 
                if(Auth::user()->group_users == User::STAFF){
                   $list_ticket = DB::table('tickets')
                        ->where('tickets.server_id','=',Auth::id())
                        ->where('tickets.status','=',Input::get('key'))
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->leftjoin('profiles','profiles.user_id','=','users.id')                              
                        ->orderBy('tickets.id','desc')                        
                         ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,tickets.author_id,tickets.client_id,profiles.company_name'))
                        ->paginate(5); 
                }
                $parameter_panginate = ['key'=>Input::get('key')];

                 $breadcrumb = [['link'=>'manager/tickets','title'=>trans('title.form.ticket')],['link'=>'manager/tickets#','title'=>trans('common.button.filter')]] ;    

		        $this->layout->content = View::make('manager.tickets.index')->with('list_ticket',$list_ticket)
                        ->with('parameter_panginate',$parameter_panginate)
                        ->with('breadcrumb',$breadcrumb);
            }
        }
         public function find()
        {
            if(Input::get('key_find'))
            {
               $list_ticket = DB::table('tickets')
                        ->where('tickets.code','like','%'.Input::get('key_find').'%')
                        ->orWhere('tickets.subject','like','%'.Input::get('key_find').'%')
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->leftjoin('profiles','profiles.user_id','=','users.id')                              
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,tickets.author_id,tickets.client_id,profiles.company_name'))
                        ->paginate(5); 
                if(Auth::user()->group_users == User::STAFF){
                   $list_ticket = DB::table('tickets')
                        ->where('tickets.server_id','=',Auth::id())
                        ->orWhere('tickets.subject','like','%'.Input::get('key_find').'%')
                        ->join('users','users.id','=','tickets.client_id')                              
                        ->leftjoin('profiles','profiles.user_id','=','users.id')                               
                        ->orderBy('tickets.id','desc')                        
                        ->select(DB::RAW('tickets.id,tickets.code,tickets.subject,tickets.description,tickets.created_at,tickets.status,users.first_name,users.last_name,tickets.author_id,tickets.client_id,profiles.company_name'))
                        ->paginate(5); 
                }     
        $parameter_panginate = ['key_find'=>Input::get('key_find')];
        $breadcrumb = [['link'=>'manager/tickets','title'=>trans('title.form.ticket')],['link'=>'manager/tickets#','title'=>trans('common.button.search')]] ;    
		$this->layout->content = View::make('manager.tickets.index')->with('list_ticket',$list_ticket)
                           ->with('parameter_panginate',$parameter_panginate)
                            ->with('breadcrumb',$breadcrumb);
            }
        }
        
        public function confirm($id)
        {
            $ticket = Ticket::where('code','=',$id)->first();
            if($ticket)
            {
               /*save message*/ 
               $message = new Message();
               $message->title = "Please confirm ticket ".$id;
               $message->content = "You have created <a href='".Request::root()."/client/tickets/".$id."'>".$id."</a> 
                       if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.";                      
               $message->activated = 0;
               $message->type = "work";               
               $message->assign_to = $ticket->client_id;
               $message->from = Auth::id();
               $message->save();
               /*send email*/
               $email = new EmailController();               
                    $message = array(
                    'text'=>"You have created <a href='".Request::root()."/client/tickets/".$id."'>".$id."</a> 
                    if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.",
                    'subject'=>'Titcket CRM - Please confirm ticket'.$id,
                    'to_email'=>User::where('id','=',$ticket->client_id)->first()->email,
                    'to_name'=>$ticket->first_name
                    );
               $email->manager_sendEmail($message);  
               
               Session::flash('msg_flash',  CommonHelper::print_msg('success',trans('message.send_confirm')));
            }
            return Redirect::back();
        }

}