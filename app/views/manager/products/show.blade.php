@section('content')
            {{Former::open(url('manager/products'))->method('post')}}
            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-10">
                         {{Session::get('msg_flash')}}   
                        <div class="portlet box blue">
                            <div class="portlet-title">
                                 <div class="caption">
					<i class="fa fa-gift"></i>{{$product->name}}
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
                                            <label for="">{{trans('title.table.name')}}: <i>  {{$product->name}}</i></label>
                                        </div>   
                                         <div class="form-group">
                                            <label for="">{{trans('title.table.description')}}: <i>  {{$product->description}}</i></label>
                                        </div>
                                        <div class="form-group">
                                            <label for="">{{trans('title.table.cost')}}:  <i>{{$product->cost}}</i></label>
                                        </div>                                    
                                        <div class="form-group">
                                            <label for="">{{trans('title.table.discount')}}: <i>{{$product->discount}}</i></label>
                                        </div>                                    
                                        <div class="form-group">
                                            <label for="">{{trans('title.table.group_product')}}: <i>{{$product->group_name}}</i></label>
                                        </div>   
                                         <div class="form-group">
                                            <label for="">{{trans('title.table.created')}}: <i>{{$product->created_at}}</i></label>
                                        </div> 

                                         <div class="form-group">
                                            <label for="">{{trans('title.table.updated')}}: <i>{{$product->updated_at}}</i></label>
                                        </div>
                                        <div class="form-group">
                                        <a href='{{url('manager/products/'.$product->id.'/edit')}}'><i class='btn-larger btn-primary btn'>{{trans('common.button.edit')}}</i></a></p>
                                    </div>
                                </div>


                            </div>

                        </div>
                       
                    </div><!--end col-->     
            </div>
            </div><!--end row -->                
            {{Former::close()}}
@stop
            