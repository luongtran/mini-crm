<?php
class FqaCategoryTableSeeder extends Seeder {
    
	public function run()
	{ 
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
        }
        
        }

?>