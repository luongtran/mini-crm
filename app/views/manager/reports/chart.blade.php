<div class="row">	
 <div class="panel panel-default">
    <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>Report of month</h3>
    </div>
    <div class="panel-body">
      <div id="bar-example"></div>
    </div>
 </div>
</div><!-- end row -->      
<script type="text/javascript">
 <?php    
   //  echo "var arr_char3 = ".json_encode($rp_column);
  echo "var arr_char3 = ".$rp_column.";";
  echo "var key_label = ".$rp_key_label.";";
  echo "var label = ".$rp_key.";";
 ?>   
   //if(arr_char3.length != 0)    
   //{
    Morris.Bar({
      element: 'bar-example',     
      data:arr_char3,
      xkey: 'month',
      ykeys: key_label,
      labels: label
    });
   // }
</script>


<div class="row"> 
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>Report total</h3>
              </div>
              <div class="panel-body">
               
                <div id="chartContainer" style="height: 500px; width: 100%;"></div>            
           
              </div>
            </div>
</div> <!-- end row --> 
 	





  <script type="text/javascript">
  <?php 
     echo "var data = ".json_encode($rp_total);
  ?>
    // var data = [{"label":"close","y":1},{"label":"in_process","y":2},{"label":"new","y":5},{"label":"resolve","y":3}];
  </script>

  <script type="text/javascript">  
     

          var chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme1",//theme1
              title:{
                  text: "Total"              
             },
              data: [              
              {
// Change type to "column", "bar", "splineArea", "area", "spline", "pie",etc.
                  type: "pie",
                  dataPoints:data
              }             
              ]
          });

          chart.render();
      
  </script>
  

<!--





  <script type="text/javascript" src="{{asset('asset/backend/assets/js/highcharts/jquery-1.js')}}"></script>
  <script type="text/javascript" src="{{asset('asset/backend/assets/js/highcharts/jquery-ui.css')}}"></script>
  



<script type="text/javascript">//<![CDATA[ 
<?php 
/*
$rp_month= DB::table('ticket_history')      
              ->groupBy(DB::raw('month(created_at)'))               
              ->groupBy(DB::raw('year(created_at)'))                 
              ->orderBy(DB::raw('year(created_at)'),'asc')              
              ->orderBy(DB::raw('month(created_at)'),'asc')              
              ->select(DB::raw('concat(month(created_at),"/",year(created_at)) as month'))
              ->get();
       $str = "[";
       foreach($rp_month as $month):
        $str.= "'".$month->month."',"; 
       endforeach;
        $str.= "]";

 echo "var getMonth = ".$str.";";
*/
?>



$(function () {
    $('#container2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Ticket'
        },
        subtitle: {
            text: 'Source: CRM'
        },
        xAxis: {
            categories: getMonth
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count number(status)'
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
        series: [{
            name: 'New',
            data: [3,5,4,5,8,3,5,4,5,8]

        }, {
            name: 'Inprocess',
            data: [1,0,4,2,0,3,5,4,5,8]

        }, {
            name: 'Resovle',
            data: [2,,2,1,0]

        }, {
            name: 'Close',
            data: [1,1,0,3,]
        }]
    });

  $(".ui-loader-default").hide();
  
});


</script>


<script src="{{asset('asset/backend/assets/js/highcharts/highcharts.js')}}"></script>
<script src="{{asset('asset/backend/assets/js/highcharts/exporting.js')}}"></script>

<div data-highcharts-chart="0" id="container2">

</div>

-->