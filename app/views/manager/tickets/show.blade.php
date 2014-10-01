@section('content')
<div class="row">
<?php 
$status_bg="blue-hoki";
if($ticket->status == Ticket::S_NEW)
{
  $status_bg="blue-hoki";
}
if($ticket->status == Ticket::S_CLOSE)
{
  $status_bg="red";   
}
else if($ticket->status == Ticket::S_INPROCESS)
{
  $status_bg="yellow";   
}
else if($ticket->status == Ticket::S_RESOLVE)
{
  $status_bg="red";   
}
?>
<div class="col-sm-8">
<div class="row">

{{Session::get('msg_flash')}}

<div class="portlet box {{$status_bg}}">
                            <div class="portlet-title">
                                <h4>{{$ticket->code}}</h4> 
                            </div>
                            <div class="portlet-body">     
                                <div class="form-group">
                                    <span class="">{{trans('title.table.description')}} :</span>
                                </div>
                                <div class="form-group">
                                    {{$ticket->description}}                                                      
                                </div>    
                                 <hr>
                                <div class="form-group">
                                        @if($attach) 
                                           @foreach($attach as $at)
                                            <p><i class="fa fa-tags"></i><a href="{{Request::root().'/'.$at->path}}">{{$at->name}}</a></p>
                                           @endforeach                                        
                                        @endif
                                </div>                                
                                <div class="form-group">
                                     <span class="">{{trans('title.form.customer')}}:</label>
                                </div>          
                                <div class="form-group">
                                      <h4><i class="entypo-export"></i>  <a target="_blank" href="{{Request::root()}}/manager/customers/{{$ticket->company_id}}">{{$ticket->company_name}}</a></h4>
                                </div>   
                                <div class="form-group">                                    
                                    <span class="">{{trans('title.table.created')}}:</span>                                  
                                      <span>{{$ticket->created_at}}</span>
                                </div>
                               
                       
        
    </div></div><!--col 8-->
                            <hr>
                               <div class="form-group">         
                                <div class="media">					
								<div class="media-body">
									<!-- Nested media object -->
                                                                        
                                                                        <div class="todo-tasklist">
                                                                        @foreach($list_comment as $comment)
                                                                        <div class="todo-tasklist-item todo-tasklist-item-border-yellow">
                                                                                                         @if($comment->avatar)
                                                                                                        <img alt="" src="{{Request::root()}}/{{$comment->avatar}}" class="todo-userpic pull-left"  width="27px" height="27px">
                                                                                                        @else
                                                                                                        <img alt="" src="{{url('asset/backend/assets/img/small-bg13.jpg')}}" class="todo-userpic pull-left"  width="27px" height="27px">
                                                                                                        @endif            													
													<div class="todo-tasklist-item-title">
														<a class="tweet-link" href="{{url('manager/users/'.$comment->user_id)}}">{{$comment->first_name}} {{$comment->last_name}}</a>
													</div>
													<div class="todo-tasklist-item-text">
														{{$comment->content}}
													</div>
													<div class="todo-tasklist-controls pull-left">
														<span class="todo-tasklist-date"><i class="fa fa-calendar"></i> {{$comment->created_at}} </span>
														<span class="todo-tasklist-badge badge badge-roundless">Postponed</span>&nbsp;
													</div>
												
                                                                            </div>
                                                                        <hr>
									<!--end media-->                                                                        
                                                                        @endforeach
                                                                        </div>
								</div>
				</div>                              
                               </div>  
                               @if($ticket->close!=1) 
                               {{Form::open(array('url'=>'manager/tickets/add-comment/'.$ticket->code,'method'=>'post'))}}
                                    <div class="form-group">
                                        {{form::textarea('content',Input::old('content'),array('class'=>'ckeditor'))}}
                                    </div>
                                    
                                 
                                    <div class="form-group">
                                               <div class="pull-right">  
                                                   <button type="submit" class="btn blue">Reply</button>
                                               </div>    
                                     </div>   
                               {{Form::close()}}
                               @endif
    </div></div>
    <div class="col-sm-4">
        
        <div class="panel panel-default">
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
                        <?php  $assign_selected = $ticket->assign_to;if($assign_selected==""){$assign_selected='0';}?>
                        {{Form::select('server_id',$assign_to,$assign_selected,array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('server_id')}}</span>
                </div>  
               @else
                    <input type='hidden' name='server_id' value="{{Auth::id()}}" />
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
        </div><!--end panel-->
             
    </div>  <!-- col 4-->  

</div>    
@stop
@section('javascript')
<script type="text/javascript" src="{{asset('asset/share/ckeditor/ckeditor.js')}}"></script>   
@stop