@extends('client.layouts.default')
@section('content')
{{Session::get('msg_flash')}}
<div class="row">
<div class="col-sm-8">
    <div class="panel panel-success">

            <div class="panel-heading">    
                Info working at <b>{{$view->profile->company_name}}</b>
            </div>
            <div class="panel-body">                  
                  {{Form::open(array('url'=>'client/update-profile','method'=>'post','enctype'=>'multipart/form-data'))}}
                <div class='form-group'>
                    <label>Email: {{$view->email}}</label>
                </div>
                  
                <div class='form-group'>
                  <label>Permission: {{$view->groupUser->name}}</label>
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
                @if(Auth::user()->group_users == User::CUSTOMER)
                <div class='form-group'>
                    <label>Company</label>
                      {{Form::text('company_name',$view->profile->company_name,array('class'=>'form-control'))}}
                        <span class="alert-danger">{{$errors->first('company_name')}}</span>
                </div>
                <div class='form-group'>
                    <label>Website</label>
                      {{Form::text('website',$view->profile->website,array('class'=>'form-control'))}}
                      <span class="alert-danger">{{$errors->first('website')}}</span>
                </div>
                @endif
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
        <div class="panel panel-success">
            
            <div class="panel-heading">    
              Change password
            </div>
            <div class="panel-body">     
                 {{Form::open(array('url'=>'update-password/','method'=>'post'))}}
                <div class="form-group">
                        <label>Password</label>
                        {{Form::password('password',array('class'=>'form-control','required'))}}
                         <span class="alert-danger">{{$errors->first('password')}}</span>
                </div>  
                  <div class="form-group">
                        <label>Password confirm</label>
                        {{Form::password('password_confirmation',array('class'=>'form-control','required'))}}
                         <span class="alert-danger">{{$errors->first('password_confirmation')}}</span>
                </div> 
               
                {{Form::submit('Change',array('class'=>'btn btn-primary'))}}
                {{Form::close()}}
            </div>    
        </div>
             
    </div>    

</div>    
@stop