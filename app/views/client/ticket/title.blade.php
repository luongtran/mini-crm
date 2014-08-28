 <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-mail"></i> 
                            <span>{{trans('title.form.ticket')}}
                            </span>
                        </h2>
                    </div>

                    <div class="col-sm-7">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="tittle-middle-header">
                            <div class="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <span class="tittle-alert entypo-info-circled"></span>
                                Welcome back,&nbsp;
                                <strong>{{Auth::user()->first_name.' '.Auth::user()->last_name}}</strong>&nbsp;&nbsp;Your last sig in at {{Auth::user()->last_login}}
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                         <div class="devider-vertical visible-lg"></div>
                         <div class="btn-group btn-wigdet pull-right visible-lg"> 
                            <div class="btn">
                                <a href="{{Request::root()}}/client/tickets/create" > {{trans('common.button.create')}} </a> 
                            </div>
                            <button data-toggle="dropdown" class="btn dropdown-toggle" type="button">
                                <span class="caret"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>                            
                                <ul role="menu" class="dropdown-menu">
                                <li>
                                    <a href="{{Request::root()}}/client/tickets/create">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>  
                                <li class="divider"></li>                            
                                <li>
                                    <a href="#">
                                        <span class="margin-iconic"></span><b>Filter status</b></a>
                                </li> 
                                <?php $status = Status::all();                              
                                               foreach($status as $value):
                                            ?>
                                            <li>
                                                <a href="{{Request::root()}}/client/tickets/filter?key={{$value->id}}">
                                                 <span class="entypo-plus-circled margin-iconic"></span>{{$value->name}}</a>
                                            </li>                       
                                <?php endforeach;?>              
                               </ul>                
                            </div>
                    </div>

            </div>
</div>