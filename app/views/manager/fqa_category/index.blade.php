                            
@section('content')
<div class="row">
<div class="col-md-12">
       {{Session::get('msg_flash')}}        
					<!-- BEGIN EXAMPLE TABLE PORTLET-->
					<div class="portlet box grey-cascade">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-globe"></i>{{trans('form.group_fqa')}}
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
										    <a href="{{url('manager/fqa-category/create')}}" class="btn green">{{trans('common.button.addNew')}} <i class="fa fa-plus"></i></a>                                                                                    										
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
                                                                <th>{{trans('title.table.name')}}</th>
                                                                <th>{{trans('title.table.description')}}</th>
                                                                <th>{{trans('title.table.created')}}</th>
                                                                <th>{{trans('common.button.action')}}</th>
                                                        </tr>
							</thead>
							<tbody>	   
                                                                @foreach($listCategory as $Category)
                                                                <tr>
                                                                    <td class="small-col">                                                                       
                                                                    </td>                                       
                                                                    <td><a href="{{Request::root()}}/manager/fqa-category/{{$Category->id}}">{{$Category->name}}</a></td>                                                                             
                                                                    <td> {{$Category->description}}</td>
                                                                    <td> {{$Category->created_at}}</td>
                                                                    <td>
                                                                        <div class="btn-group pull-left">
                                                                    <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">{{trans('common.button.action')}}
                                                                        <span class="caret"></span>
                                                                    </button>
                                                                    <ul class="dropdown-menu" role="menu">                                         
                                                                        <li class="divider"></li>
                                                                        <li><a href="{{Request::root()}}/manager/fqa-category/{{$Category->id}}/edit"><i class="fa fa-pencil"></i>{{trans('common.button.edit')}}</a>
                                                                        </li>                                            
                                                                        <li class="divider"></li>
                                                                        <li><a class="btn-del" href="{{Request::root()}}/manager/fqa-category/{{$Category->id}}" ><i class="fa fa-trash-o"></i>{{trans('common.button.delete')}}</a>
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
        </div>        
@stop

@section('javascript')  
<script>
$(document).ready(function(){
    $('#dt_table_default').DataTable();
});
</script>
@stop
                   