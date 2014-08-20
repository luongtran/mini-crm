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
                        $table->string('password');                        
                        $table->unique('email');                        
                        $table->integer('group_users');                        
                        $table->timestamp('last_login');                        
                        $table->timestamp('last_login');
                        $table->integer('manager_id');                        
                        $table->integer('staff_id');                        
                        $table->integer('customer_id');                        
                        $table->integer('employee_id');                        
                        $table->string('ip');
                        $table->integer('lock_screen');
                        $table->integer('permission');
                        $table->text('avatar');
                        $table->tinyInteger('trash');
                        $table->text('code_forget');
                        $table->integer('count_access');
                        $table->string('first_name');
                        $table->string('last_name');
                        $table->rememberToken();
                        $table->tinyInteger('activated');  
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

}
