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
        const STATUS_RESOLVE ='resolve';  
        const STATUS_CLOSE ='close'; 
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';
        protected $fillable = array('email','activated','first_name','last_name');
        public static $rule_create_users = ['password'=>'required|confirmed|min:6',
                                            'password_confirmation'=>'required|min:6',
                                            'email'=>'required|email|unique:users',
                                            'first_name'=>'required|min:3|max:20',
                                            'last_name'=>'required|min:3|max:20'
                                            ];
        
        public static $rule_create_customers = ['password'=>'required|confirmed|min:6',
                                            'password_confirmation'=>'required|min:6',
                                            'email'=>'required|email|unique:users',
                                            'first_name'=>'required|min:3|max:20',
                                            'last_name'=>'required|min:3|max:20',
                                            'company_name'=>'required|min:3|max:60',
                                            'phone_number'=>'required',
                                            'employee_count'=>'required|numeric',
                                            'contact_employee_company'=>'required|min:6|max:25',
                                            'avatar'=>'image'
                                            ];
        public static $rule_edit_customers = ['password'=>'confirmed|min:6',
                                              'password_confirmation'=>'min:6',  
                                            'first_name'=>'required|min:3|max:20',
                                            'last_name'=>'required|min:3|max:20',
                                            'company_name'=>'required|min:3|max:60',
                                            'phone_number'=>'required',
                                            'employee_count'=>'required|numeric',
                                            'contact_employee_company'=>'required|min:6|max:25',
                                            'avatar'=>'image'
                                            ];
        public static $rule_profile_manager = [
                                            'first_name'=>'required|min:3|max:20',
                                            'last_name'=>'required|min:3|max:20',
                                            'company_name'=>'min:3|max:60',
                                            'avatar'=>'image'
                                            ];
        /**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
       
        
	protected $hidden = array('password');
        
        /*Relashionship*/
        public function profile()
        {
            return $this->hasOne('Profile');
        }
       
        public function ticket()
        {
            return $this->hasOne('Ticket','tickets');
        }

        public function groupUser()
        {
            return $this->belongsTo('GroupUser','group_users');
        }
        /*end Relashionship*/
        public function getRememberToken()
        {   
        return $this->remember_token;
        }

        public function setRememberToken($value)
        {
        $this->remember_token = $value;
        }   

      
       
}
