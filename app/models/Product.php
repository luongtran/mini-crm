<?php

class Product extends \Eloquent {
    
    protected $table="purchase_products";
    protected $fillable = array('name','description','cost','discount','group_products','activated');
    public static $rule =array('name'=>'required|unique:purchase_products',
                               'cost'=>'required|numeric|min:0',
                               'discount'=>'numeric|min:0|max:100',
                            );
    public static $rule_edit =array('name'=>'required',
                                   'cost'=>'required|numeric|min:0',
                                   'discount'=>'numeric|min:0|max:100',
                            );
    
     public function product() {
		return $this->hasOne('GroupProduct'); // this matches the Eloquent model
    }
    
}