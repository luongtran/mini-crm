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
			                   

			                    {{Form::open(array('method'=>'PUT','url'=>'manager/fqa/'.$view->id,'enctype'=>'multipart/form-data'))}}
			                    <div class="body-nest" id="basic">				                  
				                    <div class="form-group">
				                    {{Form::label('Title')}} <span class='val-star'>(*)</span>
				                    {{Form::text('title',$view->title,array('class'=>'form-control','required'))}}
				                        <span class="alert-danger">{{$errors->first('email')}}</span>
				                    </div>
				                    <div class="form-group">
				                        {{Form::label('Content')}} <span class='val-star'>(*)</span>                   
				                        {{ Form::textarea('content',$view->content,array('class'=>'form-control ckeditor')) }}
				                        <span class="alert-danger">{{$errors->first('password')}}</span>
				                    </div>

				                    <div class="form-group">
				                        {{Form::label('Category')}} 				                 
				                        {{Form::text('category',Input::old('category'),array('class'=>'form-control'))}}       
				                        <span class="alert-danger">{{$errors->first('category')}}</span>
				                    </div>

				                    <div class="form-group">
				                        {{Form::submit('Update',array('class'=>'btn btn-success'))}} 				                        				                        
				                    </div>
				            	</div>
				            	{{Form::close()}}  

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
