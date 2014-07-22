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

Route::get('/', function()
{
	return View::make('hello');
});


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


Route::get('/users/getList',array('uses'=>'UsersController@getList'));
Route::get('/users/getAdd',array('uses'=>'UsersController@getAdd'));
Route::post('/users/create',array('uses'=>'UsersController@store'));
Route::get('/users/show/{id}',array('uses'=>'UsersController@show'));
Route::get('/users/edit/{id}',array('uses'=>'UsersController@edit'));
Route::post('/users/edit/{id}',array('uses'=>'UsersController@update'));
Route::get('/users/del/{id}',array('uses'=>'UsersController@destroy'));
Route::post('/users/action',array('uses'=>'UsersController@action'));
Route::get('/users/filter',array('uses'=>'UsersController@filter'));
Route::get('/users',array('uses'=>'UsersController@index'));
//Route::resource('users', 'UsersController');


/*Customer of Manager*/
// /-----------/ //
Route::get('/manager/customer',array('as'=>'manager-customer','uses'=>'CustomersController@index'));
Route::get('/manager/customer-create',array('as'=>'manager-customer-create','uses'=>'CustomersController@create'));
Route::post('/manager/customer-create',array('as'=>'manager-customer-create','uses'=>'CustomersController@store'));
Route::get('/manager/customer-edit/{id}',array('as'=>'manager-customer-edit','uses'=>'CustomersController@edit'));
Route::post('/manager/customer-edit/{id}',array('as'=>'manager-customer-edit','uses'=>'CustomersController@update'));
Route::get('/manager/customer-del/{id}',array('as'=>'manager-customer-del','uses'=>'CustomersController@destroy'));
Route::get('/manager/customer-show/{id}',array('as'=>'manager-customer-show','uses'=>'CustomersController@show'));
Route::get('/manager/customer-find',array('as'=>'manager-customer-find','uses'=>'CustomersController@find'));
//Route::p('/manager/customer-find/{field}/{key}', 'CustomersController@find');

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


/*Purchase of Manager */
Route::resource('manager/purchases', 'PurchasesController');


/* Employee
 *  
 */

/* Customer
 *  
 */

/* Client
 *  
 */

/* Admin
 *  
 */



/*filter */
 Route::when('manager', 'auth');
 Route::when('manager/*', 'auth');
 
 Route::when('manager/customer', 'staff');
 Route::when('manager/customer*', 'staff');
 
 Route::when('manager/employees', 'staff');
 Route::when('manager/employees*', 'staff');
 
 Route::when('manager/support', 'staff');
 Route::when('manager/support*', 'staff');
 
 Route::when('manager/products', 'staff');
 Route::when('manager/products*', 'staff');
 
 Route::when('manager/purchases', 'staff');
 Route::when('manager/purchases*', 'staff');

 Route::when('manager/setting', 'admin');
 Route::when('manager/setting*', 'admin');
 Route::when('manager/users', 'admin');
 Route::when('manager/users*', 'admin');
 
 
 
/*debug*/ 
 

Route::get('debug/email',array('uses'=>'EmailController@test'));
Route::post('debug/email',array('uses'=>'EmailController@postTest'));

