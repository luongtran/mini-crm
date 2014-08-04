@extends('client.layouts.default')
@section('content')
@include('share.upload.title')
<table class='table table-mailbox'>
<tr></tr>
@foreach($doucuments as $document)
<tr>
<td><i class="icon icon-attachment"></i><a href=''>{{$document->name}}</a></td><td>{{$document->created_at}}</td><td><a href='{{Request::root()}}/client/upload/delete/{{$document->id}}' onclick="return confirm('Are you want delete?');"> Delete </a></td>
</tr>
@endforeach
</table>

@stop