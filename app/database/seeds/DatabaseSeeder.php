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
                Profile::truncate();
                GroupUser::truncate();
                /*insert data */
		        User::create(array(
                        'username' => 'luong@email.com',
                        'email' => 'luong@email.com',
                        'password' => Hash::make('mickey'),
                        'group_users'  => 1,
                        'activated'=>1,
                        'first_name'=>'SFR',
                        'last_name'=>'Default'
                    ));
                
                GroupUser::create(
                        ['name' => 'admin']
                );
                GroupUser::create(
                        ['name' => 'staff']
                );
                GroupUser::create(
                        ['name' => 'customer']
                );
                GroupUser::create(
                        ['name' => 'employee']
                );

                Profile::create(array(
                	   'user_id'=>1
                	));
	}

}