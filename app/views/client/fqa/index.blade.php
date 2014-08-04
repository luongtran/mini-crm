@section('content')
<script src="{{asset('asset/backend/assets/js/custom.js')}}"></script>
<!-- CONTENT -->
            <!--TITLE -->
            @include('client.fqa.title')
            <!--/ TITLE -->
            <!-- BREADCRUMB -->
            @include('client.fqa.breadcrumb')
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
                                       <!--  <th class="small-col">
                                        <input type="checkbox" id="ckbCheckAll">                        
                                        </th> -->
                                        <th>Question</th>
                                        <th>Categoy</th>                                       
                                        <th></th>                                       
                                    </tr>
                                    @foreach($lists as $row)
                                    <tr>
                                       <!--  <td class="small-col">
                                           <input type="checkbox" value="" name="checkID[]" class="checkBoxClass"/>
                                        </td>    -->                                    
                                        <td class="title"><a href="{{Request::root()}}/client/fqa/{{$row->id}}">{{$row->title}}</a></td>
                                        <td>{{$row->FqaCategory->name}}</td>     
                                        <td>
                                            <div class="btn-group pull-left">		                                       
                                   			</div>
                                        </td>                                        
                                    </tr>
                                    @endforeach
                                </table>                                
                            </div>
                            <!-- end table -->

                            <div class="">                                   
                                    <div class="btn-group pull-left">                                              
                                         <?php 
                                         if(isset($par_link))
                                         {
                                           echo $lists->appends($par_link)->links();                                           
                                         }
                                         else
                                         {
                                            echo $lists->links();
                                         }
                                         ?>
                                    </div>
                            </div>
                            
</div>  <!-- end col 12 -->   
@stop
