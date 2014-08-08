@section('content')
<link rel="stylesheet" href="{{asset('asset/backend/assets/css/social.css')}}">
<script src="{{asset('asset/backend/plusin/ckeditor/ckeditor.js')}}" type="text/javascript"></script>
      <!-- CONTENT -->
            <!--TITLE -->
                  @include('client.ticket.title')         
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
                  @include('client.ticket.breadcrumb')
            <!-- END OF BREADCRUMB -->   
{{Session::get('msg_flash')}}


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
                                    <label></label>
                                    <p>
                                        <span><i class="entypo-globe"></i>&nbsp;{{$ticket->created_at}}</span>
                                        <span class="title">{{trans('title.table.company')}} :</span> <a target="_blank" href="#">{{$ticket->company_name}}</a>
                                    </p>  
                                    <label>{{trans('title.table.description')}}</label>
                                    <p>{{$ticket->description}}</p>                                                                       
                                        @if($attach)                                        
                                           @foreach($attach as $at)
                                           <p><i class="icon icon-attachment" ></i>
                                            <a href="{{Request::root().'/'.$at->path}}">{{$at->name}}</a></p>
                                           @endforeach                                        
                                        @endif
                                    
                                </div>                               
                                 <div class="clearfix"></div>
                                <hr>
                                <div class="social-content">                                    
                                 
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
                               {{Form::open(array('url'=>'client/ticket-comment/'.$ticket->code,'method'=>'post'))}}
                                    <div class="form-group">
                                        <textarea class='form-control ckeditor' name='content'></textarea>                                                                            
                                    </div> 
                                    <div class="pull-right">
                                    <button type="submit" class="btn btn-success">Reply</i> </button>                                 
                                    </div>
                               {{Form::close()}}

                            </div>
                            
                            
                        </div>
</div>
    <div class="col-sm-4"> 
        <div class="panel panel-defautl">
            <div class="panel-body">
                <div class="form-group">
                    <label class="tweet-link"> Support type: <i>{{strtoupper($ticket->support_type)}}</i> </label>
                </div>    
                <div class="form-group">        
                    <label class="tweet-link"> Priority: <i>{{strtoupper($ticket->priority)}}</i></label>
                </div> 
                 <div class="form-group">        
                    <label class="tweet-link"> Status: <i>{{strtoupper($ticket->status)}}</i></label>
                </div> 

            </div>    
        </div>
         <div class="panel panel-defautl">
            <div class="panel-body">    
                <h3>What news?</h3>
                <ul class=''>
                    @foreach($news as $new)
                        <li class='cus-ul-li-border' ><a href='{{Request::root()}}/client/news/{{$new->permalink}}'>{{$new->title}}</a></li>                                               
                    @endforeach
                </ul>

            </div>    
        </div>             
    </div>    

</div>    
@stop