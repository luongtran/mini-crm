<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of CommonHelper
 *
 * @author Administrator
 */
class CommonHelper {
    //begin    
    /*  function input 2 parameter type and string          
     *  type : error,success,warning    
     *  string: content need print
     */ 
    public static function print_msg($type='',$msg=''){
        switch($type)
        { 
            case 'error': $str='<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'.$msg.'</div>';
                          break;
            
            case 'warning': $str='<div role="alert" class="alert alert-warning"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'.$msg.'</div>';
                          break;
            
            case 'success': $str='<div role="alert" class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'.$msg.'</div>';
                          break;          
            default:        $str='<div role="alert" class="alert alert-primary"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'.$msg.'</div>';
                          break; 
        }
        return $str;
    }
    public static function print_msgs($type='',$msg=''){        
        $str="";
        foreach($msg->all() as $er)
        {
            $str.= CommonHelper::print_msg($type,$er); 
        }
        return $str;           
    }
    
    
    
    public static function list_base($key)
    {
        $list= null;
        switch($key){
            case'status':$list = array('new'=>'New','in-process'=>'In process','resovle'=>'Resovle','close'=>'Close');
                break;
            case'priority':$list = array('nomal'=>'Nomal','hight'=>'Hight','urgent'=>'Urgent');
                break;
            case'level_comment':$list = array('happy'=>'Happy','unhappy'=>'Unhappy','other'=>'Other');
                break;
            default:break;
        }    
        return $list;        
    }
    
    
    public static function removeXSS($str)
    {
        $result="";
        $vowels = array("<script>");        
        $result = str_replace($vowels, "", $str);
        return $result;
    }
    
    public static function breadcumb($array)
    {
        $str=  '<ul id="breadcrumb">
                <li>
                    <span class="entypo-home"></span>
                </li>
                <li><i class="fa fa-lg fa-angle-right"></i>
                </li>
                <li><a href="'.Request::root().'" title="Home">Home</a>
                </li>';        
                foreach($array as $nav):                    
                $str.= '<li><i class="fa fa-lg fa-angle-right"></i></li>';                
                $str.= '<li><a href="'.Request::root().'/'.$nav['link'].'" title="">'.$nav['title'].'</a></li>';                
                endforeach;
                
        $str.= '<li class="pull-right"></li></ul>';                      
        return $str;
    }
      

    //end class
}
