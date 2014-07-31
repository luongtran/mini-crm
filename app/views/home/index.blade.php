@section('content')
<h4>{{Session::get('msg_flash')}}</h4>
<h2>Load default, please provide for me new theme</h2>
<a href='{{Request::root()}}/register'>Trial crm-min</a>
<a href='{{Request::root()}}/crm-login'>Login</a>
@stop