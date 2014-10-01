@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
<div class="col-sm-12">                                                                 
                       <div class="portlet box blue">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>{{$view->title}}
                                                    </div>
                                                    <div class="tools">
                                                                                    <a href="" class="collapse">
                                                                                    </a>
                                                                                    <a href="#portlet-config" data-toggle="modal" class="config">
                                                                                    </a>
                                                                                    <a href="" class="reload">
                                                                                    </a>
                                                                                    <a href="" class="remove">
                                                                                    </a>
                                                    </div>
                                                </div>

                                            <div class="portlet-body">  
			                     <p><i class='btn btn-success'><i class="icon icon-document"></i>{{$view->FqaCategory->name}}</i></p>
			                     <p>{{$view->content}}</p>
				            	</div>
				            		
				            </div><!--end col 10-->
			            </div><!--end row -->  
			             

@stop
