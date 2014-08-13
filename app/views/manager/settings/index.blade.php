@section('content')

@include('manager.settings.title')
<div class="row">


	<div id="loadSetting">

	</div>

	<div class="btn-load-gif"></div>
</div>

<script>
$(function(){

loadSetting();

$(".btn").click(function()
{
	//edit();
	return false;
});

/*End ready*/
});

function loadSetting()
{
	var url = "{{Request::root()}}/manager/setting/show";
	$("#loadSetting").load(url);
}

function edit()
{
	var myform = $("#form-setting");
	$.ajax({
		url: myform.attr('url'),
		type: myform.attr('method'),
		data: myform.serialize(),
		success:function(data){
			loadSetting();
		},
		error: function (xhr, ajaxOptions, thrownError){
        	alert(xhr.status);
       	    alert(thrownError);
      	}
	});
}

</script>
@stop