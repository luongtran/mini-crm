<div id="skin-select">
        <div id="logo">
            <a href="{{Request::root()}}/backend"><h1>CRM
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
                            <a class="tooltip-tip ajax-load" href="#" title="Customer">
                                <i class="icon icon-user-group"></i>
                                <span>Customers</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/customer-create" title="Customer add"><i class="icon icon-plus"></i><span>Add</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/customer" title="Customer list"><i class="icon-view-list"></i><span>List</span></a>
                                </li>
                            </ul>
                        </li>
                       <li>
                       <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Support">
                                <i class="fontawesome-medkit"></i>
                                <span>Support</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/support-create" title="Article add"><i class="icon icon-plus"></i><span>Add</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/manager/support" title="Article list"><i class="icon-view-list"></i><span>List</span></a>
                                </li>
                            </ul>
                        </li>
                       <li>    
                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Product">
                                <i class="entypo-basket"></i>
                                <span>Product</span>
                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/backend/article/add" title="Article add"><i class="icon icon-plus"></i><span>Add</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="{{Request::root('')}}/backend/article" title="Article list"><i class="icon-view-list"></i><span>List</span></a>
                                </li>
                            </ul>
                        </li>
                        
                         <li>
                            <a class="tooltip-tip ajax-load" href="#" title="Article">
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
                     
                     
                    </ul>
                    <!--end tab1 -->
                  
                    <ul class="topnav menu-left-nest">
                        <li>
                            <a href="#" style="border-left:0px solid!important;" class="title-menu-left">

                                <span class="design-kit"></span>
                                <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>

                            </a>
                        </li>
                                             
                        <li>
                             <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/backend/request-demo" title="Request Demo"><i class="entypo-reply-all"></i><span>Request Demo</span></a>                               
                        </li> 
                        <li>
                             <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/backend/menu" title="Element"><i class="entypo-layout"></i><span>Menu</span></a>                               
                        </li> 

                        <li>
                             <a class="tooltip-tip2" href="#" title="Blog">
                                    <i class="entypo-share"></i>
                                     <span>Blog</span>  
                             </a>        
                             <ul>
                                        <li>
                                            <a class="tooltip-tip3 ajax-load" href="{{Request::root()}}/blog/admin/post" title="Post"><i class="entypo-feather"></i><span>Post</span></a>
                                        </li>
                                         <li>
                                            <a class="tooltip-tip3 ajax-load" href="{{Request::root()}}/blog/admin/category" title="Category"><i class="entypo-archive"></i><span>Category</span></a>
                                        </li> 
                                        <li>
                                            <a class="tooltip-tip3 ajax-load" href="{{Request::root()}}/blog/admin/comment" title="Comment"><i class="entypo-mixi"></i><span>Comment</span></a>
                                        </li> 
                             </ul>                                       
                        </li> 

                    </ul>
                             
                    <ul id="menu-showhide" class="topnav menu-left-nest">
                        <li>
                            <a href="#" style="border-left:0px solid!important;" class="title-menu-left">

                                <span class="component"></span>
                                <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>

                            </a>
                        </li>
                        <li>
                           <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/backend/page" title="Pages"><i class="entypo-docs"></i><span>Pages</span></a>
                              
                        </li>
                        <li>
                            <a class="tooltip-tip ajax-load" href="{{Request::root()}}/backend/module" title="Manager module">
                                <i class="icon-view-thumb"></i>
                                <span>Mannager Modules</span>
                                <div class="noft-blue"></div>
                            </a>
                        </li>
                        <li>
                           <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/users" title="Users"><i class="icon icon-user"></i><span>Users</span></a>                              
                        </li>
                          <li>
                           <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/backend/language" title="Language"><i class="entypo-export"></i><span>Language</span></a>
                              
                        </li>
                        <li>
                            <a class="tooltip-tip2 ajax-load" href="{{Request::root()}}/backend/setting" title="Setting"><i class="entypo-layout"></i><span>Setting</span></a>                                
                        </li>

                      
                    </ul>
         

                    <div class="side-dash">
                      
                    </div>
                </div>
            </div>
        </div>
    </div>