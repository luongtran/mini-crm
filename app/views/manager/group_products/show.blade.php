@section('content') 
        @include('manager.group_products.title')
        @include('manager.group_products.breadcrumb')
        <div class="col-sm-6">         
          <?php Former::populate($group_product);?>
          {{Former::text('name')->disabled()}}
          {{Former::textarea('description')->class('textarea')->disabled()}}
        </div>
@stop
            