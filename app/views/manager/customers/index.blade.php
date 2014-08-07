@section('content')
<!-- CONTENT -->
            <!--TITLE -->
            @include('manager.customers.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('manager.customers.breadcrumb')
            <!-- END OF BREADCRUMB -->

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
                                        <th>{{trans('title.table.company')}}</th>
                                        <th>{{trans('title.table.email')}}</th>
                                        <th>{{trans('title.table.sector')}}</th>
                                        <th>{{trans('title.form.employee')}}</th>
                                        <th>{{trans('title.table.created')}}</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($list as $users)
                                    <tr @if($users->activated==0){{"class='danger'"}} @endif >
                                        <td class="small-col">
                                            <input type="checkbox" value="{{$users->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/manager/customers/{{$users->id}}">{{$users->company_name}}</a></td>
                                        <td class="subject">
                                           {{$users->email}}
                                        </td>
                                        <td> {{$users->name}}</td>
                                         <td> {{$users->employee_count}}</td>
                                        <td> {{$users->created_at}}</td>
                                        <td>
                                            <div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">{{trans('common.button.action')}}
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="{{Request::root()}}/manager/customers/{{$users->id}}"><i class="icon icon-monitor"></i>{{trans('title.form.view_profile')}}</a>
                                            </li>                                               
                                            <li class="divider"></li>
                                            <li><a href="{{Request::root()}}/manager/customers/{{$users->id}}/edit"><i class="fa fa-pencil"></i>{{trans('common.button.edit')}}</a>
                                            </li>                                            
                                            <li class="divider"></li>
                                            <li><a class='btn-del' href="{{Request::root()}}/manager/customers/{{$users->id}}" ><i class="fa fa-trash-o"></i> {{trans('common.button.delete')}}</a>
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
                                        echo $list->appends($par_link)->links(); 
                                        else
                                        echo $list->links(); 
                                        ?>
                                    </div>                                   
                                </div>
                            <!-- /.table-responsive -->
                           

                    </div>    

<script type="text/javascript">
$(function() {
    /*event delete with method DELETE*/          
  $(".btn-del").click(function(){
         var url = $(this).attr('href'); 
        if(confirm('Are you want delete?')){
         $("body").append("<form action='"+url+"' method='POST' id='myform'><input name='_method' type='hidden' value='DELETE'></form>");         
         $("#myform").submit();  
        }
        return false;                                                             
    });
       
});
</script>                    
@stop
