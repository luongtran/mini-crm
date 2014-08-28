@section('content')
      <!-- CONTENT -->
            <!--TITLE -->
            @include('manager.tickets.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.tickets.breadcrumb')
            <!-- END OF BREADCRUMB -->
{{Session::get('msg_flash')}}


                            <div class="table-responsive">
                                <!-- THE MESSAGES -->                               
                                <table class="table table-mailbox">                                    

                                    <tr class="unread">
                                        <th class="small-col">
                                        <input type="checkbox" id="ckbCheckAll">                        
                                        </th>
                                        <th>{{trans('title.other.order_ticket')}}</th>
                                        <th>{{trans('title.table.subject')}}</th>
                                        <!-- <th>Author_id</th> -->
                                        <th>{{trans('title.table.company')}}</th>
                                        <th>{{trans('title.table.status')}}</th>
                                        <th>{{trans('title.table.created')}}</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($list_ticket as $ticket)
                                    <tr @if($ticket->status==Ticket::S_NEW) {{'class="success"'}} @elseif($ticket->status==Ticket::S_RESOLVE){{'class="danger"'}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$ticket->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/manager/tickets/{{$ticket->code}}">{{$ticket->code}}</a></td>
                                         <td >
                                           {{$ticket->subject}}
                                        </td>
                                        <!--  <td >
                                           {{$ticket->author_id}}
                                        </td> -->
                                          <td >
                                          {{$ticket->company_name}} {{$ticket->client_id}}
                                        </td>
                                        
                                        <td >
                                           {{$ticket->status}}
                                        </td>
                                         <td >
                                           {{$ticket->created_at}}
                                        </td>
                                        <td>
                                            <div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a class='btn-del' href="{{Request::root()}}/manager/tickets/{{$ticket->code}}"><i class="fa fa-trash-o"></i> {{trans('common.button.delete')}} </a>
                                            </li>
                                        </ul>
                                    </div>

                                        </td>                                        
                                    </tr>
                                    @endforeach    

                               </table>
                              </form>      
                            </div>



 
<div class="row">
    <div class="col-lg-6">
     @if(isset($parameter_panginate))      
     {{$list_ticket->appends($parameter_panginate)->links()}}
     @else
     {{$list_ticket->links()}}
     @endif
    </div>
</div>


<script type="text/javascript" src="{{asset('asset/share/js/form_del.js')}}"></script> 
@stop