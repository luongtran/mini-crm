@section('content')
<!-- CONTENT -->
            <!--TITLE -->
            @include('client.new.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('client.new.breadcrumb')
            <!-- END OF BREADCRUMB -->
<div class="col-sm-12">                                                                 
     <div class="col-sm-10">                       
        @foreach($lists as $row)                      
           <div class="nest">
                  <div class="title-alt">
                      <h6>{{$row->title}}</h6>                 
                  </div>
                  <div class="body-nest">                    
                    <span><i class='btn btn-default'>{{$row->NewCategory->name}}</i></span>
                    <span><a class='btn btn-default' href="{{url('client/news/'.$row->permalink)}}">{{trans('common.button.readme')}}</a></span>
                  </div>
           </div>                                                        

         @endforeach
    </div>  
</div>      
                                  
<div class="col-sm-12">                                                            
                                   
<div class="btn-group pull-left">                                              
                                         <?php 
                                         if(isset($par_link))
                                         {
                                           echo $lists->appends($par_link)->links();                                           
                                         }
                                         else
                                         {
                                            echo $lists->links();
                                         }
                                         ?>
</div>                        
                            
</div>  <!-- end col 12 -->   

@stop
