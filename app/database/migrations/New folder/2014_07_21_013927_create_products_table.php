<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('purchase_products', function(Blueprint $table)
		{
			$table->increments('id');
                        $table->string('name');
                        $table->text('description');
                        $table->integer('group_products');                        
                        $table->decimal('cost');
                        $table->integer('discount');
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
		Schema::drop('purchase_products');
	}

}

