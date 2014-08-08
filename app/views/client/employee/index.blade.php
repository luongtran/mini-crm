@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
           <!-- CONTENT -->
            <!--TITLE -->
                @include('client.employee.title')
            <!--/ TITLE -->                
            <!-- BREADCRUMB -->          
                @include('client.employee.breadcrumb')
            <!-- END OF BREADCRUMB -->

<div class="col-sm-12">                                                                 
                        <div class="mail_header">
                            <div class="row">
                                  {{Session::get('msg_flash')}} 
                               <div class="col-sm-8">
                                              
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
                                        <th>Name</th>
                                        <th>Email</th>                                        
                                        <th>Create at</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($list as $users)
                                    <tr @if($users->activated==0){{"class='danger'"}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$users->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/client/employee/{{$users->id}}">{{$users->first_name}} {{$users->last_name}}</a></td>                                        
                                        <td class="subject">
                                           {{$users->email}}
                                        </td>                                  
                                        <td> {{$users->created_at}}</td>
                                        <td>
                                            <div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">Action
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu"> 
                                            <li><a class='btn-del' href="{{Request::root()}}/client/employee/{{$users->id}}" ><i class="fa fa-trash-o"></i> Delete</a>
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
                                         <?php echo $list->links(); ?>
                                    </div>
                                </div>
                            <!-- /.table-responsive -->
                           

                    </div>    

<script type="text/javascript" src="{{asset('asset/share/js/form_del.js')}}"></script>      
@stop
