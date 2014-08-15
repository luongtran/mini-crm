<ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}" title="">{{trans('common.menu.home')}}</a>
                </li>
                @if(isset($breadcrumb))
                @foreach($breadcrumb as $value)
					<li><i class="fa fa-lg fa-angle-right"></i></li>
                	<li><a href="{{Request::root()}}/{{$value['link']}}" title="">{{$value['title']}}</a></li>
                @endforeach                 
                @endif 
                <li class="pull-right">
                   <form role='form' action="{{Request::root()}}/manager/users/find" style="margin-top: 5px">
                                     <div class="btn-group btn-wigdet pull-left visible-lg">
                                         <input type='text' name="key_find" placeholder="Search..."  class='form-control' required=""/>                                       
                                     </div>
                                     
                                     <div class="btn-group btn-wigdet pull-left visible-lg">
                                       <!--   <input type='button' class='form-control' value="Search"/>     -->                                   
                                     </div>
                    </form>  
                </li>
</ul>