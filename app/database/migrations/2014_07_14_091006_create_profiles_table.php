<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('profiles', function(Blueprint $table)
		{
			$table->increments('id');
                        $table->integer('user_id');
                        $table->string('company_name');       
                        $table->string('address');                                                
                        $table->string('website');                                                
                        $table->string('phone_number');                                                
                        $table->string('sector');                                                
                        $table->string('emplyee_count');                                                
                        $table->string('contact_employee_company');                                                
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
		Schema::drop('profiles');
	}

}
