<div id="skin-select">
        <div id="logo">
            <a href="{{Request::root()}}/client"><h1>CRM- Client
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
                        @if(Auth::user()->group_users == User::CUSTOMER)
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Customer">
                                <i class="icon icon-user-group"></i>
                                <span>{{trans('common.menu.employee')}}</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/employee/create" title="Employee add"><i class="icon icon-plus"></i><span>{{trans('common.menu.add')}}</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/employee" title="Employee list"><i class="icon-view-list"></i><span>{{trans('common.menu.list')}}</span></a>
                                </li>
                            </ul>
                        </li>
                        @endif
                         <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Purchase">
                                <i class="icon icon-message"></i>
                                <span>{{trans('common.menu.ticket')}}</span>
                            </a>
                            <ul>   
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/tickets/create" title="Article list"><i class="icon icon-plus"></i><span>{{trans('common.menu.new_ticket')}}</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/tickets" title="Article list"><i class="icon-view-list"></i><span>{{trans('common.menu.my_ticket')}}</span></a>
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Report">
                                <i class="icon icon-graph-line"></i>
                                <span>{{trans('common.menu.knowledge_base')}}</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/fqa/" title="Article add"><i class="icon icon-question"></i><span>{{trans('common.menu.faq')}}</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/news" title="Article list"><i class="icon icon-feed"></i><span>{{trans('common.menu.news')}}</span></a>
                                </li>
                            </ul>
                        </li>           

                         <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Report">
                                <i class="icon icon-folder"></i>
                                <span>{{trans('common.menu.resource')}}</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/upload/" title="Article add"><i class="icon icon-upload"></i><span>{{trans('title.table.upload')}}</span></a>
                                </li>                                                              
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/upload/document" title="Article list"><i class="icon icon-calendar"></i><span>{{trans('title.table.document')}}</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/invoice" title="Article list"><i class="icon icon-document"></i><span>{{trans('title.form.invoice')}}</span></a>
                                </li>
                            </ul>
                        </li>  
                    </ul>
                  

                    <div class="side-dash">
                      
                    </div>
                </div>
            </div>
        </div>
    </div>