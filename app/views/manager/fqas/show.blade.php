@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
<div class="col-sm-12">         <div class="mail_header">
                            <div class="row">
                            	                        
                            </div>
                        </div>

			            <div class="row">                   
			                    <div class="col-sm-10">
			                         {{Session::get('msg_flash')}}   
			                    <div class="portlet box blue">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>{{trans('title.form.primary')}}
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
			                  	 <p><i class='btn btn-default'>{{$view->FqaCategory->name}}</i><i class='btn btn-default'>{{$view->view}}</i></p>
			                     <p>{{$view->content}}</p>
			                     <p><a href='{{Request::root()}}/manager/fqa/{{$view->id}}/edit'><i class='btn btn-success'>Edit</i></a></p>
				            	</div>
				            		
				            </div><!--end col 10-->
			            </div><!--end row -->  
			             


                        </div>
                            <!-- end table -->

                            <div class="">                                   
                                    <div class="btn-group pull-left">                                       
                                                     </div>
                            </div>
                            
</div>  <!-- end col 12 -->   
@stop
