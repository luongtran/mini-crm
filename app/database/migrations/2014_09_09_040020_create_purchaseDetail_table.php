<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseDetailTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('purchase_detail',function(Blueprint $table){
		$table->increments('id');
		$table->integer('purchase_id');
		$table->integer('product_id');
		$table->timestamp('deadline_from');
		$table->timestamp('deadline_to');
		$table->integer('status');	
		$table->timestamps();
		$table->text('note');
		$table->integer('expiry');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		 Schema::drop('purchase_detail');		 
	}

}
