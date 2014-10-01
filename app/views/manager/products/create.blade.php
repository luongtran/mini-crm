@section('content')
            <!-- CONTENT -->
            {{Former::open(url('manager/products'))->method('post')}}
            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-10">
                         {{Session::get('msg_flash')}}   
                        <div class="portlet box blue">
                            <div class="portlet-title">
                                 <div class="caption">
					<i class="fa fa-gift"></i>{{trans('title.form.primary')}}
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
                                        <div class="form-group">                                            
                                            {{Former::text('name')->required()}}                                                                                        
                                        </div>
                                    
                                        <div class="form-group">                                         
                                            {{Former::textarea('description')}}                                                                                        
                                        </div>
                                    
                                        <div class="form-group"> 
                                            {{ Former::select('group_products')->fromQuery(GroupProduct::all(),'name','id')}}                                           
                                        </div>
                                        
                                        <div class="form-group">
                                            {{Former::text('cost')->required()->placeholder('Ex: 1.2')}}                                          
                                        </div>

                                        <div class="form-group">
                                           {{Former::number('discount')->min('0')->max('100')->placeholder('1-100 %')}}
                                        </div>

                                        <div class="form-group">
                                            {{Former::select('activated')->fromQuery(array('1'=>'True','0'=>'False'))}}                                      
                                        </div>
                                        
                                        <div class="form-group">           
                                            {{ Former::actions()->larger_primary_submit('create')}}                                                                                                                                                   
                                        </div>
                                        
                                        
                                     {{ Former::close()}}
                                </div>


                            </div>

                        </div>
                       
                    </div><!--end col-->     
            </div>
            </div><!--end row -->    

                                
                            
            
            {{Form::close()}}
@stop
            