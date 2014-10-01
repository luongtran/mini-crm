@section('content')
<div class="row">
<div class="col-md-12">
       {{Session::get('msg_flash')}}        
					<!-- BEGIN EXAMPLE TABLE PORTLET-->
					<div class="portlet box grey-cascade">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-globe"></i>{{trans('form.invoice')}}
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
										    <a href="{{url('manager/purchases/create')}}" class="btn green">{{trans('common.button.addNew')}} <i class="fa fa-plus"></i></a>                                                                                    										
										</div>
									</div>
									<div class="col-md-6">
										<div class="btn-group pull-right">
											<button class="btn dropdown-toggle" data-toggle="dropdown">Tools <i class="fa fa-angle-down"></i>
											</button>
                                                                                        <!--
											<ul class="dropdown-menu pull-right">
												<li>
													<a href="#">
													Print </a>
												</li>
												<li>
													<a href="#">
													Save as PDF </a>
												</li>
												<li>
													<a href="#">
													Export to Excel </a>
												</li>
											</ul>-->
										</div>
									</div>
								</div>
							</div>							
							<table id="dt_table_default" class="table table-bordered table-hover"> 
                                                        <thead>                                                            
							<tr>    <th></th>
                                                                <th>Code</th>
                                                                <th>Company</th>                                                                                
                                                                <th>Amount</th>
                                                                <th>Total</th>                           
                                                                <th>{{trans('title.table.created')}}</th>
                                                                <th>Status Expiry</th>                     
                                                                <th>{{trans('common.button.action')}}</th>
                                                        </tr>
							</thead>
							<tbody>	                             
							@foreach($purchases as $purchase)
                                                        <tr @if($purchase->amount==0){{"class='danger'"}} @endif >
                                                            <td class="small-col">                                            
                                                            </td>                                       
                                                            <td><a href="{{Request::root()}}/manager/purchases/{{$purchase->code}}">{{$purchase->code}}</a></td>                                      
                                                            <td><a href="{{url('manager/customers/'.$purchase->company_id)}}"> {{$purchase->company_name}}</a></td>                                        
                                                            <td> {{$purchase->amount}}</td>
                                                            <td> {{$purchase->total}} </td>
                                                            <td> {{$purchase->created_at}}</td>                                       
                                                            <td></td>  
                                                            <td>
                                                                <div class="btn-group pull-left">
                                                                <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                                                    <span class="caret"></span>
                                                                </button>
                                                                <ul class="dropdown-menu" role="menu">                                                                                                                                                                             
                                                                    <li><a class='btn-del' href="{{Request::root()}}/manager/purchases/{{$purchase->id}}"><i class="fa fa-trash-o"></i>{{trans('common.button.delete')}}</a>
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
