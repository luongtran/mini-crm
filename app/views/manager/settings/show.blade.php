<div class="col-sm-8">
{{Former::open(url('manager/setting'))->method('post')->id('form-setting')}}
	@foreach($setting as $value)
		<div class="form-group">
		{{Form::label($value->title)}}
		@if($value->name == 'pass_mail')
		{{Form::input('password',$value->name,$value->value,array('class'=>'form-control','placeholder'=>$value->title))}}
		@else
		{{Form::text($value->name,$value->value,array('class'=>'form-control','placeholder'=>$value->title))}}
		@endif
		
	</div>
	@endforeach
	<div class="form-group">
	{{Former::actions()->larger_success_submit('update')}}
	</div>
{{Former::close()}}
</div>