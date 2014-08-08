<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>CRM @if(isset($page))  {{' | '.$page}} @endif </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Le styles -->
   
    <link type="text/css"  rel="stylesheet" href="{{asset('asset/backend/assets/css/style.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('asset/backend/assets/css/loader-style.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('asset/backend/assets/css/bootstrap.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('asset/backend/assets/js/button/ladda/ladda.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('asset/backend/assets/css/custom.css')}}">    
    <link rel="shortcut icon" href="{{asset('asset/backend/assets/ico/minus.png')}}">

    <script type="text/javascript" src="{{asset('asset/backend/assets/js/jquery-1.11.0.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('asset/backend/assets/js/jquery-migrate-1.2.1.min.js')}}"></script> 
    <script type="text/javascript" src="{{asset('asset/backend/plusin/ckeditor/ckeditor.js')}}"></script>
    <script type="text/javascript" src="{{asset('asset/backend/assets/js/custom.js')}}"></script>   
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    <!-- Fav and touch icons -->
	   <!-- script load fisrt -->
    <script>
        var spBaseUrl = "{{Request::root()}}";
    </script>
</head>
<body>
    <!-- Preloader -->
    <div id="preloader">
        <div id="status">&nbsp;</div>
    </div>
    <!-- TOP NAVBAR -->
    @include('manager.layouts.topNavbar')
    <!-- /END OF TOP NAVBAR -->

    <!-- SIDE MENU -->
    @include('manager.layouts.sideMenu')
    <!-- END OF SIDE MENU -->



    <!--  PAPER WRAP -->
    <div class="wrap-fluid">
        <div class="container-fluid paper-wrap bevel tlbr">

            <!-- CONTENT -->
            <!--TITLE -->
            @section('title')
            @show
            <!--/ TITLE -->

            <!-- BREADCRUMB -->
            @section('breadcrumb')
            
            @show
            <!-- END OF BREADCRUMB -->

            <div class="content-wrap">
                <div class='row'>
                    @yield('content')
                </div>
                <!-- /END OF CONTENT -->
             </div>

                <!-- FOOTER -->
                <div class="footer-space"></div>
                <div id="footer">
                    <div class="devider-footer-left"></div>
                    <div class="time">
                        <p id="spanDate"></p>
                        <p id="clock"></p>
                    </div>
                    <div class="copyright">SRF
                        <span class="entypo-heart"></span>2014 <a href=""></a> All Rights Reserved</div>
                    <div class="devider-footer"></div>

                </div>
                <!-- / END OF FOOTER -->

         </div>
          </div>
        <!--  END OF PAPER WRAP -->

        <!-- RIGHT SLIDER CONTENT -->
        @include('manager.layouts.rightSliderContent')
        <!-- END OF RIGHT SLIDER CONTENT-->              
        <!-- MAIN EFFECT -->        
        <script type="text/javascript" src="{{asset('asset/backend/assets/js/preloader.js')}}"></script>
        <script type="text/javascript" src="{{asset('asset/backend/assets/js/bootstrap.js')}}"></script>
        <script type="text/javascript" src="{{asset('asset/backend/assets/js/app.js')}}"></script>
        <script type="text/javascript" src="{{asset('asset/backend/assets/js/load.js')}}"></script>
        <script type="text/javascript" src="{{asset('asset/backend/assets/js/main.js')}}"></script>
        <script>
            
            /*Lock screen*/
            /*
            function lock_screen()
            {
                $.ajax({
                    url: "{{Request::root()}}/lock-screen",  
                    success: function (data){
                        if(data==1){
                           window.location.href ="{{Request::root()}}/lock-screen1";
                        }
                    }
                });
            }
            setInterval(lock_screen, 10000);
            */
        </script>
        
        
</body>
</html>
