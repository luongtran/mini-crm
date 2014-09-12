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
	Schema::create('profiles',function(Blueprint $table){
		$table->increments('id');
		$table->integer('user_id');
		$table->text('address');
		$table->string('website');
		$table->string('phone_number');
		$table->integer('sector_id');
		$table->integer('employee_count');
		$table->string('contact_employee_company');
		$table->string('company_name');
		$table->integer('activity');
		$table->integer('field_id');
		$table->integer('country');
		$table->timestamp('birth_day');
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
