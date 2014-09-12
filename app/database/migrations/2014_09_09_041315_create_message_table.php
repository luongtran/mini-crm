<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessageTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
	Schema::create('messages',function(Blueprint $table){
		$table->increments('id');
		$table->string('title');
		$table->text('content');
		$table->tinyInteger('activated');
		$table->string('type');
		$table->string('status');
		$table->integer('assign_to');
		$table->integer('from');
		$table->text('link');
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
		Schema::drop('messages');
	}

}
