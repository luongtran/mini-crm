<?php

class StatusTableSeeder extends Seeder {

	public function run()
	{

                Status::truncate();               
                Status::create(
                        ['name' => 'New']
                );
                Status::create(
                        ['name' => 'In process']
                );
                Status::create(
                        ['name' => 'Resolve']
                );
                Status::create(
                        ['name' => 'Close']
                );      
        }

       }
?>