@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
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
			                                <h6></h6>
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

			                    {{Former::open(url('manager/languages'))->method('post')->enctype('multipart/form-data')}}
			                    <div class="body-nest" id="basic">				                  
				                    <div class="form-group">
				                    {{Former::text('name')->required()}}
				                    </div>

				                    <div class="form-group">
				                    {{Former::text('code')->required()}}
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
