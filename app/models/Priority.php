<?php

class Priority extends \Eloquent {
    protected $table="priority";
    protected $fillable = ['name','description'];
    public static $rule = array('name'=>'required|min:2');            
   
}