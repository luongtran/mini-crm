<html>
<body>
<style>
    .sendEmail{
        width:600px;
        height:600px;
        border:1px solid #dedede;
        border-radius: 5px;
        background:#00312F;
        color:white;
    }
</style>

<div class='sendEmail'>
    <h2>{{$subject}}</h2>    
    <p>{{$text}}</p> 
    
    <p>From CRM </p>    
    <?php echo $message->embed('http://completermp.com/marketing/'); ?>
    <img src='http://completermp.com/marketing/asset/frontend/img/logo.png'/>
</div>
</body>    
</html>