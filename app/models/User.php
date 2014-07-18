<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;
        
        const MANAGER =1;
        const CUSTOMER =3;        
        
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';
        protected $fillable = array('username','email','activated','group_users');
        public static $rule = array('username'=>'required|unique:users',
                                    'password'=>'required|confirmed',
                                    'email'=>'required|email|unique:users'
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
