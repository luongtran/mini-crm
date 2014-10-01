@section('content')
<div class="row">
    <!--col-4-->
    <div class="col-lg-6">    
         <div class="portlet box blue">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>{{trans('form.view')}}  
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
                <label>{{trans('title.table.email')}}</label>
                <h4>{{$user->email}}</h4>
                
                <label>{{trans('title.table.first_name')}}</label>
                <h4>{{$user->first_name}}</h4>
                
                <label>{{trans('title.table.last_name')}}</label>
                <h4>{{$user->last_name}}</h4>
                
                <label>{{trans('title.table.group_users')}}</label>
                <h4>{{$user->groupUser->name}}</h4>
                
                <label>{{trans('title.table.created')}}</label>
                <h4>{{$user->created_at}}</h4>
                
                <label>{{trans('title.table.updated')}}</label>
                <h4>{{$user->updated_at}}</h4>
                
                <label>{{trans('title.table.last_login')}}</label>
                <h4>{{$user->last_login}}</h4>
                
                <label>{{trans('title.table.count_access')}}</label>
                <h4>{{$user->count_access}}</h4>                              
                <a href="{{Request::root()}}/manager/users/{{$user->id}}/edit">  {{Form::submit(trans('common.button.edit'),array('class'=>'btn btn-primary'))}}  </a>
            </div>        
        </div>
        
    </div>
    <!--end col-4-->
</div>
@stop