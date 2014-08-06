@section('content')
<!-- CONTENT -->
            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-document-edit"></i> 
                            <span>Welcome
                            </span>
                        </h2>

                    </div>

                    <div class="col-sm-7">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="tittle-middle-header">

                            <div class="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <span class="tittle-alert entypo-info-circled"></span>                                
                                {{Session::get('msg_flash')}}
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

<div clas='row'>
<div class='col-sm-10'>
<h2>News: {{$new->title}}</h2>
</div>
<div class='col-sm-10'>
	{{$new->content}}
</div>

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
@stop