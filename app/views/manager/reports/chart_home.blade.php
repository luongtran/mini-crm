<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script> 
<?php 
$getDay =  getdate();
            $getMonth_From = $getDay['mon'];          
            
           
		               $rp_total =  DB::table('tickets')							
		        						->join('status','status.id','=','tickets.status')
                                                                        ->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-2)			 
                                                                        ->where(DB::raw('month(tickets.created_at)'),'<=',$getMonth_From)			 
									->groupBy('tickets.status')												
									->select(DB::raw('status.name as label,count(tickets.status) as y'))
									->get();
                      
									
				$rp_month= DB::table('tickets')			->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-2)			 
                                                                                ->where(DB::raw('month(tickets.created_at)'),'<=',$getMonth_From)			 	
										->groupBy(DB::raw('month(created_at)'))		
										->groupBy(DB::raw('year(created_at)'))																									
										->orderBy('year','asc')	
										->orderBy('month','asc')	
										->select(DB::raw('month(created_at) as month ,year(created_at) year,count(tickets.code) as total'))
										->get();	
				$rp_status= DB::table('tickets')						 	
										->join('status','status.id','=','tickets.status')
                                                                                ->where(DB::raw('month(tickets.created_at)'),'>=',$getMonth_From-2)			 
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
          $char_resolved_ticket = "{name:'Resolved',data:["; 
          $char_total_ticket = "{name:'Total',data:["; 
          foreach($rp_month as $month):
                  
                    $temp_resolve = 0;$temp_resolve1=0; $total = $month->total;
                    foreach($rp_status as $status):                             
                      if($month->month == $status->month && $month->year == $status->year): 
                           if($status->status == 'Resolve' && $status->month == $status->monthRS):        
                               $temp_resolve = (($status->total)*100)/$total;  $temp_resolve1=$status->total;           
                           endif;                      
                      endif;
                    endforeach; 
              
                    if($temp_resolve>0):                
                      $char_resolved_ticket.= $temp_resolve1.',';
                    else:                  
                      $char_resolved_ticket.= '0,';
                    endif;
                    
                $char_total_ticket.=(int)$month->total.',';      
          endforeach ;
                     
                 
       
         $char_total_ticket.= "]}";

         $char_resolved_ticket.= "]}"; 
         
         $monthJS = "[";
            foreach($rp_month as $month)
            {
            $monthJS.= "'".$month->month."/".$month->year."',";
            }
            $monthJS.= "]";
?>
<script>
        <?php  
        echo "var var_resolved = ".$char_resolved_ticket.";";
        echo "var var_total = ".$char_total_ticket.";";        
        echo "var_month = ".$monthJS.";";
        ?>
            
        $(function () {
                $('#container').highcharts({
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: 'Ticket total/month and resolved/month'
                    },
                    subtitle: {
                        text: 'CRM - System'
                    },
                    xAxis: {
                        type: 'day',
                        dateTimeLabelFormats: { // don't display the dummy year
                            month: '%e. %b',
                            year: '%b'
                        },
                        title: {
                            text: 'Month'
                        },
                       categories: var_month
                    },
                    yAxis: {
                        title: {
                            text: 'Number ticket (TK)'
                        },
                        min: 0
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: ' {point.y:2f} Ticket'
                    },

                   series: [         
                        var_resolved,
                        var_total
                      ]
                });
            });
</script>