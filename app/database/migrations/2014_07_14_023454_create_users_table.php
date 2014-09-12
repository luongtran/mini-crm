<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			            $table->increments('id');                        
			            $table->string('email')->unique();
                        $table->string('password');   
                        $table->integer('group_users');                           
                        $table->tinyInteger('activated')->default(0);                             
                        $table->rememberToken();                                
                        $table->integer('manager_id');                        
                        $table->integer('staff_id');                        
                        $table->integer('customer_id');                        
                        $table->integer('employee_id'); 
                        $table->string('first_name');
                        $table->string('last_name');
                        $table->integer('count_access')->default(0);
                        $table->text('code_forget');
                        $table->string('username');
                        $table->timestamp('last_login');                     
                        $table->string('ip');
                        $table->integer('lock_screen')->default(15);
                        $table->text('permission');
                        $table->text('avatar');
                        $table->tinyInteger('trash')->default(0);
						$table->timestamps();	
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}


	/*
	command

	Schema::create('table',function(Blueprint $table){
		$table->increments('id');
		$table->timestamps();
		});

	*/

}
