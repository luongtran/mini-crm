<ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/client" title="">{{trans('common.menu.home')}}</a>
                </li>
                @if(isset($breadcrumb))
                @foreach($breadcrumb as $value)
				        	<li><i class="fa fa-lg fa-angle-right"></i></li>
                	<li><a href="{{Request::root()}}/{{$value['link']}}" title="">{{$value['title']}}</a></li>
                @endforeach                 
                @endif 
                <li class="pull-right">                   
                        {{Form::open(array('url'=>'client/tickets/find','method'=>'get'))}}
                        <input style="border-radius:15px" name="key_find" type="text" placeholder="Search..." class="form-control">
                        {{Form::close()}}
                  
                </li>
</ul>