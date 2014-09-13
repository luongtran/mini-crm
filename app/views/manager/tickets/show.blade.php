@section('content')
<link rel="stylesheet" href="{{asset('asset/backend/assets/css/social.css')}}">

@include('manager.tickets.title')
@include('manager.tickets.breadcrumb')


<div class="row">
<?php 
$status_bg="panel-primary";
if($ticket->status == Ticket::S_NEW)
{
  $status_bg="panel-fb tweet-bgcolor";
}
if($ticket->status == Ticket::S_CLOSE)
{
  $status_bg="panel-fb gplus-color";   
}
else if($ticket->status == Ticket::S_INPROCESS)
{
  $status_bg="panel-fb instagram-color";   
}
else if($ticket->status == Ticket::S_RESOLVE)
{
  $status_bg="panel-fb gplus-color";   
}
?>
<div class="col-sm-8">

{{Session::get('msg_flash')}}

<div class="panel panel-default">
                            <div class="{{$status_bg}}">                               
                                <a href="#" class="link-post pull-right">
                                    <span class="entypo-link"></span>
                                    {{$ticket->code}}
                                </a>

                                <h4>
                                    <span class="entypo-twitter-circled "></span>&nbsp;
                                    {{$ticket->subject}}
                                </h4>
                            </div>
                            <div class="panel-body">                               
                                <div class="social-profile"> 
                                    <label>{{trans('title.table.description')}}</label>
                                    <p>{{$ticket->description}}</p>                                                            
                                        @if($attach)                                        
                                           @foreach($attach as $at)
                                            <p><i class="icon icon-attachment" ></i><a href="{{Request::root().'/'.$at->path}}">{{$at->name}}</a></p>
                                           @endforeach                                        
                                        @endif

                                    <label>{{trans('title.form.customer')}}</label> 
                                    <p> 
                                      <h3><i class="entypo-export"></i>  <a target="_blank" href="{{Request::root()}}/manager/customers/{{$ticket->company_id}}">{{$ticket->company_name}}</a></h3>
                                    </p>    
                                    <label>{{trans('title.table.created')}}</label>
                                    <p>
                                        <span><i class="entypo-globe"></i>&nbsp;{{$ticket->created_at}}</span>
                                    </p>
                                    
                                </div>                                   
                                <div class="social-content"> 
                                    <ul>                                        
                                        @foreach($list_comment as $comment)
                                        <li><hr>
                                            @if($comment->avatar)
                                            <img class="img-social-content img-circle pull-left" src="{{Request::root()}}/{{$comment->avatar}}">
                                            @else
                                            <img class="img-social-content img-circle pull-left" src="{{url('asset/backend/assets/img/small-bg13.jpg')}}">
                                            @endif    
                                            
                                            <span><a class="tweet-link" href="#">{{$comment->first_name}} {{$comment->last_name}}</a>                                             
                                                <b>{{$comment->created_at}}</b>
                                                <div>{{$comment->content}}</div>   
                                            </span>

                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                                <hr>

                               @if($ticket->close!=1) 
                               {{Form::open(array('url'=>'manager/tickets/add-comment/'.$ticket->code,'method'=>'post'))}}
                                    <div class="form-group">
                                        {{form::textarea('content',Input::old('content'),array('class'=>'ckeditor'))}}
                                    </div>
                               
                                    <div class="pull-right">                                            
                                            <button type="submit" class="btn btn-success">Reply</button>
                                     </div>   
                               {{Form::close()}}
                               @endif

                            </div>
                            
                            
                        </div>
</div>
    <div class="col-sm-4"> 
        <div class="panel panel-defautl">
            <div class="panel-body">     
                 {{Form::open(array('url'=>'manager/tickets/'.$ticket->code,'method'=>'PUT'))}}
                <div class="form-group">
                        <label>Support type</label>                      
                        {{Form::select('support_type',$support_type,$ticket->support_type,array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('support_type')}}</span>
                </div>  
                <div class="form-group">
                        <label>Priority</label>
                        {{Form::select('priority',$priority,$ticket->priority,array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('priority')}}</span>
                </div>             
               @if(Auth::user()->group_users == User::MANAGER)  
               <div class="form-group">
                        <label>Assign to</label> 
                        <?php $assign_to['0']='None'; $assign_selected = $ticket->assign_to;if($assign_selected==""){$assign_selected='0';}?>
                        {{Form::select('server_id',$assign_to,$assign_selected,array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('server_id')}}</span>
                </div>  
               @endif
               @if($ticket->close != true) 
               <div class="form-group">
                        <label>Status</label>
                        {{Form::select('status',$status,$ticket->status,array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('status')}}</span>
                </div>  
                @endif

                @if($ticket->close != 1)
                {{Form::submit('Save',array('class'=>'btn btn-primary'))}}  
                @endif

                @if($ticket->status == Ticket::S_RESOLVE)
                <a onclick="return confirm('Are you sure close?');" href='{{Request::root()}}/manager/tickets/close/{{$ticket->code}}'>{{Form::button('Close',array('class'=>'btn btn-danger'))}}</a>
                @else
                <a onclick="return confirm('Are you want send confirm to customer?');" href='{{Request::root()}}/manager/tickets/confirm/{{$ticket->code}}'>{{Form::button('Confirm',array('class'=>'btn btn-success'))}}</a>
                @endif
            </div>    
        </div>
             
    </div>    

</div>    
@stop