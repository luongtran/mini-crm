<div class="btn">
                                                Filter</div>
                                            <button data-toggle="dropdown" class="btn dropdown-toggle" type="button">
                                                <span class="caret"></span>
                                                <span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <ul role="menu" class="dropdown-menu">
                                                 <li> 
                                                    <span class="entypo-plus-circled margin-iconic">Group users</span>
                                                </li>
                                                @foreach($group_name as $group)
                                                <li> 
                                                    <a href="{{Request::root()}}/manager/users/filter?field_filter={{$group->name}}">
                                                        <span class="entypo-plus-circled margin-iconic"></span>{{$group->name}}</a>
                                                </li>                                                
                                                @endforeach
                                                 <li> 
                                                    <span class="entypo-plus-circled margin-iconic">Other</span>
                                                </li>
                                                 <li> 
                                                    <a href="{{Request::root()}}/manager/users/filter?field_filter=trash">
                                                        <span class="entypo-plus-circled margin-iconic"></span>Trash</a>
                                                </li>  
</ul>                