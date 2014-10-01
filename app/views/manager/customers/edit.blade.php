@section('content')            
            {{Former::open(url('manager/customers/'.$customer->id))->method('PUT')->enctype('multipart/form-data')}}
            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-8">
                         {{Session::get('msg_flash')}}   
                        <div class="portlet box green">
                            <div class="portlet-title">
                                 <div class="caption">
					<i class="fa fa-gift"></i>{{trans('form.basic')}}
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
                                <div class="form_center">
                                        <div class="form-group">                                           
                                            {{Former::text('email')->disabled('disabled')}}                                       
                                        </div>
                                        <div class="form-group">                                     
                                            {{ Former::password('password')}}
                                        </div>
                                    
                                        <div class="form-group">                  
                                            {{ Former::password('password_confirmation')}}                    
                                        </div>
                                                              
                                        <div class="form-group">
                                             {{Former::text('first_name')->required()}}
                                        </div>
                                        <div class="form-group">
                                             {{Former::text('last_name')->required()}}
                                        </div>             
                                        <div class="form-group">
                                            {{Former::select('activated')->fromQuery(array('1'=>'True','0'=>'False'))}}                                      
                                        </div>
                                </div>
                            </div>

                        </div>
                          </div>
                        <!-- end col 12-->
                        
                        <div class="col-sm-8">
                         <div class="portlet box blue">
                            <div class="portlet-title">
                                 <div class="caption">
					<i class="fa fa-gift"></i>{{trans('form.profile')}}
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
                                <div class="form_center">                                                        
                                        <div class="form-group">                                   
                                           {{Former::text('company_name')->value($customer->profile->company_name)->required()}}  </div>
                                        <div class="form-group">
                                            {{Former::text('address')->value($customer->profile->company_name)}}  </div>
                                        <div class="form-group">
                                            {{Former::text('website')->value($customer->profile->website)}} 
                                        </div>
                                        <div class="form-group">
                                           {{Former::tel('phone_number')->value($customer->profile->phone_number)->required()}}  </div>
                                        <div class="form-group">          
                                           {{ Former::select('sector_id')->fromQuery(Sector::all(),'name','id')}} 
                                        </div>
                                        <div class="form-group">                                            
                                             {{Former::number('employee_count')->value($customer->profile->employee_count)->min(1)->max(10000)->required()}}                                                                                        
                                        </div>
                                        <div class="form-group">                                            
                                               {{Former::text('contact_employee_company')->value($customer->profile->contact_employee_company)->required()}}                                                                                                                                     
                                        </div>

                                        <div class="form-group">                                     
                                            @if($customer->avatar)
                                                <img src="{{url($customer->avatar)}}" class='avatar img-circle' width='200'/>                                               
                                            @endif
                                             {{Former::file('avatar')}}                                          
                                        </div>
                                        <div class="form-group">                                            
                                            {{Former::actions()->large_primary_submit('Update')}}          
                                        </div>                                      
                                    
                                    </div>
                                </div> <!-- end body-->
                            
                            </div>
                            </div>  <!-- end col 12-->                
            
            </div>
            </div><!--end row -->  
            {{Former::close()}}
@stop
            