@section('content')
<div class="row">                   
			                    <div class="col-sm-10">
			                         {{Session::get('msg_flash')}}   
			                     <div class="portlet box blue">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>
			                               {{trans('form.update')}}
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
			                    {{Former::open(url('manager/news/'.$view->id))->method('PUT')->enctype('multipart/form-data')}}
			                			                  
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
				                        {{Former::actions()->larger_primary_submit('update')}} 				                        				                        
				                    </div>
				            	{{Former::close()}} 
				            	</div>
				            	</div>
				            		
				            </div><!--end col 10-->
</div><!--end row -->  
			             
@stop

@section('javascript')
<script type="text/javascript" src="{{asset('asset/share/ckeditor/ckeditor.js')}}"></script>   
@stop

                   

                      