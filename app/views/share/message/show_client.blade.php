@extends('client.layouts.default')

@section('content')
@include('share.message.title')
<h3>{{$message->title}}</h3>
<p>{{$message->created_at}}</p>
<p>{{$message->content}}</p>
<p>{{$message->type}}</p>
@stop
