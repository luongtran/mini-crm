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

  <link rel="shortcut icon" href="favicon.ico">
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
                        <li><a href="page-login.html">Log In</a></li>
                        <li><a href="page-reg-page.html">Registration</a></li>
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
        <a class="site-logo" href="index.html"><img src="{{asset('')}}asset/frontend/layout/img/logos/logo-corp-red.png" alt="Metronic FrontEnd"></a>

        <a href="javascript:void(0);" class="mobi-toggler"><i class="fa fa-bars"></i></a>

        <!-- BEGIN NAVIGATION -->
        <div class="header-navigation pull-right font-transform-inherit">
          <ul>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                Home 
                
              </a>
                
              <ul class="dropdown-menu">
                <li class="active"><a href="index.html">Home Default</a></li>
                <li><a href="index-header-fix.html">Home with Header Fixed</a></li>
                <li><a href="index-without-topbar.html">Home without Top Bar</a></li>
              </ul>
            </li>
            <li class="dropdown dropdown-megamenu">
              <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                Mega Menu
                
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div class="header-navigation-content">
                    <div class="row">
                      <div class="col-md-4 header-navigation-col">
                        <h4>Footwear</h4>
                        <ul>
                          <li><a href="index.html">Astro Trainers</a></li>
                          <li><a href="index.html">Basketball Shoes</a></li>
                          <li><a href="index.html">Boots</a></li>
                          <li><a href="index.html">Canvas Shoes</a></li>
                          <li><a href="index.html">Football Boots</a></li>
                          <li><a href="index.html">Golf Shoes</a></li>
                          <li><a href="index.html">Hi Tops</a></li>
                          <li><a href="index.html">Indoor Trainers</a></li>
                        </ul>
                      </div>
                      <div class="col-md-4 header-navigation-col">
                        <h4>Clothing</h4>
                        <ul>
                          <li><a href="index.html">Base Layer</a></li>
                          <li><a href="index.html">Character</a></li>
                          <li><a href="index.html">Chinos</a></li>
                          <li><a href="index.html">Combats</a></li>
                          <li><a href="index.html">Cricket Clothing</a></li>
                          <li><a href="index.html">Fleeces</a></li>
                          <li><a href="index.html">Gilets</a></li>
                          <li><a href="index.html">Golf Tops</a></li>
                        </ul>
                      </div>
                      <div class="col-md-4 header-navigation-col">
                        <h4>Accessories</h4>
                        <ul>
                          <li><a href="index.html">Belts</a></li>
                          <li><a href="index.html">Caps</a></li>
                          <li><a href="index.html">Gloves</a></li>
                        </ul>

                        <h4>Clearance</h4>
                        <ul>
                          <li><a href="index.html">Jackets</a></li>
                          <li><a href="index.html">Bottoms</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                Pages 
                
              </a>
                
              <ul class="dropdown-menu">
                <li><a href="page-about.html">About Us</a></li>
                <li><a href="page-services.html">Services</a></li>
                <li><a href="page-prices.html">Prices</a></li>
                <li><a href="page-faq.html">FAQ</a></li>
                <li><a href="page-gallery.html">Gallery</a></li>
                <li><a href="page-search-result.html">Search Result</a></li>
                <li><a href="page-404.html">404</a></li>
                <li><a href="page-500.html">500</a></li>
                <li><a href="page-login.html">Login Page</a></li>
                <li><a href="page-forgotton-password.html">Forget Password</a></li>
                <li><a href="page-reg-page.html">Signup Page</a></li>
                <li><a href="page-careers.html">Careers</a></li>
                <li><a href="page-site-map.html">Site Map</a></li>
                <li><a href="page-contacts.html">Contact</a></li>                
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                Features 
                
              </a>
                
              <ul class="dropdown-menu">
                <li><a href="feature-typography.html">Typography</a></li>
                <li><a href="feature-buttons.html">Buttons</a></li>
                <li><a href="feature-forms.html">Forms</a></li>
                
                <li class="dropdown-submenu">
                  <a href="index.html">Multi level <i class="fa fa-angle-right"></i></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="index.html">Second Level Link</a></li>
                    <li><a href="index.html">Second Level Link</a></li>
                    <li class="dropdown-submenu">
                      <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                        Second Level Link 
                        <i class="fa fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a href="index.html">Third Level Link</a></li>
                        <li><a href="index.html">Third Level Link</a></li>
                        <li><a href="index.html">Third Level Link</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                Portfolio 
                
              </a>
                
              <ul class="dropdown-menu">
                <li><a href="portfolio-4.html">Portfolio 4</a></li>
                <li><a href="portfolio-3.html">Portfolio 3</a></li>
                <li><a href="portfolio-2.html">Portfolio 2</a></li>
                <li><a href="portfolio-item.html">Portfolio Item</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                Blog 
                
              </a>
                
              <ul class="dropdown-menu">
                <li><a href="blog.html">Blog Page</a></li>
                <li><a href="blog-item.html">Blog Item</a></li>
              </ul>
            </li>
            <li><a href="shop-index.html" target="_blank">E-Commerce</a></li>
            <li><a href="onepage-index.html" target="_blank">One Page</a></li>
            <li><a href="http://keenthemes.com/preview/metronic/theme/templates/admin" target="_blank">Admin theme</a></li>

            <!-- BEGIN TOP SEARCH -->
            <li class="menu-search">
              <span class="sep"></span>
              <i class="fa fa-search search-btn"></i>
              <div class="search-box">
                <form action="#">
                  <div class="input-group">
                    <input type="text" placeholder="Search" class="form-control">
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="submit">Search</button>
                    </span>
                  </div>
                </form>
              </div> 
            </li>
            <!-- END TOP SEARCH -->
          </ul>
        </div>
        <!-- END NAVIGATION -->
      </div>
    </div>
    <!-- Header END -->

    <!-- BEGIN SLIDER -->
    <div class="page-slider margin-bottom-40">
      <div class="fullwidthbanner-container revolution-slider">
        <div class="fullwidthabnner">
          <ul id="revolutionul">
            <!-- THE NEW SLIDE -->
            <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="9400" data-thumb="{{asset('')}}asset/frontend/pages/img/revolutionslider/thumbs/thumb2.jpg">
              <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
              <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/bg9.jpg" alt="">
              
              <div class="caption lft slide_title_white slide_item_left"
                data-x="30"
                data-y="90"
                data-speed="400"
                data-start="1500"
                data-easing="easeOutExpo">
                Explore the Power<br><span class="slide_title_white_bold">of Metronic</span>
              </div>
              <div class="caption lft slide_subtitle_white slide_item_left"
                data-x="87"
                data-y="245"
                data-speed="400"
                data-start="2000"
                data-easing="easeOutExpo">
                This is what you were looking for
              </div>
              <a class="caption lft btn dark slide_btn slide_item_left" href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
                data-x="187"
                data-y="315"
                data-speed="400"
                data-start="3000"
                data-easing="easeOutExpo">
                Purchase Now!
              </a>                        
              <div class="caption lfb"
                data-x="640" 
                data-y="0" 
                data-speed="700" 
                data-start="1000" 
                data-easing="easeOutExpo">
                <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/lady.png" alt="Image 1">
              </div>
            </li>    

            <!-- THE FIRST SLIDE -->
            <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="9400" data-thumb="{{asset('')}}asset/frontend/pages/img/revolutionslider/thumbs/thumb2.jpg">
              <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
              <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/bg1.jpg" alt="">
                            
              <div class="caption lft slide_title slide_item_left"
                data-x="30"
                data-y="105"
                data-speed="400"
                data-start="1500"
                data-easing="easeOutExpo">
                Need a website design? 
              </div>
              <div class="caption lft slide_subtitle slide_item_left"
                data-x="30"
                data-y="180"
                data-speed="400"
                data-start="2000"
                data-easing="easeOutExpo">
                This is what you were looking for
              </div>
              <div class="caption lft slide_desc slide_item_left"
                data-x="30"
                data-y="220"
                data-speed="400"
                data-start="2500"
                data-easing="easeOutExpo">
                Lorem ipsum dolor sit amet, dolore eiusmod<br> quis tempor incididunt. Sed unde omnis iste.
              </div>
              <a class="caption lft btn green slide_btn slide_item_left" href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
                data-x="30"
                data-y="290"
                data-speed="400"
                data-start="3000"
                data-easing="easeOutExpo">
                Purchase Now!
              </a>                        
              <div class="caption lfb"
                data-x="640" 
                data-y="55" 
                data-speed="700" 
                data-start="1000" 
                data-easing="easeOutExpo">
                <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/man-winner.png" alt="Image 1">
              </div>
            </li>

            <!-- THE SECOND SLIDE -->
            <li data-transition="fade" data-slotamount="7" data-masterspeed="300" data-delay="9400" data-thumb="{{asset('')}}asset/frontend/pages/img/revolutionslider/thumbs/thumb2.jpg">                        
              <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/bg2.jpg" alt="">
              <div class="caption lfl slide_title slide_item_left"
                data-x="30"
                data-y="125"
                data-speed="400"
                data-start="3500"
                data-easing="easeOutExpo">
                Powerfull &amp; Clean
              </div>
              <div class="caption lfl slide_subtitle slide_item_left"
                data-x="30"
                data-y="200"
                data-speed="400"
                data-start="4000"
                data-easing="easeOutExpo">
                Responsive Admin &amp; Website Theme
              </div>
              <div class="caption lfl slide_desc slide_item_left"
                data-x="30"
                data-y="245"
                data-speed="400"
                data-start="4500"
                data-easing="easeOutExpo">
                Lorem ipsum dolor sit amet, consectetuer elit sed diam<br> nonummy amet euismod dolore.
              </div>                        
              <div class="caption lfr slide_item_right" 
                data-x="635" 
                data-y="105" 
                data-speed="1200" 
                data-start="1500" 
                data-easing="easeOutBack">
                <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/mac.png" alt="Image 1">
              </div>
              <div class="caption lfr slide_item_right" 
                data-x="580" 
                data-y="245" 
                data-speed="1200" 
                data-start="2000" 
                data-easing="easeOutBack">
                <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/ipad.png" alt="Image 1">
              </div>
              <div class="caption lfr slide_item_right" 
                data-x="735" 
                data-y="290" 
                data-speed="1200" 
                data-start="2500" 
                data-easing="easeOutBack">
                <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/iphone.png" alt="Image 1">
              </div>
              <div class="caption lfr slide_item_right" 
                data-x="835" 
                data-y="230" 
                data-speed="1200" 
                data-start="3000" 
                data-easing="easeOutBack">
                <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/macbook.png" alt="Image 1">
              </div>
              <div class="caption lft slide_item_right" 
                data-x="865" 
                data-y="45" 
                data-speed="500" 
                data-start="5000" 
                data-easing="easeOutBack">
                <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/hint1-red.png" id="rev-hint1" alt="Image 1">
              </div>                        
              <div class="caption lfb slide_item_right" 
                data-x="355" 
                data-y="355" 
                data-speed="500" 
                data-start="5500" 
                data-easing="easeOutBack">
                <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/hint2-red.png" id="rev-hint2" alt="Image 1">
              </div>
            </li>
                        
            <!-- THE THIRD SLIDE -->
            <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="9400" data-thumb="{{asset('')}}asset/frontend/pages/img/revolutionslider/thumbs/thumb2.jpg">
              <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/bg3.jpg" alt="">
              <div class="caption lfl slide_item_left" 
                data-x="30" 
                data-y="95" 
                data-speed="400" 
                data-start="1500" 
                data-easing="easeOutBack">
                <iframe src="http://player.vimeo.com/video/56974716?portrait=0" width="420" height="240" style="border:0" allowFullScreen></iframe> 
              </div>
              <div class="caption lfr slide_title"
                data-x="470"
                data-y="100"
                data-speed="400"
                data-start="2000"
                data-easing="easeOutExpo">
                Responsive Video Support
              </div>
              <div class="caption lfr slide_subtitle"
                data-x="470"
                data-y="170"
                data-speed="400"
                data-start="2500"
                data-easing="easeOutExpo">
                Youtube, Vimeo and others.
              </div>
              <div class="caption lfr slide_desc"
                data-x="470"
                data-y="220"
                data-speed="400"
                data-start="3000"
                data-easing="easeOutExpo">
                Lorem ipsum dolor sit amet, consectetuer elit sed diam<br> nonummy amet euismod dolore.
              </div>
              <a class="caption lfr btn yellow slide_btn" href=""
                data-x="470"
                data-y="280"
                                 data-speed="400"
                                 data-start="3500"
                                 data-easing="easeOutExpo">
                                 Watch more Videos!
                            </a>
                        </li>               
                        
                        <!-- THE FORTH SLIDE -->
                        <li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="9400" data-thumb="{{asset('')}}asset/frontend/pages/img/revolutionslider/thumbs/thumb2.jpg">
                            <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
                            <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/bg4.jpg" alt="">                        
                             <div class="caption lft slide_title"
                                 data-x="30"
                                 data-y="105"
                                 data-speed="400"
                                 data-start="1500"
                                 data-easing="easeOutExpo">
                                 What else included ?
                            </div>
                            <div class="caption lft slide_subtitle"
                                 data-x="30"
                                 data-y="180"
                                 data-speed="400"
                                 data-start="2000"
                                 data-easing="easeOutExpo">
                                 The Most Complete Admin Theme
                            </div>
                            <div class="caption lft slide_desc"
                                 data-x="30"
                                 data-y="225"
                                 data-speed="400"
                                 data-start="2500"
                                 data-easing="easeOutExpo">
                                 Lorem ipsum dolor sit amet, consectetuer elit sed diam<br> nonummy amet euismod dolore.
                            </div>
                            <a class="caption lft slide_btn btn red slide_item_left" href="http://www.keenthemes.com/preview/index.php?theme=metronic_admin" target="_blank" 
                                 data-x="30"
                                 data-y="300"
                                 data-speed="400"
                                 data-start="3000"
                                 data-easing="easeOutExpo">
                                 Learn More!
                            </a>                        
                            <div class="caption lft start"  
                                 data-x="670" 
                                 data-y="55" 
                                 data-speed="400" 
                                 data-start="2000" 
                                 data-easing="easeOutBack"  >
                                 <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/iphone_left.png" alt="Image 2">
                            </div>
                            
                            <div class="caption lft start"  
                                 data-x="850" 
                                 data-y="55" 
                                 data-speed="400" 
                                 data-start="2400" 
                                 data-easing="easeOutBack"  >
                                 <img src="{{asset('')}}asset/frontend/pages/img/revolutionslider/iphone_right.png" alt="Image 3">
                            </div>                        
                        </li>
                </ul>
                <div class="tp-bannertimer tp-bottom"></div>
            </div>
        </div>
    </div>
    <!-- END SLIDER -->

    <div class="main">
      <div class="container">
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