@section('content')
      <!-- CONTENT -->
            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-document-edit"></i> 
                            <span>Client
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
                                    <a href="{{Request::root()}}/client/customer/ticket/create">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="entypo-plus-circled margin-iconic"></span>Filter status</a>
                                </li> 
                                <?php $status = CommonHelper::list_base('status');                              
                                               foreach($status as $key=>$value):
                                            ?>
                                            <li>
                                                <a href="{{Request::root()}}/client/customer/ticket/filter?key={{$key}}">
                                                    <span class="margin-iconic"></span>{{$value}}</a>
                                            </li>
                                <?php endforeach;?>
                                
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
                <li><a href="{{Request::root()}}/client" title="Sample page 1">Client</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/client/customer/ticket" title="Sample page 1">Titket</a>
                </li>                
                <li class="pull-right">
                    <div class="input-group input-widget">

                        <input style="border-radius:15px" type="text" placeholder="Search..." class="form-control">
                    </div>
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->
{{Session::get('msg_flash')}}

@foreach($list_ticket as $ticket)
<div class="row">
<?php 
$status_bg="panel-success";
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
  $status_bg="panel-fb instagram-color";   
}
?>
<div class="col-sm-6">
<div class="panel panel-default">
                            <div class="{{$status_bg}}">
                               
                                <a href="#" class="link-post pull-right">
                                    <span class="entypo-link"></span>
                                    {{$ticket->code}}
                                </a>

                                <h4>
                                    <span class="entypo-twitter-circled "></span>&nbsp;
                                    <a style="color:white;" href="{{Request::root()}}/client/customer/ticket/{{$ticket->code}}">{{$ticket->subject}}</a>
                                </h4>
                            </div>
                            <div class="panel-body">
                                <img class="img-circle pull-left" src="http://api.randomuser.me/portraits/thumb/men/29.jpg">
                                <div class="social-profile">
                                    <h3> <a class="tweet-link" href="#">{{$ticket->first_name.' '.$ticket->last_name}}</a>
                                        <span><i class="entypo-globe"></i>&nbsp;{{$ticket->created_at}}</span>
                                    </h3>
                                    <p>{{$ticket->description}}</p>
                                </div>

                                <div class="clearfix"></div>
                                <hr>
                                <div class="social-content">
                                    
                                    <ul>
                                        <?php $list_comment = DB::table('support_tickets')->join('tickets','tickets.code','=','support_tickets.ticket_id')
                                                ->join('users','users.id','=','support_tickets.user_id')
                                                ->where('support_tickets.ticket_id','=',$ticket->code)
                                                ->orderBy('support_tickets.id','asc')
                                                ->select(DB::RAW('support_tickets.content,support_tickets.created_at,users.first_name,users.last_name'))
                                                ->paginate(5);
                                        ?>
                                        @foreach($list_comment as $comment)
                                        <li>
                                            <img class="img-social-content img-circle pull-left" src="http://api.randomuser.me/portraits/thumb/men/21.jpg">
                                            <span><a class="tweet-link" href="#">{{$comment->first_name}} {{$comment->last_name}}</a> 
                                                 {{$comment->content}}
                                                <br>
                                                <b>{{$comment->created_at}}</b>
                                            </span>

                                        </li>
                                        @endforeach

                                    </ul>


                                </div>



                                <hr>
                               {{Form::open(array('url'=>'client/customer/ticket-comment/'.$ticket->code,'method'=>'post'))}}
                                    <div class="input-group">
                                        <input type="text" name="content" placeholder="Add a comment.." class="form-control">
                                        <div class="input-group-btn">                                            
                                            <button type="submit" class="btn"><i class="glyphicon glyphicon-share"></i>
                                            </button>
                                        </div>                                        
                                    </div>
                               {{Form::close()}}

                            </div>
                        </div>
</div>
@endforeach
</div>    
@stop