@section('content')
<div class='row'>
<div class='col-lg-10'>
    <h2>News: {{$new->title}}</h2>
    <div>{{$new->content}}</div>
</div>

<div class='col-lg-10'>
<div class="row">
        <div class="panel panel-panel">
                   <div class="panel-body">    
                       <h3>RELATED</h3>
                       <ul class='' style="list-style: square;">
                           @foreach($listNew as $new)
                               <li class='cus-ul-li-border' ><a href='{{Request::root()}}/client/news/{{$new->permalink}}'>{{$new->title}}</a></li>                                               
                           @endforeach
                       </ul>

                   </div>    
       </div>   
</div>
</div>
</div>
@stop