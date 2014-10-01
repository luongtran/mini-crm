@section('content')
<div class="col-sm-12">                              	
                    {{Session::get('msg_flash')}}     
					<div class="portlet box grey-cascade">
						<div class="portlet-title">
							<div class="caption">
                                                            <i class="fa fa-globe"></i>{{trans('form.customer')}}
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
										    <a href="{{url('client/employee/create')}}" class="btn green">{{trans('common.button.addNew')}} <i class="fa fa-plus"></i></a>                                                                                    										
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
                                                            <th>Name</th>
                                                            <th>Email</th>                                        
                                                            <th>Create at</th>
                                                            <th></th>
                                                        </tr> 
                                                        </thead>
                                                        @foreach($list as $users)
                                                            <tr @if($users->activated==0){{"class='danger'"}} @endif >
                                                                <td class="small-col">
                                                                      <input type="checkbox" value="{{$users->id}}" name="checkID[]" class="checkBoxClass"/>
                                                                </td>                                       
                                                                <td><a href="{{Request::root()}}/client/employee/{{$users->id}}">{{$users->first_name}} {{$users->last_name}}</a></td>                                        
                                                                <td class="subject">
                                                                   {{$users->email}}
                                                                </td>                                  
                                                                <td> {{$users->created_at}}</td>
                                                                <td>
                                                                    <div class="btn-group pull-left">
                                                                <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                                                    <span class="caret"></span>
                                                                </button>
                                                                <ul class="dropdown-menu" role="menu"> 
                                                                    <li><a class='btn-del' href="{{Request::root()}}/client/employee/{{$users->id}}" ><i class="fa fa-trash-o"></i> Delete</a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                                </td>                                        
                                                            </tr>
                                                        @endforeach    

                               </table>
                                
                                
                                
                            </div>
     
                                <div class="">                                   
                                    <div class="btn-group pull-left">                                       
                                        
                                    </div>
                                </div>
                            <!-- /.table-responsive -->
                           

                    </div>    
     
@stop

@section('javascript')  
<script>
$(document).ready(function(){
    $('#dt_table_default').DataTable();
});
</script>
@stop
