<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRaceTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('races',function(Blueprint $table){
		$table->increments('id');
		$table->string('code_ticket');
		$table->string('comment');
		$table->string('level_comment');
		$table->integer('score');
		$table->string('happy');
		$table->string('unhappy');
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
		 Schema::drop('races');
	}

}
