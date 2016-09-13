<?
header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<link rel='stylesheet' href='../stylesheets/form1.css'>
		<script src='../scripts/error.js'></script>

	</head>
	<body>
		<form action='?' method='GET' id='form2' class='b-form' novalidate>
			<div class='b-form__message b-form__message_error'>
			Форма заполнена неверно!
			</div>
			<table border='1'>
				<tr>
					<td><label class='b-form__label_name'>Название товара</label></td>
					<td><input type='text' name='name' class='b-form__name b-textfield' required></td>
				</tr>
				<tr>
					<td><label class='b-form__label_brand'>Марка</label></td>
					<td><input type='text' name='brand' class='b-form__brand b-textfield' required>
					<div class="tooltip">Error</div>
					</td>
				</tr>
				<tr>
					<td><label class='b-form__label_price'>Цена</label></td>
					<td><input type='text' name='price' class='b-form__price b-textfield' required></td>
				</tr>

				<tr>
					<td><label class='b-form__label_description'>Описание</label></td>
					<td>
						<textarea name='description' class='b-form__description b-textfield' required></textarea>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<input type='submit' value='OK' class='b-form__ok-button'>
					</td>
				</tr>
			</table>
		</form>
	
	</body>
	<script type='text/javascript' src='../scripts/jquery-3.0.0.min.js'></script>
	<script type='text/javascript' src='../scripts/settings.js'></script>
	<script type='text/javascript' src='../scripts/init_settings.js'></script>
	<script type='text/javascript' src='../scripts/component.js'></script>	
	<script type='text/javascript' src='../scripts/form_checker.js'></script>
	<script>
	var fc1 = new form_checker('#form2');
	</script>
</html>