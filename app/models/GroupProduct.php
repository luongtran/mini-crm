<?php

class GroupProduct extends \Eloquent {
    
    protected $table="purchase_group_products";
    
    public function product() {
		return $this->hasOne('Product'); // this matches the Eloquent model
    }

    
}