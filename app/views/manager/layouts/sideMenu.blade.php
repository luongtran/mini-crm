<div id="skin-select">
        <div id="logo">
            <a href="{{Request::root()}}/manager"><h1>CRM
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
                     
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Customers">
                                <i class="icon icon-user-group"></i>
                                <span>Customers</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/customers/create" title="Customer add"><i class="icon icon-plus"></i><span>Add</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/customers" title="Customer list"><i class="icon-view-list"></i><span>List</span></a>
                                </li>
                            </ul>
                        </li>                        
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Product">
                                <i class="entypo-basket"></i>
                                <span>Product</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/products/create" title="Article add"><i class="icon icon-plus"></i><span>Add</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/products" title="Article list"><i class="icon-view-list"></i><span>List</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/group-products" title="Article list"><i class="icon-view-list"></i><span>Group product</span></a>
                                </li>
                            </ul>
                        </li>
                        
                         <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Purchase">
                                <i class="icon icon-message"></i>
                                <span>Purchase</span>
                            </a>
                            <ul>                              
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/purchases" title="Article list"><i class="icon-view-list"></i><span>List</span></a>
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Report">
                                <i class="icon icon-graph-pie"></i>
                                <span>Report & Analysis</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/backend/article/add" title="Article add"><i class="icon icon-plus"></i><span>Report</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/backend/article" title="Article list"><i class="icon-view-list"></i><span>Analysis</span></a>
                                </li>
                            </ul>
                        </li>
                        
                        
                       <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Support">
                                <i class="fontawesome-medkit"></i>
                                <span>Support</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/tickets" title="Article list"><i class="icon-view-list"></i><span>Ticket</span></a>
                                </li>
                                 <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/fqa" title="Article list"><i class="icon icon-feed"></i><span>FAQ</span></a>
                                </li>
                                 <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/news" title="Article list"><i class="icon icon-feed"></i><span>News</span></a>
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
                           <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/manager/users" title="Users"><i class="icon icon-user"></i><span>Users</span></a>                              
                        </li>
                          <li>
                           <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/backend/language" title="Language"><i class="entypo-export"></i><span>Language</span></a>
                              
                        </li>
                        <li>
                            <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/backend/setting" title="Setting"><i class="entypo-layout"></i><span>Setting</span></a>                                
                        </li>                      
                    </ul>
                 @endif
                    <div class="side-dash">
                      
                    </div>
                </div>
            </div>
        </div>
    </div>