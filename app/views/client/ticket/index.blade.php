@section('content')
<div class="row">
{{Session::get('msg_flash')}}
<div class="portlet box grey-cascade">
						<div class="portlet-title">
							<div class="caption">
                                                            <i class="fa fa-globe"></i>{{trans('form.ticket')}}
							</div>
							<div class="tools">
								<a href="javascript:;" class="collapse">
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
										    <a href="{{url('client/tickets/create')}}" class="btn green">{{trans('common.button.addNew')}} <i class="fa fa-plus"></i></a>                                                                                    										
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
                                                    <tr class="unread">
                                                        <th class="small-col">
                                                        <input type="checkbox" id="ckbCheckAll">                        
                                                        </th>
                                                        <th>{{trans('title.other.order_ticket')}}</th>
                                                        <th>{{trans('title.table.subject')}}</th>
                                                        <th>{{trans('title.table.author')}}</th>
                                                        <th>{{trans('title.table.status')}}</th>
                                                        <th>{{trans('title.table.created')}}</th>
                                                        <th></th>

                                                    </tr>  
                                                        </thead> 
                                    
                                    @foreach($list_ticket as $ticket)
                                    <tr @if($ticket->status=='new') {{'class="success"'}} @elseif($ticket->status=='resolve'){{'class="danger"'}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$ticket->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/client/tickets/{{$ticket->code}}">{{$ticket->code}}</a></td>
                                         <td >
                                           {{$ticket->subject}}
                                        </td>                                        
                                          <td >
                                           {{$ticket->first_name}}  {{$ticket->last_name}}
                                        </td>
                                        
                                        <td >
                                           {{$ticket->status}}
                                        </td>
                                         <td >
                                           {{$ticket->created_at}}
                                        </td>
                                        <td>

                                        </td>                                        
                                    </tr>
                                    @endforeach    

                               </table>    
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
