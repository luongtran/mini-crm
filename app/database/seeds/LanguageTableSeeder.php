<?php

class LanguageTableSeeder extends Seeder {

	public function run()
	{
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
        }
}
?>