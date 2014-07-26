<?php

class EmailController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /email
	 *
	 * @return Response
	 */
	const EMAIL_ADMIN ="test@completermp.com";
        const EMAIL_STAFF ="ltt.develop@gmail.com";
        const EMAIL_TEST ="taikhoanlive100@outlook.com.vn";
        public function sendEmail()
	{
            
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
                $m->from('test@completermp.com',$msg['from_name']);
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
                $m->from(EmailController::EMAIL_ADMIN,'ADMIN - CRM');
                $m->to($data['to_email'],$data['to_name']);
                $m->subject($data['subject']); 
                //$m->attach($data['attach']);
                //$m->replyTo(EmailController::EMAIL_ADMIN,'Helpdesk');
                //Session::flash('msg_flash','Send email success');         
                });
               }
               catch(Exception $e)
               {
                 Session::flash('msg_flash','Have error with config email, please  try again !</br></br><p>'.$e.'</p>');                 
                 $status = false;
               }
               return $status;
        }

        public function configEmail()
        {      
//          $email_host = Settings::where('name','=','email_host')->first();
//          $email_username = Settings::where('name','=','email_username')->first();
//          $email_password = Settings::where('name','=','email_password')->first();
//          $email_encryption  = Settings::where('name','=','email_encryption')->first();
//          $email_port = Settings::where('name','=','email_port')->first(); 
//
//          $email_port = (int)$email_port->value;
//          Config::set('mail.host',$email_host->value);
//          Config::set('mail.port',$email_port);
//          Config::set('mail.encryption',$email_encryption->value);
//          Config::set('mail.username',$email_username->value);    
//          Config::set('mail.password',$email_password->value);  
         
          Config::set('mail.host','gator3228.hostgator.com');
          Config::set('mail.port','587');
          Config::set('mail.encryption','tls');
          Config::set('mail.username','abulayla');    
          Config::set('mail.password','Xqi1llvM:nx8');  
            
      
        }
}