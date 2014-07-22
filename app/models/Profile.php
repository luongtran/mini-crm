<?php

class Profile extends \Eloquent {
    protected $tables="profiles";
    public static $rule =array('email'=>'required|email|unique:users',
                               'password'=>'required|confirmed',                                                               
                               'employee_count'=>'numeric|min:1',
                               'phone_number'=>'numeric|min:0',
                               'avatar'=>'image',
                               'contact_employee_company'=>'required',
                               'company_name'=>'required|min:3',
                               'first_name'=>'required|min:3'
                    );
    public static $rule_profile =array(
                               'password'=>'confirmed',                               
                               'employee_count'=>'numeric|min:1',
                               'phone_number'=>'numeric|min:0',
                               'avatar'=>'image',
                               'contact_employee_company'=>'required',
                               'company_name'=>'required|min:3',
                               'first_name'=>'required|min:3'
                    );
    protected $fillable = array('company_name','address','phone_number','website','sector_id','employee_count','contact_employee_company');
    
  
    public static function getProfile($id){
        $shares = DB::table('users')
        ->leftjoin('profile', 'users.id', '=', 'profiles.user_id')
        ->join('sector', 'sector.id', '=', 'profiles.sector_id')
        ->where('users.id', $id)
        ->get();
        return $shares;
    }
    
}