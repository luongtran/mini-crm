@extends('manager.layouts.default')
@section('content')
<div class="row">          
 <div class="col-lg-10"> 
     <ul class="timeline" style="list-style: none;">
 @foreach($activity as $at)
<li>
<div class="panel panel-default">	
<div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i>   {{$at->created_at}}</span>
            <h4 class="timeline-header no-border">
                <img src="<?php $avatar = User::find($at->author_id); if($avatar->avatar){echo url($avatar->avatar);} else  {echo url('asset/backend/assets/img/small-bg13.jpg');} ?>" class="img-avatar-small" style="width:60px;height:60px;">
             {{$at->title}}  <a href="{{url('manager/tickets/'.$at->ticket_id)}}">{{$at->ticket_id}}</a>   </h4>

            <div class="timeline-body">
                @if($at->event == TicketActivity::reply)
                {{str_limit($at->content,8)}}  
                @else
                {{str_limit($at->content,100)}}  
                @endif
                
            </div>

</div>
</div>
</li>	
 @endforeach
 	</ul>
 </div>  	
 </div> 


<div class="row">
    <div class="col-lg-10">
        <div class="pull-right">    
            {{$activity->links()}}
        </div>
    </div>   
</div>
@stop