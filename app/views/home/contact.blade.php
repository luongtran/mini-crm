@section('content')
<section class="bg-midnight-blue">		
		<div class="container">		
		<h3 style='color:white'>Contact</h3>				
		</div>
</section>
<style>
.frm-contact{
border: 1px solid #dedede;
padding: 40px;
}
</style>
<section class='logos'>
	<div class='container'>					
		<h5>Please fill out the form or call our Sales Center at 262-345-3645 or 800-490-9010 or contact Support Services at 800-227-9594.</h5>
		<div class='col-md-6 col-md-offset-2'>						
			{{Form::open(array('method'=>'post','url'=>'/page/contact','class'=>'frm-contact'))}}			
				<div class='form-group'>					
					{{Form::input('email','email',Input::old('email'),array('class'=>'form-control','placeholder'=>'Email','required'))}}
					 <span class="alert-danger">{{$errors->first('email')}}</span>
				</div>
				<div class='form-group'>					
					{{Form::text('subject',Input::old('subject'),array('class'=>'form-control','placeholder'=>'Subject','required'))}}
					 <span class="alert-danger">{{$errors->first('subject')}}</span>
				</div>
				<div class='form-group'>				
					{{Form::textarea('message',Input::old('message'),array('class'=>'form-control','placeholder'=>'Message','required'))}}
					 <span class="alert-danger">{{$errors->first('message')}}</span>
				</div>						
				<div class='pull-left'>								
					<div class='form-group'>	
					<button type='submit' class='btn btn-success'>Send</button>
					</div>				
				</div>
				{{Form::close()}}
		</div>		
	</div>

</section>
<section class="">		
		<div class="container">		
		<h3></h3>				
		</div>
</section>
@stop