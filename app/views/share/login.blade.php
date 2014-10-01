<!DOCTYPE html>
<head>
<meta charset="utf-8"/>
<title>CRM - LOGIN</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<meta content="" name="description"/>
<meta content="" name="author"/>
<!-- BEGIN GLOBAL MANDATORY STYLES -->
<link href="{{asset('')}}asset/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="{{asset('')}}asset/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
<link href="{{asset('')}}asset/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css"/>
<!-- END GLOBAL MANDATORY STYLES -->
<!-- BEGIN PAGE LEVEL STYLES -->
<link href="{{asset('')}}asset/global/plugins/select2/select2.css" rel="stylesheet" type="text/css"/>
<link href="{{asset('')}}asset/admin/pages/css/login.css" rel="stylesheet" type="text/css"/>
<!-- END PAGE LEVEL SCRIPTS -->
<!-- BEGIN THEME STYLES -->
<link href="{{asset('')}}asset/global/css/components.css" rel="stylesheet" type="text/css"/>
<link href="{{asset('')}}asset/global/css/plugins.css" rel="stylesheet" type="text/css"/>
<link href="{{asset('')}}asset/admin/layout/css/layout.css" rel="stylesheet" type="text/css"/>
<link id="style_color" href="{{asset('')}}asset/admin/layout/css/themes/default.css" rel="stylesheet" type="text/css"/>
<link href="{{asset('')}}asset/admin/layout/css/custom.css" rel="stylesheet" type="text/css"/>
<!-- END THEME STYLES -->
<link rel="shortcut icon" href="favicon.ico"/>
</head>
<!-- BEGIN BODY -->
<!-- DOC: Apply "page-header-fixed-mobile" and "page-footer-fixed-mobile" class to body element to force fixed header or footer in mobile devices -->
<!-- DOC: Apply "page-sidebar-closed" class to the body and "page-sidebar-menu-closed" class to the sidebar menu element to hide the sidebar by default -->
<!-- DOC: Apply "page-sidebar-hide" class to the body to make the sidebar completely hidden on toggle -->
<!-- DOC: Apply "page-sidebar-closed-hide-logo" class to the body element to make the logo hidden on sidebar toggle -->
<!-- DOC: Apply "page-sidebar-hide" class to body element to completely hide the sidebar on sidebar toggle -->
<!-- DOC: Apply "page-sidebar-fixed" class to have fixed sidebar -->
<!-- DOC: Apply "page-footer-fixed" class to the body element to have fixed footer -->
<!-- DOC: Apply "page-sidebar-reversed" class to put the sidebar on the right side -->
<!-- DOC: Apply "page-full-width" class to the body element to have full width page without the sidebar menu -->
<body class="login">
<!-- BEGIN LOGO -->
<div class="logo">
	<a href="{{url('')}}">	
	</a>
</div>
<!-- END LOGO -->
<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
<div class="menu-toggler sidebar-toggler">
</div>
<!-- END SIDEBAR TOGGLER BUTTON -->
<!-- BEGIN LOGIN -->
<div class="content">
	<!-- BEGIN LOGIN FORM -->
	   <form role="form" action="{{Request::root()}}/crm-login" method="POST">
		<h3 class="form-title">Login to your account</h3>
		{{Session::get('msg_flash')}}
		<div class="form-group">
			<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
			<label class="control-label visible-ie8 visible-ie9">Email</label>
			<div class="input-icon">
				<i class="fa fa-user"></i>
				  {{Form::email('email','',array('class' => 'form-control','id'=>'inputUsernameEmail','placeholder'=>'Email','required'))}}  
                         
			</div>
		</div>
		<div class="form-group">
			<label class="control-label visible-ie8 visible-ie9">Password</label>
			<div class="input-icon">
				<i class="fa fa-lock"></i>
				 {{Form::password('password',array('class' => 'form-control','id'=>'inputPassword','placeholder'=>'Password','required'))}}                                                       
			</div>
		</div>
		<div class="form-actions">
			<label class="checkbox">
<!--			<input type="checkbox" name="remember" value="1"/> Remember me </label>-->
			<button type="submit" class="btn green pull-right">
			Login <i class="m-icon-swapright m-icon-white"></i>
			</button>
		</div>
		<div class="login-options">
			<h4>Or login with</h4>
			<ul class="social-icons">
				<li>
					<a class="facebook" data-original-title="facebook" href="#">
					</a>
				</li>
				<li>
					<a class="twitter" data-original-title="Twitter" href="#">
					</a>
				</li>
				<li>
					<a class="googleplus" data-original-title="Goole Plus" href="#">
					</a>
				</li>
				<li>
					<a class="linkedin" data-original-title="Linkedin" href="#">
					</a>
				</li>
			</ul>
		</div>
		<div class="forget-password">
			<h4>Forgot your password ?</h4>
			<p>
				 no worries, click <a href="{{url('crm-forget')}}" id="forget-password">
				here </a>
				to reset your password.
			</p>
		</div>
		<div class="create-account">
			<p>
				 Don't have an account yet ?&nbsp; <a href="{{url('register')}}" id="register-btn">
				Create an account </a>
			</p>
		</div>
	</form>
</div>
<div class="copyright">
	 2014 &copy; Metronic. Admin Dashboard Template.
</div>
</body>
<!-- END BODY -->
</html>