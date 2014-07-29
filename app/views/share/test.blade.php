<p>{{Session::get('msg_flash')}}</p>
<form action="{{Request::root()}}/debug/email" method="post">
    <p>Subject:<input type="text" name="subject"/></p>
    <p>Message:<input type="text" name="message"/></p>
    <p>To email<input type="text" name="to_email"/></p>
    <p>To Name:<input type="text" name="to_name"/></p>
    <button class="btn btn-default" type="submit">Send</button>
</form>