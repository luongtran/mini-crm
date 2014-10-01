/**
Custom module for you to write your own javascript functions
**/
var Custom = function () {

    // private functions & variables

    var myFunc = function(text) {
        alert(text);
    }

    // public functions
    return {

        //main function
        init: function () {
            //initialize here something.            
        },

        //some helper function
        doSomeStuff: function () {
            myFunc();
        }

    };

}();

/***
Usage
***/
//Custom.init();
//Custom.doSomeStuff();

   
 /*ready default */
$(function(){
   activeMenu();
   activeBreadcrumb();
});

function activeMenu(){
var urlDomain = window.location.href;
$('ul.page-sidebar-menu li a').each(function(){   
    if($(this).attr('href')==urlDomain)
    { 
      $(this).parent().addClass('active');
      $(this).parent().css('display','block');
      $(this).parent().parent().addClass('active');
      $(this).parent().parent().css('display','block');      
      $(this).parent().parent().parent().addClass('active');
      $(this).parent().parent().parent().css('display','block');
    }

});
}

function activeBreadcrumb(){  
	$( "ul.page-breadcrumb li" ).last().addClass("active");
	$( "ul.page-breadcrumb li.active a").css("font-weight","bold");
	//$( "ul.page-breadcrumb li.active i").removeClass("fa fa-angle-right");  
}





        