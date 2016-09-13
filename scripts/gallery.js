function b_gallery(sSelector){
	var g = this;
	
	// 1. Data ====================
	// g.propertyName = null;
	 //g.elem = $(sSelector);									// сама галерея
	 g.init(sSelector);
	 
	 
	 
	 g.pictures		= g.find('.b-picture') 				// фото в галерее
	 g.arrowPrev	= g.find('.b-preview__arrow_prev')  // стрелка <	
	 g.arrowNext	= g.find('.b-preview__arrow_next')  // стрелка >
	 g.preview		= g.find('.b-preview')				// блок просмотра
	 g.previewImage	= g.find('.b-preview__image') 		// большое фото
	 g.previewText	= g.find('.b-preview__text');		// большое фото
	 g.current 		= 0;										// номер текущего фото
	 g.qty			= g.pictures.length;						// количество фото
	 
		
	// 2. Logic ===================
	// g.methodName = function (){}
	g.showPicture  = function (){			console.log('запускается g.showPicture()');
		// 1)
		// var jqPicture 	    = $(this)		
		// g.current = g.pictures.index(jqPicture);		// узнать номер текущего фото
		
		//g.current = g.pictures.index($(this));
		g.current = g.pictures.index(this);		    // узнать номер текущего фото
		g.showImage(0);		console.log('g.showImage(0)');
		g.preview.addClass('b-preview_shown');
		//	alert(sSmallImagePath);
		}	
	g.showImage    = function (iShift){	
		g.current += iShift;	// выполнить сдвиг +1 -1
		
		// показать фото
		var jqPicture 	    = g.pictures.eq(g.current)		//доступ к одной из картинок по номеру
			,jqSmallImage   = jqPicture.find('.b-picture__image')
			,sBigImagePath  = jqSmallImage.attr('src').replace('small_','')	
			;				
		g.previewImage.attr('src', sBigImagePath);
	}
	g.showPrevious = function (){ g.showImage(-1); }
	g.showNext     = function (){ g.showImage( 1); }
	g.closePreview = function (event){
		// event.target - JS
		// g.find(event.target) - JQ
		if(g.elem.find(event.target).hasClass('b-preview')){
			g.preview.removeClass('b-preview_shown');
		}
	}
	
	// 3. Events ==================
	// g.jqHTMLElement.eventName(g.eventHandler);
	g.pictures .click(g.showPicture);	//при клике по картинке - показать изображение
    g.arrowPrev.click(g.showPrevious);	//при клике на стрелке предыдущ. - показать предыдущее изображение
    g.arrowNext.click(g.showNext);		//при клике на стрелке след. - показать следующее изображение
    g.preview  .click(g.closePreview);	//при клике на блоке просмотра - закрыть блок просмотра

	}

	b_gallery.prototype = new Component();
