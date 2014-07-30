@extends('manager.layouts.default')
@section('content')
      <!-- CONTENT -->
            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-document-edit"></i> 
                            <span>Profile
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
                                    <a href="{{Request::root()}}">
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
                <li><a href="{{Request::root()}}/manager" title="Sample page 1">Manager</a>
                </li>              
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="#" title="Sample page 1">View profile</a>
                </li>
                <li class="pull-right">
                    <div class="input-group input-widget">

                        <input style="border-radius:15px" type="text" placeholder="Search..." class="form-control">
                    </div>
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->
{{Session::get('msg_flash')}}
<div class="row">
<div class="col-sm-8">
    <div class="panel panel-default">

            <div class="panel-heading">    
                Info
            </div>
            <div class="panel-body">                  
                  {{Form::open(array('url'=>'manager/update-profile','method'=>'post','enctype'=>'multipart/form-data'))}}
                <div class='form-group'>
                    <label>Email: {{$view->email}}</label>
                </div>
                  
                <div class='form-group'>
             
                </div>  
                
                <div class='form-group'>
                    <label>Create at: {{$view->created_at}}</label>
                </div>
                
                <div class='form-group'>
                    <label>Update at: {{$view->updated_at}}</label>
                </div>
                 <div class='form-group'>
                    <label>First name</label>
                    {{Form::text('first_name',$view->first_name,array('class'=>'form-control','required'))}}
                    <span class="alert-danger">{{$errors->first('first_name')}}</span>
                </div>
                    <div class='form-group'>
                    <label>Last name</label>
                    {{Form::text('last_name',$view->last_name,array('class'=>'form-control','required'))}}
                    <span class="alert-danger">{{$errors->first('last_name')}}</span>
                </div>
                <div class='form-group'>
                    <label>Address</label>
                    {{Form::text('address',$view->profile->address,array('class'=>'form-control'))}}
                    <span class="alert-danger">{{$errors->first('address')}}</span>
                </div>
                <div class='form-group'>
                    <label>Phone number</label>
                     {{Form::text('phone_number',$view->profile->phone_number,array('class'=>'form-control'))}}
                     <span class="alert-danger">{{$errors->first('phone_number')}}</span>
                </div>
                
                <div class='form-group'>
                    <label>Company</label>
                      {{Form::text('company_name',$view->profile->company_name,array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('company_name')}}</span>
                </div>
                
                  <div class="form-group">
                      <label>Avatar</label>
                      <div class="text-left">
                                                <img width="200" src="{{Request::root().'/'.$view->avatar}}" class="avatar img-circle" alt="avatar">
                                                <h6>Upload a different photo...</h6>
                                                <div class="input-group">
                                                  <span class="input-group-btn">
                                                        <span class="btn btn-primary btn-file">
                                                            Browse
                                                            <input type="file" name="avatar">
                                                        </span>
                                                    </span>                         
                                                   <span class="alert-danger">{{$errors->first('avatar')}}</span>
                                                </div>
                         </div>
                  </div>  
                
                   {{Form::submit('Update',array('class'=>'btn btn-success'))}}
                    {{Form::close()}}
            </div>
    </div>
</div>
<div class="col-sm-4"> 
        <div class="panel panel-defautl">
            
            <div class="panel-heading">    
              Change password
            </div>
            <div class="panel-body">     
                 {{Form::open(array('url'=>'manager/update-password/','method'=>'post'))}}
                <div class="form-group">
                        <label>Password</label>
                        {{Form::password('password',array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('password')}}</span>
                </div>  
                  <div class="form-group">
                        <label>Password confirm</label>
                        {{Form::password('password_confirmation',array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('password_confimation')}}</span>
                </div> 
               
                {{Form::submit('Change',array('class'=>'btn btn-primary'))}}
                {{Form::close()}}
            </div>    
        </div>
             
    </div>    

</div>    
@stop