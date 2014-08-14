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
			{{Former::open(url('manager/reports/ticket'))->id('form-report')}}
		    <div class="col-sm-4">
			    <div class="well">
                    <input type="text" class="form-control" id="dp1" name="fromDay">
                </div>	            
            </div><!-- end col -->   
            <div class="col-sm-4">
	            <div class="well"> 		           
	                <input type="text" class="form-control" id="dp2" name="toDay">	        
	            </div>
            </div><!-- end col -->  
            <div class="col-sm-4">
	            <div class="well"> 	            	
	            		<div class="pull-left"> 	
	            			 {{Form::select('optionRP',array('support_type'=>'Support type','priority'=>'Priority','status'=>'Status'),null,array('class'=>'form-control'))}}           		            			            	
	            		</div>
	            		<div class="pull-right">	            			
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
  		loadIndex();  			
});

/*load Index*/
function loadIndex()
{
		var currentDate = new Date();  	

			$("#dp1").datepicker({ dateFormat: 'yy/mm/dd' });	

			$("#dp2").datepicker({ dateFormat: 'yy/mm/dd' });
		
  			$('#dp1').datepicker('setDate',currentDate);
			$('#dp1').datepicker('option','maxDate',currentDate);
					
	
  			$('#dp2').datepicker('setDate',currentDate);
			$('#dp2').datepicker('option','maxDate',currentDate);
		    
			var fromDay = $("#dp1").val();
			var toDay = $("#dp2").val();		
			$("#dp1").change(function(){			 
			 	checkDay();
			});
			$("#dp2").change(function(){			 
			 	checkDay();
			});

$("#statusLoad").hide();
}

/*check date*/
function checkDay(){
				var fromDay = $("#dp1").val();
				var toDay = $("#dp2").val();
				if(fromDay>toDay)
				{
				 alert('Please choose fromDay > toDay')
				 $('#dp2').datepicker('setDate',fromDay);
				}	
};

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
   		/*if(data.status=='success')
   		{
   			$("#resultRP").html(data.value);	
   		}
   		else if(data.status='errors')
   		{
   			$("#resultRP").html(data.value);
   		}
   		else
   		{
   			$("#resultRP").html("Not known");
   		}*/
   		$("#resultRP").html(data);
   	} 	   		
   	
   });
});
</script>  


    <link rel="stylesheet" href="{{asset('asset/backend/assets/js/morris/morris-0.4.3.min.css')}}">
	<script src="{{asset('asset/backend/assets/js/morris/morris-0.4.3.min.js')}}"></script>
	<script src="{{asset('asset/backend/assets/js/morris/raphael-min.js')}}"></script>

    
@stop