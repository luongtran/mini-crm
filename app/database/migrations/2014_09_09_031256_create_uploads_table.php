<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUploadsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('uploads', function(Blueprint $table)
		{
			$table->increments('id');  
                        $table->string('name');                              
                        $table->text('path');
                        $table->string('type');                              
                        $table->string('size');
                        $table->string('type_file');  
                        $table->string('ticket_id');  
                        $table->string('customer_id');  
                        $table->string('user_id'); 
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
	    Schema::drop('uploads');
	}

}
