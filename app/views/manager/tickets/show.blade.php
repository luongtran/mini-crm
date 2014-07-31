@section('content')
      <!-- CONTENT -->
            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-document-edit"></i> 
                            <span>Ticket
                            </span>
                        </h2>

                    </div>

                    <div class="col-sm-7">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="tittle-middle-header">

                            <div class="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <span class="tittle-alert entypo-info-circled"></span>
                                Welcome back,&nbsp;
                                <strong>Dave mattew!</strong>&nbsp;&nbsp;Your last sig in at Yesterday, 16:54 PM
                            </div>


                        </div>

                    </div>
                    <div class="col-sm-2">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="btn-group btn-wigdet pull-right visible-lg">
                            <div class="btn">
                                Widget</div>
                            <button data-toggle="dropdown" class="btn dropdown-toggle" type="button">
                                <span class="caret"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <ul role="menu" class="dropdown-menu">
                                <li>
                                    <a href="{{Request::root()}}/manager/tickets/create">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="entypo-heart margin-iconic"></span>Favorite</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="entypo-cog margin-iconic"></span>Setting</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            <!--/ TITLE -->

            <!-- BREADCRUMB -->
            <ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><a href="{{Request::root()}}/manager" title="Sample page 1">Manager</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/manager/tickets" title="Sample page 1">Ticket</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="#" title="Sample page 1">{{$ticket->code}}</a>
                </li>
                <li class="pull-right">
                    <div class="input-group input-widget">
                        
                        <input style="border-radius:15px" type="text" placeholder="Search..." class="form-control">
                    </div>
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->
{{Session::get('msg_flash')}}


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
                                    <label>Description</label>
                                    <p>{{$ticket->description}}</p>                                                            
                                        @if($attach)                                        
                                           @foreach($attach as $at)
                                            <p><i class="icon icon-attachment" ></i><a href="{{Request::root().'/'.$at->path}}">{{$at->name}}</a></p>
                                           @endforeach                                        
                                        @endif
                                    <label>At</label>
                                    <p>
                                        <span><i class="entypo-globe"></i>&nbsp;{{$ticket->created_at}}</span>
                                        <span class="title">Customer:</span> <a target="_blank" href="{{Request::root()}}/manager/customers/{{$ticket->company_id}}">{{$ticket->company_name}}</a>
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
                                                <p>{{$comment->content}}</p>   
                                            </span>

                                        </li>
                                        @endforeach

                                    </ul>


                                </div>



                                <hr>
                               {{Form::open(array('url'=>'manager/tickets/add-comment/'.$ticket->code,'method'=>'post'))}}
                                    <div class="form-group">
                                        <textarea class='ckeditor' name='content'></textarea>                                                                          
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