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
		        $rp_total =  DB::table('ticket_history')
							//->where(DB::raw('date(created_at)'),'>=','2014-7-22')						
							->groupBy('ticket_history.status')
							->orderBy('y','asc')
							->select(DB::raw('status as label,count(status) as y'))
							->get(); 	


	 			$rp_status= DB::table('ticket_history')						 		
	 						->groupBy('status')
							->groupBy(DB::raw('month(created_at)'))								
							->groupBy(DB::raw('year(created_at)'))								
							->orderBy('status','asc')
							->select(DB::raw('status,count(status) as count,month(created_at) as month,year(created_at) as year'))
							->get();

				$rp_month= DB::table('ticket_history')						 	
										->groupBy(DB::raw('month(created_at)'))		
										->groupBy(DB::raw('year(created_at)'))	
										->orderBy('year','asc')						
										->orderBy('month','asc')														
										->select(DB::raw('month(created_at) as month,year(created_at) as year'))
										->get();

				$rp_column = "[";	
						foreach($rp_month as $rp):						
				$rp_column.= "{month:'".$rp->month."/".$rp->year."'";

			            	foreach($rp_status as $status):

			            		if($rp->month == $status->month && $rp->year == $status->year)
			            			$rp_column.= ",".$status->status.":".$status->count;			    				            			
			            		
							endforeach;	
				$rp_column.= "},";					
						endforeach;	
				$rp_column.= "]";

		$rp_key_label = "['new','resolve','close']";		
		$rp_key = "['New','Resolve','Close']";

		return View::make('manager.reports.chart')->with('rp_total',$rp_total)->with('rp_column',$rp_column)->with('rp_key_label',$rp_key_label)->with('rp_key',$rp_key);		 								
	}

	public function ticket()
	{
		$breadcrumb = [['link'=>'manager/reports','title'=>'Report']];
		$this->layout->content = View::make('manager.reports.ticket')
		->with('breadcrumb',$breadcrumb);
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
      			$rp_total =  DB::table('ticket_history')
							->where(DB::raw('date(created_at)'),'>=',$fromDay)			 		
							->where(DB::raw('date(created_at)'),'<=',$toDay)						
							->groupBy('ticket_history.status')
							->orderBy('y','asc')
							->select(DB::raw('status as label,count(status) as y'))
							->get(); 							

	 			$rp_status= DB::table('ticket_history')		
	 						->where(DB::raw('date(created_at)'),'>=',$fromDay)			 		
							->where(DB::raw('date(created_at)'),'<=',$toDay)					 		
	 						->groupBy('status')
							->groupBy(DB::raw('month(created_at)'))								
							->orderBy('status','asc')
							->select(DB::raw('status,count(status) as count,month(created_at) as month,year(created_at) as year'))
							->get();

				 $rp_month= DB::table('ticket_history')		
				 						->where(DB::raw('date(created_at)'),'>=',$fromDay)			 		
										->where(DB::raw('date(created_at)'),'<=',$toDay)					 	
										->groupBy(DB::raw('month(created_at)'))	
										->groupBy(DB::raw('year(created_at)'))																
										->orderBy('year','asc')						
										->orderBy('month','asc')														
										->select(DB::raw('month(created_at) as month,year(created_at) as year'))
										->get();
				$rp_column = "[";	
						foreach($rp_month as $rp):						
				$rp_column.= "{month:'".$rp->month."/".$rp->year."'";
			            	foreach($rp_status as $status):
			            		if($rp->month == $status->month && $rp->year == $status->year)
			            			$rp_column.= ",".$status->status.":".$status->count;	

							endforeach;	
				$rp_column.= "},";					
						endforeach;	
				$rp_column.= "]";

				$rp_key_label = "['new','resolve','close']";		
				$rp_key = "['New','Resolve','Close']";

		  	return View::make('manager.reports.chart')->with('rp_total',$rp_total)->with('rp_column',$rp_column)->with('rp_key_label',$rp_key_label)->with('rp_key',$rp_key);		 								
		    }
		    elseif (Input::get('optionRP')=='priority') {

		    	$rp_total =  DB::table('ticket_history')
							->where(DB::raw('date(created_at)'),'>=',$fromDay)			 		
							->where(DB::raw('date(created_at)'),'<=',$toDay)						
							->groupBy('ticket_history.priority')
							->orderBy('y','asc')
							->select(DB::raw('priority as label,count(priority) as y'))
							->get(); 	

				$rp_status= DB::table('ticket_history')			
							->where(DB::raw('date(created_at)'),'>=',$fromDay)			 		
							->where(DB::raw('date(created_at)'),'<=',$toDay)				 		
	 						->groupBy('priority')
							->groupBy(DB::raw('month(created_at)'))								
							->groupBy(DB::raw('year(created_at)'))								
							->orderBy('priority','asc')
							->select(DB::raw('priority,count(priority) as count,month(created_at) as month,year(created_at) as year'))
							->get();

				$rp_month= DB::table('ticket_history')						 	
										->where(DB::raw('date(created_at)'),'>=',$fromDay)			 		
										->where(DB::raw('date(created_at)'),'<=',$toDay)	
										->groupBy(DB::raw('month(created_at)'))		
										->groupBy(DB::raw('year(created_at)'))	
										->orderBy('year','asc')						
										->orderBy('month','asc')														
										->select(DB::raw('month(created_at) as month,year(created_at) as year'))
										->get();

				$rp_column = "[";	
						foreach($rp_month as $rp):						
				$rp_column.= "{month:'".$rp->month."/".$rp->year."'";

			            	foreach($rp_status as $status):

			            		if($rp->month == $status->month && $rp->year == $status->year)
			            			$rp_column.= ",".$status->priority.":".$status->count;			    				            			
			            		
							endforeach;	
				$rp_column.= "},";					
						endforeach;	
				$rp_column.= "]";

				$rp_key_label = "['nomal','hight','urgent']";		
				$rp_key = "['Nomal','Hight','Urgent']";

		    	return View::make('manager.reports.chart')->with('rp_total',$rp_total)->with('rp_column',$rp_column)->with('rp_key_label',$rp_key_label)->with('rp_key',$rp_key);		 									
		    }

		  }

		  else
		  {		  	
		  	return "Error";
		  }
		
	}


	/**
	 * Show the form for creating a new resource.
	 * GET /manager/reports/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /manager/reports
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /manager/reports/{id}
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
	 * GET /manager/reports/{id}/edit
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
	 * PUT /manager/reports/{id}
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
	 * DELETE /manager/reports/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}