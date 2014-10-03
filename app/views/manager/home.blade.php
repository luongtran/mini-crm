@extends('manager.layouts.default')
@section('content')
<link href="{{asset('')}}asset/global/css/components.css" rel="stylesheet" type="text/css">
<link href="{{asset('')}}asset/admin/pages/css/todo.css" rel="stylesheet" type="text/css">
<div class="row">
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="dashboard-stat blue-madison">
						<div class="visual">
							<i class="fa fa-comments"></i>
						</div>
						<div class="details">
							<div class="number">
								{{$total_customer}}
							</div>
							<div class="desc">
								{{trans('form.customer')}}
							</div>
						</div>
						<a class="more" href="#">
						{{trans('common.button.view_more')}} <i class="m-icon-swapright m-icon-white"></i>
						</a>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="dashboard-stat red-intense">
						<div class="visual">
							<i class="fa fa-bar-chart-o"></i>
						</div>
						<div class="details">
							<div class="number">
								{{$total_employee}}
							</div>
							<div class="desc">
								{{trans('form.employee')}}
							</div>
						</div>
						<a class="more" href="#">
						View more <i class="m-icon-swapright m-icon-white"></i>
						</a>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="dashboard-stat green-haze">
						<div class="visual">
							<i class="fa fa-shopping-cart"></i>
						</div>
						<div class="details">
							<div class="number">
								{{$total_ticket}}
							</div>
							<div class="desc">
								{{trans('title.report.total_ticket')}}
							</div>
						</div>
						<a class="more" href="#">
						View more <i class="m-icon-swapright m-icon-white"></i>
						</a>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="dashboard-stat purple-plum">
						<div class="visual">
							<i class="fa fa-globe"></i>
						</div>
						<div class="details">
							<div class="number">
								 {{Auth::user()->count_access}}
							</div>
							<div class="desc">
								{{trans('title.table.count_access')}} 
							</div>
						</div>
						<a class="more" href="#">
						View more <i class="m-icon-swapright m-icon-white"></i>
						</a>
					</div>
				</div>
</div>
<!--end total -->
<div class="row">
        <div class="col-lg-12">
   	<div class="portlet box red">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-gift"></i>Tickets Chart
							</div>
							<div class="tools">
								<a href="javascript:;" class="collapse">
								</a>
								<a href="#portlet-config" data-toggle="modal" class="config">
								</a>
								<a href="javascript:;" class="reload">
								</a>
								<a href="javascript:;" class="remove">
								</a>
							</div>
						</div>
						<div class="portlet-body">
						<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
						</div>
	 </div>
         </div>
</div>
       
<div class="row">
    <div class="col-md-12">
										<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 600px;">
                                                                                    
                                                                                    <div class="scroller" style="max-height: 600px; overflow: hidden; width: auto; height: 600px;" data-always-visible="0" data-rail-visible="0" data-handle-color="#dae3e7" data-initialized="1">
											<div class="todo-tasklist">
                                                                                             @foreach($activity as $at)
												<div class="todo-tasklist-item todo-tasklist-item-border-green">
                                                                                                       <img src="<?php $avatar = User::find($at->author_id); if($avatar->avatar){echo url($avatar->avatar);} else  {echo url('asset/backend/assets/img/small-bg13.jpg');} ?>" class="todo-userpic pull-left" width="27px" height="27px">												
													<div class="todo-tasklist-item-title">														
                                                                                                                 {{$at->title}}  
													</div>
													<div class="todo-tasklist-item-text">														
                                                                                                                 @if($at->event == TicketActivity::reply)
                                                                                                                  {{str_limit($at->content,10)}}  
                                                                                                                     @else
                                                                                                                  {{str_limit($at->content,100)}}  
                                                                                                                  @endif
               
													</div>
													<div class="todo-tasklist-controls pull-left">
														<span class="todo-tasklist-date"><i class="fa fa-calendar"></i> {{$at->created_at}} </span>
														<span class="todo-tasklist-badge badge badge-roundless"><a href="{{url('manager/tickets/'.$at->ticket_id)}}">{{$at->ticket_id}}</a> </span>
													</div>
												</div>
                                                                                                @endforeach 
											</div>
                                                                                        
										</div>
                                                                                    <div class="slimScrollBar" style="width: 7px; position: absolute; border-top-left-radius: 7px; border-top-right-radius: 7px; border-bottom-right-radius: 7px; border-bottom-left-radius: 7px; z-index: 99; right: 1px; top: 269px; height: 330.578512396694px; display: none; opacity: 0.4; background: rgb(218, 227, 231);"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-top-left-radius: 7px; border-top-right-radius: 7px; border-bottom-right-radius: 7px; border-bottom-left-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(234, 234, 234);">
                                                                                        
                                                                                    </div>
                                                                                        
                                                                                </div>
	</div>   
                                                                     
    
</div> 

@stop

@section('javascript')

<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script> 
<?php 
$getDay =  getdate();
            $getMonth_From = $getDay['mon'];          
            
           
		               $rp_total =  DB::table('tickets')							
		        						->join('status','status.id','=','tickets.status')
                                                                        ->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-2)			 
                                                                        ->where(DB::raw('month(tickets.created_at)'),'<=',$getMonth_From)			 
									->groupBy('tickets.status')												
									->select(DB::raw('status.name as label,count(tickets.status) as y'))
									->get();
                      
									
				$rp_month= DB::table('tickets')			->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-2)			 
                                                                                ->where(DB::raw('month(tickets.created_at)'),'<=',$getMonth_From)			 	
										->groupBy(DB::raw('month(created_at)'))		
										->groupBy(DB::raw('year(created_at)'))																									
										->orderBy('year','asc')	
										->orderBy('month','asc')	
										->select(DB::raw('month(created_at) as month ,year(created_at) year,count(tickets.code) as total'))
										->get();	
				$rp_status= DB::table('tickets')						 	
										->join('status','status.id','=','tickets.status')
                                                                                ->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-2)			 
                                                                                ->where(DB::raw('month(tickets.created_at)'),'<=',$getMonth_From)
										->where('tickets.status','<>',2)
										->where('tickets.status','<>',4)
										->groupBy(DB::raw('month(tickets.created_at)'))		
										->groupBy(DB::raw('year(tickets.created_at)'))																									
										->groupBy('tickets.status')																									
										->orderBy('year','asc')	
										->orderBy('month','asc')											
										->select(DB::raw('month(tickets.created_at) as month,month(tickets.resolved_at) as monthRS ,year(tickets.created_at) year,count(tickets.status) as total,status.name as status'))
										->get();
          $char_resolved_ticket = "{name:'Resolved',data:["; 
          $char_total_ticket = "{name:'Total',data:["; 
          foreach($rp_month as $month):
                  
                    $temp_resolve = 0;$temp_resolve1=0; $total = $month->total;
                    foreach($rp_status as $status):                             
                      if($month->month == $status->month && $month->year == $status->year): 
                           if($status->status == 'Resolve' && $status->month == $status->monthRS):        
                               $temp_resolve = (($status->total)*100)/$total;  $temp_resolve1=$status->total;           
                           endif;                      
                      endif;
                    endforeach; 
              
                    if($temp_resolve>0):                
                      $char_resolved_ticket.= $temp_resolve1.',';
                    else:                  
                      $char_resolved_ticket.= '0,';
                    endif;
                    
                $char_total_ticket.=(int)$month->total.',';      
          endforeach ;
                     
                 
       
         $char_total_ticket.= "]}";

         $char_resolved_ticket.= "]}"; 
         
         $monthJS = "[";
            foreach($rp_month as $month)
            {
            $monthJS.= "'".$month->month."/".$month->year."',";
            }
            $monthJS.= "]";
?>
<script>
        <?php  
        echo "var var_resolved = ".$char_resolved_ticket.";";
        echo "var var_total = ".$char_total_ticket.";";        
        echo "var_month = ".$monthJS.";";
        ?>
            
        $(function () {
                $('#container').highcharts({
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: 'Ticket total/month and resolved/month'
                    },
                    subtitle: {
                        text: 'CRM - System'
                    },
                    xAxis: {
                        type: 'day',
                        dateTimeLabelFormats: { // don't display the dummy year
                            month: '%e. %b',
                            year: '%b'
                        },
                        title: {
                            text: 'Month'
                        },
                       categories: var_month
                    },
                    yAxis: {
                        title: {
                            text: 'Number ticket (TK)'
                        },
                        min: 0
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: ' {point.y:2f} Ticket'
                    },

                   series: [         
                        var_resolved,
                        var_total
                      ]
                });
            });
</script>
@stop
