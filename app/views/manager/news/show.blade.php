@section('content')
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
			                  	 <p><i class='btn btn-success'>{{$view->NewCategory->name}}</i></p>
			                     <p>{{$view->content}}</p>
			                     <p><a href='{{Request::root()}}/manager/news/{{$view->id}}/edit'><i class='btn btn-success'>Edit</i></a></p>
				            	</div>
				            		
				            </div><!--end col 10-->
			            </div><!--end row -->  
			             


                        </div>
@stop
