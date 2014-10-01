@extends('client.layouts.default')
@section('content')
<div class="row">
   <div class='col-sm-12'>
   <div class="portlet box green">
                                                <div class="portlet-title">
                                                     <div class="caption">
                                                            <i class="fa fa-gift"></i>{{$view->title}}
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
                                                 <p><i class='btn blue'><i class="icon icon-document"></i>{{$view->NewCategory->name}}</i> {{$view->created_at}}</p>
                                                   {{$view->content}}
                                                    	<div class='clear'></div>
				            	</div>
				           	
			            </div><!--end row -->  
			             
				            <div class='col-sm-10'>
									 <div class="panel panel-defautl">
									            <div class="panel-body">    
									                <h3>RELATED</h3>
									                <ul class=''>
									                    @foreach($listNew as $new)
									                        <li class='cus-ul-li-border' ><a href='{{Request::root()}}/client/news/{{$new->permalink}}'>{{$new->title}}</a></li>                                               
									                    @endforeach
									                </ul>

									            </div>    
									        </div>   
									</div>

	                        </div>
                       
@stop
