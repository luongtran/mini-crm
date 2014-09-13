<?php

class SettingsController extends \BaseController {
	protected $layout ="manager.layouts.default";
	/**
	 * Display a listing of the resource.
	 * GET /settings
	 *
	 * @return Response
	 */
	public function index()
	{		
		$this->layout->content = View::make('manager.settings.index');
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /settings/create
	 *
	 * @return Response
	 */
	public function create()
	{		
         DB::table('setting')->truncate();
         DB::table('setting')->insert(array(
                array('name'=>'site_name','title'=>'Website Name','value'=>'Default CRM SYSTEM','order'=>'1'),               
                array('name'=>'footer_text','title'=>'Footer','value'=>'','order'=>'2'),
                array('name'=>'debug','title'=>'Debug (true/false)','value'=>'false','order'=>'3'),                
                array('name'=>'host_mail' ,'title'=>'Email Host','value'=>'smtp.gmail.com','order'=>'4'),
                array('name'=>'host_port','title'=>'Email Port','value'=>'587','order'=>'5'),
                array('name'=>'host_encryption','title'=>'Email Encryption','value'=>'tsl','order'=>'6'),
                array('name'=>'host_username','title'=>'Email Username','value'=>'','order'=>'7'),
                array('name'=>'host_password','title'=>'Email Password','value'=>'','order'=>'8'),
                array('name'=>'host_email_admin','title'=>'Email Admin','value'=>'','order'=>'9'),
                array('name'=>'email_contact' ,'title'=>'E-mail contact','value'=>'','order'=>'10'),
                array('name'=>'address','title'=>'Address','value'=>'','order'=>'11'),
                array('name'=>'phone','title'=>'Phone','value'=>'','order'=>'12'),
                array('name'=>'facebook','title'=>'Facebook','value'=>'','order'=>'13'),
                array('name'=>'twitter','title'=>'Twitter','value'=>'','order'=>'14'),
                array('name'=>'google','title'=>'Google','value'=>'','order'=>'15'),
                array('name'=>'google_map','title'=>'Google Map','value'=>'','order'=>'16'),
            ));
          return Redirect::to('manager/setting'); 
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /settings
	 *
	 * @return Response
	 */
	public function store()
	{
		$ruler = array(
			'site_name'=>'required',
                        'host_mail'=>'required',
			'host_port'=>'required|numeric',
                        'host_username'=>'required',
                        'host_password'=>'required',
                        'host_email_admin'=>'required|email',
			'email_contact'=>'email',                        
			);

		$validation = Validator::make(Input::all(),$ruler);
		if($validation->passes())
		{
			$getInput=Input::all(); 
                        foreach($getInput as $k=>$v)
                        {
                         DB::table('setting')
                         ->where('name',$k)
                         ->update(array('value' => $v));
                        }
                    $result = array('status'=>'success','result'=>CommonHelper::print_msg('success',trans('message.update')));
                    return $result;		
		}
                else
                {
                $result = array('status'=>'error','result'=>CommonHelper::print_msgs('error',$validation->messages()));
		return $result;		
                }
	}

	/**
	 * Display the specified resource.
	 * GET /settings/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show()
	{
		$setting = Setting::orderBy('order','asc')->get();
		return View::make('manager.settings.show')->with('setting',$setting);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /settings/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
 	public static function getSetting($name=''){     

        $str = Settings::where('name','=',$name)->first();
        if($str){
           return $str->value;
        }
        return null;
    }

	/**
	 * Update the specified resource in storage.
	 * PUT /settings/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /settings/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}