@section('content')
@include('manager.reports.title')
@include('manager.reports.breadcrumb')

<!-- report option
status
support type
Priority
-->

<div class="row">
	<div class="col-sm-12">
			{{Former::open(url('manager/reports/staff'))->id('form-report')}}		    
	            <div class="well"> 	            	
	            		<div class="pull-left"> 	
	            			 {{Form::select('optionRP',array('race'=>'Race','overdue'=>'overdue'),'race',array('class'=>'form-control'))}}           		            			            	
	            		</div>
	            		<div class="pull-left">	            			
		            	 	<button class="btn btn-success" id="btn-view" type="button">View</button>		            	 		
		            	</div>
				</div>
            </div><!-- end col --> 

            {{Former::close()}}     
	</div>
</div><!-- end row-->   
<div class="row">
	<div class="col-sm-12">		
		<div class="panel panel-success" id="frameResult">			
			<div class="panel-body">
				<div class="progress progress-striped active" id="statusLoad">
					<div class="progress-bar" style="width: 100%"></div>
				</div>
				<div id="resultRP"></div>
			</div>
		</div>
		
	</div>
</div><!-- end row-->  

<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>  
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script> 


<script type="text/javascript">
  $(function() {  	
   	$("#statusLoad").hide(); 			  		
    $("#resultRP").load(spBaseUrl+"/manager/reports/staffRace");

		/* btn view*/			
		$("#btn-view").click(function(){
			$("#statusLoad").show();	
			var myform = $("#form-report");

		   $.ajax({
		   	url: myform.attr('action'),
		   	type: "post",
		   	data: myform.serialize(),
		   	success: function(data){   		
		   		$("#statusLoad").hide();		   		
		   		$("#resultRP").html(data);
		   	},
		   	error: function() {
		          alert('Error occurs!');
		       } 	   		
		   	
		   });
	});

});		

</script>  


    <script type="text/javascript" src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <link rel="stylesheet" href="{{asset('asset/backend/assets/js/morris/morris-0.4.3.min.css')}}">
	<script src="{{asset('asset/backend/assets/js/morris/morris-0.4.3.min.js')}}"></script>
	<script src="{{asset('asset/backend/assets/js/morris/raphael-min.js')}}"></script>

@stop