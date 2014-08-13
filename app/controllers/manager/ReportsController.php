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
		//
	}

	public function ticket()
	{

		$test = DB::table('tickets')
							->join('support_type','support_type.id','=','tickets.support_type')
							->groupBy('tickets.support_type')
							->select(DB::raw('support_type.name as label,count(tickets.support_type) as value'))
							->get();
							//->toArray();

							
       // var_dump($test);
        //$test =  json_encode($test);								
        //var_dump($test);
        //die();

		$breadcrumb = [['link'=>'manager/reports','title'=>'Report']];
		$this->layout->content = View::make('manager.reports.ticket')
		->with('breadcrumb',$breadcrumb)
		->with('test',$test);
	}
	public function postTicket()
	{
		// if (Request::ajax())	
		  
		  $ruler = array('fromDay'=>'required','toDay'=>'required','optionRP'=>'required');
		  $validation = Validator::make(Input::all(),$ruler);
		  if($validation->passes())
		  {
		  	$fromDay = Input::get('fromDay');
		  	$toDay = Input::get('toDay');			
			$rp_column="";
			$rp_circle="";
		  	if(Input::get('optionRP')=='status')
		  	  {
		  	  	$rp_circle =  DB::table('tickets')							
							->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)
							->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)
							->groupBy('status')
							->select(DB::raw('status as label,count(status) as value'))
							->get(); 
		  	  }
		  	  else if(Input::get('optionRP')=='priority')
			  	  {
			  			$rp_circle =  DB::table('tickets')							
							->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)
							->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)
							->groupBy('priority')
							->select(DB::raw('priority as label,count(priority) as value'))
							->get(); 	
			  	  }
			  else if(Input::get('optionRP')=='support_type')
			  	 {
			  	 	$rp_circle =  DB::table('tickets')
							->join('support_type','support_type.id','=','tickets.support_type')
							->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)
							->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)
							->groupBy('tickets.support_type')
							->select(DB::raw('support_type.name as label,count(tickets.support_type) as value'))
							->get(); 
					 $rp_column= DB::table('tickets')
						 		->where(DB::raw('date(tickets.created_at)'),'>=',$fromDay)
								->where(DB::raw('date(tickets.created_at)'),'<=',$toDay)
								->groupBy(DB::raw('month(tickets.created_at)'))
								->select(DB::raw('
									month(tickets.created_at) as month,
									sum(IF(tickets.support_type = 1,1,0)) as ST1,
									sum(IF(tickets.support_type = 2,1,0)) as ST2,
									sum(IF(tickets.support_type = 3,1,0)) as ST3,
									sum(IF(tickets.support_type = 4,1,0)) as ST4				
									'))
								->get();
			  	 }	  

		  	return View::make('manager.reports.chart')->with('rp_circle',$rp_circle)->with('rp_column',$rp_column);		 
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