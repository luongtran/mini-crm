@section('action')
                        <button type="button" class="btn btn-fit-height grey-salt dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                            {{trans('form.action')}} <i class="fa fa-angle-down"></i>
                        </button>
			    <ul class="dropdown-menu pull-right" role="menu">
                                    <li> 
                                        <a><span class="badge badge-roundless badge-danger">{{trans('common.button.filter')}}</span></a>
                                    </li>									
                                     <?php  $status = Status::all();?>
                                                @if($status)
                                                    @foreach($status as $get)													
													<li class="divider">
													</li>													
                                                    <li> 
                                                        <a href="{{Request::root()}}/manager/tickets/filter?key={{$get->id}}">
                                                        <span class="entypo-plus-circled margin-iconic"></span>{{$get->name}}</a>
                                                    </li>                                                
                                                    @endforeach
                                     @endif         
                            </ul>        
@stop                                    
                                       
@section('content')
<div class="row">
<div class="col-md-12">
       {{Session::get('msg_flash')}}        
					<!-- BEGIN EXAMPLE TABLE PORTLET-->
					<div class="portlet box grey-cascade">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-globe"></i>{{trans('form.ticket')}}
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
							<div class="table-toolbar">
								<div class="row">
									<div class="col-md-6">
										<div class="btn-group">
										    <a href="{{url('manager/tickets/create')}}" class="btn green">{{trans('common.button.addNew')}} <i class="fa fa-plus"></i></a>                                                                                    										
										</div>
									</div>
									<div class="col-md-6">
										<div class="btn-group pull-right">
											
										</div>
									</div>
								</div>
							</div>							
							<table id="dt_table_default" class="table table-bordered table-hover"> 
                                                        <thead>                                                            
							<tr>    <th></th>
                                                                <th>{{trans('title.other.order_ticket')}}</th>
                                                                <th>{{trans('title.table.subject')}}</th>
                                                                <th>{{trans('title.table.company')}}</th>
                                                                <th>{{trans('title.table.status')}}</th>
                                                                <th>{{trans('title.table.created')}}</th>
                                                                <th>{{trans('common.button.action')}}</th>
                                                        </tr>
							</thead>
							<tbody>	   
                                                            @foreach($list_ticket as $ticket)
                                                            <tr @if($ticket->status_id==Ticket::S_NEW) {{'class="success"'}} @elseif($ticket->status_id==Ticket::S_RESOLVE){{'class="danger"'}} @endif >
                                                                <td class="small-col">
                                                                      <input type="checkbox" value="{{$ticket->id}}" name="checkID[]" class="checkBoxClass"/>
                                                                </td>                                       
                                                                <td><a href="{{url('manager/tickets/'.$ticket->code)}}">{{$ticket->code}}</a></td>
                                                                 <td >
                                                                   {{$ticket->subject}}
                                                                </td>                                                              
                                                                  <td >
                                                                  {{$ticket->company_name}} {{$ticket->client_id}}
                                                                </td>

                                                                <td >
                                                                   {{$ticket->status}}
                                                                </td>
                                                                 <td >
                                                                   {{$ticket->created_at}}
                                                                </td>
                                                                <td>
                                                                    <div class="btn-group pull-left">
                                                                <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                                                    <span class="caret"></span>
                                                                </button>
                                                                <ul class="dropdown-menu" role="menu">
                                                                    <li><a class='btn-del' href="{{Request::root()}}/manager/tickets/{{$ticket->code}}"><i class="fa fa-trash-o"></i> {{trans('common.button.delete')}} </a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                                </td>                                        
                                                            </tr>
                                                            @endforeach    
  
                                                        </tbody>
							</table>
                                                        <!-- paginate -->
                                                        <div class="row"><div class="col-md-5 col-sm-12">
                                                                         <div class="btn-group pull-left">  

                                                                         </div>
                                                             </div>
                                                        </div>
                                                        <!--end paginate -->
                                                        </div>                                                       
                                                        </div>
			</div>                
</div>        
@stop

@section('javascript')
<script>
$(document).ready(function(){
    $('#dt_table_default').DataTable();
});
</script>
@stop
                   