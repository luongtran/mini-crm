@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
            <!--TITLE -->
            @include('manager.fqas.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.fqas.breadcrumb')
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
			                                <h6>Edit Anser question ?</h6>
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
			                   

			                   {{Former::open(url('manager/fqa'))->method('post')->enctype('multipart/form-data')}}
			                   <?php Former::populate($view);?>
			                    <div class="body-nest" id="basic">				                  
				                    <div class="form-group">				                   
				                    	{{Former::text('title')->required()}}				                        
				                    </div>
				                    <div class="form-group">
				                       {{Former::textarea('content')->class('ckeditor')->required()}}		
				                    </div>

				                    <div class="form-group">				                      			                 
				                        {{Former::select('category_id')->fromQuery(FqaCategory::all(),'name','id')}}       				                        
				                    </div>

				                    <div class="form-group">
				                        {{Former::actions()->larger_success_submit('update')}} 				                        				                        
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
