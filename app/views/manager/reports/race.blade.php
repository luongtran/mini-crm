<div class="row"> 
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.race')}}</h3>
              </div>
              <div class="panel-body">
                  <table class="table table-mailbox">
                    <tr> <th>ID</th><th>{{trans('title.table.name')}}</th><th>{{trans('title.table.happy')}}</th><th>{{trans('title.table.unhappy')}}</th><th>{{trans('title.table.orther')}}</th><th>{{trans('title.table.overdue')}}</th><th>{{trans('title.table.count_access')}}</th></tr>
                      @foreach($rp_staff as $staff)
                              <tr>
                                <td>{{$staff->server_id}}</td>
                                <td>
                                  <?php
                                  $avatar = User::find($staff->server_id); 
                                  if($avatar->avatar)
                                    {$avatar =  url($avatar->avatar);} 
                                  else  
                                    {$avatar = url('asset/backend/assets/img/small-bg13.jpg');} 
                                  ?>
                                <img src="{{$avatar}}" class="admin-pic img-circle">
                                
                                  <a href="{{url('manager/users/'.$staff->server_id)}}">
                                  {{$staff->first_name.''.$staff->last_name}}
                                    </a>
                                </td>
                                <!-- happy -->
                                <td><?php $temp_count =0;?>
                                  @foreach($rp_race as $race)
                                  @if($race->server_id == $staff->server_id)
                                      @if($race->level =='happy')
                                           <?php $temp_count =$race->count;?>
                                      @endif
                                  @endif                                   
                                  @endforeach
                                       @if($temp_count>0)
                                        <i class="btn btn-success">{{$temp_count}}</i>
                                        @else
                                        <i class="btn btn-default">0</i>
                                        @endif
                                 </td> 
                                <!-- unhappy--> 
                                <td><?php $temp_count =0;?>
                                  @foreach($rp_race as $race)
                                  @if($race->server_id == $staff->server_id)
                                      @if($race->level =='unhappy')
                                           <?php $temp_count =$race->count;?>
                                      @endif
                                  @endif                                   
                                  @endforeach
                                       @if($temp_count>0)
                                        <i class="btn btn-primary">{{$temp_count}}</i>
                                        @else
                                        <i class="btn btn-default">0</i>
                                        @endif
                                 </td> 
                                <!-- other--> 
                                <td><?php $temp_count =0;?>
                                  @foreach($rp_race as $race)
                                  @if($race->server_id == $staff->server_id)
                                      @if($race->level =='other')
                                           <?php $temp_count =$race->count;?>
                                      @endif
                                  @endif                                   
                                  @endforeach
                                       @if($temp_count>0)
                                        <i class="btn">{{$temp_count}}</i>
                                        @else
                                        <i class="btn btn-default">0</i>
                                        @endif
                                 </td> 
                                <!-- overdue -->
                                  <td>
                                    <?php $temp = 0;?>
                                    @foreach ($rp_overdue as $overdue) 
                                          @if($staff->server_id == $overdue->staffID)                              
                                            @if($overdue->beginM != $overdue->endM)                               
                                              <?php $temp = $temp+1;?>
                                            @endif
                                          @endif
                                    @endforeach   

                                    @if($temp>0)
                                    <i class="btn btn-danger">{{$temp}}</i>
                                    @else
                                    <i class="btn btn-default">0</i>
                                    @endif
                                  </td>
                                     <!-- overdue -->
                                  <td>
                                    @if($staff->count_access>0)
                                    <i class="btn btn-success">{{$staff->count_access}}</i>
                                    @else
                                    <i class="btn btn-default">0</i>
                                    @endif
                                  <td>
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
                    <div id="container_level_race"></div>
              </div>
            </div>
</div> <!-- end row --> 
  



  <script type="text/javascript">      
  <?php 
          $total = 0; $level = "[";
          foreach($rp_total as $tl):
            $total = $total + $tl->y;
          endforeach;  

          foreach($rp_total as $lv):
            $level.= "['".$lv->label."',".((($lv->y)*100)/$total)."],"; 
          endforeach; 
          //echo "var data =".json_encode($rp_total).';';                  
          echo "var data =".$level."]";  
          
  ?>  
       

  $(function () {

    // Make monochrome colors and set them as default for all pies
    Highcharts.getOptions().plotOptions.pie.colors = (function () {
        var colors = [],
            base = Highcharts.getOptions().colors[0],
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());

    // Build the chart
    $('#container_level_race').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Race level by customer'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: data
        }]
    });
});
</script>



