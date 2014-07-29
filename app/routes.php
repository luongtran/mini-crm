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
	return View::make('hello');
});


/*share*/
//Route::get('/lock-screen',array('as'=>'lock_screen','uses'=>'ShareController@lockScreen'));

/*Login*/
Route::get('/crm-login',function(){
    return View::make('share.login');
});
Route::post('/crm-login',array('uses'=>'ShareController@login'));
Route::get('/crm-logout',function(){
    Auth::logout();
    return View::make('share.login');
});

/*User of manager */
Route::get('/manager/users/find',array('uses'=>'UsersController@find'));
Route::get('/manager/users/del/{id}',array('uses'=>'UsersController@destroy'));
Route::post('/manager/users/action',array('uses'=>'UsersController@action'));
Route::get('/manager/users/filter',array('uses'=>'UsersController@filter'));
Route::resource('/manager/users', 'UsersController');


/*Customer of Manager*/
// /-----------/ //
Route::get('/manager/customers-del/{id}',array('as'=>'manager-customer-del','uses'=>'CustomersController@destroy'));
Route::get('/manager/customers-find',array('as'=>'manager-customer-find','uses'=>'CustomersController@find'));
Route::resource('/manager/customers', 'CustomersController');

/*Employee of Manager*/
// /-----------/ //
Route::get('/manager/customer/{id_customer}/employees/{id}/delete',array('as'=>'manager-employee-delete','uses'=>'EmployeesController@destroy'));
Route::get('/manager/customer/{id_customer}/employees/find',array('as'=>'manager-employee-find','uses'=>'EmployeesController@find'));
Route::resource('manager/customer/{id_customer}/employees', 'EmployeesController');

/*Group product of Manager*/
Route::resource('manager/group-products', 'GroupProductsController');


/*Product of Manager*/
Route::resource('manager/products/find', 'ProductsController@find');
Route::resource('manager/products/{id}/delete', 'ProductsController@destroy');
Route::resource('manager/products', 'ProductsController');

/*Group product of Manager*/
Route::resource('manager/group-products', 'GroupProductsController');

/*Purchase of Manager*/
Route::resource('manager/purchases', 'PurchasesController');


/*Support ticket of Manager */
Route::post('manager/tickets/add-comment/{id}',array('uses'=>'TicketsController@addComment'));
Route::get('manager/tickets/find',array('uses'=>'TicketsController@find'));
Route::get('manager/tickets/filter',array('uses'=>'TicketsController@filter'));
Route::resource('manager/tickets', 'TicketsController');


/* Ticket of Clietn - customer and employee */
Route::post('client/customer/ticket-comment/{id}',array('uses'=>'TicketController@addComment'));
Route::get('client/customer/ticket/filter',array('uses'=>'TicketController@filter'));
Route::resource('client/customer/ticket', 'TicketController');


/* Customer */
Route::resource('client/customer', 'CustomerController');

/* Employee */
Route::resource('client/customer/employee', 'EmployeeController');


/*View profile*/
Route::get('manager/view-profile',array('uses'=>'ShareController@viewProfile'));
Route::post('manager/update-profile',array('uses'=>'ShareController@updateProfile'));


/*View race*/

Route::get('client/customer/races/{id}', array('uses'=>'RacesController@show'));
Route::post('client/customer/races/{id}', array('uses'=>'RacesController@addComment'));

/*-----------filter----------*/
 Route::when('/', 'auth');
 Route::when('manager', 'auth');
 Route::when('manager/*', 'auth');
 Route::when('client', 'auth');
 Route::when('client/*', 'auth');
 Route::when('client/customer/races', 'auth');
 
 /*client customer*/
 Route::when('client/customer/ticket', 'client_employee');
 Route::when('client/customer/ticket*', 'client_employee');
 /*client employee*/
 Route::when('client/customer/employee', 'client_employee');
 Route::when('client/customer/employee*', 'client_employee');
 /*staff customer*/
 Route::when('manager/customer', 'staff');
 Route::when('manager/customer*', 'staff');
 /*staff employee*/
 Route::when('manager/employees', 'staff');
 Route::when('manager/employees*', 'staff');
 /*staff support*/
 Route::when('manager/support', 'staff');
 Route::when('manager/support*', 'staff');
  /*staff products*/
 Route::when('manager/products', 'staff');
 Route::when('manager/products*', 'staff');
   /*staff purchases*/
 Route::when('manager/purchases', 'staff');
 Route::when('manager/purchases*', 'staff');
  /*admin*/
 Route::when('manager/setting', 'admin');
 Route::when('manager/setting*', 'admin');
 Route::when('manager/users', 'admin');
 Route::when('manager/users*', 'admin');
 
 
 
/*debug*/ 
 

Route::get('debug/email',array('uses'=>'EmailController@test'));
Route::post('debug/email',array('uses'=>'EmailController@postTest'));

