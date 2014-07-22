<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSupportTicketsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('support_tickets', function(Blueprint $table)
		{
			$table->increments('id');
                        $table->string('ticket_id');
                        $table->integer('user_id');                        
                        $table->text('content');                                                
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
		Schema::drop('support_tickets');
	}

}
