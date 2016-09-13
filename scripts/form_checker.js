function form_checker(sSelector){
	var f = this;
	
	// 1. Data ====================
	// f.propertyName = null;
	// elem - общее наименование главного HTML-элемента для всех компонентов
	//f.elem = $(sSelector);
	f.init(sSelector);
	
	//f.fields = f.form.find('.b-textfield')
	f.fields = f.find('.b-textfield');
	
	
	// 2. Logic ===================
	// f.methodName = function (){}
	f.check = function(event) {
		
		event.preventDefault();		// предотвратить реакцию на событие по умолчанию
		var bFormError = false;
		
		f.fields.each(function() {
			var jqField     = $(this)
				,sFieldName = jqField.attr('name')
				,sRegExp    = settings.get('regexps')[sFieldName]
				,oRegExp    = new RegExp(sRegExp)
				;
				 console.log(sFieldName);
			// if (jqField.val() == '' )	
			// if (!jqField.val()) {				// if there is NO field value
			if (!jqField.val().match(oRegExp)) {	// if field value Does not match reg.exp
				bFormError = true;	// form also has error(s)
				jqField.addClass('b-textfield_error');	
				}
			else {
				jqField.removeClass('b-textfield_error');	
				}
				
		});
		if(bFormError) {
			f.find('.b-form__message_error').stop().slideDown();
			}
		else {
			f.find('.b-form__message_error').stop().slideUp();
		}
	}
	
	// 3. Events ==================
	// f.jqHTMLElement.eventName(f.eventHandler);
	f.elem.submit(f.check);

	}

form_checker.prototype = new Component();

