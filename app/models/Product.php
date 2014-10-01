<?php

class Product extends \Eloquent {
    
    protected $table="purchase_products";
    protected $fillable = array('name','description','cost','discount','group_products','activated');
    public static $rule =array('name'=>'required|min:3|unique:purchase_products',
                               'cost'=>'required|numeric|min:0',
                               'discount'=>'numeric|min:0|max:100',
                            );
    public static $rule_edit =array('name'=>'required|min:3',
                                   'cost'=>'required|numeric|min:0',
                                   'discount'=>'numeric|min:0|max:100',
                            );    

    public function groupProduct()
        {
            return $this->belongsTo('GroupProduct','group_products');
        }
    
}