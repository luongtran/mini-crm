@section('content')
            <!-- CONTENT -->
             @include('manager.group_products.title')
             @include('manager.group_products.breadcrumb')
           
            {{Former::open(url('manager/group-products/'.$group_product->id))->method('PUT')}}
            <?php Former::populate($group_product);?>
            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-10">
                         {{Session::get('msg_flash')}}   
                        <div class="nest" id="basicClose">
                            <div class="title-alt">
                               
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
                                            {{Former::actions()->large_primary_submit('update')}}          
                                        </div> 
                                        
                                    </form>
                                </div>


                            </div>

                        </div>
                       
                    </div><!--end col-->     
            </div>
            </div><!--end row -->    

                                
                            
            
            {{Form::close()}}
@stop
            