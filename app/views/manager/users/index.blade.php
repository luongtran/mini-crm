@section('content')
<!-- CONTENT -->
            <!--TITLE -->
            <div class="row">
                <div id="paper-top">
                    <div class="col-sm-3">
                        <h2 class="tittle-content-header">
                            <i class="icon-mail"></i> 
                            <span>Mail
                            </span>
                        </h2>

                    </div>

                    <div class="col-sm-7">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="tittle-middle-header">

                            <div class="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <span class="tittle-alert entypo-info-circled"></span>
                                Welcome back,&nbsp;
                                <strong>Dave mattew!</strong>&nbsp;&nbsp;Your last sig in at Yesterday, 16:54 PM
                            </div>


                        </div>

                    </div>
                    <div class="col-sm-2">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="btn-group btn-wigdet pull-right visible-lg">
                            <div class="btn">
                                Widget</div>
                            <button data-toggle="dropdown" class="btn dropdown-toggle" type="button">
                                <span class="caret"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <ul role="menu" class="dropdown-menu">
                                <li>
                                    <a href="#" onclick="getAdd();">
                                        <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                                </li>
                                <li>
                                    <a href="#" >
                                        <span class="entypo-heart margin-iconic"></span>Favorite</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="entypo-cog margin-iconic"></span>Setting</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            <!--/ TITLE -->

            <!-- BREADCRUMB -->
            <ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}" title="Home">Home</a>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}" title="">Mail</a>
                </li>
                <li class="pull-right">
                    
                </li>
            </ul>

            <!-- END OF BREADCRUMB -->



            <div class="content-wrap">
                <div class="row">
                   
                    <!-- CONTENT MAIL -->
                    <div id="load-content"></div>
                    <!-- /CONTENT MAIL -->
                </div>
            </div>


            <!-- /END OF CONTENT -->
@stop
@section('script')
<!--<script>
   $(document).ready(function(){
     getList(); 
   });
   
   /*get all data from table*/
   function getList(){   
       var url_load = spBaseUrl+'/users/getList';      
       $("#load-content").load(url_load);
   }
   function getAdd(){        
       var url_load = spBaseUrl+'/users/getAdd';      
       $("#load-content").load(url_load);
   }
   
   function postAdd(){     
        var url_load = spBaseUrl+'/users/create'; 
        $.ajax({
            url : url_load,
            type: "POST",
            data : $("#frm-add").serialize() ,
            success: function(data, textStatus, jqXHR)
            {
              //alert(data);
              //getList();
              $("#load-content").html(data);
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                alert(errorThrown);
            }
        }); 
   }
</script>-->
@stop
