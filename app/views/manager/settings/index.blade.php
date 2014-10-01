@section('content')
<div class="row">
	<div id="loadSetting">
	</div>
</div>

<div class="row">
	<div class="col-sm-8">
		<div id="load-message"></div>	
	</div>
</div>
@stop
@section('javascript')
<script>
$(function(){
loadSetting();
/*End ready*/
});
function loadSetting()
{
	var url = "{{Request::root()}}/manager/setting/show";
	$("#loadSetting").load(url);
}
</script>
@stop