<?php

class FqaCategory extends \Eloquent {
	protected $fillable = [];
	protected $table="fqa_category";
	public static $rule = ['name'=>'required|min:3'];

}