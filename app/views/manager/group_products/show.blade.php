@section('content')       
        <div class="col-sm-8">  
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
                        <?php Former::populate($group_product);?>
                        {{Former::text('name')->disabled()}}
                        {{Former::textarea('description')->disabled()}}
                        </div>
        </div>
        </div>
@stop
            