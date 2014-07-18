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
                        $table->string('username');
                        $table->string('password');                        
                        $table->string('email');         
                        $table->tinyInteger('activated');                                                  
                        $table->integer('group_users');                        
                        $table->timestamp('last_datetime_login');
                        $table->string('last_position_login');
                        $table->timestamp('last_login');
                        //$table->string('remember_token'); 
                        $table->rememberToken();
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
