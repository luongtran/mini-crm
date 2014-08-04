@extends('client.layouts.default')
@section('content')
@include('share.upload.title')

{{Form::open(array('url'=>'client/upload','method'=>'post','enctype'=>'multipart/form-data'))}}
<H3>Upload multifile</h3>
{{Session::get('msg_flash')}}

<div class='form-group'>
<input type='file' name='file[]' required='on'  multiple='on'/> 
<span class="alert-danger">{{$errors->first('file')}}</span>                                                                 
</div>
<div class='form-group'>
<input type='submit'  class='btn btn-success' />
</div>
{{Form::close()}}
@stop
