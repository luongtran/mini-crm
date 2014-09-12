<?php

class NewsCategory extends \Eloquent {
    protected $table="new_category";
    protected $fillable = ['name','description'];
    public static $rule = array('name'=>'required|min:2');            
   
}