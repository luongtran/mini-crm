<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFqasTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
	Schema::create('fqas',function(Blueprint $table){
		$table->increments('id');
		$table->string('title');
		$table->text('content');
		$table->integer('view');
		$table->integer('category_id');		
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
		Schema::drop('fqas');
	}

}
