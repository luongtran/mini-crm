<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>CRM @if(isset($page)) {{' | '.$page}} @endif</title>
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
        <script src="{{asset('asset/backend/assets/js/jquery-1.11.0.min.js')}}"></script>
        <script src="{{asset('asset/backend/assets/js/jquery-migrate-1.2.1.min.js')}}"></script>
        <script src="{{asset('asset/backend/assets/js/bootstrap.min.js')}}"></script>
        
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
                                <a class="brand" href="{{Request::root()}}"><img src="{{asset('asset/frontend/img/crm.png')}}" width="50" height="50" alt=""> Startup</a>
                            </div>
                            <div class="collapse navbar-collapse pull-right">
                                <ul class="nav pull-left">
                                    <li class="active"><a href="{{Request::root()}}">HOME</a></li>
                                    <li><a href="{{Request::root()}}/page/about">ABOUT</a></li>                                    
                                    <li><a href="{{Request::root()}}/#link_faq">FAQ</a></li>
                                    <li><a href="{{Request::root()}}/page/contact">CONTACT</a></li>
                                    @if(Auth::check())
                                        @if(Auth::user()->group_users == User::MANAGER || Auth::user()->group_users == User::STAFF)
                                        <li><a href="{{Request::root()}}/manager">BACKEND</a></li>
                                        @else
                                        <li><a href="{{Request::root()}}/client">BACKEND</a></li>
                                        @endif
                                    @endif
                                </ul>
                                <form class="navbar-form pull-left">
                                    @if(Auth::check())
                                    <a class="btn btn-primary" href="{{Request::root()}}/crm-logout">SIGN OUT</a>
                                    @else
                                    <a class="btn btn-primary" href="{{Request::root()}}/crm-login">SIGN IN</a>
                                    @endif
                                    <a name='link-top'></a>
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
                                    <li><a href="{{Request::root()}}">HOME</a></li>
                                    <li><a href="{{Request::root()}}/page/about">ABOUT</a></li>                                    
                                    <li><a href="{{Request::root()}}/#link_faq">FAQ</a></li>
                                    <li><a href="{{Request::root()}}/page/contact">CONTACT</a></li>
                        </ul>
                    </nav>
                    <div class="pull-right">
                        <a href="#link-top"><img src="{{asset('asset/frontend/img/crm.png')}}" width="40" height="40" alt="">Up</a>
                    </div>
                    <div class="additional-links">
                        Be sure to take a look to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                       
                    </div>
                </div>
            </footer>
        </div>

        <!-- Placed at the end of the document so the pages load faster -->
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

