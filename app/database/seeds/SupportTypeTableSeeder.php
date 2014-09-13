<?php
class SupportTypeTableSeeder extends Seeder {
    

	public function run()
	{    
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
        }
}
?>