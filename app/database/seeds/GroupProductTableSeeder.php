<?php
class GroupProductTableSeeder extends Seeder {
    

	public function run()
	{    
                /*reset data*/      
                GroupProduct::truncate();
                GroupProduct::create(array(
                       'name'=>'Group Default',
                    )); 

        }
}
?>