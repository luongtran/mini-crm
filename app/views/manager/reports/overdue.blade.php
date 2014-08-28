<div class="row"> 
            <div class="panel panel-default">
              <div class="panel-heading">
              <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.overdue')}}</h3>
              </div>
              <div class="panel-body">
                  <table class="table table-mailbox">
                    <tr>
                        @foreach($rp_staff as $staff)   
                            <td>{{$staff->first_name.' '.$staff->last_name}}</td>
                        @endforeach
                    </tr>
                    <tr>
                      @foreach($rp_staff as $staff) 
                        <td>
                        <?php $temp = 0;?>
                        @foreach ($rp_month as $month) 
                              @if($staff->staffID == $month->staffID)                              
                               @if($month->beginM != $month->endM)                               
                                  <?php $temp=$temp+1;?>
                                @endif
                              @endif
                        @endforeach          
                         <i class="btn btn-success">{{$temp}}</i>
                        </td>     
                      @endforeach
                    </tr> 
                  </table>    
              </div>

            </div>
</div> <!-- end row --> 

