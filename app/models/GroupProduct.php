<?php

class GroupProduct extends \Eloquent {
    
    protected $table="purchase_group_products";
    public static $rule = array('name'=>'required|min:3');
    protected $fillable = ['name','description'];
    public function product() {
		return $this->hasOne('Product'); // this matches the Eloquent model
    }

    
}