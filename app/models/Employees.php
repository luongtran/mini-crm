<?php

class Employees extends \Eloquent {
	protected $fillable =array('email','first_name','address','phone_number','activated');
        
        public static $rule = array('email'=>'required|email|unique:users',
                      'password'=>'required|confirmed|min:6',
                      'first_name'=>'required|min:2|max:10',
                      'last_name'=>'required|min:2|max:10',
                      'phone_number'=>'numeric|min:0'

            );
          public static $rule_edit = array(
                      'password'=>'confirmed|min:6',
                      'first_name'=>'required|min:2|max:10',
                      'last_name'=>'required|min:2|max:10',
                      'phone_number'=>'numeric|min:0',
                      'avatar'=>'image|max:1024'

            );
}