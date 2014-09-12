<div id="skin-select">
        <div id="logo">
            <a href="{{Request::root()}}/manager"><h1>CRM
                <span></span>
            </h1></a>
        </div>

        <a id="toggle">
            <span class="entypo-menu"></span>
        </a>
        <div class="dark">
            <form action="#">
                <span>
                    <input type="text" name="search" value="" class="search rounded id_search" placeholder="Search Menu..." autofocus />
                </span>
            </form>
        </div>

        <div class="search-hover">
            <form id="demo-2">
                <input type="search" placeholder="Search Menu..." class="id_search">
            </form>
        </div>


        <div class="search-hover">
            <form id="demo-2">
                <input type="search" placeholder="Search Menu..." class="id_search">
            </form>
        </div>




        <div class="skin-part">
            <div id="tree-wrap">
                <div class="side-bar">
                    <!-- tab1 -->
                    <ul class="topnav menu-left-nest">
                        <li>
                            <a href="#" style="border-left:0px solid!important;" class="title-menu-left">

                                <span class="widget-menu"></span>
                                <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>

                            </a>
                        </li>
                     
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="{{trans('common.menu.customer')}}">
                                <i class="icon icon-user-group"></i>
                                <span>{{trans('common.menu.customer')}}</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/customers/create" title="{{trans('common.menu.create')}}"><i class="icon icon-plus"></i><span>{{trans('common.menu.create')}}</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/customers" title="{{trans('common.menu.list')}}"><i class="icon-view-list"></i><span>{{trans('common.menu.list')}}</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/sectors" title="{{trans('common.menu.sector')}}"><i class="icon icon-feed"></i><span>{{trans('common.menu.sector')}}</span></a>
                                </li>
                            </ul>
                        </li>                        
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Product">
                                <i class="entypo-basket"></i>
                                <span>{{trans('common.menu.product')}}</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/products/create" title="{{trans('common.menu.create')}}"><i class="icon icon-plus"></i><span>{{trans('common.menu.create')}}</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/products" title="{{trans('common.menu.list')}}"><i class="icon-view-list"></i><span>{{trans('common.menu.list')}}</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/group-products" title="{{trans('common.menu.group')}}"><i class="icon icon-feed"></i><span>{{trans('common.menu.group')}}</span></a>
                                </li>
                            </ul>
                        </li>
                        
                         <li>
                            <a class="tooltip-tip ajax-load" href="{{Request::root('')}}/manager/purchases" title="{{trans('common.menu.invoice')}}">
                                <i class="icon icon-message"></i>
                                <span>{{trans('common.menu.invoice')}}</span>
                            </a>
<!--                            <ul>                              
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/purchases" title="Article list"><i class="icon-view-list"></i><span>List</span></a>
                                </li>
                            </ul>-->
                        </li>
                        
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="{{trans('common.menu.ticket')}}">
                                <i class="fontawesome-medkit"></i>
                                <span>{{trans('common.menu.ticket')}}</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/tickets/create" title="{{trans('common.menu.create')}}"><i class="icon icon-plus"></i><span>{{trans('common.menu.create')}}</span></a>
                                </li>
                                 <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/tickets" title="{{trans('common.menu.list')}}"><i class="icon-view-list"></i><span>{{trans('common.menu.list')}}</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/support-type" title="{{trans('common.menu.support_type')}}"><i class="icon icon-feed"></i>{{trans('common.menu.support_type')}}</span></a>                                    
                                </li>

                            </ul>
                        </li>
                        
                       <li>
                            <a class="tooltip-tip ajax-load" href="#" title="{{trans('common.menu.faq')}}">
                               <i class="icon icon-question"></i>
                                <span>{{trans('common.menu.faq')}}</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/fqa/create" title="{{trans('common.menu.create')}}"><i class="icon icon-plus"></i><span>{{trans('common.menu.create')}}</span></a>
                                </li>
                                 <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/fqa" title="{{trans('common.menu.list')}}"><i class="icon-view-list"></i><span>{{trans('common.menu.list')}}</span></a>
                                </li>
                                 <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/fqa-category" title="{{trans('common.menu.group')}}"><i class="icon icon-feed"></i><span>{{trans('common.menu.group')}}</span></a>
                                </li>
                            </ul>
                        </li>
                          
                       <li>
                            <a class="tooltip-tip ajax-load" href="#" title="{{trans('common.menu.news')}}">
                                <i class="fontawesome-medkit"></i>
                                <span>{{trans('common.menu.news')}}</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/news/create" title="{{trans('common.menu.create')}}"><i class="icon icon-plus"></i><span>{{trans('common.menu.create')}}</span></a>
                                </li>
                                 <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/news" title="{{trans('common.menu.list')}}"><i class="icon-view-list"></i><span>{{trans('common.menu.list')}}</span></a>
                                </li>
                                 <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/news-category" title="{{trans('common.menu.group')}}"><i class="icon icon-feed"></i><span>{{trans('common.menu.group')}}</span></a>
                                </li>
                            </ul>
                        </li>
                        
                         <li>
                            <a class="tooltip-tip ajax-load" href="#" title="{{trans('common.menu.report_analysis')}}">
                                <i class="icon icon-graph-pie"></i>
                                <span>{{trans('common.menu.report_analysis')}}</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="#" title="{{trans('common.menu.report')}}"><i class="entypo-chart-bar"></i><span>{{trans('common.menu.report')}}</span></a>
                                         <ul>                              
                                            <li>
                                                <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/reports/ticket" title="{{trans('common.menu.ticket')}}"><i class="icon icon-tag"></i><span>{{trans('common.menu.ticket')}}</span></a>
                                            </li>
                                             <li>
                                                <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/reports/staff" title="{{trans('common.menu.staff')}}"><i class="icon icon-tag"></i><span>{{trans('common.menu.staff')}}</span></a>
                                            </li>
                                        </ul>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/analysis/" title="Article list"><i class="entypo-chart-area"></i><span>{{trans('common.menu.analysis')}}</span></a>
                                </li>
                            </ul>
                        </li>
                     
                     
                    </ul>
                    <!--end tab1 -->
                  
                   
                   @if(Auth::user()->group_users==User::MANAGER)         
                    <ul id="menu-showhide" class="topnav menu-left-nest">
                        <li>
                            <a href="#" style="border-left:0px solid!important;" class="title-menu-left">

                                <span class="component"></span>
                                <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>

                            </a>
                        </li>                      
                        <li>
                           <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/manager/users" title="{{trans('common.menu.user')}}"><i class="icon icon-user"></i><span>{{trans('common.menu.user')}}</span></a>                              
                        </li>
                          <li>
                           <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/manager/languages" title="{{trans('common.menu.language')}}"><i class="entypo-export"></i><span>{{trans('common.menu.language')}}</span></a>
                              
                        </li>
                        <li>
                            <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/manager/setting" title="{{trans('common.menu.setting')}}"><i class="entypo-layout"></i><span>{{trans('common.menu.setting')}}</span></a>                                
                        </li>                      
                    </ul>
                 @endif
                    <div class="side-dash">
                      
                    </div>
                </div>
            </div>
        </div>
    </div>