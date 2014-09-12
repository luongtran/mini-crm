<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{	
		Schema::create('purchases',function(Blueprint $table){
		$table->increments('id');
		$table->integer('user_id');
		$table->integer('customer_id');
		$table->string('code');
		$table->integer('total');
		/*if customer call phone*/
		$table->text('customer_order');
		$table->text('note');
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
		Schema::drop('purchases');
	}

}
