@section('content')
<!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-mail"></i> 
                            <span>Mail
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
                                <strong>Dave mattew!</strong>&nbsp;&nbsp;Your last sig in at Yesterday, 16:54 PM
                            </div>


                        </div>

                    </div>
                    <div class="col-sm-2">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="btn-group btn-wigdet pull-right visible-lg">
                            <div class="btn">
                                Widget</div>
                            <button data-toggle="dropdown" class="btn dropdown-toggle" type="button">
                                <span class="caret"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <ul role="menu" class="dropdown-menu">
                                <li>
                                    <a href="#" onclick="getAdd();">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>
                                <li>
                                    <a href="#" >
                                        <span class="entypo-heart margin-iconic"></span>Favorite</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="entypo-cog margin-iconic"></span>Setting</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            <!--/ TITLE -->

            <!-- BREADCRUMB -->
            {{$breadcumb}}
            <!--END BREADCRUMB -->
            
            
<div class="row">
    <!--col-4-->
    <div class="col-lg-6">    
        <div class="panel panel-success">
            <div class="panel-heading"><h3 class='panel-title'>Show user</h3></div>
            <div class="panel-body">                               
                <label>Email</label>
                <h4>{{$user->email}}</h4>
                
                <label>First name</label>
                <h4>{{$user->first_name}}</h4>
                
                <label>Last name</label>
                <h4>{{$user->last_name}}</h4>
                
                <label>Group user</label>
                <h4>{{$user->group_name}}</h4>
                
                <label>Created at</label>
                <h4>{{$user->created_at}}</h4>
                
                <label>Updated at</label>
                <h4>{{$user->updated_at}}</h4>
                
                <label>Last Login</label>
                <h4>{{$user->last_login}}</h4>
                
                <label>Count access</label>
                <h4>{{$user->count_access}}</h4>
                              
                <a href="{{Request::root()}}/manager/users/{{$user->id}}/edit">  {{Form::submit(trans('common.button.edit'),array('class'=>'btn btn-primary'))}}  </a>
            </div>        
        </div>
        
    </div>
    <!--end col-4-->
</div>
@stop