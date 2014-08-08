<?php

class ImagesController extends BaseController {

    protected $layout = 'backend.layouts.default';

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

    public function index() {        
      
        $this->layout->content = View::make('backend.images.index');
     
    }
    /*update single avatar...*/
    function store($file,$Path,$type_file,$user_id)
    {       
                $date = date('m-d-Y');       
                $filename= $date.'_'.$file->getClientOriginalName();
                $destination = public_path($Path);
                $file->move($destination, $filename);
                $upload =  new Upload;
                $upload->name = $filename;
                $upload->type = $file->getClientmimeType();
                $upload->path =  $Path.'/'.$filename;
                $upload->type_file = $type_file;
                $upload->user_id = $user_id;
                $upload->save();
                return $upload->path;                
    }
    
    function store_single($file,$Path,$type_content,$content,$type_file)
    {              
                $date = date('m-d-Y') ;       
                $filename= $date.'_'.$file->getClientOriginalName();
                $destination = public_path($Path);
                $file->move($destination, $filename);
                $upload =  new Upload;
                $upload->name = $filename;
                $upload->type = $file->getClientmimeType();
                $upload->path = $Path.'/'.$filename;
                $upload->type_file = $type_file;
                $upload->$type_content = $content;
                $upload->save();  
    }
    
    function stores($file,$Path,$type_content,$content,$type_file)
    {  
              foreach($file as $fileinfo)
                {                            
                $date = date('m-d-Y') ;       
                $filename= $date.'_'.$fileinfo->getClientOriginalName();
                $destination = public_path($Path);
                $fileinfo->move($destination, $filename);
                $upload =  new Upload;
                $upload->name = $filename;
                $upload->type = $fileinfo->getClientmimeType();
                $upload->path = $Path.'/'.$filename;
                $upload->type_file = $type_file;
                $upload->$type_content = $content;
                $upload->save();              
                }       
    }
    
    function checkImageOld($file,$Path,$article_id,$type_file)
    {
        
        
       $checkImage = Uploads::where('article_id','=',$article_id)->where('type_file','=',$type_file)->get();
       foreach($checkImage as $check)
       {           
          $ar=Uploads::find($check->id);
          $ar->delete(); 
       }
      
       $this->storeMulti($file,$Path,$article_id);
    }
    
    
      public function destroy($id)
    {        
          $ar=Upload::find($id);  
          try
          {                                
            $public_path = public_path($ar->path);              
            File::delete($public_path);//unlink($public_path);  
            $ar->delete();                                
          }
          catch(Exception $e)
          {
             Session::flash('msg_flash',CommonHelper::printMsg('error','Not delete this file !'));             
          }       
     }
    
    
    


}
