@section('content')
<link rel="stylesheet" href="{{asset('asset/backend/assets/css/social.css')}}">

@include('manager.tickets.title')
@include('manager.tickets.breadcrumb')


<div class="row">
<?php 
$status_bg="panel-primary";
if($ticket->status == 'new')
{
  $status_bg="panel-fb tweet-bgcolor";
}
if($ticket->status == 'close')
{
  $status_bg="panel-fb gplus-color";   
}
else if($ticket->status == 'in-process')
{
  $status_bg="panel-fb instagram-color";   
}
else if($ticket->status == 'resolve')
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
                                    <label>{{trans('title.table.created')}}</label>
                                    <p>
                                        <span><i class="entypo-globe"></i>&nbsp;{{$ticket->created_at}}</span>
                                    </br>
                                        <span class="title">{{trans('title.form.customer')}}:</span> <a target="_blank" href="{{Request::root()}}/manager/customers/{{$ticket->company_id}}">{{$ticket->company_name}}</a>
                                    </p>
                                </div>                               

                                <div class="clearfix"></div>
                                <hr>
                                <div class="social-content">                                    
                                    <div class="social-header">                                                                                
                                                                                  
                                    </div>
                                    <ul>                                        
                                        @foreach($list_comment as $comment)
                                        <li>
                                            @if($comment->avatar)
                                            <img class="img-social-content img-circle pull-left" src="{{Request::root()}}/{{$comment->avatar}}">
                                            @else
                                            <img class="img-social-content img-circle pull-left" src="http://api.randomuser.me/portraits/thumb/men/21.jpg">
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
                               {{Form::open(array('url'=>'manager/tickets/add-comment/'.$ticket->code,'method'=>'post'))}}
                                    <div class="form-group">
                                        {{form::textarea('content',Input::old('content'),array('class'=>'ckeditor'))}}
                                    </div>
                               
                                    <div class="pull-right">                                            
                                            <button type="submit" class="btn btn-success">Reply</button>
                                     </div>   
                               {{Form::close()}}

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
                {{Form::open(array('url'=>'manager/tickets/'.$ticket->code,'method'=>'PUT'))}}
               <div class="form-group">
                        <label>Status</label>
                        {{Form::select('status',$status,$ticket->status,array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('status')}}</span>
                </div>  
                {{Form::submit('Update',array('class'=>'btn btn-primary'))}}
                <a onclick="return confirm('yes or no?');" href='{{Request::root()}}/manager/tickets/confirm/{{$ticket->code}}'>{{Form::button('Confirm',array('class'=>'btn btn-success'))}}</a>
            </div>    
        </div>
             
    </div>    

</div>    
@stop