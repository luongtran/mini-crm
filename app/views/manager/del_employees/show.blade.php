@section('content')
<div id="profile">
<div class="content-wrap">
                <!-- PROFILE -->
                <div class="row">
                    <div class="col-sm-12">
                        <div class="well profile">
                            <div class="col-sm-12">
                                <div class="col-xs-12 col-sm-4 text-center">

                                    <ul class="list-group">
                                        <li class="list-group-item text-left">
                                            <span class="entypo-user"></span>&nbsp;&nbsp;Profile</li>
                                        <li class="list-group-item text-center">
                                            <img class="img-circle img-responsive img-profile" alt="" src="">

                                        </li>
                                        <li class="list-group-item text-center">
                                            <span class="pull-left">
                                                <strong>Ratings</strong>
                                            </span>


                                            <div class="ratings">

                                                <a href="#">
                                                    <span class="fa fa-star"></span>
                                                </a>
                                                <a href="#">
                                                    <span class="fa fa-star"></span>
                                                </a>
                                                <a href="#">
                                                    <span class="fa fa-star"></span>
                                                </a>
                                                <a href="#">
                                                    <span class="fa fa-star"></span>
                                                </a>
                                                <a href="#">
                                                    <span class="fa fa-star-o"></span>
                                                </a>

                                            </div>


                                        </li>

                                        <li class="list-group-item text-right">
                                            <span class="pull-left">
                                                <strong>Joined</strong>
                                            </span>{{$profile->created_at}}</li>

                                    </ul>

                                </div>
                                <div class="col-xs-12 col-sm-8 profile-name">
                                    <h2>{{$profile->first_name}} {{$profile->last_name}}
                                        <span class="pull-right social-profile">
                                            <i class="entypo-facebook-circled"></i>  <i class="entypo-twitter-circled"></i>  <i class="entypo-linkedin-circled"></i>  <i class="entypo-github-circled"></i>  <i class="entypo-gplus-circled"></i>
                                        </span>
                                    </h2>
                                    <hr>

                                    <dl class="dl-horizontal-profile">
                                        <dt>User Id</dt>
                                        <dd>{{$profile->id}}</dd>

                                        <dt>FirstName</dt>
                                        <dd>{{$profile->first_name}}</dd>

                                        <dt>LastName</dt>
                                        <dd>{{$profile->last_name}}</dd>
                                        
                                        <dt>Email</dt>
                                        <dd>{{$profile->email}}</dd>

                                        <dt>Phone</dt>
                                        <dd>{{$profile->phone_number}}</dd>
                                                                                
                                        <dt>Last Update</dt>
                                        <dd>{{$profile->updated_at}}</dd>                                     

                                    </dl>


                                    <hr>

                                    <h5>
                                        <span class="entypo-arrows-ccw"></span>&nbsp;&nbsp;Recent Activities</h5>

                                    <div class="table-responsive">
                                       <!--  <table class="table table-hover table-striped table-condensed">

                                            <tbody>
                                                <tr>
                                                    <td><i class="pull-right fa fa-edit"></i> Today, 1:00 - Jeff Manzi liked your post.</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="pull-right fa fa-edit"></i> Today, 12:23 - Mark Friendo liked and shared your post.</td>
                                                </tr>                                           
                                            </tbody>
                                        </table> -->
                                    </div>

                                </div>

                            </div>
                            <div class="col-xs-12 divider text-center">
                                <div class="col-xs-12 col-sm-4 emphasis">
                                    <h2>
                                        <strong>20,7K</strong>
                                    </h2>
                                    <p>
                                        <small>Followers</small>
                                    </p>
                                    <button class="btn btn-success btn-block">
                                        <span class="fa fa-plus-circle"></span>&nbsp;&nbsp;Follow</button>
                                </div>
                                <div class="col-xs-12 col-sm-4 emphasis">
                                    <h2>
                                        <strong>245</strong>
                                    </h2>
                                    <p>
                                        <small>Following</small>
                                    </p>
                                    <button class="btn btn-info btn-block">
                                        <span class="fa fa-user"></span>&nbsp;&nbsp;View Profile</button>
                                </div>
                                <div class="col-sm-4 emphasis">
                                    <h2>
                                        <strong>43</strong>
                                    </h2>
                                    <p>
                                        <small>Likes</small>
                                    </p>
                                    <button class="btn btn-default btn-block">
                                        <span class="fa fa-user"></span>&nbsp;&nbsp;Likes</button>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="row">


                        <div class="col-sm-12">
                            <!-- BLANK PAGE-->

                            <div id="Blank_PageClose" class="nest" style="margin:-20px 15px;">
                                <div class="title-alt">
                                    <h6>
                                        Edit Profile</h6>
                                    <div class="titleClose">
                                        <a href="#Blank_PageClose" class="gone">
                                            <span class="entypo-cancel"></span>
                                        </a>
                                    </div>
                                    <div class="titleToggle">
                                        <a href="#Blank_Page_Content" class="nav-toggle-alt">
                                            <span class="entypo-up-open"></span>
                                        </a>
                                    </div>

                                </div>

                                <div id="Blank_Page_Content" class="body-nest">




                                    <div class="row">
                                        <!--begin form -->
                                           {{Form::open(array('url'=>'manager/customer-edit/'.$profile->id, 'method' => 'post','role'=>'form','class'=>'form-horizontal','id'=>'frm-profile','enctype'=>'multipart/form-data','name'=>'frm-profile'))}}                                             
                                        <!-- left column -->
                                        <div class="col-md-3">
                                            <div class="text-center">

                                                <img alt="avatar" class="avatar img-circle" src="" width="200">
                                                <h6>Upload a different photo...</h6>

                                                <div class="input-group">
                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary btn-file">
                                                            Browse
                                                            <input type="file" multiple="" name="avatar">
                                                        </span>
                                                    </span>                                                 
                                                </div>

                                            </div>
                                        </div>

                                        <!-- edit form column -->
                                        <div class="col-md-9 personal-info">
                                          
                                                {{Session::get('msg_flash')}}
                                           
                                            <h3>Personal info</h3>
                                         
                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">First name:</label>
                                                    <div class="col-lg-8">
                                                         {{Form::hidden('id',null)}}     
                                                         {{Form::text('first_name',$profile->first_name,array('class' => 'form-control'))}}                                                              
                                                         <span class="alert-danger">{{$errors->first('first_name')}}</span>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">Last name:</label>
                                                    <div class="col-lg-8">
                                                      {{Form::text('last_name',$profile->last_name,array('class' => 'form-control'))}}                                                               
                                                         <span class="alert-danger">{{$errors->first('last_name')}}</span>
                                                    </div>
                                                </div>
                                             
                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">Email:</label>
                                                    <div class="col-lg-8">
                                                      {{Form::text('email',$profile->email,array('class' => 'form-control'))}}                                                               
                                                         <span class="alert-danger">{{$errors->first('email')}}</span>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">Phone number:</label>
                                                    <div class="col-lg-8">
                                                      {{Form::text('phone_number',$profile->phone_number,array('class' => 'form-control'))}}                                                               
                                                         <span class="alert-danger">{{$errors->first('phone_number')}}</span>
                                                    </div>
                                                </div>
                                                 <div class="form-group">
                                                    <label class="col-lg-3 control-label">Address:</label>
                                                    <div class="col-lg-8">
                                                      {{Form::text('address',$profile->address,array('class' => 'form-control'))}}                                                               
                                                         <span class="alert-danger">{{$errors->first('address')}}</span>
                                                    </div>
                                                </div>
                                               
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Password:</label>
                                                    <div class="col-md-8">
                                                         {{Form::password('password',array('class' => 'form-control'))}}     
                                                         <span class="alert-danger">{{$errors->first('password')}}</span>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Confirm password:</label>
                                                    <div class="col-md-8">
                                                          {{Form::password('password_confirmation',array('class' => 'form-control'))}}    
                                                          <span class="alert-danger">{{$errors->first('password_confirmation')}}</span>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Activated:</label>
                                                    <div class="col-md-8">
                                                    {{ Form::select('activated',array('1'=>'True','0'=>'False') ,$profile->activated,array('class'=>'form-control'))}}                  
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label"></label>
                                                    <div class="col-md-8">
                                                        <input type="submit" value="Save Changes" class="btn btn-primary">
                                                        <span></span>
                                                        <input type="reset" value="Cancel" class="btn btn-default">
                                                    </div>
                                                </div>
                                                  <div id="output"></div>
                                          
                                        </div>
                                    </div>
                                    {{Form::close()}}
                                        <!--end form -->
                                </div>
                            </div>
                        
                        </div>
                        <!-- END OF BLANK PAGE -->

                    </div>
                </div>
                <!-- END OF PROFILE -->

     </div> 


<!--end profile -->
</div>
@stop