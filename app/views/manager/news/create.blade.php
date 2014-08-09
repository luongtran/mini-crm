@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
            <!--TITLE -->
            @include('manager.news.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.news.breadcrumb')
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
			                                <h6>Add news</h6>
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

			                    {{Former::open(url('manager/news'))->method('post')->enctype('multipart/form-data')}}
			                    <div class="body-nest" id="basic">				                  
				                    <div class="form-group">
				                    {{Former::text('title')->required()}}
				                    </div>
				                    <div class="form-group">                 
				                        {{ Former::textarea('content')->class('ckeditor')}}				                       
				                    </div>

				                    <div class="form-group">				                      			                 
				                        {{Former::select('category_id')->options($category,Input::old('category_id'))}}   
				                    </div>

				                    <div class="form-group">
				                        {{Former::actions()->larger_primary_submit('Create')}} 				                        				                        
				                    </div>
				            	</div>
				            	{{Former::close()}}  

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
