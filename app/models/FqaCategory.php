<?php

class FqaCategory extends \Eloquent {
	protected $fillable = ['name','description'];
	protected $table="fqa_category";
	public static $rule = ['name'=>'required|min:3'];

	public function Fqa()
	{		 
       return $this->hasOne('Fqa','id');
	}
}