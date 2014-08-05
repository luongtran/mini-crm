@section('content')

            <section class="header-11-sub bg-midnight-blue">
                <div class="">
                    &nbsp;
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <h3 style='color:white'>Features of Startup CRM</h3>
                            <p>
                                You have the product, you have the customer. We’ve created the product that will help your startup to look even better.
                            </p>
                            <div class="signup-form">                               
                                    <div class="form-group">
                                        <a href='{{Request::root()}}/register'><button type="button" class="btn btn-success">Sign Up</button></a>
                                    </div>
                                </form>
                            </div>
                            <div class="additional-links">                             
                            </div>
                        </div>
                        <div class="col-sm-7 col-sm-offset-1 player-wrapper">
                            <!-- <div class="player">
                                <iframe src="http://player.vimeo.com/video/29568236?color=3498db" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                <iframe width="560" height="315" src="//www.youtube.com/embed/7me7mjvTiTI" frameborder="0" allowfullscreen></iframe>								
                            </div> -->
                            <iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/7me7mjvTiTI?modestbranding=1" frameborder="0" allowfullscreen></iframe>                            
                        </div>
                    </div>
                </div>
            </section>

            <!-- logos -->
            <section class="logos">
                <div class="container">
                    <div><img src="{{asset('asset/frontend/img/logos/mashable.png')}}" alt="">
                    </div>
                    <div><img src="{{asset('asset/frontend/img/logos/guardian.png')}}" alt="">
                    </div>
                    <div><img src="{{asset('asset/frontend/img/logos/forbes.png')}}" alt="">
                    </div>
                    <div><img src="{{asset('asset/frontend/img/logos/red-bull.png')}}" alt="">
                    </div>
                    <div><img src="{{asset('asset/frontend/img/logos/ny-times.png')}}" alt="">
                    </div>
                </div>
            </section>

            <!-- price-1 -->
            <section class="price-1">
                <div class="container">
                    <h3>Take a look to our Plans</h3>
                    <p class="lead">
                        This is a probably the best plans ever born
                    </p>
                    <div class="row plans">
                        <div class="col-sm-4">
                            <div class="plan">
                                <div class="title">MARKETING</div>
                                <div class="price">19$/month</div>
                                <div class="description">
                                    10,000 messages<br>
                                    <b>unlimited</b> data<br>
                                    <b>unlimited</b> users<br>
                                    first 10 day free
                                </div>
                                <a class="btn disabled" href="#">Your Current Plan</a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="plan">
                                <div class="title">RMP</div>
                                <div class="price">39$/month</div>
                                <div class="description">
                                    10,000 messages<br>
                                    <b>unlimited</b> data<br>
                                    <b>unlimited</b> users<br>
                                    first 30 day free
                                </div>
                                <a class="btn btn-primary" href="#">Change to this Plan</a>

                                <div class="ribbon">NEW</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="plan">
                                <div class="title">HRM</div>
                                <div class="price">59$/month</div>
                                <div class="description">
                                    10,000 messages<br>
                                    <b>unlimited</b> data<br>
                                    <b>unlimited</b> users<br>
                                    first 100 day free
                                </div>
                                <a class="btn btn-primary" href="#">Change to this Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- content-13  -->
			
			<section class="logos">		
				<div class="container">
				<h3></h3>
				<div>
			</section>			
            <!--<section class="content-13 subscribe-form bg-turquoise">
                <div class="container">
                    <div class="row">
                        <form>
                            <div class="col-sm-8">
                                <input type="text" placeholder="Enter your e-mail" spellcheck="false">
                            </div>
                            <div class="col-sm-4">
                                <button class="btn btn-large btn-primary" type="submit">
                                    Subscribe now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>-->
			 <!-- content-14  -->
    <section class="content-14">
		<div class="container">
		<div class="row">				
    		<div class="col-md-10 column faqs">
    		<div class="page-header">		
    			<a name="link_faq"><h2>Frequently Asked Questions</h2></a>
    		</div>
    		<div class="inner">


            @foreach($category as $ca)    
    		<div class="row clearfix">
    		<div class="col-md-12 column category">   

                
    		<h3>{{$ca->name}}</h3>
    		<ul>
                 @foreach($faq as $aq)
                          @if($ca->id == $aq->category_id)                       
                    		<li>
                    		<p class="title faq-toggle">{{$aq->title}}</p>
                    		<div class="content blockquote" style="display: none;"><p dir="ltr"><span style="background-color:transparent; color:rgb(0, 0, 0); font-family:arial; font-size:15px">{{$aq->content}}</span></p>
                    		<p>&nbsp;</p>
                    		</div>
                    		</li>       
                      @endif                      
                @endforeach

    		</ul>

    		</div>
    		</div>        
            @endforeach      


    		</div>
    		</div>
            </div>
        </div>
    </section>			
@stop