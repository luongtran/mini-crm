@section('content')
<div class="col-sm-12">                                                                 
                        <div class="mail_header">
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
			                    {{Former::open(url('manager/fqa'))->method('post')->enctype('multipart/form-data')}}
			                		                  
				                    <div class="form-group">				                   
				                    	{{Former::text('title')->required()}}				                        
				                    </div>
				                    <div class="form-group">
				                       {{Former::textarea('content')->class('ckeditor')}}		
				                    </div>

				                    <div class="form-group">				                      			                 
				                        {{Former::select('category_id')->fromQuery(FqaCategory::all(),'name','id')}}       				                        
				                    </div>

				                    <div class="form-group">
				                        {{Former::actions()->larger_success_submit('Create')}} 				                        				                        
				                    </div>

				           
				            	{{Former::close()}}  
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

@section('javascript')
<script type="text/javascript" src="{{asset('asset/share/ckeditor/ckeditor.js')}}"></script>   
@stop