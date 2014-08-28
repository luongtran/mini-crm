<div class="row"> 
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.race')}}</h3>
              </div>
              <div class="panel-body">
                  <table class="table table-mailbox">
                    <tr> <th>ID</th><th>Name</th><th>Happy</th><th>Unhappy</th> </tr>
                      @foreach($rp_staff as $staff)
                              <tr>
                                <td>{{$staff->server_id}}</td>
                                <td>{{$staff->first_name.''.$staff->last_name}}</td>
                                <td><?php $temp_count =0;?>
                                  @foreach($rp_race as $race)
                                  @if($race->server_id == $staff->server_id)
                                      @if($race->level =='happy')
                                           <?php $temp_count =$race->count;?>
                                      @endif
                                  @endif                                   
                                  @endforeach
                                      <i class="btn btn-success">
                                      @if($temp_count>0)
                                          {{$temp_count}}
                                      @else    
                                          0
                                       @endif   
                                      </i>
                                 </td> 
                                <td><?php $temp_count =0;?>
                                  @foreach($rp_race as $race)
                                  @if($race->server_id == $staff->server_id)
                                      @if($race->level =='unhappy')
                                           <?php $temp_count =$race->count;?>
                                      @endif
                                  @endif                                   
                                  @endforeach
                                      <i class="btn btn-default">
                                      @if($temp_count>0)
                                          {{$temp_count}}
                                      @else    
                                          0
                                       @endif   
                                      </i>
                                 </td> 
                           
                              </tr>
                      @endforeach
                  </table>    
              </div>

            </div>
</div> <!-- end row --> 




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
                type: "pie",
                dataPoints: data
              }             
              ]
          });

          chart.render();


          /*Hide info site canvasjs.com*/
          $("a.canvasjs-chart-credit").css('display','none');
  </script>
  