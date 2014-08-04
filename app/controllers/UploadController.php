<?php

class UploadController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /upload
	 *
	 * @return Response
	 */

	public function client()
	{
		return View::make('share.upload.client');
	}
	public function UploadClient()
	{
		//$input = Input::file('file');
		  $check = true;

		  $uploadImage = Input::file('file'); 
                /*validation file*/
          $str_val = "";      
               foreach($uploadImage as $img) :   

                 $validation = Validator::make(            
                    array(
                        'file'=>$img
                    ),
                    array(
                        'file'=> 'required|mimes:jpeg,bmp,png,gif,pdf,doc,docx',
                      // 'file'=>'mimes:png,gif,jpg,jpge,bmp',
                    )
                     );        
                    if ($validation->fails())
                    {
                    	$str_val = $str_val.'</br>File name '.$img->getClientOriginalName().'</br>'.CommonHelper::print_msgs('error',$validation->messages());                        
                        $check=false;
                    } 
                 endforeach; 


        if($check)
        {        	
        	$image = new ImagesController();
        	$path = 'asset/share/uploads/resource';
        	$customer_id = Auth::id();
        	if(Auth::user()->group_users == User::EMPLOYEE)
        	{
        		$customer_id = User::find(Auth::id())->customer_id;
        	}
        	$image->stores(Input::file('file'),$path,'customer_id',$customer_id,'document');
        	Session::flash('msg_flash',CommonHelper::print_msg('success','Upload success'));
        	return Redirect::to('client/upload/document');
        }
        else
        {
        	Session::flash('msg_flash',$str_val);
        	return Redirect::back();
        }


	}
	public function documentClient()
	{
		$customer_id = Auth::id();
        	if(Auth::user()->group_users == User::EMPLOYEE)
        	{
        		$customer_id = User::find(Auth::id())->customer_id;
        	}
		$documents = Upload::where('customer_id',$customer_id)->where('type_file','document')->orderBy('id','desc')->get();
		return View::make('share.upload.document_client')->with('doucuments',$documents);
	}

	public function deleteClient($id)
	{		
		$dc = Upload::find($id);
		if($dc)
		{
			$upload = new ImagesController();
			$upload->destroy($id);
			Session::flash('msg_flash',CommonHelper::print_msg('success','Deleted success'));
		}
		return Redirect::back();
	}


	public function admin()
	{
		//
	}

	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /upload/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /upload
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /upload/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /upload/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /upload/{id}
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
	 * DELETE /upload/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}