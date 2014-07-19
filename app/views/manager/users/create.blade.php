@section('content')
<!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-mail"></i> 
                            <span>Mail
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
                                    <a href="#" onclick="getAdd();">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>
                                <li>
                                    <a href="#" >
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
                <li><a href="{{Request::root()}}" title="Home">Home</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/users" title="">Users</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                <li><a href="#" title="">Create</a>
                </li>
                <li class="pull-right">
                    
                </li>
            </ul>
            
<div class="row">
    <!--col-4-->
    <div class="col-lg-6">    
        <div class="panel panel-success">
            <div class="panel-heading"><h3 class='panel-title'>Create user</h3></div>
            <div class="panel-body">               
                {{Session::get('msg_flash')}}   
            {{ Form::open(array('url' => 'users/create','method'=>'post','role'=>'form','id'=>'frm-add')) }}
                <div class="form-group">
                    {{Form::label('Username')}}
                    {{Form::text('username',Input::old('username'),array('class'=>'form-control'))}}
                      <span class="alert-danger">{{$errors->first('username')}}</span>
                </div>
                <div class="form-group">
                    {{Form::label('Password')}}                    
                    {{ Form::input('password', 'password',null,array('class'=>'form-control')) }}
                    <span class="alert-danger">{{$errors->first('password')}}</span>
                </div>
            
                <div class="form-group">
                    {{Form::label('Password confirm')}}                    
                    {{ Form::input('password', 'password_confirmation',null,array('class'=>'form-control')) }}
                </div>
            
                <div class="form-group">
                    {{Form::label('Email')}}
                    {{Form::text('email',Input::old('email'),array('class'=>'form-control'))}}
                    <span class="alert-danger">{{$errors->first('email')}}</span>
                </div>
                
                <div class="form-group">
                    {{Form::label('Group users')}}
                    {{ Form::select('group_users', $group_users , Input::old('group_users'),array('class'=>'form-control'))}}                 
                </div>
            
                <div class="form-group">
                      {{Form::label('First name')}}
                      {{Form::text('first_name',Input::old('first_name'),array('class'=>'form-control'))}}
                      <span class="alert-danger">{{$errors->first('first_name')}}</span>
                  </div>
            
                <div class="form-group">
                    {{Form::label('Active')}}
                    {{ Form::select('activated',array('1'=>'True','0'=>'False') , Input::old('activated'),array('class'=>'form-control'))}}                  
                </div>
                        
                <div class="form-group">                      
                    {{Form::submit('Create',array('class'=>'btn btn-primary','onclick'=>'postAdd()'))}}                    
                </div>
            {{ Form::close() }}
            </div>        
        </div>
        
    </div>
    <!--end col-4-->
</div>
@stop