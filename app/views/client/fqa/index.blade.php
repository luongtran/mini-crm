@section('content')
<!-- CONTENT -->
<div class="col-sm-12">                                                                 
                   
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
										
									</div>
									<div class="col-md-6">
										<div class="btn-group pull-right">
											
										</div>
									</div>
								</div>
							</div>							
				<table id="dt_table_default" class="table table-bordered table-hover"> 
                                    <thead> 
                                    <tr>
                                        <th>{{trans('title.table.question')}}</th>
                                        <th>{{trans('title.table.category')}}</th>                                       
                                        <th>{{trans('title.table.created')}}</th>                                       
                                    </tr>
                                    </thead> 
                                    @foreach($lists as $row)
                                    <tr>                                
                                        <td ><a href="{{url('client/fqa/'.$row->id)}}">{{$row->title}}</a></td>
                                        <td>{{$row->FqaCategory->name}}</td>     
                                        <td>{{$row->created_at}}</td>                                        
                                    </tr>
                                    @endforeach
                                </table>                                
                            </div>
                            <!-- end table -->
   </div>
                            
</div>  <!-- end col 12 -->   
@stop



@section('javascript')  
<script>
$(document).ready(function(){
    $('#dt_table_default').DataTable();
});
</script>
@stop
