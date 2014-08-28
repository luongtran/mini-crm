   


<div class="row"> 
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.analysis_support')}}</h3>
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
  