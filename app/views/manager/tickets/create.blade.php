@section('content') 
<div class='row'>
    <div class="col-lg-12">
        <div class="panel panel-success">
            <div class="panel panel-heading">
              {{trans('title.form.new_ticket')}}
            </div>
            <div class="panel panel-body">  
            {{Former::open(url('manager/tickets'))->method('post')->enctype('multipart/form-data')}}
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
                        {{Former::select('client_id')->options($assign_client,Input::old('client_id'))}}
                    </div> 
                    
                     @if(Auth::user()->group_users == User::MANAGER) 
                     <div class="form-group">                       
                        {{Former::select('server_id')->options($assign_to,Input::old('server_id'))}}                         
                     </div>
                     @else
                     <input type='hidden' name='server_id' value="{{Auth::id()}}" />
                     @endif
                     
                     
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

@section('javascript')
<script type="text/javascript" src="{{asset('asset/share/ckeditor/ckeditor.js')}}"></script>   
@stop