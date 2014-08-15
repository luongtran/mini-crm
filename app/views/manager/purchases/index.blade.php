@section('content')
       <!--TITLE -->
            @include('manager.purchases.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.purchases.breadcrumb')
            <!-- END OF BREADCRUMB -->


<div class="col-sm-12">                                                                 
                        <div class="mail_header">
                            <div class="row">
                                  {{Session::get('msg_flash')}} 
                               <div class="col-sm-10">                                                                
                                </div>
                                <div class="col-sm-6">                                   
                                    
                                </div>
                            </div>

                        </div>

                            <div class="table-responsive">
                                <!-- THE MESSAGES -->                               
                                <table class="table table-mailbox">                                    

                                    <tr class="unread">
                                        <th class="small-col">
                                        <input type="checkbox" id="ckbCheckAll">                        
                                        </th>
                                        <th>Code</th>
                                        <th>Company</th>                                                                                
                                        <th>Amount</th>
                                        <th>Total</th>
                                        <th>Create at</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($purchases as $purchase)
                                    <tr @if($purchase->amount==0){{"class='danger'"}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$purchase->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/manager/purchases/{{$purchase->code}}">{{$purchase->code}}</a></td>                                      
                                        <td> {{$purchase->company_name}}</td>                                        
                                        <td> {{$purchase->amount}}</td>
                                        <td> {{$purchase->total}} </td>
                                        <td> {{$purchase->created_at}}</td>
                                        <td>
                                            <div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">                                                                                                                                                                             
                                            <li><a class='btn-del' href="{{Request::root()}}/manager/purchases/{{$purchase->id}}"><i class="fa fa-trash-o"></i>{{trans('common.button.delete')}}</a>
                                            </li>
                                        </ul>
                                    </div>

                                        </td>                                        
                                    </tr>
                                    @endforeach    

                               </table>
                              </form>
                                                            
                                
                            </div>
     
                                <div class="">                                   
                                    <div class="btn-group pull-left">                                       
                                       <?php 
                                        if(isset($par_link))
                                        echo $purchases->appends($par_link)->links(); 
                                        else
                                        echo $purchases->links(); 
                                        ?>
                                    </div>
                                </div>
                            <!-- /.table-responsive -->
                           

                    </div>    

<script type="text/javascript" src="{{asset('asset/share/js/form_del.js')}}"></script>                       
@stop
