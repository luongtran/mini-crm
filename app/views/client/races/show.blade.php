@extends('client.layouts.default')
@section('content')
<script>
$(function(){
$("#text-comment").hide(); 
$("#select-level").change(function(){
   if($("#select-level").val()=='other') 
   {
    $("#text-comment").show(); 
    $("#text-comment").focus();
   }
   else
   {
      $("#text-comment").hide();   
   }
   
});
 
    
});
</script>
<h2>Comment of you about this support tickets [ {{$id}} ]</h2>
{{Form::open(array('url'=>'client/customer/races/'.$id,'method'=>'post'))}}
 <div class="col-lg-3">
     
 <div class="form-group">
        {{Form::label('Level')}}
        {{Form::select('level_comment', $level_comment , Input::old('level_comment'),array('class'=>'form-control','id'=>'select-level'))}}                 
        {{Form::text('content',Input::old('content'),array('class'=>'form-control','id'=>'text-comment','placeholder'=>'Please enter other leavel' ))}}
 </div>
     
{{Form::submit('Race',array('class'=>'btn btn-success'))}}

 </div>
{{Form::close()}}
@stop