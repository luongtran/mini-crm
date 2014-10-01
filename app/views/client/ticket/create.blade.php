@section('content')
<script type="text/javascript" src="{{asset('asset/backend/plusin/ckeditor/ckeditor.js')}}"></script> 
<div class='row'>
    <div class="col-lg-12">
	    {{Session::get('msg_flash')}}
        <div class="panel panel-success">
            <div class="panel panel-heading">
               {{trans('common.menu.new_ticket')}}
            </div>
            <div class="panel panel-body">  
            {{Former::open(url('client/tickets'))->method('post')->enctype('multipart/form-data')}}
                <div class="col-lg-8">
                <div class="form-group">                
                    {{Former::text('subject')->required()}}                  
                </div>
                 <div class="form-group">
                    {{Former::textarea('description')->class('form-control ckeditor')}}                   
                </div>               
                </div><!--col right -->  

                <div class="col-lg-4">
                     <div class="form-group">
                    {{Former::select('priority')->options($priority,Input::old('priority'))}}
                    </div> 

                    <div class="form-group">
                        {{Former::select('support_type')->options($support_type,Input::old('support_type'))}}                       
                    </div>                     
                        
                    <div class="form-group">                                      
                         {{Former::file('file')}}                                                                                                                
                    </div>
                    
                    <div class='clear'></div>
                    {{Former::actions()->large_primary_submit('create')}}
                    
                </div><!--col left -->     
                {{Former::close()}}
            </div>
        </div>
    </div>
</div>

@stop