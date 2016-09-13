var _page_settings = {
	 'b-form__yourform' 	: 'Ваша форма'
	,'b-form__languages' 	: 'Языки'
	,'langs' : {							
		 "ru"	: "Русский"
		,"en"	: "Английский"
		,"uk"	: "Украинский"
		,"de"	: "Немецкий"
		}
		,'regexps'	: {
			'name'			: '^[а-яё\\- ]{3,100}$'
			,'brand'		: '^[a-zA-Z\\-$!&]{2,100}$'
			,'price'		: '^[1-9][0-9]{0,4}(\\.\\d{2})?$'
			,'description'	: '^[\\d\\D]{10,100}$'
		}
	};

	// инициализировать
	settings.init(_page_settings);
	
	