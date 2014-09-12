<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
                        $table->integer('status');  
						$table->timestamps();	
						$table->integer('author_id'); 						
						$table->timestamp('resolved_at'); 
						$table->timestamp('closed_at'); 
						$table->tinyInteger('close')->default(0);
						$table->tinyInteger('overdue')->default(0);

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
