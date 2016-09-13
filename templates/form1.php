<?
header("Content-Type: text/html;charset=UTF-8");
?>

<!DOCTYPE HTML>
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<link rel='stylesheet' href='/f2/stylesheets/form1.css'>
	</head>
	<body>
		<form action='?' method='GET' id='form1' class='b-form'>
			<table border='1'>
				<tr>
					<td><label class='b-form__label_name'>Имя</label></td>
					<td><input type='text' name='name' class='b-form__name'></td>
				</tr>
				<tr>
					<td><label class='b-form__label_surname'>Фамилия</label></td>
					<td><input type='text' name='surname' class='b-form__surname'></td>
				</tr>
				<tr>
					<td><label class='b-form__label_season'>Ваше любимое время года</label></td>
					<td>
						<br><input type='checkbox' name='season' value='winter' class='b-form__season' id='season_winter'><label for='season_winter' class='b-form__label_season-winter'>Зима</label>
						<br><input type='checkbox' name='season' value='spring' class='b-form__season' id='season_spring'><label for='season_spring' class='b-form__label_season-spring'>Весна</label>
						<br><input type='checkbox' name='season' value='summer' class='b-form__season' id='season_summer'><label for='season_summer' class='b-form__label_season-summer'>Лето</label>
						<br><input type='checkbox' name='season' value='autumn' class='b-form__season' id='season_autumn'><label for='season_autumn' class='b-form__label_season-autumn'>Осень</label>
					</td>
				</tr>
				<tr>
					<td><label class='b-form__label_fruit'>Ваш любимый фрукт</label></td>
					<td>
						<br><input type='radio' name='fruit' value='apple'  class='b-form__fruit' id='fruit_apple' checked><label 	for='fruit_apple'  class='b-form__label_fruit-apple' >Яблоко</label>
						<br><input type='radio' name='fruit' value='banana' class='b-form__fruit' id='fruit_banana'><label 			for='fruit_banana' class='b-form__label_fruit-banana'>Банан</label>
						<br><input type='radio' name='fruit' value='carrot' class='b-form__fruit' id='fruit_carrot'><label 			for='fruit_carrot' class='b-form__label_fruit-carrot'>Морковка</label>
						<br><input type='radio' name='fruit' value='orange' class='b-form__fruit' id='fruit_orange'><label 			for='fruit_orange' class='b-form__label_fruit-orange'>Апельсин</label>
					</td>
				</tr>
				<tr>
					<td><label class='b-form__label_animals'>Ваше любимое животное</label></td>
					<td>
						<select name='animals' class='b-form__animals'>
							<option value='dog'>Собака</option>
							<option value='cat'>Кот</option>
							<option value='fox'>Лиса</option>
							<option value='rat'>Крыса</option>
						</select>
					</td>
				</tr>
				<tr>
					<td><label class='b-form__label_review'>Ваш отзыв</label></td>
					<td>
						<textarea name='review' class='b-form__review'></textarea>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<input type='button' value='OK' class='b-form__ok-button'>
					</td>
				</tr>
			</table>
		</form>
	
	</body>
	<script type='text/javascript' src='/f2/scripts/jquery-3.0.0.min.js'></script>
	<!--
	-->
	<script type='text/javascript' src='/f2/scripts/settings.js'></script>
	<script type='text/javascript' src='/f2/scripts/init-settings.js'></script>
	<script type='text/javascript' src='/f2/scripts/form1.js'></script>
	<script>
	var f1 = new b_form('#form1');
	</script>
</html>