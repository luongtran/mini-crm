<?php  
          $char_nomal = "{name:'Nomal',data:["; 
          $char_hight = "{name:'Hight',data:["; 
          $char_urgent = "{name:'Urgent',data:["; 
          $monthJS = "[";
?>
<div class="row">	
 <div class="panel panel-default">
    <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.report_priority_ticket')}}</h3>
    </div>
    <div class="panel-body">
      <div id="bar-example"></div>
        <table class="table table-mailbox">
        <tr><th>{{trans('title.report.month')}}</th>
          @foreach($rp_month as $month)
           <th>{{$month->month.'/'.$month->year}}</th>
          @endforeach
        </tr>
        <!-- report for nomal -->
        <tr><td><b><span class="text-success">{{trans('title.report.nomal')}}</span></b></td>
          @foreach($rp_month as $month) 
              <td>
              <?php $temp = 0; $total = $month->total;?>
              @foreach($rp_priority as $priority)

                @if($month->month == $priority->month && $month->year == $priority->year) 
                     @if($priority->priority == 'nomal')        
                        <?php $temp = $priority->total;?>    
                     @endif                  
                @endif

              @endforeach 

                @if($temp>0)                
                   <?php $temp_present = ($temp*100)/$total; $char_nomal.= $temp.',';  ?>
                    <span class="text-success">{{number_format($temp_present,1)}}%</span>
                @else
                    <?php $char_nomal.= "0,";?>
                      0 % 
                @endif

              </td>
          @endforeach    
        </tr>        
        <?php $char_nomal.= "]}";?>
        <!-- end report for nomal -->

        <!-- report for hight -->
         <tr><td><b><span class="text-primary">{{trans('title.report.hight')}}</span></b></td>
          @foreach($rp_month as $month) 
              <td>
              <?php $temp = 0; $total = $month->total;?>
              @foreach($rp_priority as $priority)

                @if($month->month == $priority->month && $month->year == $priority->year) 
                     @if($priority->priority == 'hight')        
                        <?php $temp = $priority->total;?>    
                     @endif                  
                @endif

              @endforeach 

                @if($temp>0)                
                   <?php $temp_present = ($temp*100)/$total; $char_hight.= $temp.',';  ?>
                    <span class="text-primary">{{number_format($temp_present,1)}}%</span>
                @else
                    <?php $char_hight.= "0,";?>
                      0 % 
                @endif

              </td>

          @endforeach    
        </tr>
         <?php $char_hight.= "]}";  ?>
        <!-- end report for hight -->

        <!-- report for urgent -->
         <tr><td><b><span class="text-danger">{{trans('title.report.urgent')}}</span></b></td>
          @foreach($rp_month as $month) 
              <td>
              <?php $temp = 0; $total = $month->total;?>
              @foreach($rp_priority as $priority)

                @if($month->month == $priority->month && $month->year == $priority->year) 
                     @if($priority->priority == 'urgent')        
                        <?php $temp = $priority->total;?>    
                     @endif                  
                @endif

              @endforeach 

                @if($temp>0)                
                   <?php $temp_present = ($temp*100)/$total; $char_urgent.= $temp.',';  ?>
                    <span class="text-danger">{{number_format($temp_present,1)}}%</span>
                @else
                    <?php $char_urgent.= "0,";?>
                       0 % 
                @endif  

              </td>

          @endforeach    
        </tr>
        <?php $char_urgent.= "]}";  ?>
        <!-- end report for urgent -->

        <!-- report for total -->
         <tr><td><b><span class="text-info">{{trans('title.report.total_ticket')}}</span></b></td>
          @foreach($rp_month as $month)
           <td><span class="text-info">{{(int)$month->total}}</span></td>

              <?php $monthJS.= "'".$month->month."/".$month->year."',";?>

          @endforeach    
        </tr>
        <!-- end report for total -->
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

$monthJS.= "]";

echo "var_month = ".$monthJS.";";
echo "var_nomal = ".$char_nomal.";";
echo "var_hight = ".$char_hight.";";
echo "var_urgent = ".$char_urgent.";";
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
        series: [         
          var_nomal,
          var_hight,
          var_urgent
        ]
    });
  $(".ui-loader-default").hide();
  
  /*Hide info site hightchart.com*/
  //$("a.canvasjs-chart-credit").css('display','none');

  
});
 
</script>



