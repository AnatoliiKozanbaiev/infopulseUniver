function b_menu(sSelector){
	var m = this;
	
	// 1. Data ====================
	 m.menu = $(sSelector);
	 m.currentMenu = null;
	 //m.type = oOptions.type;
	
	// 2. Logic ===================
	// m.methodName = function (){}
	
	m.toggleSubmenu = function(oMenuItem) {
		//$(this) - this ссылается на текущий класс b_menu (см. this1.png)
		$(oMenuItem).children('.b-submenu').stop().slideToggle();	
	}
	
	m.showSubmenu = function (){
		//  Подменю текущего пункта меню - показать
		//$(this).children('.b-submenu').show();		
		//$(this).children('.b-submenu').stop().slideDown();
		m.currentMenu = $(this).children('.b-submenu');
		$(this).children('.b-submenu')
		.css({'display':'block'})
		.stop().animate(				// остановить пред. анимацию и начать новую
			{							// для Css свойств из этого списка (ассоц. массива):
				'opacity' : 1			// Прозрачность будет равна 1
				}
			,400						// через 400 мс.
			);
		//m.toggleSubmenu(this);
	}
	
	m.hideSubmenu = function (){
		//  Подменю текущего пункта меню - скрыть
		//$(this).children('.b-submenu').hide();		
		//$(this).children('.b-submenu').stop().slideUp();
		//m.toggleSubmenu(this);
		//$(this).children('.b-submenu')
		m.currentMenu
			.stop().animate(				// остановить пред. анимацию и начать новую
				{							// для Css свойств из этого списка (ассоц. массива):
					'opacity' : 0			// Прозрачность будет равна 0
					}
				,400						// через 400 мс.
				,function(){
					$(this).css({'display':'none'})
					}
				)
			;
		
		}
	
	// 3. Events ==================
	// m.jqHTMLElement.eventName(m.eventHandler);
	
	m.menu.find('.b-menu__item')   // для пункта меню
		.mouseover(m.showSubmenu)  // при наведении мыши - показать подменю
		.mouseout(m.hideSubmenu);  // при убирании мыши - скрыть подменю
	}