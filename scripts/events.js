function events(sSelector){
	var e = this;
	
	// 2. Logic ===================
	// e.methodName = function (){}
	e.showCoords 	= function (event){
		e.coordX.html(event.pageX);
		e.coordY.html(event.pageY);
		e.coordXrel.html(event.offsetX);
		e.coordYrel.html(event.offsetY);
		e.target.html($(event.target).attr('class'));
		
		
		}
	e.clickX 		= function (event){ 
		event.stopPropagation();	// остановить распространение события далее по HTML-структуре
		console.log('X clicked'); 
		}
	e.clickPad 		= function (){ console.log('Pad clicked'); }
	e.showKeyInfo 	= function (event){
		e.keyInfo.html(
			'code = ' 		+ event.which 
			+ ' key = '		+ event.key 
			+ ' ctrl = '	+ event.ctrlKey 
			);
		}
	
	$(document).ready(function (){
	
		// 1. Data ====================
		// e.propertyName = null;
		e.init(sSelector);		// см. галерею и component.js
		e.coordX	= e.find('.b-pad__coord_x');		// <-- DIV`ы
		e.coordY	= e.find('.b-pad__coord_y');
		e.target	= e.find('.b-pad__coord_target');
		e.coordXrel	= e.find('.b-pad__coord_x-relative');
		e.coordYrel	= e.find('.b-pad__coord_y-relative');
		e.keyInfo	= e.find('.b-pad__coord_keyinfo');
		e.text		= e.find('.b-pad__text');
			
		// 3. Events ==================
		// e.jqHTMLElement.eventName(e.eventHandler);
		e.elem		.mousemove(e.showCoords);		// elem - см. component.js
		e.coordX	.click(e.clickX);
		e.elem		.click(e.clickPad);
		e.text		.keydown(e.showKeyInfo);
		
		});
	}

events.prototype = new Component();
