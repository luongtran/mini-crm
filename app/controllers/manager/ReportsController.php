<?php

class ReportsController extends BaseController {
		protected $layout ="manager.layouts.default";
	/**
	 * Display a listing of the resource.
	 * GET /manager/reports
	 *
	 * @return Response
	 */
	public function index()
	{
            $getDay =  getdate();
            $getMonth_From = $getDay['mon'];          
            
           
		        $rp_total =  DB::table('tickets')							
		        						->join('status','status.id','=','tickets.status')
                                                                        ->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-1)			 
                                                                        ->where(DB::raw('month(tickets.created_at)'),'<=',$getMonth_From)			 
									->groupBy('tickets.status')												
									->select(DB::raw('status.name as label,count(tickets.status) as y'))
									->get();
                      
									
				$rp_month= DB::table('tickets')			->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-1)			 
                                                                                ->where(DB::raw('month(tickets.created_at)'),'<=',$getMonth_From)			 	
										->groupBy(DB::raw('month(created_at)'))		
										->groupBy(DB::raw('year(created_at)'))																									
										->orderBy('year','asc')	
										->orderBy('month','asc')	
										->select(DB::raw('month(created_at) as month ,year(created_at) year,count(tickets.code) as total'))
										->get();	
				$rp_status= DB::table('tickets')						 	
										->join('status','status.id','=','tickets.status')
                                                                                ->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-1)			 
                                                                                ->where(DB::raw('month(tickets.created_at)'),'<=',$getMonth_From)
										->where('tickets.status','<>',2)
										->where('tickets.status','<>',4)
										->groupBy(DB::raw('month(tickets.created_at)'))		
										->groupBy(DB::raw('year(tickets.created_at)'))																									
										->groupBy('tickets.status')																									
										->orderBy('year','asc')	
										->orderBy('month','asc')											
										->select(DB::raw('month(tickets.created_at) as month,month(tickets.resolved_at) as monthRS ,year(tickets.created_at) year,count(tickets.status) as total,status.name as status'))
										->get();

		return View::make('manager.reports.chart_status',compact('rp_month','rp_status','rp_total'));
        }

	public function ticket()
	{
                $this->layout->page = "Report ticket";
                $this->layout->title = "Report ticket";
		$this->layout->breadcrumb = [['link'=>'manager/reports/ticket','title'=>'Report']];
		$this->layout->content = View::make('manager.reports.ticket');
	}
	public function postTicket()
	{
		
		  $ruler = array('fromDay'=>'required','toDay'=>'required','optionRP'=>'required');
		  $validation = Validator::make(Input::all(),$ruler);
		  if($validation->passes())
		  {
		  	$fromDay = Input::get('fromDay');
		  	$toDay = Input::get('toDay');			
			/*report for status*/			
			if(Input::get('optionRP')=='status'){	

				$rp_total =  DB::table('tickets')							
		        						->join('status','status.id','=','tickets.status')																										
		        						->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)			 		
										->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)								
										->groupBy('tickets.status')												
										->select(DB::raw('status.name as label,count(tickets.status) as y'))
										->get();
									
				$rp_month= DB::table('tickets')						 	
										->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)			 		
										->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)								
										->groupBy(DB::raw('month(created_at)'))		
										->groupBy(DB::raw('year(created_at)'))																									
										->orderBy('year','asc')	
										->orderBy('month','asc')	
										->select(DB::raw('month(created_at) as month ,year(created_at) year,count(tickets.code) as total'))
										->get();	
				$rp_status= DB::table('tickets')						 	
										->join('status','status.id','=','tickets.status')										
										->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)			 		
										->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)								
										->where('tickets.status','<>',Ticket::S_INPROCESS)
										->where('tickets.status','<>',Ticket::S_CLOSE)
										->groupBy(DB::raw('month(tickets.created_at)'))		
										->groupBy(DB::raw('year(tickets.created_at)'))																									
										->groupBy('tickets.status')																									
										->orderBy('year','asc')	
										->orderBy('month','asc')											
										->select(DB::raw('month(tickets.created_at) as month,month(tickets.resolved_at) as monthRS ,year(tickets.created_at) year,count(tickets.status) as total,status.name as status'))
										->get();									

				return View::make('manager.reports.chart_status',compact('rp_month','rp_status','rp_total'));				
		  	
		    }
		    elseif (Input::get('optionRP')=='priority') {
			
		    	$rp_total =  DB::table('tickets')							
		        						->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)			 		
										->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)									
										->groupBy('tickets.priority')												
										->select(DB::raw('priority as label,count(priority) as y'))
										->get();
									
				$rp_month= DB::table('tickets')				
										->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)			 		
										->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)			 									
										->groupBy(DB::raw('month(created_at)'))		
										->groupBy(DB::raw('year(created_at)'))																									
										->orderBy('year','asc')	
										->orderBy('month','asc')	
										->select(DB::raw('month(created_at) as month ,year(created_at) year,count(tickets.code) as total'))
										->get();	
				$rp_priority= DB::table('tickets')						 	
										->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)			 		
										->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)	
										->groupBy(DB::raw('month(tickets.created_at)'))		
										->groupBy(DB::raw('year(tickets.created_at)'))																									
										->groupBy('priority')																									
										->orderBy('year','asc')	
										->orderBy('month','asc')											
										->select(DB::raw('month(tickets.created_at) as month,month(tickets.resolved_at) as monthRS ,year(tickets.created_at) year,count(priority) as total,priority'))
										->get();
		    	return View::make('manager.reports.chart_priority',compact('rp_total','rp_month','rp_priority'));		 									
		    }

		  }

		  else
		  {		  	
		  	return "Error";
		  }
		
	}

	/*staff*/
	public function staff()
	{
            
                $this->layout->page = "Report staff";
                $this->layout->title = "Report staff";
		$this->layout->breadcrumb =  [['link'=>'manager/reports/ticket','title'=>'Report'],['link'=>'','title'=>'Staff']];		
		$this->layout->content = View::make('manager.reports.staff');
	}
	

	public function staffRace()
	{		
		
		$rp_staff =  User::where('group_users','=',User::STAFF)					
				->where('activated',true)	
				->orderBy('count_access','desc')
				->select(DB::raw('id as server_id,first_name,last_name,avatar,count_access'))
				->get(); 	

		//dd($rp_staff);		

		$rp_race =  DB::table('races')	
				->join('tickets','tickets.code','=','races.code_ticket')															
				->join('users','users.id','=','tickets.server_id')												
				->groupBy('races.level_comment')												
				->groupBy('tickets.server_id')												
				->select(DB::raw('level_comment as level,count(races.level_comment) as count,users.first_name,users.last_name,tickets.server_id,users.avatar'))
				->get();

	

		$rp_total =  DB::table('races')	
				->join('tickets','tickets.code','=','races.code_ticket')															
				->join('users','users.id','=','tickets.server_id')												
				->groupBy('races.level_comment')												
				->select(DB::raw('level_comment as label,count(races.level_comment) as y'))
				->get();                
			
		 $rp_overdue =  DB::table('tickets')   
	        ->groupBy('tickets.server_id')                        
	        ->select(DB::raw('month(tickets.created_at) as beginM, month(tickets.resolved_at) as endM,tickets.server_id as staffID'))
	        ->get(); 
	        	
		return View::make('manager.reports.race',compact('rp_total','rp_race','rp_staff','rp_overdue'));	
	}


    /*analysis*/
	public function analysis()
	{       
                $this->layout->page = "Analysis";
                $this->layout->title = "Analysis";
		$this->layout->breadcrumb = [['link'=>'manager/reports/analysis','title'=>'Analysis']];
		$this->layout->content = View::make('manager.reports.analysis');
	}
        
	public function supportType()
	{
            
            $getDay =  getdate();
            $getMonth_From = $getDay['mon'];          
            
			$rp_total =  DB::table('tickets')	
				->join('support_type','support_type.id','=','tickets.support_type')
                                ->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-1)			 
                                ->where(DB::raw('month(tickets.created_at)'),'<=',$getMonth_From)	
				->groupBy('tickets.support_type')												
				->select(DB::raw('support_type.name as label,count(tickets.support_type) as value'))
				->get();
                        $total_ticket =  DB::table('tickets')->count();
                        $result = "[";
                        foreach($rp_total as $support_type):
                            $percent = number_format(($support_type->value * 100)/$total_ticket,2); 
                            $result.= "['".$support_type->label."',".$percent."],";
                        endforeach;		
                        $result.= "]";                       
			return View::make('manager.reports.chart_support_type',compact('result'));		 										
	}
        public function supportTypeLimit()
	{            
           
		  //$ruler = array('fromDay'=>'required','toDay'=>'required');
		  //$validation = Validator::make(Input::all(),$ruler);
		 // if($validation->passes())
		  //{
		  	$fromDay = Input::get('fromDay');
		  	$toDay = Input::get('toDay');
                        
                        $total_ticket =  DB::table('tickets')->count();
                        
			$rp_total =  DB::table('tickets')	
				->join('support_type','support_type.id','=','tickets.support_type')															
                                ->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)			 		
                                ->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)
				->groupBy('tickets.support_type')												
				->select(DB::raw('support_type.name as label,count(tickets.support_type) as value'))
				->get();                       
			
                        $result = "[";
                        foreach($rp_total as $support_type):
                            $percent = number_format(($support_type->value * 100)/$total_ticket,2); 
                            $result.= "['".$support_type->label."',".$percent."],";
                        endforeach;		
                        $result.= "]";  
                        
			return View::make('manager.reports.chart_support_type',compact('result'));
                  //}
                  //return trans('message.error_load_data');
	}


}