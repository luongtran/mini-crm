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
            <!--/ TITLE -->

            
<h2>Ticket: {{$ticket->subject}} [ {{$ticket->code}} ]</h2>
<hp>Comment of you about this support tickets </hp>
{{Form::open(array('url'=>'client/races/'.$ticket->code,'method'=>'post'))}}
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