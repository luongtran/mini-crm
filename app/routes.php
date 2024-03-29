<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/',array('uses'=>'HomeController@index'));


Route::get('/manager', function()
{    
  $activity = TicketActivity::orderBy('id','desc')->paginate(15);
  if(Auth::user()->group_users == User::STAFF)
  {      
     $activity = TicketActivity::join('tickets','tickets.code','=','ticket_activity.ticket_id')->where('tickets.server_id',Auth::id())->orderBy('ticket_activity.id','desc')->paginate(15); 
  }  
  $total_customer = User::where('group_users','=',User::CUSTOMER)->count();
  $total_employee = User::where('group_users','=',User::EMPLOYEE)->count();
  $total_ticket = Ticket::count();
  return View::make('manager.home',compact('activity','total_customer','total_employee','total_ticket'));
});


/*share*/
//Route::get('/lock-screen',array('as'=>'lock_screen','uses'=>'ShareController@lockScreen'));

/*Login*/
Route::get('/crm-login',function(){
	if(Auth::check())
	{
	             /*check permission*/
               if(Auth::user()->group_users == User::EMPLOYEE){
                return Redirect::to('client/tickets');    
                }
                else if(Auth::user()->group_users == User::CUSTOMER){
                return Redirect::to('client/tickets');        
                }
                else if(Auth::user()->group_users == User::STAFF){
                return Redirect::to('manager/tickets');        
                }                
                else if(Auth::user()->group_users == User::MANAGER){
                return Redirect::to('manager');        
                }    
	}
	else
    {    
      return View::make('share.login');
    }
});
Route::post('/crm-login',array('uses'=>'ShareController@login'));
Route::get('/crm-logout',function(){
     Auth::logout();
     Session::forget('visitUrl');        
    return View::make('share.login');
});

Route::get('/crm-forget',function(){
    //Auth::logout();
    return View::make('share.forget');
});

Route::post('/crm-forget',array('uses'=>'ShareController@forgetPassword'));
Route::get('/crm-reset-password',array('uses'=>'ShareController@checkResetPassword'));
Route::post('/crm-reset-password',array('uses'=>'ShareController@ResetPassword'));


/*User of manager */
Route::get('/manager/users/find',array('uses'=>'UsersController@find'));
Route::get('/manager/users/del/{id}',array('uses'=>'UsersController@destroy'));
Route::post('/manager/users/action',array('uses'=>'UsersController@action'));
Route::get('/manager/users/filter',array('uses'=>'UsersController@filter'));
Route::resource('/manager/users', 'UsersController');


/*Customer of Manager*/
// /-----------/ //
//Route::get('/manager/customers-del/{id}',array('as'=>'manager-customer-del','uses'=>'CustomersController@destroy'));
Route::get('/manager/customers-find',array('as'=>'manager-customer-find','uses'=>'CustomersController@find'));
Route::resource('/manager/customers', 'CustomersController');

/*News of Manager*/
Route::get('/manager/news/find',array('uses'=>'NewsController@find'));
Route::resource('/manager/news', 'NewsController');

/*News category of Manager*/
Route::resource('manager/news-category', 'NewsCategoryController');



/*Employee of Manager*/
// /-----------/ //
//Route::get('/manager/customer/{id_customer}/employees/{id}/delete',array('as'=>'manager-employee-delete','uses'=>'EmployeesController@destroy'));
//Route::get('/manager/customer/{id_customer}/employees/find',array('as'=>'manager-employee-find','uses'=>'EmployeesController@find'));
//Route::resource('manager/customer/{id_customer}/employees', 'EmployeesController');

/*Group product of Manager*/
Route::get('manager/group-products/find',array('uses'=>'GroupProductsController@find'));
Route::resource('manager/group-products', 'GroupProductsController');

/*Product of Manager*/
Route::get('manager/products/find', 'ProductsController@find');
Route::resource('manager/products', 'ProductsController');

/*Group product of Manager*/
Route::resource('manager/group-products', 'GroupProductsController');

/*Purchase of Manager*/
Route::get('manager/purchases/find',array('uses'=>'PurchasesController@find'));
Route::resource('manager/purchases', 'PurchasesController');

/*FQA of Manager*/
Route::get('manager/fqa/{id}/del', array('uses'=>'FqasController@destroy'));
Route::get('manager/fqa/find', array('uses'=>'FqasController@find'));
Route::resource('manager/fqa', 'FqasController');

/*FQA Category of Manager*/
Route::resource('manager/fqa-category', 'FqaCategoryController');

/*Sector of Manager*/
Route::resource('manager/sectors', 'SectorController');

/*Priority of Manager*/
Route::resource('manager/priorities', 'PrioritiesController');

/*Support type of Manager*/
Route::resource('manager/support-type', 'SupportTypeController');



/*Support ticket of Manager */
Route::post('manager/tickets/add-comment/{id}',array('uses'=>'TicketsController@addComment'));
Route::get('manager/tickets/find',array('uses'=>'TicketsController@find'));
Route::get('manager/tickets/filter',array('uses'=>'TicketsController@filter'));
Route::get('manager/tickets/confirm/{id}',array('uses'=>'TicketsController@confirm'));
Route::get('manager/tickets/close/{id}',array('uses'=>'TicketsController@close'));
Route::resource('manager/tickets', 'TicketsController');

/*report and analysis*/
Route::get('manager/reports',array('uses'=>'ReportsController@index'));
Route::get('manager/reports/ticket',array('uses'=>'ReportsController@ticket'));
Route::post('manager/reports/ticket',array('uses'=>'ReportsController@postTicket'));

Route::get('manager/reports/staff',array('uses'=>'ReportsController@staff'));
Route::get('manager/reports/staffRace',array('uses'=>'ReportsController@staffRace'));
/*analysis*/
Route::get('manager/analysis',array('uses'=>'ReportsController@analysis'));
Route::get('manager/analysis/support-type',array('uses'=>'ReportsController@supportType'));
Route::get('manager/analysis/support-type-limit',array('uses'=>'ReportsController@supportTypeLimit'));



/*View profile*/
Route::get('manager/view-profile',array('uses'=>'ShareController@viewProfile'));
Route::post('manager/update-profile',array('uses'=>'ShareController@updateProfile'));
Route::get('client/view-profile',array('uses'=>'ShareController@viewProfile'));
Route::post('client/update-profile',array('uses'=>'ShareController@updateProfile'));
Route::post('update-password',array('uses'=>'ShareController@updatePassword'));

/*load message */
Route::get('share/message/list',array('uses'=>'MessagesController@getMessage'));
Route::get('share/message/count',array('uses'=>'MessagesController@getCountMessage'));
Route::get('share/message/see-all',array('uses'=>'MessagesController@index'));
Route::get('share/message/read/{id}',array('uses'=>'MessagesController@show'));

/*Language*/
Route::get('change-language/{id}',array('as' => 'change_language', 'uses' =>'LanguagesController@getChangeLanguage'));
Route::get('manager/languages/find',array('uses'=>'LanguagesController@find'));
Route::resource('manager/languages', 'LanguagesController');

/*Setting of Manager*/
Route::get('manager/setting', array('uses'=>'SettingsController@index'));
Route::get('manager/setting/show',array('uses'=>'SettingsController@show'));
Route::post('manager/setting', array('uses'=>'SettingsController@store'));
Route::get('manager/setting/create', array('uses'=>'SettingsController@create'));
//Route::resource('manager/languages', 'LanguageController');


/* ------ */
/*Home section frontend*/
Route::post('/page/contact',array('uses'=>'HomeController@contact'));
Route::get('/page',array('uses'=>'HomeController@index'));
Route::get('/page/{id}',array('uses'=>'HomeController@page'));


Route::get('/client',array('uses'=>'CustomerController@index'));
/*Customer of client*/
Route::get('/register',array('uses'=>'HomeController@register'));
Route::post('/register',array('uses'=>'CustomerController@store'));
Route::get('/active-customer/{id}',array('uses'=>'CustomerController@active'));
//Route::resource('client/customer', 'CustomerController');
/* Employee of client */
Route::get('client/employee/find', array('uses'=>'EmployeeController@find'));
Route::resource('client/employee', 'EmployeeController');

/* Ticket of Client - customer and employee */
Route::post('client/ticket-comment/{id}',array('uses'=>'TicketController@addComment'));
Route::get('client/tickets/filter',array('uses'=>'TicketController@filter'));
Route::get('client/tickets/find',array('uses'=>'TicketController@find'));
Route::resource('client/tickets', 'TicketController');


/*View race*/
Route::get('client/races/{id}', array('uses'=>'RacesController@show'));
Route::post('client/races/{id}', array('uses'=>'RacesController@addComment'));

/*FQA of Client*/
Route::get('client/fqa', array('uses'=>'FqaController@index'));
Route::get('client/fqa/find', array('uses'=>'FqaController@find'));
Route::get('client/fqa/{id}', array('uses'=>'FqaController@show'));

/*New of Client*/
Route::get('client/news', array('uses'=>'NewController@index'));
Route::get('client/news/find', array('uses'=>'NewController@find'));
Route::get('client/news/{id}', array('uses'=>'NewController@show'));




/*upload of Client*/
Route::get('client/upload', array('uses'=>'UploadController@client'));
Route::post('client/upload', array('uses'=>'UploadController@uploadClient'));
Route::get('client/upload/delete/{id}', array('uses'=>'UploadController@deleteClient'));
Route::get('client/upload/document', array('uses'=>'UploadController@documentClient'));
/*invoice of client*/
Route::get('client/invoice', array('uses'=>'CustomerController@invoice'));
Route::get('client/invoice/show/{id}', array('uses'=>'CustomerController@showInvoice'));


/*-----------filter----------*/
 Route::when('client', 'auth');
 Route::when('client/*', 'auth');
 Route::when('client/customer/races', 'auth');
 Route::when('share/', 'auth');
 Route::when('share/*', 'auth');
 
 /*client customer*/
 Route::when('client', 'client_employee');
 Route::when('client/*', 'client_employee');
 /*client employee*/
 Route::when('client/employee', 'client_customer');
 Route::when('client/employee/*', 'client_customer');
 
 
 /*staff customer*/
 Route::when('manager', 'staff');
 Route::when('manager*', 'staff');

  /*admin*/
 Route::when('manager/setting', 'admin');
 Route::when('manager/setting*', 'admin');
 Route::when('manager/users', 'admin');
 Route::when('manager/users*', 'admin');
 
 
 
/*debug*/ 
 
//Route::get('debug/email',array('uses'=>'EmailController@test'));
//Route::post('debug/email',array('uses'=>'EmailController@postTest'));
//Route::get('test/read',array('uses'=>'HomeController@test'));


