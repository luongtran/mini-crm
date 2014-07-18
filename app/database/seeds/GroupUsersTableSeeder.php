<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class GroupUsersTableSeeder extends Seeder {

	public function run()
	{
            
		User::create(array(
                        'username' => 'luong@email.com',
                        'email' => 'luong@email.com',
                        'password' => Hash::make('mickey'),
                        'group_users'  => 1
                    ));
	}

}