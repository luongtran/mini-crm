@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
            <!--TITLE -->
            @include('client.fqa.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('client.fqa.breadcrumb')
            <!-- END OF BREADCRUMB -->
<div class="col-sm-12">                                                                 
                        <div class="mail_header">
                            <div class="row">
                            	<!-- session message -->
                                  {{Session::get('msg_flash')}} 
                                <!-- session message -->                              
                            </div>
                        </div>

			            <div class="row">                   
			                    <div class="col-sm-10">
			                         {{Session::get('msg_flash')}}   
			                    <div class="nest" id="basicClose">
			                    <div class="title-alt">
			                                <h6>{{$view->title}}</h6>
			                                <div class="titleClose">
			                                    <a class="gone" href="#basicClose">
			                                        <span class="entypo-cancel"></span>
			                                    </a>
			                                </div>
			                                <div class="titleToggle">
			                                    <a class="nav-toggle-alt" href="#basic">
			                                        <span class="entypo-up-open"></span>
			                                    </a>
			                                </div>

			                    </div>
			                    <div class="body-nest" id="basic">
			                     <p><i class='btn btn-success'><i class="icon icon-document"></i>{{$view->FqaCategory->name}}</i></p>
			                     <p>{{$view->content}}</p>
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
