<?php

class Sector extends \Eloquent {
    protected $table="sector";
    protected $fillable = ['name','description'];
    public static $rule = array('name'=>'required|min:2');            
   
}