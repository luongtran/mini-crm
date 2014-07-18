@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>            

            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-mail"></i> 
                            <span>User
                            </span>
                        </h2>

                    </div>

                    <div class="col-sm-7">
                         <div class="devider-vertical visible-lg"></div>
                         <div class="btn-group btn-wigdet pull-right visible-lg">
                          
                             <form role='form' style="margin-top: 5px">
                                     <div class="btn-group btn-wigdet pull-left visible-lg">
                                        <input type='text' placeholder="Search..."  class='form-control'/>                                       
                                     </div>
                                     <div class="btn-group btn-wigdet pull-left visible-lg">
                                         <input type='button' class='form-control' value="Search"/>                                       
                                     </div>
                                </form>                             
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
                                    <a href="{{Request::root()}}/users/getAdd">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            <!--/ TITLE -->

            <!-- BREADCRUMB -->
            <ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}" title="Home">Home</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}" title="">Users</a>
                </li>
                <li class="pull-right">
                    
                </li>
            </ul>
<div class="col-sm-12">
     {{ Form::open(array('url' => 'users/action','method'=>'post','role'=>'form','id'=>'frm-add')) }}                                                               
                        <div class="mail_header">
                            <div class="row">
                                  {{Session::get('msg_flash')}} 
                               <div class="col-sm-6">

                                    <div style="margin-right:10px" class="btn-group pull-left">
                                      <div class="btn">
                                            <input type="checkbox" style="margin:0 5px;padding:0;position:relative;top:2px;" id="ckbCheckAll">All
                                        </div>
                                   </div>
                                   <div style="margin-right:10px" class="btn-group pull-left">
                                      
                                        <div class="btn-group pull-left">  
                                             {{ Form::select('action',array('pending'=>'Pending','active'=>'Active','del'=>'Delete') ,'hide' ,array('class'=>'form-control'))}}                                   
                                        </div>
                                        <div class="btn-group pull-left">      
                                        <button style="margin-right:10px" type="submit" data-color="#39B3D7" data-opacity="0.95" class="btn button test pull-left">
                                        <span class="entypo-arrows-ccw"></span>&nbsp;&nbsp;Change</button>
                                        </div>
                                    </div>

                                    


                                </div>


                                <div class="col-sm-6">                                   
                                    
                                </div>


                            </div>

                        </div>

                            <div class="table-responsive">
                                <!-- THE MESSAGES -->                               
                                <table class="table table-mailbox">                                    

                                    <tr class="unread">
                                        <th class="small-col">  
                                        </th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Permission</th>
                                        <th>Create at</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($list as $users)
                                    <tr @if($users->activated==0){{"class='danger'"}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$users->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/users/show/{{$users->id}}">{{$users->username}}</a></td>
                                        <td class="subject">
                                           {{$users->email}}
                                        </td>
                                        <td> {{$users->group_users}}</td>
                                        <td> {{$users->created_at}}</td>
                                        <td>
                                            <div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="{{Request::root()}}/users/edit/{{$users->id}}"><i class="fa fa-pencil"></i>edit</a>
                                            </li>                                            
                                            <li class="divider"></li>
                                            <li><a href="{{Request::root()}}/users/del/{{$users->id}}" onclick="return confirm('Are you want delete');"><i class="fa fa-trash-o"></i> Delete</a>
                                            </li>
                                        </ul>
                                    </div>

                                        </td>                                        
                                    </tr>
                                    @endforeach    

                               </table>
                              </form>
                            

                                
                                
                                
                            </div>
            {{Form::close()}}
                                <div class="">                                   
                                    <div class="btn-group pull-left">                                       
                                         <?php echo $list->links(); ?>
                                    </div>
                                </div>
                            <!-- /.table-responsive -->
                           

                    </div>    
@stop