@section('content')
 <!--TITLE -->
               @include('manager.users.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
               @include('manager.users.breadcrumb')
            <!-- END BREADCRUMB -->
<div class="row">
    <!--col-4-->
    <div class="col-lg-6">    
        <div class="panel panel-success">
            <div class="panel-heading"><h3 class='panel-title'>{{trans('title.form.show_user')}}</h3></div>
            <div class="panel-body">                               
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