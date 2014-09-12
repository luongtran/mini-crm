<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTicketActivityTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
			Schema::create('ticket_activity',function(Blueprint $table)
			{
				$table->increments('id');
				$table->string('ticket_id');
				$table->string('event');
				$table->string('title');
				$table->text('content');
				$table->integer('author_id');				
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
		Schema::drop('ticket_activity');
	}

}
