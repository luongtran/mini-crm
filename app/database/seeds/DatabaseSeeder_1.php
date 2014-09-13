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
				 /*reset data*/      
                Profile::truncate();
                Profile::create(array(
                	   'user_id'=>1
                	));	
                /*reset data*/      
                GroupUser::truncate();
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
                /*reset data*/      
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


                /*reset data*/      
                Language::truncate();
                Language::create(array(
                       'name'=>'English',
                       'code'=>'en',
                       'status'=>'publish'
                    )); 
                Language::create(array(
                       'name'=>'العربية',
                       'code'=>'sa',
                       'status'=>'publish'
                    )); 


                /*reset data*/      
                SupportType::truncate();
                SupportType::create(array(
                       'name'=>'Cleaning problem',
                    )); 
                SupportType::create(array(
                       'name'=>'Utility services',
                    )); 
                SupportType::create(array(
                       'name'=>'Maintenance',
                    )); 
                SupportType::create(array(
                       'name'=>'Safe and Security',
                    )); 

                /*reset data*/      
                FqaCategory::truncate();
                FqaCategory::create(array(
                       'name'=>'General',
                    )); 
                FqaCategory::create(array(
                       'name'=>'Getting Started',
                    )); 
                FqaCategory::create(array(
                       'name'=>'Pricing',
                    )); 
                FqaCategory::create(array(
                       'name'=>'Other',
                    )); 

                 /*reset data*/      
                NewCategory::truncate();
                NewCategory::create(array(
                       'name'=>'New Default',
                    )); 

                 /*reset data*/      
                GroupProduct::truncate();
                GroupProduct::create(array(
                       'name'=>'Group Default',
                    )); 

                 /*reset data*/      
                Sector::truncate();
                Sector::create(array(
                       'name'=>'It',                       
                    )); 

                Sector::create(array(
                       'name'=>'Education',                       
                    )); 
                
                Sector::create(array(
                       'name'=>'Construction',                       
                    )); 
                
	}

}