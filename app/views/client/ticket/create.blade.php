@section('content')
<!-- CONTENT -->
            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-document-edit"></i> 
                            <span>Client
                            </span>
                        </h2>

                    </div>

                    <div class="col-sm-7">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="tittle-middle-header">

                            <div class="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <span class="tittle-alert entypo-info-circled"></span>
                                @if(Auth::check())
                                Welcome back,&nbsp;
                                <strong>{{Auth::user()->first_name}} </strong>&nbsp;&nbsp;Your last sig in at {{Auth::user()->updated_at}} 
                                @endif
                            </div>


                        </div>

                    </div>
                    <div class="col-sm-2">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="btn-group btn-wigdet pull-right visible-lg">
                           
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
                <li><a href="{{Request::root()}}/client" title="Sample page 1">Client</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/client/ticket" title="Sample page 1">Ticket</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="#" title="Sample page 1">Create</a>
                </li>
                <li class="pull-right">
                    <div class="input-group input-widget">

                        <input style="border-radius:15px" type="text" placeholder="Search..." class="form-control">
                    </div>
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->     
<div class='row'>
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel panel-heading">
                New ticket
            </div>
            <div class="panel panel-body">  
            {{Form::open(array('url'=>'client/tickets','method'=>'post','enctype'=>'multipart/form-data'))}}
                <div class="col-lg-8">
                 <div class="form-group">
                    <label>Subject</label>
                    {{Form::text('subject',Input::old('subject'),array('class'=>'form-control'))}}
                     <span class="alert-danger">{{$errors->first('subject')}}</span>
                </div>
                 <div class="form-group">
                    <label>Description</label>
                    {{Form::textarea('description',Input::old('description'),array('class'=>'form-control ckeditor'))}}
                     <span class="alert-danger">{{$errors->first('description')}}</span>
                </div>              
                </div><!--col right -->    
                <div class="col-lg-4">
                    <div class="form-group">
                    <label>Priority</label>
                    {{Form::select('priority',$priority,Input::old('priority'),array('class'=>'form-control'))}}
                     <span class="alert-danger">{{$errors->first('priority')}}</span>
                    </div> 
                    <div class="form-group">
                        <label>Support type</label>
                        {{Form::select('support_type',$support_type,Input::old('support_type'),array('class'=>'form-control'))}}
                         <span class="alert-danger">{{$errors->first('support_type')}}</span>
                    </div> 
                    
                      
                    <div class="form-group">
                        <label class="control-label">Attach file</label>                                        
                         {{Form::file('file',array('placeholder'=>'Attach file'))}}                                            
                        <span class="alert-danger">{{$errors->first('file')}}</span>                                                 
                    </div>
                    
                    <div class='clear'></div>
                   {{Form::submit('Create',array('class'=>'btn btn-primary'))}}
                  
                    
                </div><!--col left -->     
                {{Form::close()}}
            </div>
        </div>
    </div>
</div>

@stop