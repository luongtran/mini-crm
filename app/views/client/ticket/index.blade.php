@section('content')
      <!-- CONTENT -->
          @include('client.ticket.title')
          @include('client.ticket.breadcrumb')
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
                                        <th>{{trans('title.table.author')}}</th>
                                        <th>{{trans('title.table.status')}}</th>
                                        <th>{{trans('title.table.created')}}</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($list_ticket as $ticket)
                                    <tr @if($ticket->status=='new') {{'class="success"'}} @elseif($ticket->status=='resolve'){{'class="danger"'}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$ticket->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/client/tickets/{{$ticket->code}}">{{$ticket->code}}</a></td>
                                         <td >
                                           {{$ticket->subject}}
                                        </td>                                        
                                          <td >
                                           {{$ticket->first_name}}  {{$ticket->last_name}}
                                        </td>
                                        
                                        <td >
                                           {{$ticket->status}}
                                        </td>
                                         <td >
                                           {{$ticket->created_at}}
                                        </td>
                                        <td>

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
@stop