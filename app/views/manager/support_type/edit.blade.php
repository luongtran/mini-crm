@section('content')
            <!-- CONTENT -->           
            {{Former::open(url('manager/support-type/'.$category->id))->method('PUT')}}
            <?php Former::populate($category);?>
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
                                            {{Former::textarea('description')}}
                                        </div>

                                        <div class="form-group">                                            
                                            {{Former::actions()->large_primary_submit('update')}}          
                                        </div> 
                                        
                                </div>


                            </div>

                        </div>
                       
                    </div><!--end col-->     
            </div>
            </div><!--end row -->    
            {{Former::close()}}

                                
@stop
            