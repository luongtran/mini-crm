 $(function(){        
                  load_message();  
                  
                  setInterval(function(){load_message()},30000);  
                  function load_message()
                  {				
                     var Vstring ="";
                     var see_all = "See all";
                     $.getJSON(spBaseUrl+"/share/message/list",function(list){
                            $.each(list, function (_idx, item) {                                
                                  var title= item.title;
                                  var id= item.id;
                                  var create= item.created_at;
								 
                                  Vstring = Vstring+ "<li><a href='"+spBaseUrl+"/share/message/read/"+id+"'  title='"+create+"'  ><span class='task'>"+
									                 "<span class='desc'>"+title+"</span></span></a></li>";          
                              });                                
                               $("#load_message").html(Vstring);
                         });
                         
                      $.getJSON(spBaseUrl+"/share/message/count",function(count){                          
                          if(count>0)
                          {
                              $(".load_count_message").html(count);    
                          }
                      });   
                   
                      
                  };
                   
});