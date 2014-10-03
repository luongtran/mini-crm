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
										<div class="slimScrollDiv" style="position: relative; ">                                                                                    
                                                                                    <div class="scroller" style="" data-always-visible="0" data-rail-visible="0" data-handle-color="#dae3e7" data-initialized="1">
											<div class="todo-tasklist">
                                                                                             @foreach($activity as $at)
												<div class="todo-tasklist-item todo-tasklist-item-border-green">
                                                                                                       <img src="<?php $avatar = User::find($at->author_id); if($avatar->avatar){echo url($avatar->avatar);} else  {echo url('asset/backend/assets/img/small-bg13.jpg');} ?>" class="todo-userpic pull-left" width="27px" height="27px">												
													<div class="todo-tasklist-item-title">														
                                                                                                                 {{$at->title}}  
													</div>
													<div class="todo-tasklist-item-text">														
                                                                                                                 @if($at->event == TicketActivity::reply)
                                                                                                                  {{strip_tags(str_limit($at->content,50))}}  
                                                                                                                     @else
                                                                                                                   {{strip_tags(str_limit($at->content,100))}}  
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
    @include('manager.reports.chart_home');
@stop
