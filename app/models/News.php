<?php
class News extends \Eloquent {
	
	protected $fillable = ['title','content','category_id'];
	protected $table="news";
	public static $rule = ['title'=>'required|min:5','content'=>'required','category_id'=>'required'];

	public function NewCategory()
	{		 
       return $this->belongsTo('NewCategory','category_id');
	}
}