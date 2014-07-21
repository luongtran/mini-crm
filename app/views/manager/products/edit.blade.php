@section('content')
            <!-- CONTENT -->
            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-document-edit"></i> 
                            <span>Products
                            </span>
                        </h2>

                    </div>

                    <div class="col-sm-7">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="tittle-middle-header">

                            <div class="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <span class="tittle-alert entypo-info-circled"></span>
                                Welcome back,&nbsp;
                                <strong>Dave mattew!</strong>&nbsp;&nbsp;Your last sig in at Yesterday, 16:54 PM
                            </div>


                        </div>

                    </div>
                    <div class="col-sm-2">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="btn-group btn-wigdet pull-right visible-lg">
                            <div class="btn">
                                Widget</div>
                            <button data-toggle="dropdown" class="btn dropdown-toggle" type="button">
                                <span class="caret"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <ul role="menu" class="dropdown-menu">
                                <li>
                                    <a href="{{Request::root()}}/manager/products/create">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="entypo-heart margin-iconic"></span>Favorite</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="entypo-cog margin-iconic"></span>Setting</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            <!--/ TITLE -->

            <!-- BREADCRUMB -->
            <ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><a href="{{Request::root()}}/manager" title="Sample page 1">Manager</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/manager/products" title="Sample page 1">Product</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="#" title="Sample page 1">Edit</a>
                </li>
                <li class="pull-right">
                    <div class="input-group input-widget">

                        <input style="border-radius:15px" type="text" placeholder="Search..." class="form-control">
                    </div>
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->

            {{Form::open(array('method'=>'put','url'=>'manager/products/'.$product->id))}}
            <div class="content-wrap">
                <div class="row">                   
                    <div class="col-sm-10">
                         {{Session::get('msg_flash')}}   
                        <div class="nest" id="basicClose">
                            <div class="title-alt">
                                <h6>Basic</h6>
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
                                            <label for="">Name<span class='val-star'>(*)</span></label>
                                            {{Form::text('name',$product->name,array('placeholder'=>'Enter name','class'=>'form-control'))}}                                            
                                            <span class="alert-danger">{{$errors->first('name')}}</span>                                            
                                        </div>
                                    
                                        <div class="form-group">
                                            <label for="">Description<span class='val-star'>(*)</span></label>
                                            {{Form::textarea('description',$product->description,array('placeholder'=>'Enter description','style'=>'width: 100%; min-height: 30px; height: 100%;','rows'=>'3'))}}                                            
                                            <span class="alert-danger">{{$errors->first('description')}}</span>
                                        </div>
                                    
                                        <div class="form-group">                                            
                                            <label for="">Group products</label>  
                                            {{ Form::select('group_products',$group_products,$product->group_products,array('class'=>'form-control'))}} 
                                             <span class="alert-danger">{{$errors->first('group_products')}}</span>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="">Cost<span class='val-star'>(*)</span></label>
                                            {{Form::text('cost',$product->cost,array('placeholder'=>'Enter cost','class'=>'form-control'))}}                                            
                                            <span class="alert-danger">{{$errors->first('cost')}}</span>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Discount (%)</label>
                                            {{Form::text('discount',$product->discount,array('placeholder'=>'Enter discount','class'=>'form-control'))}}                                                                                        
                                            <span class="alert-danger">{{$errors->first('discount')}}</span>
                                        </div>
                                                                                  
                                        <div class="form-group">                                            
                                            <label for="">Active</label>  
                                            {{ Form::select('activated',array('1'=>'True','0'=>'False') ,$product->activated,array('class'=>'form-control'))}}                                                                                                                                                   
                                        </div>
                                        
                                        <div class="form-group">           
                                            {{ Form::submit('Update',array('class'=>'btn btn-primary'))}}                                                                                                                                                   
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
            