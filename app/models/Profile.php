<?php

class Profile extends \Eloquent {
    protected $table="profiles";
  
    protected $fillable = array('company_name','address','phone_number','website','sector_id','employee_count','contact_employee_company');
    
     /*Relashionship*/
       public function user()
        {
            return $this->belongsTo('User','user_id');
        }
        public function sector()
        {
            return $this->belongsTo('Sector','sector_id');
        }

        /*end Relashionship*/
  
    public static function getProfile($id){
        $shares = DB::table('users')
        ->leftjoin('profile', 'users.id', '=', 'profiles.user_id')
        ->join('sector', 'sector.id', '=', 'profiles.sector_id')
        ->where('users.id', $id)
        ->get();
        return $shares;
    }
    
}