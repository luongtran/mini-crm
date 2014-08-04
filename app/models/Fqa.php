<?php

class Fqa extends \Eloquent {
	protected $fillable = ['title','content','category_id'];
	protected $table="fqas";
	public static $rule = ['title'=>'required|min:5','content'=>'required'];

	public function FqaCategory()
	{		 
       return $this->belongsTo('FqaCategory','category_id');
	}
}