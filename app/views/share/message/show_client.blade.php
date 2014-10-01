@extends('client.layouts.default')
<?php $title = trans('form.message');
 $page = trans('form.message');
 $breadcrumb = array(['link'=>'share/message/see-all','title'=>'Message']);
 ?>
@section('content')
<div class="portlet box green">
                            <div class="portlet-title">
                                 <div class="caption">
					<i class="fa fa-gift"></i><h3>{{$message->title}}</h3>
				</div>
                                <div class="tools">
								<a href="" class="collapse">
								</a>								
								<a href="" class="reload">
								</a>
								<a href="" class="remove">
								</a>
				</div>
                            </div>                          
                            <div class="portlet-body"> 
                                <p>{{$message->created_at}}</p>
                                <p>{{$message->content}}</p>
                                <p>{{$message->type}}</p>
                            </div>    
 </div>
@stop
