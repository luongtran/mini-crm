<?php

class Ticket extends \Eloquent {
	protected $fillable = ['subject','description','support_type','priority'];
	protected $table='tickets';
    public static $rule_client =array('subject'=>'required|min:5',
                                      'description'=>'required|min:5',
                                      'file'=>'mimes:jpeg,bmp,png,ico,gif,jpg,doc,docx,xls,xlsx,pdf'
                );

    const ST_new = "new";
    const ST_process = "in_process";
    const ST_resovle = "resolve";
    const ST_close = "close";

	public function Profile()
	{		 
       return $this->belongsTo('Profile','user_id');
	}    




}