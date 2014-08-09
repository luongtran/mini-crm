<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>{{trans('title.form.register')}} - CRM</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Le styles -->
    <script type="text/javascript" href="{{asset('asset/backend/assets/js/jquery.min.js')}}""></script>
   <!--  <link rel="stylesheet" href="{{asset('asset/backend/assets/css/style.css')}}"> -->
    <link rel="stylesheet" href="{{asset('asset/backend/assets/css/loader-style.css')}}">
    <link rel="stylesheet" href="{{asset('asset/backend/assets/css/bootstrap.css')}}">
    <link rel="stylesheet" href="{{asset('asset/backend/assets/css/signin.css')}}">
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js')}}"></script>
        <![endif]-->
    <!-- Fav and touch icons -->
    <link rel="shortcut icon" href="{{asset('asset/backend/assets/ico/minus.png')}}">
</head>

<body>
    <!-- Preloader -->
    <div id="preloader">
        <div id="status">&nbsp;</div>
    </div>
    <div class="container">



        <div class="" id="login-wrapper">
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
                            
                            <button type="submit" class="btn btn-primary btn-block">Create New Account</button>                               
                         
                                
                            
                        </form>
                        
                                                
                      
                       
                </div>
            </div>
        </div>





        <div style="text-align:center;margin:0 auto;">
            <h6 style="color:#fff;">Release Candidate 1.0 Powered by © Themesmiles 2014</h6>
        </div>

    </div>
    <div id="test1" class="gmap3"></div>



    <!--  END OF PAPER WRAP -->




    <!-- MAIN EFFECT -->
    <script type="text/javascript" href="{{asset('asset/backend/assets/js/preloader.js')}}"></script>
    <script type="text/javascript" href="{{asset('asset/backend/assets/js/bootstrap.js')}}"></script>
    <script type="text/javascript" href="{{asset('asset/backend/assets/js/app.js')}}"></script>
    <script type="text/javascript" href="{{asset('asset/backend/assets/js/load.js')}}"></script>
    <script type="text/javascript" href="{{asset('asset/backend/assets/js/main.js')}}"></script>

    <script src="http://maps.googleapis.com/maps/api/js?sensor=false" type="text/javascript"></script>
    <script type="text/javascript" href="{{asset('asset/backend/assets/js/map/gmap3.js')}}"></script>
    <script type="text/javascript">
    $(function() {

        $("#test1").gmap3({
            marker: {
                latLng: [-7.782893, 110.402645],
                options: {
                    draggable: true
                },
                events: {
                    dragend: function(marker) {
                        $(this).gmap3({
                            getaddress: {
                                latLng: marker.getPosition(),
                                callback: function(results) {
                                    var map = $(this).gmap3("get"),
                                        infowindow = $(this).gmap3({
                                            get: "infowindow"
                                        }),
                                        content = results && results[1] ? results && results[1].formatted_address : "no address";
                                    if (infowindow) {
                                        infowindow.open(map, marker);
                                        infowindow.setContent(content);
                                    } else {
                                        $(this).gmap3({
                                            infowindow: {
                                                anchor: marker,
                                                options: {
                                                    content: content
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            },
            map: {
                options: {
                    zoom: 15
                }
            }
        });

    });
    </script>




</body>

</html>
