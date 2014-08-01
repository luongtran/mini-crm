@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
            <!--TITLE -->
            @include('manager.fqas.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.fqas.breadcrumb')
            <!-- END OF BREADCRUMB -->
<div class="col-sm-12">                                                                 
                        <div class="mail_header">
                            <div class="row">
                            	<!-- session message -->
                                  {{Session::get('msg_flash')}} 
                                <!-- session message -->                              
                            </div>
                        </div>
                        <div class="table-responsive">                                                            
                                <table class="table table-mailbox">   
                                    <tr class="unread">
                                        <th class="small-col">
                                        <input type="checkbox" id="ckbCheckAll">                        
                                        </th>
                                        <th>Title</th>
                                        <th>Categoy</th>
                                        <th>Create_at</th>
                                        <th></th>                                       
                                    </tr>
                                    @foreach($lists as $row)
                                    <tr>
                                        <td class="small-col">
                                           <input type="checkbox" value="" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/manager/fqa/{{$row->id}}">{{$row->title}}</a></td>
                                        <td>{{$row->category}}</td>
                                        <td>{{$row->created_at}}</td>                                        
                                        <td>
                                            <div class="btn-group pull-left">
		                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">{{trans('common.button.action')}}
		                                            <span class="caret"></span>
		                                        </button>
		                                        <ul class="dropdown-menu" role="menu">
		                                            <li><a href="{{Request::root()}}/manager/fqa/{{$row->id}}"><i class="icon icon-monitor"></i>View</a>
		                                            </li> 
                                                    <li class="divider"></li>
                                                    <li><a href="{{Request::root()}}/manager/fqa/{{$row->id}}/edit"><i class="fa fa-pencil"></i>Edits</a>
                                                    </li> 
                                                    <li class="divider"></li>
                                                    <li><a href="{{Request::root()}}/manager/fqa/{{$row->id}}/del"><i class="fa fa-trash-o"></i>Delete</a>
                                                    </li> 
		                                        </ul>
                                   			 </div>
                                        </td>                                        
                                    </tr>
                                    @endforeach
                                </table>                                
                            </div>
                            <!-- end table -->

                            <div class="">                                   
                                    <div class="btn-group pull-left">                                       
                                         <?php //echo $list->links(); ?>
                                         <?php //echo $list->appends(array('field_find' => $field,'filter' => $filter,'key_find'=>$key))->links(); ?>
                                    </div>
                            </div>
                            
</div>  <!-- end col 12 -->   
@stop
