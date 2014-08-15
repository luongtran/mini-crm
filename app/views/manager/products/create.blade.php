@section('content')
            <!-- CONTENT -->
            <!--TITLE -->
           @include('manager.products.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
           @include('manager.products.breadcrumb')
            <!-- END OF BREADCRUMB -->

            {{Former::open(url('manager/products'))->method('post')}}
            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-10">
                         {{Session::get('msg_flash')}}   
                        <div class="nest" id="basicClose">
                            <div class="title-alt">                                
                                <div class="titleClose">
                                    <a class="gone" href="#basicClose">
                                        <span class="entypo-cancel"></span>
                                    </a>
                                </div>
                                <div class="titleToggle">
                                    <a class="nav-toggle-alt" href="#basic">
                                        <span class="entypo-up-open"></span>
                                    </a>
                                </div>

                            </div>

                            <div class="body-nest" id="basic">
                                <div class="form_center">
                                        <div class="form-group">                                            
                                            {{Former::text('name')->required()}}                                                                                        
                                        </div>
                                    
                                        <div class="form-group">                                         
                                            {{Former::textarea('description')->class('textarea')}}                                                                                        
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
            