@extends('manager.layouts.default')
<?php $title = trans('form.message');
 $page = trans('form.message');
 $breadcrumb = array(['link'=>'share/message/see-all','title'=>'Message']);
 ?>
@section('content')
<ul  style="list-style:none;">
@foreach($messages as $message)
<li>
<h3>{{$message->title}}</h3>
<p>{{$message->created_at}}</p>
<p>{{$message->content}}</p>
<p>{{$message->type}}</p>
<p>Status: @if($message->activated ==0){{'unread'}} @else {{'read'}} @endif</p>
</li>
<li class="divider" style="border-bottom:1px solid #dedede;"></li>
@endforeach
</ul>                
<div class="btn-group pull-left">                                       
    <?php echo $messages->links();?>
</div>
                             
@stop
