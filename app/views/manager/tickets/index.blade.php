@section('content')
      <!-- CONTENT -->
            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-document-edit"></i> 
                            <span>Ticket
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
                                    <a href="{{Request::root()}}/manager/tickets/create">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>                              
                                <li>
                                    <a href="#">
                                        <span class="entypo-plus-circled margin-iconic"></span>Filter status</a>
                                </li> 
                                <?php $status = CommonHelper::list_base('status');                              
                                               foreach($status as $key=>$value):
                                            ?>
                                            <li>
                                                <a href="{{Request::root()}}/manager/tickets/filter?key={{$key}}">
                                                    <span class="margin-iconic"></span>{{$value}}</a>
                                            </li>
                                <?php endforeach;?>
                                
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
                <li><a href="{{Request::root()}}/manager" title="Sample page 1">Manager</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/manager/tickets" title="Sample page 1">Titket</a>
                </li>                
                <li class="pull-right">
                    <div class="input-group input-widget">
                        {{Form::open(array('url'=>'manager/tickets/find','method'=>'get'))}}
                        <input style="border-radius:15px" name="key_find" type="text" placeholder="Search..." class="form-control">
                        {{Form::close()}}
                    </div>
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->
{{Session::get('msg_flash')}}


                            <div class="table-responsive">
                                <!-- THE MESSAGES -->                               
                                <table class="table table-mailbox">                                    

                                    <tr class="unread">
                                        <th class="small-col">
                                        <input type="checkbox" id="ckbCheckAll">                        
                                        </th>
                                        <th>Order Ticket</th>
                                        <th>Subject</th>
                                        <!-- <th>Author_id</th> -->
                                        <th>Client_id</th>
                                        <th>Status</th>
                                        <th>Create at</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($list_ticket as $ticket)
                                    <tr @if($ticket->status=='new') {{'class="success"'}} @elseif($ticket->status=='resolve'){{'class="danger"'}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$ticket->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/manager/tickets/{{$ticket->code}}">{{$ticket->code}}</a></td>
                                         <td >
                                           {{$ticket->subject}}
                                        </td>
                                        <!--  <td >
                                           {{$ticket->author_id}}
                                        </td> -->
                                          <td >
                                          {{$ticket->company_name}} {{$ticket->client_id}}
                                        </td>
                                        
                                        <td >
                                           {{$ticket->status}}
                                        </td>
                                         <td >
                                           {{$ticket->created_at}}
                                        </td>
                                        <td>
                                            <div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="{{Request::root()}}/manager/customers/{{$ticket->id}}"><i class="icon icon-monitor"></i>View profile</a>
                                            </li>                                               
                                            <li class="divider"></li>
                                            <li><a href="{{Request::root()}}/manager/customers/{{$ticket->id}}/edit"><i class="fa fa-pencil"></i>edit</a>
                                            </li>                                            
                                            <li class="divider"></li>
                                            <li><a href="{{Request::root()}}/manager/customers-del/{{$ticket->id}}" onclick="return confirm('Are you want delete');"><i class="fa fa-trash-o"></i> Delete</a>
                                            </li>
                                        </ul>
                                    </div>

                                        </td>                                        
                                    </tr>
                                    @endforeach    

                               </table>
                              </form>      
                            </div>



 
<div class="row">
    <div class="col-lg-6">
     @if(isset($parameter_panginate))      
     {{$list_ticket->appends($parameter_panginate)->links()}}
     @else
     {{$list_ticket->links()}}
     @endif
    </div>
</div>


@stop