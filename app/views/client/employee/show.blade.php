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
                                            <span class="entypo-user"></span>&nbsp;&nbsp;{{trans('title.form.view_profile')}}</li>
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
                                        <dt>ID</dt>
                                        <dd>{{$profile->id}}</dd>

                                        <dt>{{trans('title.table.first_name')}}</dt>
                                        <dd>{{$profile->first_name}}</dd>

                                        <dt>{{trans('title.table.last_name')}}</dt>
                                        <dd>{{$profile->last_name}}</dd>
                                        
                                        <dt>{{trans('title.table.email')}}</dt>
                                        <dd>{{$profile->email}}</dd>

                                        <dt>{{trans('title.table.phone_number')}}</dt>
                                        <dd>{{$profile->phone_number}}</dd>    
                                       <dt>{{trans('title.table.last_login')}}</dt>
                                        <dd>{{$profile->last_login}}</dd>                                                                              

                                    </dl>
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
                              
                            </div>
                        </div>
                    </div>




                    <div class="row">


                        <div class="col-sm-12">
                            <!-- BLANK PAGE-->

                            <div id="Blank_PageClose" class="nest" style="margin:-20px 15px;">
                                <div class="title-alt">
                                    <h6>
                                      {{trans('title.form.edit_profile')}}</h6>
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
                                           {{Former::open(url('client/employee/'.$profile->id))->method('PUT')->enctype('multipart/form-data')}}                                             
                                        <!-- left column -->
                                        <div class="col-md-3">
                                            <div class="text-center">
                                                @if($profile->avatar)    
                                                <img alt="avatar" class="avatar img-circle" src="{{asset($profile->avatar)}}" width="200">                                              
                                                @endif
                                                <div class="input-group">                                                  
                                                            {{Former::file('avatar')}}       
                                                </div>

                                            </div>
                                        </div>

                                        <!-- edit form column -->
                                        <div class="col-md-9 personal-info">                                          
                                                {{Session::get('msg_flash')}}                                           
                                                <?php Former::populate($profile);?>  
                                                <div class="form-group">                                                  
                                                    <div class="col-lg-8">    
                                                         {{Former::text('first_name')}}                                                         
                                                    </div>
                                                </div>
                                                <div class="form-group">                                                   
                                                    <div class="col-lg-8">
                                                      {{Former::text('last_name')}}                                                         
                                                    </div>
                                                </div>
                                                                                           
                                                <div class="form-group">                                                   
                                                    <div class="col-lg-8">
                                                      {{Former::text('phone_number')->value($profile->profile->phone_number)}}
                                                    </div>
                                                </div>
                                                 <div class="form-group">                                                   
                                                    <div class="col-lg-8">
                                                      {{Former::text('address')->value($profile->profile->address)}}
                                                    </div>
                                                </div>
                                               
                                                <div class="form-group">                                                 
                                                    <div class="col-md-8">
                                                         {{Former::password('password')}}                                                     
                                                    </div>
                                                </div>
                                                <div class="form-group">                                                
                                                    <div class="col-md-8">
                                                          {{Former::password('password_confirmation')}}                                                          
                                                    </div>
                                                </div>
                                                <div class="form-group">                                                 
                                                    <div class="col-md-8">
                                                    {{ Former::select('activated')->options(array('1'=>'True','0'=>'False'),$profile->activated)}}                  
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label"></label>
                                                    <div class="col-md-8">
                                                        {{Former::actions()->larger_primary_submit('update')}}                                                      
                                                    </div>
                                                </div>
                                                  <div id="output"></div>
                                          
                                        </div>
                                    </div>
                                    {{Former::close()}}
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