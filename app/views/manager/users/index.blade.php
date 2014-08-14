@section('content')
            <!--TITLE -->
               @include('manager.users.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
               @include('manager.users.breadcrumb')
            <!-- END BREADCRUMB -->
<div class="col-sm-12">
     {{ Form::open(array('url' => 'manager/users/action','method'=>'post','role'=>'form','id'=>'frm-add')) }}                                                               
                        <div class="mail_header">
                            <div class="row">
                                  {{Session::get('msg_flash')}} 
                               <div class="col-sm-6">

                                    <div style="margin-right:10px" class="btn-group pull-left">
                                      <div class="btn">
                                            <input type="checkbox" style="margin:0 5px;padding:0;position:relative;top:2px;" id="ckbCheckAll">All
                                        </div>
                                   </div>
                                   <div style="margin-right:10px" class="btn-group pull-left">
                                      
                                        <div class="btn-group pull-left">  
                                             {{ Form::select('action',array('active'=>'Active','pending'=>'Pending','trash'=>'Trash','del'=>'Delete') ,'hide' ,array('class'=>'form-control'))}}                                   
                                        </div>
                                        <div class="btn-group pull-left">      
                                        <button style="margin-right:10px" type="submit" data-color="#39B3D7" data-opacity="0.95" class="btn button test pull-left">
                                        <span class="entypo-arrows-ccw"></span>&nbsp;&nbsp;{{trans('common.button.change')}}</button>
                                        </div>
                                    </div>

                                </div>


                                <div class="col-sm-6">                                   
                                     <div style="margin-right:10px" class="btn-group pull-right">                                      
                                        <div class="btn-group pull-right">                                                                                                      
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                            <div class="table-responsive">
                                <!-- THE MESSAGES -->                               
                                <table class="table table-mailbox">                                    

                                    <tr class="unread">
                                        <th class="small-col">  
                                        </th>
                                        <th>{{trans('title.table.name')}}</th>
                                        <th>{{trans('title.table.email')}}</th>
                                        <th>{{trans('title.table.group_user')}}</th>
                                        <th>{{trans('title.table.created')}}</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($list as $users)
                                    <tr @if($users->activated==0){{"class='danger'"}} @endif >
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$users->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{url('manager/users/'.$users->id)}}">{{$users->fullname}}</a></td>
                                        <td class="subject">
                                           {{$users->email}}
                                        </td>
                                        <td> {{$users->name}}</td>
                                        <td> {{$users->created_at}}</td>
                                        <td>
                                        <div class="btn-group pull-left">
                                            <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">{{trans('common.button.action')}}
                                                <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="{{url('manager/users/'.$users->id)}}/edit"><i class="fa fa-pencil"></i>{{trans('common.button.edit')}}</a>
                                                </li>                                            
                                                <li class="divider"></li>
                                                <li><a class="btn-del" href="{{Request::root()}}/manager/users/del/{{$users->id}}" ><i class="fa fa-trash-o"></i> Delete</a>
                                                </li>
                                            </ul>
                                        </div>

                                        </td>                                        
                                    </tr>
                                    @endforeach    

                               </table>
                              </form>
                                
                                
                            </div>
                            {{Form::close()}}
                                <div class="">                                   
                                    <div class="btn-group pull-left">     
                                         <?php 
                                         if(isset($par_link))
                                         {
                                           echo $list->appends($par_link)->links();                                           
                                         }
                                         else
                                         {
                                            echo $list->links();
                                         }
                                         ?>                                    
                                    </div>
                                    <div class="btn-group pull-right">
                                         @if(isset($count)) 
                                           <i class='btn'>{{$count}} </i>
                                         @endif
                                    </div>
                                </div>
                            <!-- /.table-responsive -->

                    </div>  


                    
@stop