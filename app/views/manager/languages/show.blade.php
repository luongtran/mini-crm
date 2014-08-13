@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
            <!--TITLE -->
            @include('manager.languages.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.languages.breadcrumb')
            <!-- END OF BREADCRUMB -->
<div class="col-sm-12">                                                                 
                        <div class="mail_header">
                            <div class="row">
                            	<!-- session message -->
                                <!-- session message -->                              
                            </div>
                        </div>

			            <div class="row">                   
			                    <div class="col-sm-10">
			                         {{Session::get('msg_flash')}}   
			                    <div class="nest" id="basicClose">
			                    <div class="title-alt">
			                        <h6>{{$view->name}}</h6>
			                    </div>
			                    <div class="body-nest" id="basic">
			                  	 <p>{{$view->code}}</p>
			                     <p>{{$view->created_at}}</p>
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
