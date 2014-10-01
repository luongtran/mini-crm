@section('action')
                        <button type="button" class="btn btn-fit-height grey-salt dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                            {{trans('form.action')}} <i class="fa fa-angle-down"></i>
                        </button>
			    <ul class="dropdown-menu pull-right" role="menu">                                    									
                                            <li> 
                                                    <span class="badge badge-roundless badge-danger">{{trans('title.other.fillter_group_user')}}</span>
                                                </li>
                                                <?php  $group_users = GroupUser::all();?>
                                                @if($group_users)
                                                    @foreach($group_users as $group)
                                                    <li> 
                                                        <a href="{{Request::root()}}/manager/users/filter?field_filter={{$group->name}}">
                                                            <span class="entypo-plus-circled margin-iconic"></span>{{$group->name}}</a>
                                                    </li>                                                
                                                    @endforeach
                                                @endif
                                                 <li> 
                                                    <span class="badge badge-roundless badge-danger">{{trans('title.other.fillter_other')}}</span>
                                                </li>
                                                 <li> 
                                                    <a href="{{Request::root()}}/manager/users/filter?field_filter=trash">
                                                        <span class="entypo-plus-circled margin-iconic"></span>{{trans('common.button.trash')}}</a>
                                                </li>  
                                                <li> 
                                                    <a href="{{Request::root()}}/manager/users/filter?field_filter=active">
                                                        <span class="entypo-plus-circled margin-iconic"></span>{{trans('common.button.active')}}</a>
                                                </li>  
                                                <li> 
                                                    <a href="{{Request::root()}}/manager/users/filter?field_filter=no_active">
                                                        <span class="entypo-plus-circled margin-iconic"></span>{{trans('common.button.no_active')}}</a>
                                                </li>         
                            </ul>        
@stop                                    
                 
@section('content')
<div class="row">
<div class="col-sm-12">
     {{ Form::open(array('url' => 'manager/users/action','method'=>'post','role'=>'form','id'=>'frm-add')) }}                                                               
                        <div class="mail_header">
                            <div class="row">
                                  {{Session::get('msg_flash')}} 
                               <div class="col-sm-6">                                  
                                   <div style="margin-right:10px" class="btn-group pull-left">
                                      
                                        <div class="btn-group pull-left">  
                                             {{ Form::select('action',array('active'=>'Active','pending'=>'No active','trash'=>'Trash','del'=>'Delete') ,'hide' ,array('class'=>'form-control'))}}                                   
                                        </div>
                                        <div class="btn-group pull-left">      
                                        <button style="margin-right:10px" type="submit" data-color="#39B3D7" data-opacity="0.95" class="btn button test pull-left">
                                        <span class="entypo-arrows-ccw"></span>&nbsp;&nbsp;{{trans('common.button.change')}}</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">                                   
                                     <div style="margin-right:10px" class="btn-group pull-right">                                      
                                        <div class="btn-group pull-right">                                                                                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="portlet box grey-cascade">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-globe"></i>{{trans('form.user')}}
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
										    <a href="{{url('manager/users/create')}}" class="btn green">{{trans('common.button.addNew')}} <i class="fa fa-plus"></i></a>                                                                                    										
										</div>
									</div>
									<div class="col-md-6">
										<div class="btn-group pull-right">
											
										</div>
									</div>
								</div>
							</div>	
                                <!-- THE MESSAGES -->                               
                                <table id="dt_table_default" class="table table-bordered table-hover"> 
                                    <thead>   
                                    <tr>
                                        <th >  
                                        </th>
                                        <th>{{trans('title.table.name')}}</th>
                                        <th>{{trans('title.table.email')}}</th>
                                        <th>{{trans('title.table.group_user')}}</th>
                                        <th>{{trans('title.table.created')}}</th>
                                        <th></th>                                       
                                    </tr>
                                   </thead>
                                   <tbody> 
                                    @foreach($list as $users)
                                    <tr @if($users->activated==0){{"class='danger'"}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$users->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{url('manager/users/'.$users->id)}}">{{$users->fullname}}</a></td>
                                        <td class="subject">
                                           {{$users->email}}
                                        </td>
                                        <td> {{$users->name}}</td>
                                        <td> {{$users->created_at}}</td>
                                        <td>
                                        <div class="btn-group pull-left">
                                            <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">{{trans('common.button.action')}}
                                                <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="{{url('manager/users/'.$users->id)}}/edit"><i class="fa fa-pencil"></i>{{trans('common.button.edit')}}</a>
                                                </li>                                            
                                                <!-- <li class="divider"></li>
                                                <li><a class="btn-del" href="{{Request::root()}}/manager/users/{{$users->id}}" ><i class="fa fa-trash-o"></i> Delete</a>
                                                </li> -->
                                            </ul>
                                        </div>

                                        </td>                                        
                                    </tr>
                                    @endforeach    
                                    </tbody>                                   
                               </table>                                
                            </div>
                             </div>
      {{Form::close()}}
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
                   