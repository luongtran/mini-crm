<?php

class Employees extends \Eloquent {
	protected $fillable =array('email','first_name','address','phone_number','activated');
        
        public static $rule = array('email'=>'required|email|unique:users',
                      'password'=>'required|confirmed',
                      'first_name'=>'required|min:4',
                      'phone_number'=>'numeric|min:0'
            );
          public static $rule_edit = array(
                      'password'=>'confirmed',
                      'first_name'=>'required|min:4',
                      'phone_number'=>'numeric|min:0'
            );
}