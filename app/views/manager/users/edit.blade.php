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
            <div class="panel-heading"><h3 class='panel-title'>Update user</h3></div>
            <div class="panel-body">               
            {{Session::get('msg_flash')}}
              {{Former::open(url('manager/users/'.$user->id))->method('PUT')}}  
              <?php Former::populate($user);?>
                <div class="form-group">                   
                    {{Former::text('email')->disabled('disabled')}}
                </div>            
                <div class="form-group">                                     
                    {{ Former::password('password')}}
                </div>            
                <div class="form-group">                  
                    {{ Former::password('password_confirmation')}}                    
                </div>                                      
                <div class="form-group">
                     {{Former::text('first_name')}}
                </div>
                <div class="form-group">
                     {{Former::text('last_name')}}
                </div>                                
                <div class="form-group">                    
                     {{ Former::select('group_users')->fromQuery(GroupUser::all(),'name','id')}}                    
                </div>          
            
                <div class="form-group">
                    {{Former::select('activated')->fromQuery(array('1'=>'True','0'=>'False'))}}                                                      
                </div> 

                <div class="form-group">
                    {{Former::select('trash')->fromQuery(array('1'=>'True','0'=>'False'))}}                                                      
                </div> 

                <div class="form-group">                      
                    {{Former::actions()->large_primary_submit('update')}}                    
                </div>
            {{ Form::close() }}
            
            </div>        
        </div>
        
    </div>
    <!--end col-4-->
</div>
@stop