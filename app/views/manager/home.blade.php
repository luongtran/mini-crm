@extends('manager.layouts.default')

@section('content')
 <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-mail"></i> 
                            <span>{{trans('title.form.activity')}}
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
                                <strong>{{Auth::user()->first_name.' '.Auth::user()->last_name}}</strong>&nbsp;&nbsp;Your last sig in at {{Auth::user()->last_login}}
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                         <div class="devider-vertical visible-lg"></div>
                         <div class="btn-group btn-wigdet pull-right visible-lg"> 
                         </div>  
                            
                    </div>

            </div>
</div>


<div class="row">          
 <div class="col-lg-10"> 
 	<ul class="timeline">
 @foreach($activity as $at)
<li>
<div class="panel panel-default">	
<div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i>   {{$at->created_at}}</span>
            <h4 class="timeline-header no-border">

            <img src="<?php $avatar = User::find($at->author_id); if($avatar->avatar){echo url($avatar->avatar);} else  {echo url('asset/backend/assets/img/small-bg13.jpg');} ?>" class="admin-pic img-circle">
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