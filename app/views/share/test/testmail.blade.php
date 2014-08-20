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
    <?php echo Url(); ?>
    <img src='http://www.monread.ie/wp-content/uploads/2013/10/crm-automation-saves-time-drives-revenue.jpg'/>
</div>
</body>    
</html>