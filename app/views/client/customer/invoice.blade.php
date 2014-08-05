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



<div class="col-sm-12">                                                                 
                        <div class="mail_header">
                            <div class="row">
                                  {{Session::get('msg_flash')}} 
                               <div class="col-sm-8">
                                              
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
                                        <th>Name</th>                                        
                                        <th>Create at</th>                                      
                                        <th></th>
                                       
                                    </tr>
                                    <?php $order = 1;?>
                                    @foreach($purchases as $invoice)
                                    <tr>
                                        <td class="small-col">
                                            {{$order}}  
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/client/invoice/show/{{$invoice->code}}">{{$invoice->code}}</a></td>                                                                                                              
                                        <td> {{$invoice->created_at}}</td>
                                        <td>   
                                        <!-- div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                            <span class="caret"></span>
                                        </button>                                        
                                          </div> -->
                                        </td>                                        
                                    </tr>
                                     <?php $order++;?>
                                    @endforeach    

                               </table>
                              </form>
                            

                                
                                
                                
                            </div>
     
                                <div class="">                                   
                                    <div class="btn-group pull-left">                                       
                                         <?php //echo $list->links(); ?>
                                    </div>
                                </div>
                            <!-- /.table-responsive -->
                           

                    </div>    
@stop
