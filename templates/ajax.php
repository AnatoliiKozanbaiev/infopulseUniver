<?
include("calc.php");

header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<script type='text/javascript' src='../scripts/error.js'></script>
		<script type='text/javascript' src='../scripts/jquery-3.0.0.min.js'></script>
		<link rel='stylesheet' href='../stylesheets/ajax.css'>
	</head>
	<body>

		<form action="ajax.php" method="POST" 		class='b-calc b-ajax' id='calc1'>
			<input type='text' name='a' 	class='b-calc__a' value='<?= $a?>'> + 
			<input type='text' name='b' 	class='b-calc__b' value='<?= $b?>'>
			<input type='submit' value='=' 	class='b-calc__count b-ajax__submit'>
			<span 							class='b-calc__result'><?= $result?></span>
		</form>
	
	
		
	</body>
	<script type='text/javascript' src='../scripts/component.js'></script>
	<script type='text/javascript' src='../scripts/ajax.js'></script>
	
	<script>
	var c1 = new ajaxCalc('#calc1');
	</script>
</html>