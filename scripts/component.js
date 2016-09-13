// родительский класс раздающий свою функциональность всем компонентам (b_menu, b_form, b_gallery, ...)

function Component(){
	
	// this.asd   = null;
	// elem - общее наименование главного HTML-элемента для всех компонентов
	this.elem 	  = null;
	
	this.init 	  = function(sSelector	){
		this.elem = $(sSelector)
		
		//if(this.elem.length == 0){	// elem not found (if NO element length)
		if(!this.elem.length){			// elem not found (if NO element length)
			alert('Невозможно найти HTML-элемент по селектору: ' + sSelector)
			}
		}
	
	this.find = function (sSelector){
		return this.elem.find(sSelector);
		}
	 
	}	