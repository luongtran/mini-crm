@section('content')

    <div class="row margin-bottom-40">
          <!-- BEGIN CONTENT -->
          <div class="col-md-12">
            <h1>Message</h1>
            <div class="content-page">
              <div class="row">              
                <div class="col-md-9 col-sm-9">
                	 {{Session::get('msg_flash')}}
                </div>  
            </div>
        </div>
    </div>	   

@stop