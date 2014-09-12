<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistoryTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		    Schema::create('history', function(Blueprint $table)
		{
			$table->increments('id');
                        $table->integer('user_id');
                        $table->string('status');
                        $table->string('content');                                                             
                        $table->string('ip');                                                             
                        $table->string('position');                                                             
                        $table->string('link');                                                             
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
            Schema::drop('history');
	}

}
