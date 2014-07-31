@section('content')

            <!-- CONTENT -->
            <!--TITLE -->
                @include('client.employee.title')
            <!--/ TITLE -->

            <!-- BREADCRUMB -->
            <ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="#" title="Sample page 1">Home</a>
                </li>             
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="#" title="Sample page 1">Employee</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="#" title="Sample page 1">Create</a>
                </li>
                <li class="pull-right">                   
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->

            {{Form::open(array('method'=>'post','url'=>'client/employee'))}}
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
                                            <label for="">Email address <span class='val-star'>(*)</span></label>
                                            {{Form::text('email',Input::old('email'),array('placeholder'=>'Enter email','class'=>'form-control'))}}                                            
                                            <span class="alert-danger">{{$errors->first('email')}}</span>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Password <span class='val-star'>(*)</span></label>
                                             {{Form::password('password',array('placeholder'=>'Enter password','class'=>'form-control'))}}
                                             <span class="alert-danger">{{$errors->first('password')}}</span>
                                            </div>
                                        <div class="form-group">
                                            <label for="">Password confirm <span class='val-star'>(*)</span></label>
                                             {{Form::password('password_confirmation',array('placeholder'=>'Enter password confirm','class'=>'form-control'))}}  
                                             <span class="alert-danger">{{$errors->first('password_confirmation')}}</span>
                                        </div>
                                      
                                        <div class="form-group">
                                            <label for="">First name <span class='val-star'>(*)</span></label>
                                            {{Form::text('first_name',Input::old('first_name'),array('placeholder'=>'Enter first name','class'=>'form-control'))}}                                            
                                            <span class="alert-danger">{{$errors->first('first_name')}}</span>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Last name <span class='val-star'>(*)</span></label>
                                            {{Form::text('last_name',Input::old('last_name'),array('placeholder'=>'Enter last name','class'=>'form-control'))}}                                                                                        
                                            <span class="alert-danger">{{$errors->first('last_name')}}</span>
                                        </div>
                                                                                  
                                        <div class="form-group">                                            
                                            <label for="">Active</label>  
                                            {{ Form::select('activated',array('0'=>'False','1'=>'True') , Input::old('activated'),array('class'=>'form-control'))}}                                                                                                                                                   
                                        </div>
                                        
                                        
                                    </form>
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
                                            <label class="control-label">Adress </label>                                          
                                                {{Form::text('address',Input::old('address'),array('placeholder'=>'Enter address','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('address')}}</span>  
                                        </div>
                                   
                                        <div class="form-group">
                                            <label class="control-label">Telephone number</label>                                          
                                               {{Form::text('phone_number',Input::old('phone_number'),array('placeholder'=>'Enter telephone number','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('phone_number')}}</span>  
                                        </div>
                                   
                                       <!--  <div class="form-group">
                                            <label class="control-label">Avatar</label>                                        
                                               {{Form::file('avatar',array('placeholder'=>'Enter avatar','value'=>Input::old('avatar')))}}                                            
                                               <span class="alert-danger">{{$errors->first('avatar')}}</span>                                                 
                                        </div> -->
                                        <div class="form-group">                                            
                                            <button class="btn btn-info" type="submit">Submit</button> 
                                            <button class="btn btn-default" type="reset">Rest</button>       
                                        </div> 
                                    
                                    </div>
                                </div> <!-- end body-->
                            
                            </div>
                            </div>  <!-- end col 12-->
                
            
            </div>
            </div><!--end row -->    

                                
                            
            
            {{Form::close()}}
@stop
            