<?php

class Fqa extends \Eloquent {
	protected $fillable = ['title','content','category'];
	protected $table="fqas";
	public static $rule = ['title'=>'required|min:5','content'=>'required'];
}