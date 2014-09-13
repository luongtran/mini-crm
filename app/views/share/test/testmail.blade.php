<html>
<body>
<style>
    .sendEmail{
        width:600px;
        height:600px;
        border:1px solid #dedede;
        border-radius: 5px;
        /*background:#00312F;*/
        color:black;
        padding:5px;
    }
</style>

<div class='sendEmail' style="width:600px;height:600px;border:1px solid #dedede;border-radius: 5px;color:black;padding:5px;">
    <h2><b>{{$subject}}</b></h2>    
    <label><u><b>Content:</b></u></label>
    <p>{{$text}}</p> 
    
    <hr width=100% align="left">
    <p>From CRM SYSTEM</p>    
    <p><a href="{{url()}}"><img src='http://www.monread.ie/wp-content/uploads/2013/10/crm-automation-saves-time-drives-revenue.jpg' with="100px" height="100px"/></a></p>
</div>
</body>    
</html>