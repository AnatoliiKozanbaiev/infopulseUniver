<?
header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<!link rel='stylesheet' href='../stylesheets/mywindow.css'>
		<script type='text/javascript' src='../scripts/error.js'></script>
		<script type='text/javascript' src='../scripts/jquery-3.0.0.min.js'></script>
	</head>
	<body>
		<div class='b-mywindow' id='mywindow1'>
			<div class='b-mywindow__timers'>
				<input type='button' value='Start countdown' class='b-mywindow__start-countdown'>
				<input type='button' value='Stop countdown'  class='b-mywindow__stop-countdown'>
				<br>
				<input type='button' value='Start ticker' 	 class='b-mywindow__start-ticker'>
				<input type='button' value='Stop ticker'  	 class='b-mywindow__stop-ticker'>
				<br>
				<input type='button' value='Open window'  	 class='b-mywindow__open-window'>
				<input type='button' value='Close window'  	 class='b-mywindow__close-window'>
				<br>

			</div>
		</div>
	
	</body>
	<script type='text/javascript' src='../scripts/component.js'></script>	
	<script type='text/javascript' src='../scripts/mywindow.js'></script>
	<script>
	var w1 = new mywindow('#mywindow1');
	</script>
</html>