<?php

class SupportType extends \Eloquent {
	protected $fillable = ['name','description'];
	protected $table="support_type";	
        public static $ruler = array('name'=>'required|min:2');
}