<ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="{{Request::root()}}/manager" title="">{{trans('common.menu.home')}}</a>
                </li>
                @if(isset($breadcrumb))
                @foreach($breadcrumb as $value)
					<li><i class="fa fa-lg fa-angle-right"></i></li>
                	<li><a href="{{Request::root()}}/{{$value['link']}}" title="">{{$value['title']}}</a></li>
                @endforeach                 
                @endif 
                <li class="pull-right">
                   {{ Form::open(array('url' => 'manager/customers-find','method'=>'get','role'=>'form','id'=>'frm-add')) }}  
                                   <div style="margin-right:10px" class="btn-group pull-left">     
                                       <div class="btn-group pull-left">
                                            {{ Form::select('field_find',array('company_name'=>'Company','email'=>'Email','employee_count'=>'Number of Employee','contact_employee_company'=>'Employee contact') ,'company_name' ,array('class'=>'form-control'))}}                                    
                                       </div>
                                       <div class="btn-group pull-left">
                                            {{ Form::select('filter',array('like'=>'Default','asc'=>'Order Up','desc'=>'Order Down','big'=>'>=','small'=>'<=','equa'=>'=') ,'like' ,array('class'=>'form-control'))}}                                    
                                       </div>
                                       <div class="btn-group pull-left">                                 
                                           <input type="text" name="key_find" class="form-control" placeholder="Search..." style="border-radius:5px" >                                         
                                       </div>
                                        <div class="btn-group pull-left">      
                                        <button style="margin-right:10px" type="submit" data-color="#39B3D7" data-opacity="0.95" class="btn button test pull-left">
                                        <span class="icon icon-search"></span>&nbsp;&nbsp;Filter</button>
                                        </div>
                                    </div>
                    {{Form::close()}}
                </li>
</ul>