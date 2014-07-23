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
            case'status':$list = array('new'=>'New','in-process'=>'In process','close'=>'Close');
                break;
            case'priority':$list = array('nomal'=>'Nomal','hight'=>'Hight','urgent'=>'Urgent');
                break;
            default:break;
        }    
        return $list;        
    }


    //end class
}
