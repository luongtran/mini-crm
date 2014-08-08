<ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/manager" title="">{{trans('common.menu.home')}}</a>
                </li>
                @if(isset($breadcrumb))
                @foreach($breadcrumb as $value)
					<li><i class="fa fa-lg fa-angle-right"></i></li>
                	<li><a href="{{Request::root()}}/{{$value['link']}}" title="">{{$value['title']}}</a></li>
                @endforeach                 
                @endif 
                <li class="pull-right">
                     @include('manager.products.form_search')
                </li>
</ul>