$(function() {
    /*event delete with method DELETE*/          
  $("a.btn-del").click(function(){
         var url = $(this).attr('href'); 
        if(confirm('Are you want delete?')){
         $("body").append("<form action='"+url+"' method='POST' id='myform'><input name='_method' type='hidden' value='DELETE'></form>");         
         $("#myform").submit();  
        }
        return false;                                                             
    });
       
});