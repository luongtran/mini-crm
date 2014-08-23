@section('content')
<section class="bg-midnight-blue">		
		<div class="container">		
		<h3 style='color:white'>Contact</h3>				
		</div>
</section>
<section class='logos'>
	<div class='container'>	
		<div class='col-md-6'>
			<h4>Message </h4>
	    {{Session::get('msg_flash')}}

	    </div>
	</div>

</section>
<section class="">		
		<div class="container">		
		<h3></h3>				
		</div>
</section>
@stop