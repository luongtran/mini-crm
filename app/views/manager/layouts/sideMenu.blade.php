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
					<a href="{{url('manager')}}">
					<i class="icon-home"></i>
					<span class="title">Dashboard</span>
					<span class="arrow "></span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
					<i class="glyphicon glyphicon-user"></i>
					<span class="title">{{trans('common.menu.customer')}}</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="{{url('manager/customers/create')}}"  title="{{trans('common.menu.create')}}">
							<i class="glyphicon glyphicon-new-window"></i>
							{{trans('common.menu.create')}}</a>
						</li>
						<li>
							<a href="{{url('manager/customers')}}">
							<i class="glyphicon glyphicon-list-alt"></i>
							{{trans('common.menu.list')}}</a>
						</li>
						<li>
							<a href="{{url('manager/sectors')}}" title="{{trans('common.menu.sector')}}">
							<i class="fa fa-cubes"></i>
							{{trans('common.menu.sector')}}</a>
						</li>					
					</ul>
				</li>				
				<li>
				<a href="javascript:;">
					<i class="icon-basket"></i>
					<span class="title">{{trans('common.menu.product')}}</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="{{url('manager/products/create')}}"  title="{{trans('common.menu.create')}}">
							<i class="glyphicon glyphicon-new-window"></i>
							{{trans('common.menu.create')}}</a>
						</li>
						<li>
							<a href="{{url('manager/products')}}">
							<i class="glyphicon glyphicon-list-alt"></i>
							{{trans('common.menu.list')}}</a>
						</li>
						<li>
							<a href="{{url('manager/group-products')}}" title="{{trans('common.menu.group')}}">
							<i class="fa fa-cubes"></i>
							{{trans('common.menu.group')}}</a>
						</li>					
					</ul>
                </li>
				<li>
					<a href="{{url('manager/purchases')}}">
					<i class="fa fa-sort-amount-asc"></i>
					<span class="title">{{trans('common.menu.invoice')}}</span>
					<span class="arrow "></span>
					</a>
				</li>				
				<li>
				<a href="javascript:;">
					<i class="fa fa-ticket"></i>
					<span class="title">{{trans('common.menu.ticket')}}</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="{{url('manager/tickets/create')}}"  title="{{trans('common.menu.create')}}">
							<i class="glyphicon glyphicon-new-window"></i>
							{{trans('common.menu.create')}}</a>
						</li>
						<li>
							<a href="{{url('manager/tickets')}}">
							<i class="glyphicon glyphicon-list-alt"></i>
							{{trans('common.menu.list')}}</a>
						</li>
						<li>
							<a href="{{url('manager/support-type')}}" title="{{trans('common.menu.support_type')}}">
							<i class="fa fa-cubes"></i>
							{{trans('common.menu.support_type')}}</a>
						</li>					
					</ul>                
				</li>
				<li>
				<a href="javascript:;">
					<i class="fa fa-question"></i>
					<span class="title">{{trans('common.menu.faq')}}</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="{{url('manager/fqa/create')}}"  title="{{trans('common.menu.create')}}">
							<i class="glyphicon glyphicon-new-window"></i>
							{{trans('common.menu.create')}}</a>
						</li>
						<li>
							<a href="{{url('manager/fqa')}}">
							<i class="glyphicon glyphicon-list-alt"></i>
							{{trans('common.menu.list')}}</a>
						</li>
						<li>
							<a href="{{url('manager/fqa-category')}}" title="{{trans('common.menu.group')}}">
							<i class="fa fa-cubes"></i>
							{{trans('common.menu.group')}}</a>
						</li>					
					</ul>
                </li>
				<li>
				<a href="javascript:;">
					<i class="fa fa-rss"></i>
					<span class="title">{{trans('common.menu.news')}}</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="{{url('manager/news/create')}}"  title="{{trans('common.menu.create')}}">
							<i class="glyphicon glyphicon-new-window"></i>
							{{trans('common.menu.create')}}</a>
						</li>
						<li>
							<a href="{{url('manager/news')}}">
							<i class="glyphicon glyphicon-list-alt"></i>
							{{trans('common.menu.list')}}</a>
						</li>
						<li>
							<a href="{{url('manager/news-category')}}" title="{{trans('common.menu.group')}}">
							<i class="fa fa-cubes"></i>
							{{trans('common.menu.group')}}</a>
						</li>					
					</ul>                
				</li>
				<!-- BEGIN Admin -->				
                @if(Auth::user()->group_users==User::MANAGER) 
				<li>
					<a href="{{url('manager/analysis')}}">
					<i class="fa fa-empire"></i>
					<span class="title">{{trans('common.menu.analysis')}}</span>
					<span class="arrow "></span>
					</a>										
				</li>
				<li>
				<a href="javascript:;">
					<i class="fa fa-bar-chart-o"></i>
					<span class="title">{{trans('common.menu.report')}}</span>
					<span class="arrow "></span>
					</a>
					<ul class="sub-menu">
						<li>
							<a href="{{url('manager/reports/ticket')}}">
							<i class="fa fa-ticket"></i>
							{{trans('common.menu.ticket')}}</a>
						</li>	
						<li>
							<a href="{{url('manager/reports/staff')}}">
							<i class="fa fa-star-o"></i>
							{{trans('common.menu.staff')}}</a>
						</li>						
					</ul>                
				</li>
				<li>
					<a href="{{url('manager/users')}}">
					<i class="fa fa-users"></i>
					<span class="title">{{trans('common.menu.user')}}</span>
					<span class="arrow "></span>
					</a>										
				</li>
				<li>
					<a href="{{url('manager/languages')}}">
					<i class="fa fa-language"></i>
					<span class="title">{{trans('common.menu.language')}}</span>
					<span class="arrow "></span>
					</a>										
				</li>
				<li>
					<a href="{{url('manager/setting')}}">
					<i class="fa fa-gear"></i>
					<span class="title">{{trans('common.menu.setting')}}</span>
					<span class="arrow "></span>
					</a>										
				</li>
				@endif
				<!-- end admin-->
			</ul>
			<!-- END SIDEBAR MENU -->
		</div>