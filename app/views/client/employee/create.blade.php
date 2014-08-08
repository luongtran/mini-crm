@section('content')

            <!-- CONTENT -->
            <!--TITLE -->
                @include('client.employee.title')
            <!--/ TITLE -->               
            <!-- BREADCRUMB -->
              @include('client.employee.breadcrumb')
            <!-- END OF BREADCRUMB -->

            {{Former::open(url('client/employee'))->method('post')}}
            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-10">
                         {{Session::get('msg_flash')}}   
                        <div class="nest" id="basicClose">
                            <div class="title-alt">
                                <!-- <h6>Basic</h6> -->
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
                                          {{Former::text('address')}}      
                                        </div>
                                   
                                        <div class="form-group">
                                            {{Former::text('phone_number')->required()}}        
                                        </div>
                                   
                                       <!--  <div class="form-group">
                                            <label class="control-label">Avatar</label>                                        
                                               {{Form::file('avatar',array('placeholder'=>'Enter avatar','value'=>Input::old('avatar')))}}                                            
                                               <span class="alert-danger">{{$errors->first('avatar')}}</span>                                                 
                                        </div> -->
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
            