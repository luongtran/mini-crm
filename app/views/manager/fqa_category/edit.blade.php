@section('content')           
            {{Former::open(url('manager/fqa-category/'.$category->id))->method('PUT')}}
            <?php Former::populate($category);?>
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
            