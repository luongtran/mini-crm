@section('content')
@include('manager.news_category.title')
@include('manager.news_category.breadcrumb')


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
                                        <th>Description</th>
                                        <th>Create at</th>
                                        <th></th>
                                       
                                    </tr>
                                    
                                    @foreach($listCategory as $Category)
                                    <tr>
                                        <td class="small-col">
                                              <input type="checkbox" value="{{$Category->id}}" name="checkID[]" class="checkBoxClass"/>
                                        </td>                                       
                                        <td><a href="{{Request::root()}}/manager/news-category/{{$Category->id}}">{{$Category->name}}</a></td>                                                                             
                                        <td> {{$Category->description}}</td>
                                        <td> {{$Category->created_at}}</td>
                                        <td>
                                            <div class="btn-group pull-left">
                                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">{{trans('common.button.action')}}
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">                                         
                                            <li class="divider"></li>
                                            <li><a href="{{Request::root()}}/manager/news-category/{{$Category->id}}/edit"><i class="fa fa-pencil"></i>{{trans('common.button.edit')}}</a>
                                            </li>                                            
                                            <li class="divider"></li>
                                            <li><a class="btn-del" href="{{Request::root()}}/manager/news-category/{{$Category->id}}" ><i class="fa fa-trash-o"></i>{{trans('common.button.delete')}}</a>
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
                                         <?php echo $listCategory->links(); ?>
                                    </div>
                                </div>
                            <!-- /.table-responsive -->
                           

                    </div>  


<script src="{{asset('asset/share/js/form_del.js')}}"></script>  
@stop
