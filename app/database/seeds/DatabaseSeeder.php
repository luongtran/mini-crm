<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();
                /*reset data*/
		User::truncate();
                GroupUser::truncate();
                /*insert data */
		User::create(array(
                        'username' => 'luong@email.com',
                        'email' => 'luong@email.com',
                        'password' => Hash::make('mickey'),
                        'group_users'  => 1
                    ));
                
                GroupUser::create(array(
                        'name' => 'admin',
                    ));
	}

}