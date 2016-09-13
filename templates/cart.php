<?
header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<link rel='stylesheet' href='../stylesheets/cart.css'>
		<script type='text/javascript' src='../scripts/error.js'></script>
		<script type='text/javascript' src='../scripts/jquery-3.0.0.min.js'></script>
	</head>
	<body>
		<div class='b-minicart' id='minicart1'>
			<div class='b-minicart__button'>Корзина
				<div class='b-minicart__quantity'></div>
				<div class='b-minicart__total'></div>
			</div>
			<div class='b-minicart__list'>
			<table class = 'b-goods b-goods_cart'>
				<tr class = 'b-good'>
					<td class = 'b-good__image-td'>
						<img src='' class='b-good__image'>
					</td>
					<td class = 'b-good__info'>
						<h3 class='b-good__name'></h3>
						<div class='b-good__price'></div>
						<form action='#' method='POST' class='b-order-form'>
							<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
							<input type='button' value = '+' class='b-order-form__plus'>
							<input type='button' value = '-' class='b-order-form__minus'>
							<input type='submit' value = 'OK' class='b-order-form__order'>
						</form>
					</td>
					<td class='b-good__delete-td'>
						<a href='#link-to-delete-good' class='b-good__delete'>
							<img src='/f2/images/delete_icon.png' class='b-good__delete-icon'>
						</a>
					</td>
				</tr>
				</table>
			<a href='#' class='b-minicart__order'>Заказать</a>
			</div>
		</div>
	
		<table class = 'b-goods' id='goods1'>
			<tr class = 'b-good b-good_id_82'>
				<td class = 'b-good__image-td'>
					<img src='../images/gallery/small_82.png' class='b-good__image'>
				</td>
				<td class = 'b-good__info'>
					<h3 class='b-good__name'>Монитор DELL 1</h3>
					<div class='b-good__description'>Описание Описание Описание Описание Описание Описание 1</div>
					<div class='b-good__price'>1000</div>
					<form action='#' method='POST' class='b-order-form'>
						<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
						<input type='button' value = '+' class='b-order-form__plus'>
						<input type='button' value = '-' class='b-order-form__minus'>
						<input type='submit' value = 'OK' class='b-order-form__order'>
					</form>
				</td>
			</tr>
			<tr class = 'b-good b-good_id_83'>
				<td class = 'b-good__image-td'>
					<img src='../images/gallery/small_83.png' class='b-good__image'>
				</td>
				<td class = 'b-good__info'>
					<h3 class='b-good__name'>Монитор DELL 2</h3>
					<div class='b-good__description'>Описание Описание Описание Описание Описание Описание 2</div>
					<div class='b-good__price'>2000</div>
					<form action='#' method='POST' class='b-order-form'>
						<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
						<input type='button' value = '+' class='b-order-form__plus'>
						<input type='button' value = '-' class='b-order-form__minus'>
						<input type='submit' value = 'OK' class='b-order-form__order'>
					</form>
				</td>
			</tr>
			<tr class = 'b-good b-good_id_84'>
				<td class = 'b-good__image-td'>
					<img src='../images/gallery/small_84.png' class='b-good__image'>
				</td>
				<td class = 'b-good__info'>
					<h3 class='b-good__name'>Монитор DELL 3</h3>
					<div class='b-good__description'>Описание Описание Описание Описание Описание Описание 3</div>
					<div class='b-good__price'>3000</div>
					<form action='#' method='POST' class='b-order-form'>
						<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
						<input type='button' value = '+' class='b-order-form__plus'>
						<input type='button' value = '-' class='b-order-form__minus'>
						<input type='submit' value = 'OK' class='b-order-form__order'>
					</form>
				</td>
			</tr>
			<tr class = 'b-good b-good_id_85'>
				<td class = 'b-good__image-td'>
					<img src='../images/gallery/small_85.png' class='b-good__image'>
				</td>
				<td class = 'b-good__info'>
					<h3 class='b-good__name'>Монитор DELL 4</h3>
					<div class='b-good__description'>Описание Описание Описание Описание Описание Описание 4</div>
					<div class='b-good__price'>4000</div>
					<form action='#' method='POST' class='b-order-form'>
						<input type='text' name = 'quantity' value='1' class='b-order-form__quantity'>
						<input type='button' value = '+' class='b-order-form__plus'>
						<input type='button' value = '-' class='b-order-form__minus'>
						<input type='submit' value = 'OK' class='b-order-form__order'>
					</form>
				</td>
			</tr>
		</table>
	
	</body>
	<script type='text/javascript' src='../scripts/settings.js'></script>
	<script type='text/javascript' src='../scripts/init_settings.js'></script>
	<script type='text/javascript' src='../scripts/component.js'></script>
	<!-- <script type='text/javascript' src='../scripts/jquery.cookie.js'></script> -->
	<script type='text/javascript' src='../scripts/js.cookie.js'></script>
	<script type='text/javascript' src='../scripts/cart.js'></script>
	
	<script>
	var c1 = new cart('#goods1', '#minicart1');
	</script>
</html>