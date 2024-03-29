<?php

class HomeController extends BaseController {
    protected $layout="home.layouts.default";
    /*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function index()
	{
	   $category = FqaCategory::all();
	   //$faq = Fqa::all();	   
	   $this->layout->slider  = true; 	
	   $this->layout->content = View::make('home.test_home');//->with('category',$category)->with('faq',$faq);	
	}

	public function page($id)
	{
		switch ($id) {
			case 'about':
                $this->layout->page = $id;
                $this->layout->breadcrumb = array(['link'=>'page/about','title'=>'About']);
				$this->layout->content = View::make('home.about');
				break;
			case 'contact':
                $this->layout->page = $id;
                $this->layout->breadcrumb = array(['link'=>'page/contact','title'=>'Contact']);
				$this->layout->content = View::make('home.contact');
				break;	
			case 'message':
                $this->layout->page = $id;
                $this->layout->breadcrumb = array(['link'=>'page/message','title'=>'Message']);
				$this->layout->content = View::make('home.message');
				break;		
			case 'notfound':
                $this->layout->page = $id;
				$this->layout->content = View::make('home.notfound');
				break;	
			default:
				return Redirect::to('');			
				break;
		}		
	}

	public function register()
	{
		//return View::make('client.customer.create');
		$sector = Sector::all()->lists('name','id');		
		$this->layout->content =  View::make('home.start')->with('sector',$sector);
	}
	public function contact() 
	{
		$validation = Validator::make(Input::all(),array('email'=>'required|email','subject'=>'required|min:5','message'=>'required|min:10'));
		if($validation->passes())
		{
		$email = new EmailController();
		$data = array(
			'subject'=>'Client contact from crm'.rand(1000,9999),
			'text'=>'<p>From email:'.Input::get('email').'</p><div>'.Input::get('message').'</br>',
			'to_email'=>EmailController::getEmailAdmin(),
			'to_name'=>'Customer - CRM ',
			);		
		if($email->manager_sendEmail($data))		
		Session::flash('msg_flash',CommonHelper::print_msg('success',trans('message.contact_success')));
		else
		Session::flash('msg_flash',CommonHelper::print_msg('error',trans('message.contact_error')));

		return Redirect::to('page/message');
	       }
	    return Redirect::back()->withInput()->withErrors($validation);
	}

}
