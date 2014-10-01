@section('content')
<div class='logos'>

<section>
   			<div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div id="logo-login">
                        <h1>Register crm 
                            <span></span>
                        </h1>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="account-box">
			 {{Session::get('msg_flash')}}
                        <form role="form" action="{{Request::root()}}/register" method="POST" >                        
                            <div class="form-group">                                
                                <label for=""> Company name</label>
				 {{Form::text('company_name',Input::old('company_name'),array('placeholder'=>'Company name','class' => 'form-control','required','min'=>'3','title'=>'Please enter company name'))}}  
                                  <span class="alert-danger">{{$errors->first('company_name')}}</span>
                            </div>
                            <div class="form-group">                                
                                <label for="">Number of Employee</label>
				   {{Form::input('number','employee_count',Input::old('employee_count'),array('placeholder'=>'Enter Number of employee','class'=>'form-control','min'=>'1','max'=>'10000','required'))}}                                            
                                  <span class="alert-danger">{{$errors->first('employee_count')}}</span>  
                            </div>
                             <div class="form-group">                                
                                <label for="">Phone number</label>
				 {{Form::text('phone_number',Input::old('phone_number'),array('placeholder'=>'Enter phone number','class' => 'form-control','required'))}}  
                                  <span class="alert-danger">{{$errors->first('phone_number')}}</span>
                            </div>
                             
                            <div class="form-group">                               
                                <label for="">Full name</label>
                                 {{Form::text('contact_employee_company',Input::old('contact_employee_company'),array('class' => 'form-control','placeholder'=>'Enter name employee contact','required'))}}  
                                     <span class="alert-danger">{{$errors->first('contact_employee_company')}}</span>
                            </div>

                            <div class="form-group">                               
                                <label for="">{{trans('title.table.sector')}}</label>
                                 {{Form::select('sector_id',$sector,Input::old('sector_id'),array('class' => 'form-control','required'))}}  
                                     <span class="alert-danger">{{$errors->first('sector_id')}}</span>
                            </div>
                                                        
                            <div class="form-group">                               
                                <label for="">Email</label>
                                 {{Form::input('email','email',Input::old('email'),array('class' => 'form-control','placeholder'=>'Enter email','required'))}}  
                                     <span class="alert-danger">{{$errors->first('email')}}</span>
                            </div>
                            <div class="form-group">                                
                                <label for="">Password</label>
				 {{Form::password('password',array('class' => 'form-control','placeholder'=>'Enter password','required'))}}                                  
                                 <span class="alert-danger">{{$errors->first('password')}}</span>
                            </div>
                            
                            <div class="form-group">                                
                                <label for="">Confirm password</label>
				 {{Form::password('password_confirmation',array('class' => 'form-control','placeholder'=>'Enter confirm password','required'))}}                                  
                                 <span class="alert-danger">{{$errors->first('password_confirmation')}}</span>
                            </div>
                            
                            <div class="form-group">    
                            <button type="submit" class="btn btn-primary btn-block">Create New Account</button>                               
                            </div>
                                
                            
                        </form>
                        
                                                
                      
                       
                </div>
            </div>
             </div>

</div>
</section>
</div>
@stop


@section('javascript')
<script>
$(function(){
   $("input[name=company_name]").focus();
})
</script>
@stop