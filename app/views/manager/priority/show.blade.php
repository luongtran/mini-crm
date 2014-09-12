@section('content') 
        @include('manager.sector.title')
        @include('manager.sector.breadcrumb')
        <div class="col-sm-6">         
          <?php Former::populate($category);?>
          {{Former::text('name')->disabled()}}
          {{Former::textarea('description')->class('textarea')->disabled()}}
        </div>
@stop
            