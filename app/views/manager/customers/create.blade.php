@section('content')

            <!-- CONTENT -->
            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-document-edit"></i> 
                            <span>Customer
                            </span>
                        </h2>

                    </div>

                    <div class="col-sm-7">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="tittle-middle-header">

                            <div class="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <span class="tittle-alert entypo-info-circled"></span>
                                Welcome back,&nbsp;
                                <strong>Dave mattew!</strong>&nbsp;&nbsp;Your last sig in at Yesterday, 16:54 PM
                            </div>


                        </div>

                    </div>
                    <div class="col-sm-2">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="btn-group btn-wigdet pull-right visible-lg">
                            <div class="btn">
                                Widget</div>
                            <button data-toggle="dropdown" class="btn dropdown-toggle" type="button">
                                <span class="caret"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <ul role="menu" class="dropdown-menu">
                                <li>
                                    <a href="#">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="entypo-heart margin-iconic"></span>Favorite</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="entypo-cog margin-iconic"></span>Setting</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            <!--/ TITLE -->

            <!-- BREADCRUMB -->
            {{$breadcumb}}
            <!-- END OF BREADCRUMB -->

            {{Form::open(array('method'=>'post','url'=>'manager/customers','enctype'=>'multipart/form-data'))}}
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
                            {{Form::label('Email')}} <span class='val-star'>(*)</span>
                    {{Form::text('email',Input::old('email'),array('class'=>'form-control','required'))}}
                        <span class="alert-danger">{{$errors->first('email')}}</span>
                    </div>

                    <div class="form-group">
                        {{Form::label('Password')}} <span class='val-star'>(*)</span>                   
                        {{ Form::input('password', 'password',null,array('class'=>'form-control','required')) }}
                        <span class="alert-danger">{{$errors->first('password')}}</span>
                    </div>

                    <div class="form-group">
                        {{Form::label('Password confirm')}} <span class='val-star'>(*)</span>                   
                        {{ Form::input('password', 'password_confirmation',null,array('class'=>'form-control','required')) }}
                        <span class="alert-danger">{{$errors->first('password_confirmation')}}</span>
                    </div>

                    <div class="form-group">
                          {{Form::label('First name')}}<span class='val-star'>(*)</span>
                          {{Form::text('first_name',Input::old('first_name'),array('class'=>'form-control','required'))}}
                          <span class="alert-danger">{{$errors->first('first_name')}}</span>
                    </div>
                    <div class="form-group">
                          {{Form::label('Last name')}}<span class='val-star'>(*)</span>
                          {{Form::text('last_name',Input::old('last_name'),array('class'=>'form-control','required'))}}
                          <span class="alert-danger">{{$errors->first('last_name')}}</span>
                    </div>
                                                                                  
                        <div class="form-group">                                            
                                            <label for="">Active</label>  
                                            {{ Form::select('activated',array('1'=>'True','0'=>'False') , Input::old('activated'),array('class'=>'form-control'))}}                                                                                                                                                   
                        </div>
                         
                                </div>


                            </div>

                        </div>
                        <!-- end col 12-->
                        
                        <div class="col-sm-10">
                        <div class="nest" id="profileClose">
                            <div class="title-alt">
                                <h6>PROFILE</h6>
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
                                            <label class="">Company name <span class='val-star'>(*)</span></label>                                         
                                                {{Form::text('company_name',Input::old('company_name'),array('placeholder'=>'Enter company name','class'=>'form-control','required'))}}                                            
                                                <span class="alert-danger">{{$errors->first('company_name')}}</span>  
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Address </label>                                          
                                                {{Form::text('address',Input::old('address'),array('placeholder'=>'Enter address','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('address')}}</span>  
                                        </div>
                                        <div class="form-group">
                                            <label class=""> Website </label>                                        
                                                {{Form::text('website',Input::old('website'),array('placeholder'=>'Enter website','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('website')}}</span>     
                                
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Telephone number <span class='val-star'>(*)</span></label>                                          
                                               {{Form::text('phone_number',Input::old('phone_number'),array('placeholder'=>'Enter telephone number','class'=>'form-control','required'))}}                                            
                                                <span class="alert-danger">{{$errors->first('phone_number')}}</span>  
                                        </div>
                                        <div class="form-group">                                            
                                            <label for="">Sector</label>  
                                            {{ Form::select('sector_id',$sector,Input::old('sector_id'),array('class'=>'form-control'))}} 
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="control-label">Number of employee <span class='val-star'>(*)</span></label>                                       
                                             {{Form::input('number','employee_count',Input::old('employee_count'),array('placeholder'=>'Enter Number of employee','class'=>'form-control','min'=>'1','max'=>'10000','required'))}}                                            
                                                <span class="alert-danger">{{$errors->first('employee_count')}}</span>     
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Contact employee at company <span class='val-star'>(*)</span></label>                                        
                                               {{Form::text('contact_employee_company',Input::old('contact_employee_company'),array('placeholder'=>'Enter contact employee at company','class'=>'form-control','required'))}}                                            
                                                <span class="alert-danger">{{$errors->first('contact_employee_company')}}</span>                                                 
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label">Avatar</label>                                        
                                               {{Form::file('avatar',array('placeholder'=>'Enter avatar','value'=>Input::old('avatar')))}}                                            
                                               <span class="alert-danger">{{$errors->first('avatar')}}</span>                                                 
                                        </div>
                                        <div class="form-group">                                            
                                            <button class="btn btn-info" type="submit">Create</button> 
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
            