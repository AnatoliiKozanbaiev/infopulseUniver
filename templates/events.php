<?
header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<link rel='stylesheet' href='../stylesheets/events.css'>
		<script type='text/javascript' src='../scripts/error.js'></script>
		<script type='text/javascript' src='../scripts/jquery-3.0.0.min.js'></script>

		<script type='text/javascript' src='../scripts/component.js'></script>	
		<script type='text/javascript' src='../scripts/events.js'></script>
		
		<script>
		var e1 = new events('#div1');
		</script>
	</head>
	<body>
	
	
	<div class='b-pad' id='div1'>
			<div class='b-pad__coord b-pad__coord_x'></div>
			<div class='b-pad__coord b-pad__coord_y'></div>
			<div class='b-pad__coord b-pad__coord_target'></div>
			<br>
			<div class='b-pad__coord b-pad__coord_x-relative'></div>
			<div class='b-pad__coord b-pad__coord_y-relative'></div>
			<br>
			<div class='b-pad__coord b-pad__coord_keyinfo'></div>
			<input type='text' class='b-pad__text'>
		</div>

	</body>


</html>