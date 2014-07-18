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

        public function configEmail()
        {      
          $email_host = Settings::where('name','=','email_host')->first();
          $email_username = Settings::where('name','=','email_username')->first();
          $email_password = Settings::where('name','=','email_password')->first();
          $email_encryption  = Settings::where('name','=','email_encryption')->first();
          $email_port = Settings::where('name','=','email_port')->first(); 

          $email_port = (int)$email_port->value;
          Config::set('mail.host',$email_host->value);
          Config::set('mail.port',$email_port);
          Config::set('mail.encryption',$email_encryption->value);
          Config::set('mail.username',$email_username->value);    
          Config::set('mail.password',$email_password->value);    
        }


}