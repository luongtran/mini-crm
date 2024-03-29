@section('content')
    <div class="row margin-bottom-40">
          <!-- BEGIN CONTENT -->
          <div class="col-md-12">
            <h1>Contacts</h1>
            <div class="content-page">
              <div class="row">
                <div class="col-md-12">
                  <div id="map" class="gmaps margin-bottom-40" style="height:400px;"></div>
                </div>
                <div class="col-md-9 col-sm-9">
                  <h2>Contact Form</h2>
                  <p>Lorem ipsum dolor sit amet, Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat consectetuer adipiscing elit, sed diam nonummy nibh euismod tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                  
                  <!-- BEGIN FORM-->
                  
				{{Form::open(array('method'=>'post','url'=>'/page/contact','class'=>'frm-contact'))}}			
				<div class='form-group'>					
					{{Form::input('email','email',Input::old('email'),array('class'=>'form-control','placeholder'=>'Email','required'))}}
					 <span class="alert-danger">{{$errors->first('email')}}</span>
				</div>
				<div class='form-group'>					
					{{Form::text('subject',Input::old('subject'),array('class'=>'form-control','placeholder'=>'Subject','required'))}}
					 <span class="alert-danger">{{$errors->first('subject')}}</span>
				</div>
				<div class='form-group'>				
					{{Form::textarea('message',Input::old('message'),array('class'=>'form-control','placeholder'=>'Message','required'))}}
					 <span class="alert-danger">{{$errors->first('message')}}</span>
				</div>						
				<div class='pull-left'>								
					<div class='form-group'>	
					<button type='submit' class='btn btn-success'>Send</button>
					</div>				
				</div>
				{{Form::close()}}
                  <!-- END FORM-->
                </div>

                <div class="col-md-3 col-sm-3 sidebar2">
                  <h2>Our Contacts</h2>
                  <address>
                    <strong>Loop, Inc.</strong><br>
                    795 Park Ave, Suite 120<br>
                    San Francisco, CA 94107<br>
                    <abbr title="Phone">P:</abbr> (234) 145-1810
                  </address>
                  <address>
                    <strong>Email</strong><br>
                    <a href="mailto:info@email.com">info@email.com</a><br>
                    <a href="mailto:support@example.com">support@example.com</a>
                  </address>
                  <ul class="social-icons margin-bottom-40">
                    <li><a href="#" data-original-title="facebook" class="facebook"></a></li>
                    <li><a href="#" data-original-title="github" class="github"></a></li>
                    <li><a href="#" data-original-title="Goole Plus" class="googleplus"></a></li>
                    <li><a href="#" data-original-title="linkedin" class="linkedin"></a></li>
                    <li><a href="#" data-original-title="rss" class="rss"></a></li>
                  </ul>

                  <h2 class="padding-top-30">About Us</h2>
                  <p>Sediam nonummy nibh euismod tation ullamcorper suscipit</p>
                  <ul class="list-unstyled">
                    <li><i class="fa fa-check"></i> Officia deserunt molliti</li>
                    <li><i class="fa fa-check"></i> Consectetur adipiscing </li>
                    <li><i class="fa fa-check"></i> Deserunt fpicia</li>
                  </ul>        
                </div>
              </div>
            </div>
          </div>
          <!-- END CONTENT -->
        </div>					
			
@stop


@section('javascript')
    <script src="http://maps.google.com/maps/api/js?sensor=true" type="text/javascript"></script>
    <script src="{{asset('')}}asset/global/plugins/gmaps/gmaps.js" type="text/javascript"></script>
    <script src="{{asset('')}}asset/frontend/pages/scripts/contact-us.js" type="text/javascript"></script>
    <script>
      new GMaps({
          div: '#map',
          lat: -12.043333,
          lng: -77.028333
        });
    </script>

@stop
