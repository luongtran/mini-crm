<?php

class Ticket extends \Eloquent {
	protected $fillable = ['subject','description','support_type','priority'];
        public static $rule_client =array('subject'=>'required|min:5',
                                          'description'=>'required|min:5',
                                           'file'=>'mimes:jpeg,bmp,png,ico,gif,jpg,doc,docx,xls,xlsx,pdf'
                );
}