<!DOCTYPE html>
<!-- 
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.2.0
Version: 3.2.0
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest (the above link) in order to legally use the theme for your project.
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->

<!-- Head BEGIN -->
<head>
  <meta charset="utf-8">
  <title>CRM @if(isset($page)) {{' | '.$page}} @endif</title>

  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <meta content="Metronic Shop UI description" name="description">
  <meta content="Metronic Shop UI keywords" name="keywords">
  <meta content="keenthemes" name="author">

  <meta property="og:site_name" content="-CUSTOMER VALUE-">
  <meta property="og:title" content="-CUSTOMER VALUE-">
  <meta property="og:description" content="-CUSTOMER VALUE-">
  <meta property="og:type" content="website">
  <meta property="og:image" content="-CUSTOMER VALUE-"><!-- link to image for socio -->
  <meta property="og:url" content="-CUSTOMER VALUE-">
 
  <link rel="shortcut icon" href="{{asset('asset/frontend/img/favicon.ico')}}">

  <!-- Fonts START -->
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all" rel="stylesheet" type="text/css">
  <!-- Fonts END -->

  <!-- Global styles START -->          
  <link href="{{asset('')}}asset/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="{{asset('')}}asset/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Global styles END --> 
   
  <!-- Page level plugin styles START -->
  <link href="{{asset('')}}asset/global/plugins/fancybox/source/jquery.fancybox.css" rel="stylesheet">
  <link href="{{asset('')}}asset/global/plugins/carousel-owl-carousel/owl-carousel/owl.carousel.css" rel="stylesheet">
  <link href="{{asset('')}}asset/global/plugins/slider-revolution-slider/rs-plugin/css/settings.css" rel="stylesheet">
  <!-- Page level plugin styles END -->

  <!-- Theme styles START -->
  <link href="{{asset('')}}asset/global/css/components.css" rel="stylesheet">
  <link href="{{asset('')}}asset/frontend/layout/css/style.css" rel="stylesheet">
  <link href="{{asset('')}}asset/frontend/pages/css/style-revolution-slider.css" rel="stylesheet"><!-- metronic revo slider styles -->
  <link href="{{asset('')}}asset/frontend/layout/css/style-responsive.css" rel="stylesheet">
  <link href="{{asset('')}}asset/frontend/layout/css/themes/red.css" rel="stylesheet" id="style-color">
  <link href="{{asset('')}}asset/frontend/layout/css/custom.css" rel="stylesheet">
  <script>
		{{"var baseUrl = '".asset('')."';"}}
  </script>
  <!-- Theme styles END -->
</head>
<!-- Head END -->

<!-- Body BEGIN -->
<body class="corporate">
    <!-- BEGIN STYLE CUSTOMIZER -->
    <div class="color-panel hidden-sm">
      <div class="color-mode-icons icon-color"></div>
      <div class="color-mode-icons icon-color-close"></div>
      <div class="color-mode">
        <p>THEME COLOR</p>
        <ul class="inline">
          <li class="color-red current color-default" data-style="red"></li>
          <li class="color-blue" data-style="blue"></li>
          <li class="color-green" data-style="green"></li>
          <li class="color-orange" data-style="orange"></li>
          <li class="color-gray" data-style="gray"></li>
          <li class="color-turquoise" data-style="turquoise"></li>
        </ul>
      </div>
    </div>
    <!-- END BEGIN STYLE CUSTOMIZER --> 

    <!-- BEGIN TOP BAR -->
    <div class="pre-header">
        <div class="container">
            <div class="row">
                <!-- BEGIN TOP BAR LEFT PART -->
                <div class="col-md-6 col-sm-6 additional-shop-info">
                    <ul class="list-unstyled list-inline">
                        <li><i class="fa fa-phone"></i><span>+1 456 6717</span></li>
                        <li><i class="fa fa-envelope-o"></i><span>info@keenthemes.com</span></li>
                    </ul>
                </div>
                <!-- END TOP BAR LEFT PART -->
                <!-- BEGIN TOP BAR MENU -->
                <div class="col-md-6 col-sm-6 additional-nav">
                    <ul class="list-unstyled list-inline pull-right">
						@if(Auth::check())
                                 
                  @if(Auth::user()->group_users == User::MANAGER || Auth::user()->group_users == User::STAFF)
                    <li><a href="{{url('manager')}}">Back-end</a></li>      
                  @else
                   <li><a href="{{url('client')}}">Back-end</a></li>
                  @endif                                    
                  <li><a href="{{url('crm-logout')}}">Log Out</a></li>
						@else
						<li><a href="{{url('crm-login')}}">Log In</a></li>
						@endif
                        <li><a href="{{url('register')}}">Registration</a></li>
                    </ul>
                </div>
                <!-- END TOP BAR MENU -->
            </div>
        </div>        
    </div>
    <!-- END TOP BAR -->
    <!-- BEGIN HEADER -->
    <div class="header">
      <div class="container">
        <a class="site-logo" href="{{url('/')}}"><img src="{{asset('')}}asset/frontend/layout/img/logos/logo-corp-red.png" alt="Metronic FrontEnd"></a>

        <a href="javascript:void(0);" class="mobi-toggler"><i class="fa fa-bars"></i></a>

        <!-- BEGIN NAVIGATION -->
		@include('home.layouts.menu')     
		<!-- END NAVIGATION -->
      </div>
    </div>
    <!-- Header END -->

    <!-- BEGIN SLIDER -->
	     @if(isset($slider))
		  @include('home.layouts.slider')
		 @endif		
    <!-- END SLIDER -->

    <div class="main">
      <div class="container">
          @if(isset($breadcrumb))            
            <ul class="breadcrumb">
                <li><a href="{{url()}}">Home</a></li>
                @foreach($breadcrumb as $echo)               
                  <li>
                      <a href="{{url($echo['link'])}}">{{$echo['title']}}</a>
                  </li>               
                @endforeach
            </ul>
          @endif

		      @yield('content')
      </div>
    </div>

    <!-- BEGIN PRE-FOOTER -->
    <div class="pre-footer">
      <div class="container">
        <div class="row">
          <!-- BEGIN BOTTOM ABOUT BLOCK -->
          <div class="col-md-4 col-sm-6 pre-footer-col">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarm erat sit volutpat.</p>

            <div class="photo-stream">
              <h2>Photos Stream</h2>
              <ul class="list-unstyled">
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/people/img5-small.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/works/img1.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/people/img4-large.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/works/img6.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/works/img3.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/people/img2-large.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/works/img2.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/works/img5.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/people/img5-small.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/works/img1.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/people/img4-large.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/works/img6.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/works/img3.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/people/img2-large.jpg"></a></li>
                <li><a href="#"><img alt="" src="{{asset('')}}asset/frontend/pages/img/works/img2.jpg"></a></li>
              </ul>                    
            </div>
          </div>
          <!-- END BOTTOM ABOUT BLOCK -->

          <!-- BEGIN BOTTOM CONTACTS -->
          <div class="col-md-4 col-sm-6 pre-footer-col">
            <h2>Our Contacts</h2>
            <address class="margin-bottom-40">
              35, Lorem Lis Street, Park Ave<br>
              California, US<br>
              Phone: 300 323 3456<br>
              Fax: 300 323 1456<br>
              Email: <a href="mailto:info@metronic.com">info@metronic.com</a><br>
              Skype: <a href="skype:metronic">metronic</a>
            </address>

            <div class="pre-footer-subscribe-box pre-footer-subscribe-box-vertical">
              <h2>Newsletter</h2>
              <p>Subscribe to our newsletter and stay up to date with the latest news and deals!</p>
              <form action="#">
                <div class="input-group">
                  <input type="text" placeholder="youremail@mail.com" class="form-control">
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="submit">Subscribe</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <!-- END BOTTOM CONTACTS -->

          <!-- BEGIN TWITTER BLOCK --> 
          <div class="col-md-4 col-sm-6 pre-footer-col">
            <h2 class="margin-bottom-0">Latest Tweets</h2>
            <a class="twitter-timeline" href="https://twitter.com/twitterapi" data-tweet-limit="2" data-theme="dark" data-link-color="#57C8EB" data-widget-id="455411516829736961" data-chrome="noheader nofooter noscrollbar noborders transparent">Loading tweets by @keenthemes...</a>
          </div>
          <!-- END TWITTER BLOCK -->
        </div>
      </div>
    </div>
    <!-- END PRE-FOOTER -->

    <!-- BEGIN FOOTER -->
    <div class="footer">
      <div class="container">
        <div class="row">
          <!-- BEGIN COPYRIGHT -->
          <div class="col-md-6 col-sm-6 padding-top-10">
            2014 � Metronic Shop UI. ALL Rights Reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </div>
          <!-- END COPYRIGHT -->
          <!-- BEGIN PAYMENTS -->
          <div class="col-md-6 col-sm-6">
            <ul class="social-footer list-unstyled list-inline pull-right">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-skype"></i></a></li>
              <li><a href="#"><i class="fa fa-github"></i></a></li>
              <li><a href="#"><i class="fa fa-youtube"></i></a></li>
              <li><a href="#"><i class="fa fa-dropbox"></i></a></li>
            </ul>  
          </div>
          <!-- END PAYMENTS -->
        </div>
      </div>
    </div>
    <!-- END FOOTER -->

    <!-- Load javascripts at bottom, this will reduce page load time -->
    <!-- BEGIN CORE PLUGINS (REQUIRED FOR ALL PAGES) -->
    <!--[if lt IE 9]>
    <script src="{{asset('')}}asset/global/plugins/respond.min.js"></script>
    <![endif]--> 
    <script src="{{asset('')}}asset/global/plugins/jquery-1.11.0.min.js" type="text/javascript"></script>
    <script src="{{asset('')}}asset/global/plugins/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
    <script src="{{asset('')}}asset/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>      
    <script src="{{asset('')}}asset/frontend/layout/scripts/back-to-top.js" type="text/javascript"></script>
    <!-- END CORE PLUGINS -->

    <!-- begin inport js custom -->
        @yield('javascript')   
        <script>   
          /*active breadcrumb*/             
          $( "ul.breadcrumb li" ).last().addClass("active");
        </script>
    <!-- end inport js custom -->

    <!-- BEGIN PAGE LEVEL JAVASCRIPTS (REQUIRED ONLY FOR CURRENT PAGE) -->
    <script src="{{asset('')}}asset/global/plugins/fancybox/source/jquery.fancybox.pack.js" type="text/javascript"></script><!-- pop up -->
    <script src="{{asset('')}}asset/global/plugins/carousel-owl-carousel/owl-carousel/owl.carousel.min.js" type="text/javascript"></script><!-- slider for products -->

    <!-- BEGIN RevolutionSlider -->
  
    <script src="{{asset('')}}asset/global/plugins/slider-revolution-slider/rs-plugin/js/jquery.themepunch.plugins.min.js" type="text/javascript"></script>
    <script src="{{asset('')}}asset/global/plugins/slider-revolution-slider/rs-plugin/js/jquery.themepunch.revolution.min.js" type="text/javascript"></script> 
    <script src="{{asset('')}}asset/global/plugins/slider-revolution-slider/rs-plugin/js/jquery.themepunch.tools.min.js" type="text/javascript"></script> 
    <script src="{{asset('')}}asset/frontend/pages/scripts/revo-slider-init.js" type="text/javascript"></script>
    <!-- END RevolutionSlider -->

    <script src="{{asset('')}}asset/frontend/layout/scripts/layout.js" type="text/javascript"></script>
    <script type="text/javascript">
        jQuery(document).ready(function() {
            Layout.init();    
            Layout.initOWL();
            RevosliderInit.initRevoSlider();
            Layout.initTwitter();
            //Layout.initFixHeaderWithPreHeader(); /* Switch On Header Fixing (only if you have pre-header) */
            //Layout.initNavScrolling(); 
        });
    </script>
    <!-- END PAGE LEVEL JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>