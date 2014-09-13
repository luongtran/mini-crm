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
                /*Create table users and profile*/
                $this->call('UsersTableSeeder');
                $this->command->info('User table seeded!');
                
                /*Create FqaCategory */
                $this->call('FqaCategoryTableSeeder');
                $this->command->info('FqaCategory table seeded!');
                
                /*Create table GroupProduct*/
                $this->call('GroupProductTableSeeder');
                $this->command->info('GroupProduct table seeded!');
                
                /*Create table GroupUser*/
                $this->call('GroupUserTableSeeder');
                $this->command->info('GroupUser table seeded!');
                
                /*Create table language */
                $this->call('LanguageTableSeeder');
                $this->command->info('Language table seeded!');
                
                /*Create table NewCategory*/
                $this->call('NewCategoryTableSeeder');
                $this->command->info('NewCategory table seeded!');
                
                /*Create table Sector*/
                $this->call('SectorTableSeeder');
                $this->command->info('Sector table seeded!');
                
                 /*Create table Status*/
                $this->call('StatusTableSeeder');
                $this->command->info('Status table seeded!');
                
                 /*Create table SupportType*/
                $this->call('SupportTypeTableSeeder');
                $this->command->info('SupportType table seeded!');
                
	}

}