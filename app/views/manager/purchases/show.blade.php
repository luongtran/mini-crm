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
                                        <th>Number order</th>
                                        <th>Name product</th>                                                                                
                                        <th>Cost</th>
                                        <th>Discount</th>
                                        <th>Count</th>
                                        <th>Create at</th>
                                        <th>Deadline from</th>
                                        <th>Expiry</th>
                                        <th>Customer order</th>                                       
                                       
                                    </tr>
                                    <?php $stt = 1;$count = 0;?>
                                    @foreach($purchases as $detail)                                    
                                    <tr >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$detail->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>   
                                        <td> {{$stt}}</td>            
                                        <td><a href="#">{{$detail->product_name}}</a></td>                                      
                                        <td> {{$detail->cost}}</td>                                        
                                        <td> {{$detail->discount}}</td>
                                        <td> {{$detail->cost}} </td>
                                        <td> {{$detail->created_at}}</td>
                                        <td> {{$detail->deadline_from}}</td>
                                        <td> {{$detail->expiry}}</td>
                                        <td> {{$detail->customer_order}}</td>
                                                                              
                                    </tr><?php $stt=$stt+1; $count = ($detail->cost) + $count; ?>
                                    @endforeach    
                                    
                                    <tr >
                                        <td></td>                                             
                                        <td>Total:</td>    
                                        <td></td>   
                                        <td> {{$count}}</td>    
                                        <td></td>   
                                        <td></td>   
                                        <td></td>   
                                        <td></td>   
                                    </tr>
                               </table>
                              </form>
                            
                              
                            
                                
                            </div>
     
                                <div class="">                                   
                                    <div class="btn-group pull-left">  
                                          <form>
                                              <input type="hidden" name="total" value="{{$count}}"/>
                                              <button class="btn btn-default">Payment</button>
                                              <a><button class="btn btn-primary">Print</button></a>
                                          </form>                                        
                                    </div>
                                </div>
                            <!-- /.table-responsive -->
                           

                    </div>    
@stop
