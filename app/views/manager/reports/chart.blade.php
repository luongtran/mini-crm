<div class="row">	
 <div class="panel panel-primary">
    <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>Support type - column</h3>
    </div>
    <div class="panel-body">
      <div id="bar-example"></div>
    </div>
 </div>
</div><!-- end row -->      
<script type="text/javascript">
 <?php    
        echo "var arr_char3 = ".json_encode($rp_column);
 ?>  
 if(arr_char3.length != 0)    
{
Morris.Bar({
  element: 'bar-example',
  data:arr_char3,
  xkey: 'month',
  ykeys: ['ST1','ST2','ST3','ST4'],
  labels: ['Cleaning','Maintenance','Safe','Utility']
});
}
</script>


<div class="row"> 
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>Support type - circle</h3>
              </div>
              <div class="panel-body">
                <div id="morris-chart-donut"></div>
                <div class="text-right">
                  <a href="http://vn24s.com/ADmin/report#"><i class="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
            </div>
</div> <!-- end row --> 
 		<script>
        <?php       
        echo "var arr_char2 = ".json_encode($rp_circle);
        ?>  
        if(arr_char2.length != 0)    
        {           
        Morris.Donut({
          element: 'morris-chart-donut',
          data: arr_char2,
          formatter: function (y) { return y + "%" ;}
        });

        }
    </script>



