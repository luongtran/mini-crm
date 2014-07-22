@section('content')
<div id="profile">
<div class="content-wrap">
                <!-- PROFILE -->
                <div class="row">
                    <div class="col-sm-12">
                        <div class="well profile">
                            <div class="col-sm-12">
                                <div class="col-xs-12 col-sm-4 text-center">

                                    <ul class="list-group">
                                        <li class="list-group-item text-left">
                                            <span class="entypo-user"></span>&nbsp;&nbsp;Info of Company</li>
                                        <li class="list-group-item text-center">
                                            <img class="img-circle img-responsive img-profile" alt="" src="">

                                        </li>
                                        <li class="list-group-item text-center">
                                            <span class="pull-left">
                                                <strong>Ratings</strong>
                                            </span>


                                            <div class="ratings">

                                                <a href="#">
                                                    <span class="fa fa-star"></span>
                                                </a>
                                                <a href="#">
                                                    <span class="fa fa-star"></span>
                                                </a>
                                                <a href="#">
                                                    <span class="fa fa-star"></span>
                                                </a>
                                                <a href="#">
                                                    <span class="fa fa-star"></span>
                                                </a>
                                                <a href="#">
                                                    <span class="fa fa-star-o"></span>
                                                </a>

                                            </div>


                                        </li>

                                        <li class="list-group-item text-right">
                                            <span class="pull-left">
                                                <strong>Joined</strong>
                                            </span>{{$profile->created_at}}</li>
                                        <li class="list-group-item text-right">
                                          
                                            <div class="text-center">
                                                <img alt="avatar" class="avatar img-circle" src="http://placehold.it/150" width="200">
                                                <h6>Upload a different photo...</h6>

                                                <div class="input-group">
<!--                                                    <span class="input-group-btn">
                                                        <span class="btn btn-primary btn-file">
                                                            Browse
                                                            <input type="file" multiple="" name="avatar">
                                                        </span>
                                                    </span>                                                 -->
                                                </div>
                                            </div>
                                       

                                        </li>

                                    </ul>

                                </div>
                                <div class="col-xs-12 col-sm-8 profile-name">
                                    <h2>{{$profile->company_name}}
                                        <span class="pull-right social-profile">
                                            <i class="entypo-facebook-circled"></i>  <i class="entypo-twitter-circled"></i>  <i class="entypo-linkedin-circled"></i>  <i class="entypo-github-circled"></i>  <i class="entypo-gplus-circled"></i>
                                        </span>
                                    </h2>
                                    <hr>

                                    <dl class="dl-horizontal-profile">
                                        <dt>Customer Id</dt>
                                        <dd>{{$profile->id}}</dd>
                                        
                                        <dt>Contact employee at company</dt>
                                        <dd>{{$profile->contact_employee_company}}</dd>
                                        
                                        <dt>Email</dt>
                                        <dd>{{$profile->email}}</dd>

                                        <dt>Phone</dt>
                                        <dd>{{$profile->phone_number}}</dd>
                                        
                                        <dt>Sector</dt>
                                        <dd>{{$profile->name_sector}}</dd>
                                                                                
                                        <dt>Last Update</dt>
                                        <dd>{{$profile->updated_at}}</dd>                                     

                                    </dl>

                                    <hr>

                                
                                    <div class="table-responsive">
                                       <!--  <table class="table table-hover table-striped table-condensed">

                                            <tbody>
                                                <tr>
                                                    <td><i class="pull-right fa fa-edit"></i> Today, 1:00 - Jeff Manzi liked your post.</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="pull-right fa fa-edit"></i> Today, 12:23 - Mark Friendo liked and shared your post.</td>
                                                </tr>                                           
                                            </tbody>
                                        </table> -->
                                    </div>

                                </div>

                            </div>
                            <div class="col-xs-12 divider text-center">
                                <div class="col-xs-12 col-sm-4 emphasis">
                                    <h2>
                                        <strong>20,7K</strong>
                                    </h2>
                                    <p>
                                        <small>Followers</small>
                                    </p>                                 
                                </div>
                                <div class="col-xs-12 col-sm-4 emphasis">
                                    <h2>
                                        <strong>245</strong>
                                    </h2>
                                    <p>
                                        <small>Activity</small>
                                    </p>                                  
                                </div>
                                <div class="col-sm-4 emphasis">
                                    <h2>
                                        <strong>{{$profile->employee_count}}</strong>
                                    </h2>
                                    <p>
                                        <small>Employees</small>
                                    </p>                                   
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="row">


                        <div class="col-sm-12">
                            <!-- BLANK PAGE-->

                            <div id="Blank_PageClose" class="nest" style="">
                                <div class="title-alt">
                                    <h6>
                                        Purchase product of customer</h6>
                                    <div class="titleClose">
                                        <a href="#Blank_PageClose" class="gone">
                                            <span class="entypo-cancel"></span>
                                        </a>
                                    </div>
                                    <div class="titleToggle">
                                        <a href="#Blank_Page_Content" class="nav-toggle-alt">
                                            <span class="entypo-up-open"></span>
                                        </a>
                                    </div>

                                </div>

                                <div id="Blank_Page_Content" class="body-nest">
                                    <div class="row">
                                      
                                          <div class="table-responsive">
                                                <!-- THE MESSAGES -->                               
                                                <table class="table table-mailbox">                                    

                                                    <tr class="unread">
                                                        <th class="small-col"></th>
                                                        <th>Name</th>
                                                        <th>Cost</th>
                                                        <th>Discount</th>
                                                        <th>Expiry</th>
                                                        <th>Created at</th>
                                                        <th>Deadline</th>
                                                        <th>Code</th>
                                                        <th></th>

                                                    </tr>
                                                    <?php $test_product = DB::table('purchase_products')->get();?>
                                                    @foreach($purchases as $product)
                                                    <tr >          
                                                        <td></td>
                                                        <td><a href="{{Request::root()}}/manager/purchases/{{$product->code}}">{{$product->product_name}}</a></td>                                                      
                                                        <td> {{$product->cost}}</td>
                                                        <td> {{$product->discount}}</td>
                                                        <td> {{$product->expiry}}</td>                                                        
                                                        <td> {{$product->created_at}}</td>
                                                        <td> {{$product->deadline_from}}</td>
                                                        <td> {{$product->code}}</td>
                                                        <td><div class="btn-group pull-left">
                                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                                            <span class="caret"></span>
                                                        </button>
                                                        <ul class="dropdown-menu" role="menu">
                                                            <li><a href="{{Request::root()}}/manager/purchases/{{$product->code}}"><i class="icon icon-monitor"></i>Detail</a>
                                                            </li>  
                                                        </ul>
                                                    </div>

                                                        </td>                                        
                                                    </tr>
                                                    @endforeach    

                                               </table>
                                          </div>
                                        
                                    </div>                               
                                </div>
                            </div>
                        
                        </div>
                        <!-- END OF BLANK PAGE -->

                    </div>
                    <!-- source -->
                         <div class="row">


                        <div class="col-sm-12">
                            <!-- BLANK PAGE-->

                            <div id="Blank_PageClose" class="nest" style="">
                                <div class="title-alt">
                                    <h6>
                                       Genegare of customer</h6>
                                    <div class="titleClose">
                                        <a href="#Blank_PageClose" class="gone">
                                            <span class="entypo-cancel"></span>
                                        </a>
                                    </div>
                                    <div class="titleToggle">
                                        <a href="#Blank_Page_Content" class="nav-toggle-alt">
                                            <span class="entypo-up-open"></span>
                                        </a>
                                    </div>

                                </div>

                                <div id="Blank_Page_Content" class="body-nest">
                                    <a href="#">contract.xls</a></br>                       
                                    <a href="#">document.docx</a></br>
                                    <p><input type="file" name=""/>Document</p>
                                    <p><input type="file" name=""/>Contract</p>
                                    
                                </div>
                            </div>
                        
                        </div>
                        <!-- END OF BLANK PAGE -->

                    </div>
                </div>
                <!-- END OF PROFILE -->

     </div> 


<!--end profile -->
</div>
@stop