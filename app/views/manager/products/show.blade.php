@section('content')
          <!-- CONTENT -->
            <!--TITLE -->
            @include('manager.products.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.products.breadcrumb')
            <!-- END OF BREADCRUMB -->

            {{Form::open(array('method'=>'post','url'=>'manager/products'))}}
            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-10">
                         {{Session::get('msg_flash')}}   
                        <div class="nest" id="basicClose">
                            <div class="title-alt">
                                <h6>{{$product->name}}</h6>
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
                                        <a href='{{url('manager/products/'.$product->id.'/edit')}}'><i class='btn btn-success'>{{trans('common.button.edit')}}</i></a></p>
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
            