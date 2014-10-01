<div class="page-header-inner">
		<!-- BEGIN LOGO -->
		<div class="page-logo">
			<a href="{{url('manager')}}">
                            <h4>CRM-SYSTEM</h4>
			</a>
			<div class="menu-toggler sidebar-toggler hide">
				<!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
			</div>
		</div>
		<!-- END LOGO -->
		<!-- BEGIN RESPONSIVE MENU TOGGLER -->
		<a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
		</a>
		<!-- END RESPONSIVE MENU TOGGLER -->
		<!-- BEGIN TOP NAVIGATION MENU -->
		<div class="top-menu">
			<ul class="nav navbar-nav pull-right">
				<!-- BEGIN INBOX DROPDOWN -->
				<li class="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
					<i class="icon-envelope-open"></i>
                                        <span class="badge badge-default load_count_message"></span>
					</a>
					<ul class="dropdown-menu extended tasks">
						<li>
							<p>
								 You have <span class="load_count_message">0</span> new messages
							</p>
						</li>
						<li>
							<ul class="dropdown-menu-list" id="load_message">
								<li>									
								</li>
							</ul>
						</li>
						<li class="external">
							<a href="{{url('share/message/see-all')}}">
							See all messages <i class="m-icon-swapright"></i>
							</a>
						</li>
					</ul>
				</li>
				<!-- END INBOX DROPDOWN -->
				<!-- BEGIN TODO DROPDOWN -->
				<li class="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
					<i class="fa fa-language"></i>
                                        <?php $language =  Language::where('status','=','publish')->get(); $count_language =  Language::where('status','=','publish')->count();?>
					<span class="badge badge-default">
                                           {{$count_language}} </span>
					</a>
					<ul class="dropdown-menu extended tasks">						
						<li>
							<ul class="dropdown-menu-list" >                                                                  
                                                                    @if($language)
                                                                        @foreach($language as $lang)
                                                                        <li>
									<a href="{{Route('change_language', array('lang' =>$lang->code, 'return_url' => Request::url()))}}">
									<span class="task"><span class="<?php if(Session::get('current_locale')==$lang->code){echo 'btn green';}?>" > {{$lang->name}} </span>
									<span class="desc"></span>
									<span class="percent">									
									</a>                                                                                                                                       
                                                                        </li>
                                                                        @endforeach
                                                                    @endif
								
							</ul>		
						</li>
					</ul>
				</li>
				<!-- END TODO DROPDOWN -->
				<!-- BEGIN USER LOGIN DROPDOWN -->
				<li class="dropdown dropdown-user">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        @if(Auth::user()->avatar)    
					<img alt="" class="img-circle hide1" src="{{url(Auth::user()->avatar)}}"/>
                                        @else
                                        <img alt="" class="img-circle hide1" src="{{url('asset/admin/layout/img/avatar3_small.jpg')}}"/>
                                        @endif
					<span class="username username-hide-on-mobile">{{Auth::user()->first_name}}<span>
					<i class="fa fa-angle-down"></i>
					</a>
					<ul class="dropdown-menu">
						<li>
							<a href="{{url('manager/view-profile')}}">
							<i class="icon-user"></i> My Profile </a>
						</li>						
						<li>
							<a href="{{url('crm-logout')}}">
							<i class="icon-key"></i> Log Out </a>
						</li>
					</ul>
				</li>
				<!-- END USER LOGIN DROPDOWN -->
				<!-- BEGIN QUICK SIDEBAR TOGGLER -->
				<li class="dropdown dropdown-quick-sidebar-toggler">
					<a href="javascript:;" class="dropdown-toggle">
					<i class="icon-logout"></i>
					</a>
				</li>
				<!-- END QUICK SIDEBAR TOGGLER -->
			</ul>
		</div>
		<!-- END TOP NAVIGATION MENU -->
	</div>