@section('content')
<!-- CONTENT -->
           <!-- CONTENT -->
            <!--TITLE -->
             <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-document-edit"></i> 
                            <span>INVOICE
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
                                <strong>{{Auth::user()->first_name.' '.Auth::user()->last_name}}</strong>&nbsp;&nbsp;Your last sig in at {{Auth::user()->created_at}}
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
                                    <a href="{{Request::root()}}/client/employee/create">
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
                <li><a href="{{Request::root()}}/client" title="">Home</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/client/invoice" title="">Invoice</a>
                </li>
               
                <li class="pull-right">
                    
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->
<div class="table-responsive">
                                <!-- THE MESSAGES -->                               
                                <table class="table table-mailbox">                                    

                                    <tr class="unread">
                                        <th class="small-col">
                                        <input type="checkbox" id="ckbCheckAll">                        
                                        </th>
                                        <th>Number order</th>
                                        <th>Name product</th>                                                                                
                                        <th>Cost</th>
                                        <th>Discount</th>
                                        <th>Count</th>
                                        <th>Create at</th>
                                        <th>Expiry</th>
                                        <th></th>
                                       
                                    </tr>
                                    <?php $stt = 1;$count = 0;?>
                                    @foreach($purchases as $detail)                                    
                                    <tr >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$detail->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>   
                                        <td> {{$stt}}</td>            
                                        <td><a href="#">{{$detail->product_name}}</a></td>                                      
                                        <td> {{$detail->cost}}</td>                                        
                                        <td> {{$detail->discount}}</td>
                                        <td> {{$detail->cost}} </td>
                                        <td> {{$detail->created_at}}</td>
                                        <td> {{$detail->expiry}}</td>
                                        <td>
                                       <!--      <div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="{{Request::root()}}/manager/purchases/{{$detail->id}}"><i class="icon icon-monitor"></i>View profile</a>
                                            </li>                                                                                       
                                            <li class="divider"></li>
                                            <li><a href="{{Request::root()}}/manager/purchases/{{$detail->id}}/delete" onclick="return confirm('Are you want delete');"><i class="fa fa-trash-o"></i> Delete</a>
                                            </li>
                                        </ul> -->
                                    </div>

                                        </td>                                        
                                    </tr><?php $stt=$stt+1; $count = ($detail->cost) + $count; ?>
                                    @endforeach    
                                    
                                    <tr >
                                        <td></td>                                             
                                        <td>Total:</td>    
                                        <td></td>   
                                        <td> {{$count}}</td>    
                                        <td></td>   
                                        <td></td>   
                                        <td></td>   
                                        <td></td>   
                                    </tr>
                               </table>
                                
                            </div>

@stop