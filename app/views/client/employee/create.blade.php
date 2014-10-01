@section('content')
            {{Former::open(url('client/employee'))->method('post')}}
            <div class="content-wrap">
                <div class="row">                              
                    
                    <div class="col-sm-10"> 
                    {{Session::get('msg_flash')}}      
                         <div class="portlet box green">
                            <div class="portlet-title">
                                 <div class="caption">
                                    <i class="fa fa-gift"></i>{{trans('form.basic')}}
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
                                <div class="form_center">
                                        <div class="form-group">                                            
                                            {{Former::text('email')->required()}}                                                                                        
                                        </div>
                                        <div class="form-group">                                           
                                             {{Former::password('password')->required()}}                                           
                                        </div>                                             
                                        <div class="form-group">                                            
                                             {{Former::password('password_confirmation')->required()}}                                               
                                        </div>
                                      
                                        <div class="form-group">                                            
                                            {{Former::text('first_name')->required()}}                                                                                      
                                        </div>
                                        <div class="form-group">
                                            {{Former::text('last_name')->required()}}                                                                                      
                                         </div>                                                                                  
                                        <div class="form-group">          
                                            {{ Former::select('activated')->options(array('0'=>'False','1'=>'True'), Input::old('activated'))}}                                                                                                                                                   
                                        </div>                                        
                                        
                                </div>


                            </div>

                        </div>                         
                       </div>
                        <!-- end col 12-->
                        
                        <div class="col-sm-10">
                        <div class="portlet box blue">
                            <div class="portlet-title">
                                 <div class="caption">
                                    <i class="fa fa-gift"></i>{{trans('form.profile')}}
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
                                <div class="form_center">                                                        
                                        
                                        <div class="form-group">
                                          {{Former::text('address')}}      
                                        </div>
                                   
                                        <div class="form-group">
                                            {{Former::text('phone_number')->required()}}        
                                        </div>
                                        
                                        <div class="form-group">                                            
                                           {{Former::actions()->large_primary_submit('create')}}
                                        </div> 
                                    
                                    </div>
                                </div> <!-- end body-->
                            
                            </div>
                            </div>  <!-- end col 12-->
                
            
            </div>
            </div><!--end row -->    

                                
                            
            
            {{Form::close()}}
@stop
            