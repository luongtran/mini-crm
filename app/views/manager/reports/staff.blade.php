@section('content')
@include('manager.reports.title')
@include('manager.reports.breadcrumb')

<!-- report option
status
support type
Priority
-->

<div class="row">
	
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
});		

</script>  
<script src="{{asset('asset/backend/assets/js/highcharts/highcharts.js')}}"></script>
@stop