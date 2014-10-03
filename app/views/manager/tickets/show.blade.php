@section('content')

<link href="{{asset('')}}asset/admin/pages/css/todo.css" rel="stylesheet" type="text/css">
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
                                    <b>{{trans('title.table.description')}} :</b>
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
                                      <h4><i class="glyphicon glyphicon-user"></i>  <a target="_blank" href="{{Request::root()}}/manager/customers/{{$ticket->company_id}}">{{$ticket->company_name}}</a></h4>
                                </div>   
                                <div class="form-group">           
                                    <span><i class="fa fa-calendar"></i>  {{$ticket->created_at}}</span>
                                </div>
                               
                       
        
    </div></div><!--col 8-->
                            <hr>
                                   <div class="">
                                                                                   <div class="slimScrollDiv" style="position: relative;">
                                                                                       <div class="scroller"  data-always-visible="0" data-rail-visible="0" data-handle-color="#dae3e7" data-initialized="1">
                                                                                           <div class="todo-tasklist">
                                                                                                @foreach($list_comment as $at)
                                                                                                   <div class="todo-tasklist-item todo-tasklist-item-border-green">
                                                                                                          <img src="<?php  if($at->avatar){echo url($at->avatar);} else  {echo url('asset/backend/assets/img/small-bg13.jpg');} ?>" class="todo-userpic pull-left" width="27px" height="27px">												
                                                                                                           <div class="todo-tasklist-item-title">														
                                                                                                                    {{$at->first_name.' '.$at->last_name}}  
                                                                                                           </div>
                                                                                                           <div class="todo-tasklist-item-text">
                                                                                                                     {{str_limit($at->content)}} 

                                                                                                           </div>
                                                                                                           <div class="todo-tasklist-controls pull-left">
                                                                                                                   <span class="todo-tasklist-date"><i class="fa fa-calendar"></i> {{$at->created_at}} </span>
                                                                                                                   <span class="todo-tasklist-badge badge badge-roundless"></span>
                                                                                                           </div>
                                                                                                   </div>
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