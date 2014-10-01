@section('content')
<div class="row">
<div class="col-md-12">                            
        @foreach($lists as $row)
                <div class="col-md-6">		
                    <div class="top-news">
								<a href="#" class="btn blue">
								<span>
								{{$row->title}} </span>
								<em>
								<i class="fa fa-tags"></i>
								{{$row->NewCategory->name}}</em>
								<i class="fa fa-globe top-news-icon"></i>
								</a>
                    </div>
                    <div class="news-blocks">
							<div class="news-block-tags">
                                                                    <strong></strong>
                                                                    <em>{{$row->created_at}}</em>								
                                                                    {{str_limit($row->content,100)}}                                                                    
							</div>
                                                        <hr>
							<a href="{{url('client/news/'.$row->permalink)}}">Read more <i class="m-icon-swapright m-icon-black"></i>                                                                    
							</a>
                    </div>
		</div>

         @endforeach
     
                                  
</div>  
<div class="col-sm-12">
        {{$lists->links()}}
</div>
    
</div>  
    
@stop
