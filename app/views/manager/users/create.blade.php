@section('content')           
<div class="row">
    <!--col-4-->
    <div class="col-lg-6">  
           {{Session::get('msg_flash')}}   
        <div class="portlet box green">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>{{trans('form.addNew')}}
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
             
               {{Former::open(url('manager/users'))->method('POST')}}
                <div class="form-group">                   
                    {{ Former::text('email')}}
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
                    {{ Former::select('group_users')->fromQuery(GroupUser::where('name','<>','employee')->where('name','<>','customer')->get(),'name','id')}}
                </div>           
                <div class="form-group">
                    {{Former::select('activated')->fromQuery(array('1'=>'True','0'=>'False'))}}                                      
                </div>
                        
                <div class="form-group">                      
                    {{Former::submit('create')->class('btn green')}}                    
                </div>
            {{ Former::close() }}
            
            </div>        
        </div>
        
    </div>
    <!--end col-4-->
</div>
@stop