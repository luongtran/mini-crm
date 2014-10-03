          <?php  

          $char_resolved_ticket = "{name:'Resolved',data:["; 
          $char_total_ticket = "{name:'Total',data:["; 

          ?>

<div class="row">	
 <div class="panel panel-default">
    <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.report_status_ticket')}}</h3>
    </div>
    <div class="panel-body">
      <div id="bar-example"></div>
        <table class="table table-mailbox">
        <tr><th>{{trans('title.report.month')}}</th>
          @foreach($rp_month as $month)
           <th>{{$month->month.'/'.$month->year}}</th>
          @endforeach
        </tr>  
        <tr><td><b><span class="text-danger">{{trans('title.report.resolved')}}</span></b></td>
   
          @foreach($rp_month as $month)
              <td>          
              <?php $temp_resolve = 0;$temp_resolve1=0; $total = $month->total; ?>  
              @foreach($rp_status as $status)                             
                @if($month->month == $status->month && $month->year == $status->year) 
                     @if($status->status == 'Resolve' && $status->month == $status->monthRS)        
                        <?php $temp_resolve = (($status->total)*100)/$total;  $temp_resolve1=$status->total;?>           
                     @endif                      
                @endif
              @endforeach 

              
               @if($temp_resolve>0)
                   <span class="text-danger">{{number_format($temp_resolve,1)}} %</span>
                   <?php $char_resolved_ticket.= $temp_resolve1.',';?>
                @else
                    0 %
                    <?php $char_resolved_ticket.= '0,';?>
                @endif 
                
              </td>
          @endforeach  

           <?php $char_resolved_ticket.= "]}"; ?>


        </tr>
         <tr><td><b><span class="text-info">{{trans('title.report.total_ticket')}}</span></b></td>
          @foreach($rp_month as $month)
             <?php $char_total_ticket.=(int)$month->total.',';?>
           <td><span class="text-info">{{(int)$month->total}}</span></td>
          @endforeach  
           <?php $char_total_ticket.= "]}";?>

        </tr>
      </table>
    </div>
 </div>
</div><!-- end row -->      


<div class="row"> 
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.report_colunm')}}</h3>
              </div>
              <div class="panel-body">               
                  <div data-highcharts-chart="0" id="container11">

                  </div>
            </div>
</div> <!-- end row --> 
	 

<script type="text/javascript">
<?php 
$monthJS = "[";
foreach($rp_month as $month)
{
$monthJS.= "'".$month->month."/".$month->year."',";
}
$monthJS.= "]";

echo "var_month = ".$monthJS.";";
echo "var_resolved = ".$char_resolved_ticket.";";
echo "var_total = ".$char_total_ticket.";";
?>

$(function () {
    $('#container11').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: var_month
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Value / count status'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [         
          var_resolved,
          var_total
        ]
    });
  $(".ui-loader-default").hide();
  
  
});
 
</script>



