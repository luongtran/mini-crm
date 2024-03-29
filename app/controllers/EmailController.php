<?php

class EmailController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /email
	 *
	 * @return Response
	 */
        public function sendEmail()
	{
            
	}        
        public static function getEmailAdmin()
        {
             $email_host = Setting::where('name','=','host_email_admin')->first();
             if($email_host)
             {
                 return $email_host->value;                         
             }
             return null;
        }


        public function test()
	{
            return View::make('share.test');
	}
         public function postTest()
	{
            //$this->configEmail(); 
            $msg = array('text'=>'Test message'.rand(100,9999),'subject'=>'Test mail'.Rand(100,9999),'to_email'=>  EmailController::EMAIL_TEST,'to_name'=>'test email crm'
                );
            
            if($this->manager_sendEmail($msg)){                
                return Redirect::to('debug/email?success');                
               }
            else{                  
                 return Redirect::back();
               }
	}
        
        
        public function sendContact($msg)
        {
              try{
              Mail::send('frontend.contact.send_email',$msg['message'], function($m){            
                $m->from(SettingsController::getSetting('host_email_admin'),$msg['from_name']);
                $m->to($msg['to_email'],$msg['to_name']);
                $m->subject($msg['subject']);                          
                Session::flash('msg_flash', trans('messages.send_contact_success'));         
                });
               }
               catch(Exception $e)
               {
                 Session::flash('msg_flash','Have error with config email, please  try again !</br></br><p>'.$e.'</p>');
                 return Redirect::route('view_page_msg');
               }
        }
        
        public function manager_sendEmail($data)
        {
            /*  From name
             *  To email, to name
             *  Subject 
             *  Messages
             */  
            $this->configEmail(); 
            $status = true;         
             try{
                Mail::send('share.test.testmail',$data, function($m) use ($data)
                {            
                $m->from(SettingsController::getSetting('host_email_admin'),'ADMIN - CRM');
                $m->to($data['to_email'],$data['to_name']);
                $m->subject($data['subject']); 
                //$m->attach($data['attach']);
                //$m->replyTo(EmailController::EMAIL_ADMIN,'Helpdesk');
                //Session::flash('msg_flash','Send email success');         
                });
               }
               catch(Exception $e)
               {
                 Session::flash('msg_flash',CommonHelper::print_msg('error','<h2>'.trans('message.error_config_email').'</h2><p>'.$e.'</p>'));                 
                 $status = false;
               }
               return $status;
        }

        public function configEmail()
        { 

          try{
          $email_host = SettingsController::getSetting('host_mail');
          $email_username = SettingsController::getSetting('host_username');
          $email_password = SettingsController::getSetting('host_password');
          $email_encryption  = SettingsController::getSetting('host_encryption');
          $email_port = SettingsController::getSetting('host_port'); 
          $email_port = (int)$email_port;

          Config::set('mail.host',$email_host);
          Config::set('mail.port',$email_port);
          Config::set('mail.encryption',$email_encryption);
          Config::set('mail.username',$email_username);    
          Config::set('mail.password',$email_password);  
          /*
          
          Config::set('mail.host','gator3228.hostgator.com');
          Config::set('mail.port','587');
          Config::set('mail.encryption','tls');
          Config::set('mail.username','abulayla');    
          Config::set('mail.password','Xqi1llvM:nx8');  
           */
          //dd(Config::get('mail'));
	  }
		  catch(Exception $e)
           {
				echo '<h2>Error config email</h2><input type="text" value="'.$e.'" style="display:none"/>';
				die();
           }
        }
}