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
            <ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/manager" title="Sample page 1">Manager</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/manager/customer" title="Sample page 1">Customer</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="#" title="Sample page 1">Edit</a>
                </li>
                <li class="pull-right">
                    <div class="input-group input-widget">

                        <input style="border-radius:15px" type="text" placeholder="Search..." class="form-control">
                    </div>
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->
            
            {{Form::open(array('method'=>'post','url'=>'manager/customer-edit/'.$customer->id))}}
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
                                            <label for="">Email address</span></label>
                                            {{Form::text('email',$customer->email,array('placeholder'=>'Enter email','class'=>'form-control','disabled'))}}                                            
                                            <span class="alert-danger">{{$errors->first('email')}}</span>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Password </label>
                                             {{Form::password('password',array('placeholder'=>'Enter password','class'=>'form-control'))}}
                                             <span class="alert-danger">{{$errors->first('password')}}</span>
                                            </div>
                                        <div class="form-group">
                                            <label for="">Password confirm</label>
                                             {{Form::password('password_confirmation',array('placeholder'=>'Enter password confirm','class'=>'form-control'))}}  
                                             <span class="alert-danger">{{$errors->first('password_confirmation')}}</span>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="">First name <span class='val-star'>(*)</span></label>
                                            {{Form::text('first_name',Input::old('first_name'),array('placeholder'=>'Enter first name','class'=>'form-control'))}}                                            
                                            <span class="alert-danger">{{$errors->first('first_name')}}</span>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Last name</label>
                                            {{Form::text('last_name',Input::old('last_name'),array('placeholder'=>'Enter last name','class'=>'form-control'))}}                                                                                        
                                        </div>
                                        <div class="form-group">                                            
                                            <label for="">Active</label>  
                                            {{ Form::select('activated',array('1'=>'True','0'=>'False') ,$customer->activated,array('class'=>'form-control'))}}                                                                                                           
                                            </div>
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
                                            <label class="">Company name </label>                                         
                                                {{Form::text('company_name',$customer->company_name,array('placeholder'=>'Enter company name','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('company_name')}}</span>  
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Adress </label>                                          
                                                {{Form::text('address',$customer->address,array('placeholder'=>'Enter address','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('address')}}</span>  
                                        </div>
                                        <div class="form-group">
                                            <label class="">Website</label>                                        
                                                {{Form::text('website',$customer->website,array('placeholder'=>'Enter website','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('website')}}</span>     
                                
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Telephone number</label>                                          
                                               {{Form::text('phone_number',$customer->phone_number,array('placeholder'=>'Enter telephone number','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('phone_number')}}</span>  
                                        </div>
                                        <div class="form-group">                                            
                                            <label for="">Sector</label>  
                                            {{ Form::select('sector_id',$sector,$customer->sector_id,array('class'=>'form-control'))}} 
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="control-label">Number of employee</label>                                       
                                             {{Form::text('employee_count',$customer->employee_count,array('placeholder'=>'Enter Number of employee','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('employee_count')}}</span>     
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Contact employee at company</label>                                        
                                               {{Form::text('contact_employee_company',$customer->contact_employee_company,array('placeholder'=>'Enter contact employee at company','class'=>'form-control'))}}                                            
                                                <span class="alert-danger">{{$errors->first('contact_employee_company')}}</span>                                                 
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label">Avatar</label>                                        
                                               {{Form::file('avatar',array('placeholder'=>'Enter avatar','value'=>Input::old('avatar')))}}                                            
                                               <span class="alert-danger">{{$errors->first('avatar')}}</span>                                                 
                                        </div>
                                        <div class="form-group">                                            
                                            <button class="btn btn-info" type="submit">Update</button>                                             
                                        </div> 
                                    
                                    </div>
                                </div> <!-- end body-->
                            
                            </div>
                            </div>  <!-- end col 12-->
                
            
            </div>
            </div><!--end row -->    

                                
                            
            
            {{Form::close()}}
@stop
            