<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Forget - CRM</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Le styles -->
    <script type="text/javascript" href="{{asset('asset/backend/assets/js/jquery.min.js')}}"></script>  
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
                        <h3> New password</h3>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="account-box">
						{{Session::get('msg_flash')}}
                        {{Former::open(url('crm-reset-password'))->method('post')}}
                            <div class="form-group">                                     
                               {{ Former::password('password')->required()}}
                            </div>
                            <div class="form-group">                  
                                {{ Former::password('password_confirmation')->required()}}
                            </div>
                            <div><input type="hidden" value="{{$email}}" name="email">
                                 <input type="hidden" value="{{$token}}" name="token">
                            </div>    
                            <div class="form-group">                                            
                                  {{Former::actions()->large_primary_submit('Create')}}          
                            </div> 
                          
                        </form>    
                    </div>
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
 </body>

</html>
