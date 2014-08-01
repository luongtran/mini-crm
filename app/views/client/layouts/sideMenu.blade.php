<div id="skin-select">
        <div id="logo">
            <a href="{{Request::root()}}/client"><h1>CRM- Client
                <span>v1.0</span>
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
                                <span>Employee</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/employee/create" title="Employee add"><i class="icon icon-plus"></i><span>Add</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/employee" title="Employee list"><i class="icon-view-list"></i><span>List</span></a>
                                </li>
                            </ul>
                        </li>
                        @endif
                         <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Purchase">
                                <i class="icon icon-message"></i>
                                <span>Ticket</span>
                            </a>
                            <ul>   
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/tickets/create" title="Article list"><i class="icon icon-plus"></i><span>New ticket</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/client/tickets" title="Article list"><i class="icon-view-list"></i><span>List</span></a>
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Report">
                                <i class="icon icon-question"></i>
                                <span>Knowledge Base</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/fqa/" title="Article add"><i class="icon icon-feed"></i><span>See</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/fqa/popular" title="Article list"><i class="icon icon-graph-line"></i><span>Popular</span></a>
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