<?php
class GroupUserTableSeeder extends Seeder {

	public function run()
	{
 /*reset data*/      
                GroupUser::truncate();            
                GroupUser::insert(
                        array(
                                ['name' => 'admin']
                                ,                               
                                ['name' => 'staff']
                                ,                                
                                ['name' => 'customer']
                                ,
                                ['name' => 'employee']                                
                        ));
        }
}
?>