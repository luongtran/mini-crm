
  
<div class="row"> 
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>{{trans('title.report.analysis_support')}}</h3>
              </div>
              <div class="panel-body">
               
                <div id="container10" style="height: 500px; width: 100%;"></div>            
           
              </div>
            </div>
</div> <!-- end row --> 

   <script>  
  <?php echo "var data_support_type=".$result."";?>   
  $(function () {
    $('#container10').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Support type',
            data: data_support_type
        }]
    });
    
      $("a.canvasjs-chart-credit").css('display','none');
      
});

 </script>
 
 