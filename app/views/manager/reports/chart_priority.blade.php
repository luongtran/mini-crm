
<div class="row">	
 <div class="panel panel-default">
    <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.report_month')}}</h3>
    </div>
    <div class="panel-body">
      <div id="bar-example"></div>
        <table class="table table-mailbox">
        <tr><th>{{trans('title.report.month')}}</th>
          @foreach($rp_month as $month)
           <th>{{$month->month.'/'.$month->year}}</th>
          @endforeach
        </tr>
      
        <tr><td><b><span class="text-success">{{trans('title.report.nomal')}}</span></b></td>
          @foreach($rp_month as $month) 
              <td>
              <?php $temp = 0;?>

              @foreach($rp_priority as $priority)

                @if($month->month == $priority->month && $month->year == $priority->year) 
                     @if($priority->priority == 'nomal')        
                        <?php $temp = $priority->total;?>    
                     @endif                  
                @endif

              @endforeach 

                @if($temp>0)
                 <span class="text-success">{{$temp}}</span>
                @else
                    0
                @endif                 
              </td>

          @endforeach    
        </tr>

         <tr><td><b><span class="text-primary">{{trans('title.report.hight')}}</span></b></td>
          @foreach($rp_month as $month) 
              <td>
              <?php $temp = 0;?>

              @foreach($rp_priority as $priority)

                @if($month->month == $priority->month && $month->year == $priority->year) 
                     @if($priority->priority == 'hight')        
                        <?php $temp = $priority->total;?>    
                     @endif                  
                @endif

              @endforeach 

                @if($temp>0)
                 <span class="text-primary">{{$temp}}</span>
                @else
                    0
                @endif                 
              </td>

          @endforeach    
        </tr>

         <tr><td><b><span class="text-danger">{{trans('title.report.urgent')}}</span></b></td>
          @foreach($rp_month as $month) 
              <td>
              <?php $temp = 0;?>

              @foreach($rp_priority as $priority)

                @if($month->month == $priority->month && $month->year == $priority->year) 
                     @if($priority->priority == 'urgent')        
                        <?php $temp = $priority->total;?>    
                     @endif                  
                @endif

              @endforeach 

                @if($temp>0)
                 <span class="text-danger">{{$temp}}</span>
                @else
                    0
                @endif                 
              </td>

          @endforeach    
        </tr>


         <tr><td><b><span class="text-info">{{trans('title.report.total_ticket')}}</span></b></td>
          @foreach($rp_month as $month)
           <td><span class="text-info">{{(int)$month->total}}</span></td>
          @endforeach    
        </tr>
      </table>
    </div>
 </div>
</div><!-- end row -->      


<div class="row"> 
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.report_total')}}</h3>
              </div>
              <div class="panel-body">
               
                <div id="chartContainer" style="height: 500px; width: 100%;"></div>            
           
              </div>
            </div>
</div> <!-- end row --> 
 	



  <script type="text/javascript">      
        <?php 
          echo "var data =".json_encode($rp_total).';';                  
        ?>  
        var chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme2",//theme1
              title:{
                 // text: "Total %"              
             },
              data: [              
              {
                // Change type to "column", "bar", "splineArea", "area", "spline", "pie",etc.
                type: "column",
                dataPoints: data
              }             
              ]
          });

          chart.render();


          /*Hide info site canvasjs.com*/
          $("a.canvasjs-chart-credit").css('display','none');
  </script>
  