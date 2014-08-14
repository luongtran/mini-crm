@section('content')
            <!--TITLE -->
            @include('manager.customers.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.customers.breadcrumb')
            <!-- END OF BREADCRUMB -->
            
            {{Former::open(url('manager/customers/'.$customer->id))->method('PUT')->enctype('multipart/form-data')}}

             <?php Former::populate($customer);?>

            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-10">
                         {{Session::get('msg_flash')}}   
                        <div class="nest" id="basicClose">
                            <div class="title-alt">
                                <h6>Basic</h6>
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

                            <div class="body-nest" id="basic">
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
                        
                        <div class="col-sm-10">
                        <div class="nest" id="profileClose">
                            <div class="title-alt">
                                <h6>Profile</h6>
                                <div class="titleClose">
                                    <a class="gone" href="#profileClose">
                                        <span class="entypo-cancel"></span>
                                    </a>
                                </div>
                                <div class="titleToggle">
                                    <a class="nav-toggle-alt" href="#profile">
                                        <span class="entypo-up-open"></span>
                                    </a>
                                </div>
                            </div>

                            <div class="body-nest" id="profile">
                                <div class="form_center">                                                        
                                        <div class="form-group">                                   
                                           {{Former::text('company_name')->value($customer->profile->company_name)->required()}}  </div>
                                        <div class="form-group">
                                            {{Former::text('address')->value($customer->profile->company_name)}}  </div>
                                        <div class="form-group">
                                            {{Former::text('website')->value($customer->profile->website)}} 
                                        </div>
                                        <div class="form-group">
                                           {{Former::text('phone_number')->value($customer->profile->phone_number)->required()}}  </div>
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
            