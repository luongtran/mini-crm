@section('content')
@include('manager.products.title')
@include('manager.products.breadcrumb')

<div class="col-sm-12">                                                                 
                        <div class="mail_header">
                            <div class="row">
                                  {{Session::get('msg_flash')}}                              
                            </div>

                        </div>

                            <div class="table-responsive">
                                <!-- THE MESSAGES -->                               
                                <table class="table table-mailbox">                                    

                                    <tr class="unread">
                                        <th class="small-col">
                                        <input type="checkbox" id="ckbCheckAll">                        
                                        </th>
                                        <th>Name</th>
                                        <th>Cost</th>
                                        <th>Discount</th>
                                        <th>Group products</th>
                                        <th>Create at</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($products as $product)
                                    <tr @if($product->activated==0){{"class='danger'"}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$product->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/manager/products/{{$product->id}}">{{$product->name}}</a></td>                                      
                                        <td> {{$product->cost}}</td>
                                        <td> {{$product->discount}} %</td>
                                        <td> {{$product->group_name}}</td>
                                        <td> {{$product->created_at}}</td>
                                        <td>
                                            <div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="{{Request::root()}}/manager/products/{{$product->id}}"><i class="icon icon-monitor"></i>View profile</a>
                                            </li>   
                                            <li class="divider"></li>
                                            <li><a href="{{Request::root()}}/manager/products/{{$product->id}}/edit"><i class="fa fa-pencil"></i>edit</a>
                                            </li>                                            
                                            <li class="divider"></li>
                                            <li><a href="{{Request::root()}}/manager/products/{{$product->id}}/delete" onclick="return confirm('Are you want delete');"><i class="fa fa-trash-o"></i> Delete</a>
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
                                         <?php echo $products->links(); ?>
                                    </div>
                                </div>
                            <!-- /.table-responsive -->
                           

                    </div>    
@stop
