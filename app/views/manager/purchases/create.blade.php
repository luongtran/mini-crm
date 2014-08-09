@section('content')
            <!--TITLE -->
            @include('manager.customers.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.customers.breadcrumb')
            <!-- END OF BREADCRUMB -->

            {{Former::open(url('manager/purchases'))->method('POST')->enctype('multipart/form-data')}}
            <div class="content-wrap">
                <div class="row">                             
                        <div class="col-sm-10">
                        <div class="nest" id="profileClose">
                            <div class="title-alt">
                                <h6>ADD PRODUCT FOR CUSTOMER</h6>
                                <div class="titleClose">
                                    <a class="gone" href="#profileClose">
                                        <span class="entypo-cancel"></span>
                                    </a>
                                </div>
                                <div class="titleToggle">
                                    <a class="nav-toggle-alt" href="#profile">
                                        <span class="entypo-up-open"></span>
                                    </a>
                                </div>
                            </div>

                            <div class="body-nest" id="profile">
                                <div class="form_center">                                                        
                                       
                                        <div class="form-group">                                            
                                              {{Former::text('fullname')}}
                                        </div>

                                        <div class="form-group">                                            
                                              {{Former::text('address')}}
                                        </div>

                                        <div class="form-group">                 
                                            {{ Former::select('product_id')->fromQuery(Product::all(),'name','id')}}
                                        </div> 

                                        <div class="form-group">                 
                                            {{ Former::select('customer_id')->options($customer,'company_name','id')}}
										</div> 

                                        <div class="form-group">                                            
                                            {{Former::actions()->large_primary_submit('create')}}          
                                        </div> 
                                    
                                    </div>
                                </div> <!-- end body-->
                            
                            </div>
                            </div>  <!-- end col 12-->
                
            
            </div>
            </div><!--end row -->    
            {{Former::close()}}
@stop
            