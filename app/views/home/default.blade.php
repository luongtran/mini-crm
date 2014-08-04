<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>CRM</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="shortcut icon" href="{{asset('asset/frontend/img/favicon.ico')}}">
        <link rel="stylesheet" href="{{asset('asset/frontend/css/bootstrap.css')}}">
        <link rel="stylesheet" href="{{asset('asset/frontend/css/flat-ui.css')}}">
        <!-- Using only with Flat-UI (free)-->
        <link rel="stylesheet" href="{{asset('asset/frontend/css/icon-font.css')}}">
        <!-- end -->
        <link rel="stylesheet" href="{{asset('asset/frontend/css/style.css')}}">
    </head>

    <body>
        <div class="page-wrapper">
            <!-- header-11 -->
            <header class="header-11">
                <div class="container">
                    <div class="row">
                        <div class="navbar col-sm-12" role="navigation">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle"></button>
                                <a class="brand" href="#"><img src="{{asset('asset/frontend/img/crm.png')}}" width="50" height="50" alt=""> Startup</a>
                            </div>
                            <div class="collapse navbar-collapse pull-right">
                                <ul class="nav pull-left">
                                    <li class="active"><a href="#">HOME</a></li>
                                    <li><a href="#">ABOUT</a></li>                                    
                                    <li><a href="#link_faq">FAQ</a></li>
                                    <li><a href="#">CONTACT</a></li>
                                </ul>
                                <form class="navbar-form pull-left">
                                    <a class="btn btn-primary" href="{{Request::root()}}/crm-login">SIGN IN</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            @yield('content')
            <!-- footer-2 -->
            <footer class="footer-2 bg-midnight-blue">
                <div class="container">
                    <nav class="pull-left">
                        <ul>
                            <li class="active">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Company</a>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="social-btns pull-right">
                        <a href="#"><div class="fui-vimeo"></div><div class="fui-vimeo"></div></a>
                        <a href="#"><div class="fui-facebook"></div><div class="fui-facebook"></div></a>
                        <a href="#"><div class="fui-twitter"></div><div class="fui-twitter"></div></a>
                    </div>
                    <div class="additional-links">
                        Be sure to take a look to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>

        <!-- Placed at the end of the document so the pages load faster -->
        <script src="{{asset('asset/frontend/js/jquery-1.10.2.min.js')}}"></script>
        <script src="{{asset('asset/frontend/js/bootstrap.min.js')}}"></script>
        <script src="{{asset('asset/frontend/js/modernizr.custom.js')}}"></script>
        <script src="{{asset('asset/frontend/js/startup-kit.js')}}"></script>
        <script src="{{asset('asset/frontend/js/script.js')}}"></script>
		<script>
				$(".faq-toggle").on("click",function(){
				var e=250,t=$(this).next(".content");
				$(this).hasClass("active")?(t.slideUp(e),$(this).removeClass("active")):(t.slideDown(e),$(this).addClass("active"))
				});
		</script>
    </body>
</html>

