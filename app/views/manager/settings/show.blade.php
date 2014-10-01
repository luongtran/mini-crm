<div class="col-sm-8">
<div class="portlet box green">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>Setting
                                                    </div>
                                                </div>

<div class="portlet-body">       
{{Former::open(url('manager/setting'))->method('post')->id('form-setting')}}
	<?php $countCheck = 0;?>
	@foreach($setting as $value)
		<div class="form-group">
			{{Form::label($value->title)}}
			@if($value->name == 'host_password')
			{{Form::input('password',$value->name,$value->value,array('class'=>'form-control','placeholder'=>$value->title))}}
			@else
			{{Form::text($value->name,$value->value,array('class'=>'form-control','placeholder'=>$value->title))}}
			@endif
			<span class="alert-danger">{{$errors->first($value->name)}}</span>				             
		</div>
	<?php $countCheck++;?>
	@endforeach
	
	@if($countCheck == 0)	
		<div class="form-group"	>
			<a href="{{url('manager/setting/create')}}" onclick="return confirm('Are you want create data?');"><button class="btn btn-default" type="button">{{trans('common.button.create')}}</button></a>
		</div>
	@else
	<div class="form-group">
	{{Former::submit('update')->class('btn green')}}	
	</div>
	@endif
{{Former::close()}}
</div>
</div>
</div>

<script type="text/javascript">
$(function(){

	$("#form-setting").submit(function()
	{		
		edit();
		return false;
	});

});

function edit()
{
	var myform = $("#form-setting");

	$("#load-message").html('<div class="progress progress-striped active"><div class="progress-bar" style="width: 100%"></div></div>');
	$.ajax({
		url: myform.attr('action'),
		type: myform.attr('method'),
		data: myform.serialize(),
		success:function(data){	
                    if(data.status=='success'){
			loadSetting();
                        $("#load-message").html(data.result);
                     }
                     else
                     {
                        $("#load-message").html(data.result); 
                     }
			
		},
		error: function (xhr, ajaxOptions, thrownError){
        	alert(xhr.status);
       	    alert(thrownError);
      	}
	});
}
</script>