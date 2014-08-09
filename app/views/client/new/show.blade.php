@extends('client.layouts.default')
@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
            <!--TITLE -->
            @include('client.new.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('client.new.breadcrumb')
            <!-- END OF BREADCRUMB -->
<div class="col-sm-12">                                                                 
                        <div class="mail_header">
                            <div class="row">
                            	<!-- session message -->
                                <!-- session message -->                              
                            </div>
                        </div>

			            <div class="row">                   
			                    <div class="col-sm-10">
			                         {{Session::get('msg_flash')}}   
			                    <div class="nest" id="basicClose">
			                    <div class="title-alt">
			                                <h6>{{$view->title}}</h6>
			                                <div class="titleClose">
			                                    <a class="gone" href="#basicClose">
			                                        <span class="entypo-cancel"></span>
			                                    </a>
			                                </div>
			                                <div class="titleToggle">
			                                    <a class="nav-toggle-alt" href="#basic">
			                                        <span class="entypo-up-open"></span>
			                                    </a>
			                                </div>

			                    </div>
			                    <div class="body-nest" id="basic">
			                  	 <p><i class='btn btn-success'>{{$view->NewCategory->name}}</i> {{$view->created_at}}</p>
			                     {{$view->content}}
			                     	<div class='clear'></div>
				            	</div>
				            		
				            </div><!--end col 10-->
				            
								
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
                            <!-- end table -->

                            <div class="">                                   
                                    <div class="btn-group pull-left">                                       
                                                     </div>
                            </div>
                            
</div>  <!-- end col 12 -->   
@stop
