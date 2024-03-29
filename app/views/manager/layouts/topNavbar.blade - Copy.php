 <nav role="navigation" class="navbar navbar-static-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" class="navbar-toggle" type="button">
                    <span class="entypo-menu"></span>
                </button>
                <button class="navbar-toggle toggle-menu-mobile toggle-left" type="button">
                    <span class="entypo-list-add"></span>
                </button>




                <div id="logo-mobile" class="visible-xs">
                    <h1>CRM
                        <span>v1.2</span>
                    </h1>
                </div>

            </div>


            <!-- Collect the nav links, forms, and other content for toggling -->
            <script src="{{Request::root()}}/asset/share/js/load_messages.js"></script>
            <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">                
                <ul class="nav navbar-nav">

                    <li class="dropdown">
                        
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#"><i style="font-size:20px;" class="icon-conversation"></i><div id="load_count_message"></div></a>
                        <ul style="margin: 11px 0 0 9px;" role="menu" class="dropdown-menu dropdown-wrap" id="load_message">
                           
                        </ul>
                    </li>
                    <li>

                        <a data-toggle="dropdown" class="dropdown-toggle" href="#"><i style="font-size:19px;" class="entypo-export"></i><div class="noft-green">2</div></a>
                        <ul style="margin: 12px 0 0 0;" role="menu" class="dropdown-menu dropdown-wrap">
                            <?php $language =  Language::where('status','=','publish')->get(); if($language){?>
                            @foreach($language as $lang)
                            <li>
                               <a href="<?php echo Route('change_language', array('lang' =>$lang->code, 'return_url' => Request::url()) );?>"><span class="<?php if(Session::get('current_locale')==$lang->code){echo 'label label-default';}?>" > {{$lang->name}} </span></a>                                                                 
                            </li>
                            @endforeach
                            <?php }?>
                        </ul>
                    </li>
                    <li><a href="#"><i data-toggle="tooltip" data-placement="bottom" title="Help" style="font-size:20px;" class="icon-help tooltitle"></i></a>
                    </li>

                </ul>
               <!--  <div id="nt-title-container" class="navbar-left running-text visible-lg">
                    <ul class="date-top">
                        <li class="entypo-calendar" style="margin-right:5px"></li>
                        <li id="Date"></li>


                    </ul>

                    <ul id="digital-clock" class="digital">
                        <li class="entypo-clock" style="margin-right:5px"></li>
                        <li class="hour"></li>
                        <li>:</li>
                        <li class="min"></li>
                        <li>:</li>
                        <li class="sec"></li>
                        <li class="meridiem"></li>
                    </ul>
                    <ul id="nt-title">
                        <li><i class="wi-day-lightning"></i>&#160;&#160;Berlin&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
                        </li>
                        <li><i class="wi-day-lightning"></i>&#160;&#160;Yogyakarta&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; Tonight- 72 °F (22.2 °C)
                        </li>

                        <li><i class="wi-day-lightning"></i>&#160;&#160;Sttugart&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
                        </li>

                        <li><i class="wi-day-lightning"></i>&#160;&#160;Muchen&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
                        </li>

                        <li><i class="wi-day-lightning"></i>&#160;&#160;Frankurt&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
                        </li>

                    </ul>
                </div> -->

                <ul style="margin-right:0;" class="nav navbar-nav navbar-right">
                    <li>
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">                          
                            @if(Auth::check())                                  
                                <?php
                                  if(Auth::user()->avatar)
                                    {$avatar = url(Auth::user()->avatar);} 
                                  else  
                                    {$avatar = url('asset/backend/assets/img/small-bg13.jpg');} 
                                  ?>
                                  <img src="{{$avatar}}" class="admin-pic img-circle">
                                 {{Auth::user()->first_name.' '.Auth::user()->last_name}} <b class="caret"></b>
                            @endif
                        </a>
                        <ul style="margin-top:14px;" role="menu" class="dropdown-setting dropdown-menu">
                            <li>
                                <a href="{{Request::root()}}/manager/view-profile">
                                    <span class="entypo-user"></span>&#160;&#160;{{trans('title.form.my_profile')}}</a>
                            </li> 
                            <li class="divider"></li>
                            <li>
                                <a href="{{Request::root()}}/crm-logout">
                                    <span class="entypo-logout"></span>&#160;&#160;{{trans('common.button.logout')}}</a>
                            </li>
                        </ul>
                    </li>
                  
                    <li class="hidden-xs">
                        <a class="toggle-left" href="#">
                            <span style="font-size:20px;" class="entypo-list-add"></span>
                        </a>
                    </li>
                </ul>

            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>