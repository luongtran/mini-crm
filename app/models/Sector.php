<?php

class Sector extends \Eloquent {
    protected $table="sector";
    
    public function profile()
        {
            return $this->hasOne('Profile','sector_id');
       }
}