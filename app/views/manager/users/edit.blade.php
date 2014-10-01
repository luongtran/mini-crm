@section('content')         
<div class="row">
    <!--col-4-->
    <div class="col-lg-6">    {{Session::get('msg_flash')}}     
        <div class="portlet box blue">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>{{trans('form.update')}}
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
              
               <?php Former::populate($user);?>
               {{Former::open(url('manager/users/'.$user->id))->method('PUT')}}
                          
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
                    {{Former::select('trash')->fromQuery(array('0'=>'False','1'=>'True'))}}                                      
                </div>
                        
                <div class="form-group">                      
                    {{Former::actions()->large_primary_submit('update')}}                    
                </div>
            {{ Former::close() }}
            
            </div>        
        </div>
        
    </div>
    <!--end col-4-->
</div>
@stop