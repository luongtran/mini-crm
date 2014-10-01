@section('content')

			            <div class="row">                   
			                    <div class="col-sm-10">
			                         {{Session::get('msg_flash')}}   
			                    <div class="portlet box blue">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>{{$view->name}}  
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
			                  	 <p>Code: {{$view->code}}</p>
			                     <p>Created at: {{$view->created_at}}</p>
			                     <p><a href='{{Request::root()}}/manager/languages/{{$view->id}}/edit'><i class='btn btn-success'>Edit</i></a></p>
				            	</div>
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
