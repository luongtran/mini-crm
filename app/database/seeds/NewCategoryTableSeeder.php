<?php
class NewCategoryTableSeeder extends Seeder {
    

	public function run()
	{   
 
                NewCategory::truncate();
                NewCategory::create(array(
                       'name'=>'New Default',
                    )); 
        }
}
?>