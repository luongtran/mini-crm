<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;
        
        const MANAGER =1;
        const STAFF =2;  
        const CUSTOMER =3;        
        const EMPLOYEE =4;  
        
        const STATUS_NEW ='new';  
        const STATUS_PROCESS ='in-process';  
        const STATUS_CLOSE ='close';  
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';
        protected $fillable = array('username','email','activated','group_users','first_name','last_name','adress');
        public static $rule = array('username'=>'required|unique:users',
                                    'password'=>'required|confirmed',
                                    'email'=>'required|email|unique:users',
                                    'first_name'=>'required'
                                    );
        /**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password');
        
      
    
        public function getRememberToken()
        {   
        return $this->remember_token;
        }

        public function setRememberToken($value)
        {
        $this->remember_token = $value;
        }   

        /*public function getRememberTokenName()
        {
        return 'remember_token';
        }*/
}
