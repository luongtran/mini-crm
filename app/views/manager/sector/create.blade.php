@section('content')
            <!-- CONTENT -->    
            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-10">
                        <!-- msg flash-->
                         {{Session::get('msg_flash')}}   
                        <!--end msg flash--> 
                         <div class="portlet box green">
                            <div class="portlet-title">
                                 <div class="caption">
                                     {{trans('form.addNew')}}
				</div>
                                <div class="tools">
					<a href="" class="collapse">
					</a>								
					<a href="" class="reload">
					</a>
					<a href="" class="remove">
					</a>
				</div>
                            </div>
                            <div class="portlet-body">     
                                {{Former::open(url('manager/sectors'))->method('post')}}
                                        <div class="form-group">                                           
                                            {{Former::text('name')->required()}}
                                        </div>                                    
                                        <div class="form-group">
                                            {{Former::textarea('description')}}
                                        </div>
                                        <div class="form-group">                                            
                                            {{Former::submit('create')->class('btn green')}}          
                                        </div>                                         
                                {{Form::close()}} 
                            </div>

                        </div>
                       
                    </div><!--end col-->     
            </div>
            </div><!--end row -->               
        
@stop
            