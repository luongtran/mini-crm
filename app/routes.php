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

Route::get('/users/getList',array('uses'=>'UsersController@getList'));
Route::get('/users/getAdd',array('uses'=>'UsersController@getAdd'));
Route::post('/users/create',array('uses'=>'UsersController@store'));
Route::get('/users/show/{id}',array('uses'=>'UsersController@show'));
Route::get('/users/edit/{id}',array('uses'=>'UsersController@edit'));
Route::post('/users/edit/{id}',array('uses'=>'UsersController@update'));
Route::get('/users/del/{id}',array('uses'=>'UsersController@destroy'));
Route::post('/users/action',array('uses'=>'UsersController@action'));
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
Route::get('/manager/customer-find',array('as'=>'manager-customer-find','uses'=>'CustomersController@find'));
//Route::p('/manager/customer-find/{field}/{key}', 'CustomersController@find');

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

Route::post('/users/action',array('uses'=>'UsersController@action'));


