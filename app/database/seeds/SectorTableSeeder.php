<?php
class SectorTableSeeder extends Seeder {
    

	public function run()
	{                                   
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
?>