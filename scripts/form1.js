function b_form(sSelector){
	var f = this;
	
	// 1. Data ====================
	// f.propertyName = null;
	f.form = $(sSelector)
	
	// 2. Logic ===================
	// f.methodName = function (){}
	f.val = function (sSelector) {
		var jqField = f.form.find(sSelector)		// поле: текстовое, чекбокс(ы), радио, ..
		,sFieldType = jqField.attr('type')			// radio, checkbox, text, submit, buttom
		,sFieldTag  = jqField.prop('tagName')		// A, DIV, UL, INPUT, SELECT
		;
		// по типу тега								
		// по имени тена
				
		// радио
		if(sFieldType == 'radio'){					// если тип поля - радио
			console.log(this, '\n\n', jqField);
			return jqField.filter(':checked').val()
		}
		else if(sFieldType == 'checkbox'){			// чекбоксы
			
			var sCheckboxes = '';
			
			//f.form.find('.b-form__season:checked').each(function(){
			jqField.filter(':checked').each(function(){
			var jqCheckboxes = $(this);
			
			sCheckboxes += ( sCheckboxes 
					? ',' 
					: ''
				) 
				+ jqCheckboxes.val()
			});
			return sCheckboxes;
		}							
		else if(sFieldTag == 'SELECT'){
			return jqField				// .b-form__animal
				.children('option')		// > option
				.filter(':selected')	// :selected
				.html();
		}
		else{										// текстовое поле
			return jqField.val();	
		}
		// селекты
		
	}
	
	f.label = function (sSelector) {
		console.log('What the hell is Thiss in f.label?', this);
		return f.form.find(sSelector).html();
	}
	f.getLanguages = function () {
		
		var langs = settings.get('langs')				
			, sLangs = ''
			;
		$.each(										// джейКуиэри, перебери, пожалуйста, каждую пару
			langs 									// в массиве языков
			, function (sLangCode , sLangName) {	// и сделай с кодом языка и назв. языка следующее:...
				sLangs += 							// в переменную "языки" дописываем (в конец)...
					( sLangs  						// если в языках что-то есть
						? "\n" 						// тогда - перенос строки
						: ""  						// иначе - ничего
						) 		
					+ sLangCode 					// и код языка
					+ " - " 						// и дефис
					+ sLangName;					// и название языка
				}
			);
		return sLangs;
	}
	f.showInfo = function (){
		
		
		
		alert (settings.get('b-form__yourform') 	  +	':'
			+ '\n' + f.label('.b-form__label_name')   + ':'     	+ f.val('.b-form__name')
			+ '\n' + f.label('.b-form__label_surname')+ ':' 		+ f.val('.b-form__surname')
			//+ '\n' + f.label('.b-form__label_fruit')  + ':'   		+ f.form.find('.b-form__fruit:checked').val()
			+ '\n' + f.label('.b-form__label_fruit')  + ':'   		+ f.val('.b-form__fruit')
			+ '\n' + f.label('.b-form__label_season') + ':'   		+ f.val('.b-form__season')
			+ '\n' + f.label('.b-form__label_animals')+ ':' 		+ f.val('.b-form__animals')
			+ '\n' + f.label('.b-form__label_review') + 'Отзыв:'    + f.val('.b-form__review')
			+ '\n' + settings.get('b-form__languages') + ':\n'  + f.getLanguages()
		);
	}
	
	// 3. Events ==================
	f.form.find('.b-form__ok-button').click(f.showInfo);

	}

