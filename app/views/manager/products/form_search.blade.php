{{ Form::open(array('url' => 'manager/products/find','method'=>'get','role'=>'form','id'=>'frm-add')) }}  
                                   <div style="margin-right:10px" class="btn-group pull-left">   
                                       <div class="btn-group pull-left">                                 
                                           <input type="text" name="key_find" class="form-control" placeholder="Search..." style="border-radius:5px"  required="">                                         
                                       </div>
                                        <div class="btn-group pull-left">      
                                        <button style="margin-right:10px" type="submit" data-color="#39B3D7" data-opacity="0.95" class="btn button test pull-left">
                                        <span class="icon icon-search"></span>&nbsp;&nbsp;Search</button>
                                        </div>
                                    </div>
{{Form::close()}}