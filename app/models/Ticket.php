<?php

class Ticket extends \Eloquent {
	protected $fillable = ['subject','description','support_type','priority'];
	protected $table='tickets';
    public static $rule_client =array('subject'=>'required|min:5',
                                      'description'=>'required|min:5',
                                      'file'=>'max:5000|mimes:jpeg,bmp,png,ico,gif,jpg,doc,docx,xls,xlsx,pdf',																	
									  'support_type'=>'required',
									  'priority'=>'required',								  
                );
	public static $rule_server =array('subject'=>'required|min:5',
                                      'description'=>'required|min:5',
                                      'file'=>'max:5000|mimes:jpeg,bmp,png,ico,gif,jpg,doc,docx,xls,xlsx,pdf',
									  'client_id'=>'required',
									  'server_id'=>'required',
									  'support_type'=>'required',
									  'priority'=>'required',
											  
                );	
        public static $rule_server_edit=array( 			
									  'server_id'=>'required',
									  'support_type'=>'required',
									  'priority'=>'required',
											  
                );

    const ST_new = "new";
    const ST_process = "in_process";
    const ST_resovle = "resolve";
    const ST_close = "close";
    const S_NEW = "1";
    const S_INPROCESS = "2";
    const S_RESOLVE = "3";
    const S_CLOSE = "4";

	public function Profile()
	{		 
       return $this->belongsTo('Profile','user_id');
	}    


   /*Relashionship*/
  public function status()
        {
            return $this->hasOne('Status');
        }




}