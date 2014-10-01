@section('content')
            {{Former::open(url('manager/purchases'))->method('POST')->enctype('multipart/form-data')}}
            <div class="content-wrap">
                <div class="row">                             
                        <div class="col-sm-10">                                
                            <div class="portlet box blue">
                            <div class="portlet-title">
                                 <div class="caption">
					<i class="fa fa-gift"></i>{{trans('form.addNew')}}
				</div>
                                <div class="tools">
								<a href="" class="collapse">
								</a>
								<a href="#portlet-config" data-toggle="modal" class="config">
								</a>
								<a href="" class="reload">
								</a>
								<a href="" class="remove">
								</a>
				</div>
                            </div>

                            <div class="portlet-body">  
                                <div class="form_center">                      
                                       {{ Former::select('product_id')->fromQuery(Product::all(),'name','id')}}
                                       
                                        <div class="form-group">
                                            {{Former::text('deadline_from')->id('dp1')}}
                                        </div>  

                                        <div class="form-group">
                                            {{Former::number('expiry')->min('1')->max('120')->placeholder('Month 1,3,6,12,24,48 ..')->required()}}
                                        </div>  

                                         <div class="form-group"> 
                                        {{Former::radios('Type customer')->radios(array(
                                                              'Has Account' => array('name' => 'type_order', 'value' => "true",'checked'=>'checked','class'=>'type_order' ),
                                                              'Not Account' => array('name' => 'type_order', 'value' => "false",'class'=>'type_order' ),
                                        ))}}
                                         </div>

                                        <div class="customer_id">
                                            <div class="form-group">                 
                                                {{ Former::select('customer_id')->options($customer)}}
    										</div> 
                                        </div>

                                        <div class="customer_order">
                                            <div class="form-group">                                            
                                                      {{Former::textarea('customer_order')->rows('8')->placeholder('Enter content if not account')}}
                                            </div>  
                                        </div>  

                                        <div class="form-group">                                            
                                             {{Former::textarea('note')}}
                                        </div>                                     
                                       

                                        <div class="form-group"> 
                                            <input type="hidden" id="type_customer"   name="type_customer" value="1"/>
                                            {{Former::actions()->large_primary_submit('create')}}          
                                        </div>

                                    {{Former::close()}}
                                    </div>
                                </div> <!-- end body-->
                            
                            </div>
                            </div>  <!-- end col102-->
                
            
            </div>
            </div><!--end row -->  
@stop
            
@section('javascript')
    <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>  
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script> 
    <script type="text/javascript">
                                            $(function(){
                                                $(".customer_order").hide();

                                                $(".type_order").click(function(){                                                    
                                                    /*have account*/    
                                                    if($(this).val()=='true'){                   
                                                        $(".customer_id").show();
                                                        $(".customer_order").hide();
                                                        $("#type_customer").val('1');
                                                    }
                                                    else if($(this).val()=='false'){                  
                                                        $(".customer_order").show();
                                                        $(".customer_id").hide();
                                                        $("#type_customer").val('0');
                                                    }

                                                });

                                            /*validation date*/   
                                                var currentDate = new Date();  
                                                $("#dp1").datepicker({ dateFormat: 'yy/mm/dd' });                                             
                                                $('#dp1').datepicker('setDate',currentDate);
                                                $('#dp1').datepicker('option','minDate',currentDate);   
                                            });

                                        </script> 
                                    
@stop