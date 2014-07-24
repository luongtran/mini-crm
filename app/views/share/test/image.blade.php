{{Form::open(array('url'=>'debug/image','method'=>'post'))}}
{{Form::file('file')}}
{{Form::submit('Save')}}
{{Form::close()}}