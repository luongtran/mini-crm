<?php
class UsersTableSeeder extends Seeder {

	public function run()
	{
                /*User */
		User::truncate();                               
		User::create(array(
                        'username' => 'luong@email.com',
                        'email' => 'luong@email.com',
                        'password' => Hash::make('mickey'),
                        'group_users'  => 1,
                        'activated'=>1,
                        'first_name'=>'SFR',
                        'last_name'=>'Default'
                    ));
		/*Profile*/		
                Profile::truncate();
                Profile::create(array(
                	   'user_id'=>1
                	));	
	}

}