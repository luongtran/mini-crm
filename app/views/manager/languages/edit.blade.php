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
			                    <div class="portlet box blue">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>{{trans('title.form.show_user')}}  
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
			                    {{Former::open(url('manager/languages/'.$view->id))->method('PUT')}}
			                     <?php Former::populate($view);?>		                  
				                    <div class="form-group">				                    
				                    {{Former::text('name')}}
				                    </div>
				                     <div class="form-group">				                    
				                    {{Former::text('code')}}
				                    </div>

				                    <div class="form-group">
				                        {{Former::actions()->larger_success_submit('Update')}} 				                        				                        
				                    </div>
				            	</div>
				            	</div>
				            	{{Form::close()}}  

				            		
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
