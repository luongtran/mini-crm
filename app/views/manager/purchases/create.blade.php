@section('content')
           <!--TITLE -->
            @include('manager.purchases.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.purchases.breadcrumb')
            <!-- END OF BREADCRUMB -->


<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>  
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script> 

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
                                            {{ Former::select('product_id')->fromQuery(Product::all(),'name','id')}}
                                        </div> 

                                        <div class="form-group">
                                            {{Former::text('deadline_from')->id('dp1')}}
                                        </div>  

                                        <div class="form-group">
                                            {{Former::number('expiry')->min('1')->max('120')->placeholder('Month 1,3,6,12,24,48 ..')->required()}}
                                        </div>  

                                        <div class="form-group"> 
                                          <input value="true" type='radio' name="type_order" class="type_order" checked="checked"> <label>Has account</label>
                                          <input value="false" type='radio' name="type_order" class="type_order"> <label>No account</label> 
                                        </div> 

                                        <div class="customer_id">
                                            <div class="form-group">                 
                                                {{ Former::select('customer_id')->options($customer)}}
    										</div> 
                                        </div>

                                        <div class="customer_order">
                                        <div class="form-group">                                            
                                                  {{Former::textarea('customer_order')->class('textarea')->placeholder('Enter content if not account')}}
                                        </div>  
                                        </div>  

                                        <div class="form-group">                                            
                                             {{Former::textarea('note')->class('textarea')}}
                                        </div>                                     
                                       

                                        <div class="form-group">                                            
                                            {{Former::actions()->large_primary_submit('create')}}          
                                        </div>

                                        <script type="text/javascript">
                                            $(function(){
                                                $(".customer_order").hide();

                                                $(".type_order").click(function(){                                                    

                                                    if($(this).val()=='true'){ 
                                                                                                  
                                                        $(".customer_id").show();
                                                        $(".customer_order").hide();
                                                    }
                                                    else if($(this).val()=='false'){                  
                                                        $(".customer_order").show();
                                                        $(".customer_id").hide();
                                                    }

                                                });

                                            /*validation date*/   
                                                var currentDate = new Date();  
                                                $("#dp1").datepicker({ dateFormat: 'yy/mm/dd' });                                             
                                                $('#dp1').datepicker('setDate',currentDate);
                                                $('#dp1').datepicker('option','minDate',currentDate);   
                                            });

                                        </script> 
                                    
                                    </div>
                                </div> <!-- end body-->
                            
                            </div>
                            </div>  <!-- end col 12-->
                
            
            </div>
            </div><!--end row -->    
            {{Former::close()}}
@stop
            