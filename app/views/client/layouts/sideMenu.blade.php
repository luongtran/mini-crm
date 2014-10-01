<div class="page-sidebar navbar-collapse collapse">
			<!-- BEGIN SIDEBAR MENU -->
			<ul class="page-sidebar-menu " data-auto-scroll="true" data-slide-speed="200">
				<!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
				<li class="sidebar-toggler-wrapper">
					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
					<div class="sidebar-toggler">
					</div>
					<!-- END SIDEBAR TOGGLER BUTTON -->
				</li>
				<!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
				<li class="sidebar-search-wrapper">
					<!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
					<!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
					<!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
					<form class="sidebar-search " action="#" method="POST">
						<a href="javascript:;" class="remove">
						<i class="icon-close"></i>
						</a>
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Search...">
							<span class="input-group-btn">
							<a href="javascript:;" class="btn submit"><i class="icon-magnifier"></i></a>
							</span>
						</div>
					</form>
					<!-- END RESPONSIVE QUICK SEARCH FORM -->
				</li>
				<li class="start ">
					<a href="{{url('client')}}">
					<i class="icon-home"></i>
					<span class="title">Dashboard</span>
					<span class="arrow "></span>
					</a>
				</li>
                                @if(Auth::user()->group_users == User::CUSTOMER)
				<li>
					<a href="javascript:;">
					<i class="glyphicon glyphicon-user"></i>
					<span class="title">{{trans('common.menu.employee')}}</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="{{url('client/employee/create')}}"  title="{{trans('common.menu.create')}}">
							<i class="glyphicon glyphicon-new-window"></i>
							{{trans('common.menu.create')}}</a>
						</li>
						<li>
							<a href="{{url('client/employee')}}">
							<i class="glyphicon glyphicon-list-alt"></i>
							{{trans('common.menu.list')}}</a>
						</li>
										
					</ul>
				</li>
                                @endif
				<li>
				<a href="javascript:;">
					<i class="fa fa-ticket"></i>
					<span class="title">{{trans('common.menu.ticket')}}</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="{{url('client/tickets/create')}}"  title="{{trans('common.menu.create')}}">
							<i class="glyphicon glyphicon-new-window"></i>
							{{trans('common.menu.create')}}</a>
						</li>
						<li>
							<a href="{{url('client/tickets')}}">
							<i class="glyphicon glyphicon-list-alt"></i>
							{{trans('common.menu.list')}}</a>
						</li>										
					</ul>                
				</li>
				<li>
				<a href="{{url('client/fqa')}}">
					<i class="fa fa-question"></i>
					<span class="title">{{trans('common.menu.faq')}}</span>
					<span class="arrow "></span>
					</a>
				<li>
				<a href="{{url('client/news')}}">
					<i class="fa fa-rss"></i>
					<span class="title">{{trans('common.menu.news')}}</span>
					<span class="arrow "></span>
					</a>					           
				</li>
                                <li>
				<a href="javascript:;">
					<i class="fa fa-ticket"></i>
					<span class="title">{{trans('common.menu.resource')}}</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="{{url('client/upload')}}"  title="{{trans('common.menu.create')}}">
							<i class="glyphicon glyphicon-new-window"></i>
							{{trans('title.table.upload')}}</a>
						</li>
						<li>
							<a href="{{url('client/upload/document')}}">
							<i class="glyphicon glyphicon-list-alt"></i>
							{{trans('title.table.document')}}</a>
						</li>	
                                                <li>
							<a href="{{url('client/invoice')}}">
							<i class="glyphicon glyphicon-list-alt"></i>
							{{trans('title.form.invoice')}}</a>
						</li>	
					</ul>                
				</li>
				<!-- BEGIN Admin -->	
			</ul>
			<!-- END SIDEBAR MENU -->
		</div>