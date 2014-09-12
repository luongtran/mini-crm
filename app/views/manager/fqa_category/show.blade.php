@section('content') 
        @include('manager.fqa_category.title')
        @include('manager.fqa_category.breadcrumb')
        <div class="col-sm-6">         
          <?php Former::populate($category);?>
          {{Former::text('name')->disabled()}}
          {{Former::textarea('description')->class('textarea')->disabled()}}
        </div>
@stop
            