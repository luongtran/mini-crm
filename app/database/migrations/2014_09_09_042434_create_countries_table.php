<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCountriesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{		
	Schema::create('countries',function(Blueprint $table){
		$table->increments('id');
		$table->string('name');
		$table->string('area');
		$table->string('code');
		$table->string('postcode');
		$table->text('description');
		$table->integer('language');
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
		Schema::drop('countries');
	}

}
