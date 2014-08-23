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
							->orderBy('status','asc')
							->select(DB::raw('status,count(status) as count,month(created_at) as month'))
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

			            		if($rp->month == $status->month)
			            			$rp_column.= ",".$status->status.":".$status->count;			    	
			            		else
			            			$rp_column.= ",".$status->status.": 0";		
			            		
							endforeach;	
				$rp_column.= "},";					
						endforeach;	
				$rp_column.= "]";
		return View::make('manager.reports.chart')->with('rp_total',$rp_total)->with('rp_column',$rp_column);		 								
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
							->select(DB::raw('status,count(status) as count,month(created_at) as month'))
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
			            		if($rp->month == $status->month)
			            			$rp_column.= ",".$status->status.":".$status->count;			    	
			            		else
			            			$rp_column.= ",".$status->status.": 0";	

							endforeach;	
				$rp_column.= "},";					
						endforeach;	
				$rp_column.= "]";

		  	return View::make('manager.reports.chart')->with('rp_total',$rp_total)->with('rp_column',$rp_column);		 								
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