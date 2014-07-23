<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTicketsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('tickets', function(Blueprint $table)
		{
			$table->increments('id');
                        $table->string('code');                        
                        $table->integer('client_id');
                        $table->integer('server_id');
                        $table->string('subject');
                        $table->text('description');
                        $table->integer('support_type');
                        $table->string('priority');
                        $table->string('status');
                        $table->integer('company_id');
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
		Schema::drop('tickets');
	}

}
