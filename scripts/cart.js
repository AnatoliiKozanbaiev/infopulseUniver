function cart(sSelector, sMinicartSelector){
	var c = this;
	
	// 1. Data ====================
	c.init(sSelector);
	
	c.minicart 	= $(sMinicartSelector);
    c.goods 	= c.minicart.find('.b-goods_cart');             // table goods in cart
    c.list 		= c.minicart.find('.b-minicart__list');          // list of goods in cart
    c.button 	= c.minicart.find('.b-minicart__button');
	c.cartData 	= { /*  iGoodId : iQty */ };
	
	// 2. Logic ===================
	c.add = function (event){
		event.preventDefault();			
		
		  var 
			 jqOrderForm = $(this)
            , jqGood = jqOrderForm.closest('.b-good');
        
        
        
        c.put(jqGood);
        //открыть список
        c.list.stop().slideDown();
		}
    
/* 
// вариант 1
	c.changeQty = function (oButton, iShift){
		// $(this) - this ссылается на текущий класс cart (см. this1.png)
	    var jqIncrease = $(oButton)
			,   jqForm = jqIncrease.closest('.b-order-form')
			,   jqCurrentValue = jqForm.find('.b-order-form__quantity')
			,   iNewValue = parseInt(jqCurrentValue.val()) + iShift;	

        if(iNewValue >= 1 && iNewValue <= 10){
			jqCurrentValue.val(iNewValue);
			}
		}
   c.increase = function(){
		c.changeQty(this, +1);
    }
        
    c.decrease = function(){
		c.changeQty(this, -1);
    } */
	// вариант 2
    c.changeQty = function (){
		// this ссылается на кнопки +/- 
	    var jqButton = $(this)
			,   jqForm = jqButton.closest('.b-order-form')
			,   jqCurrentValue = jqForm.find('.b-order-form__quantity')
			,   iNewValue = parseInt(jqCurrentValue.val()) + (
					jqButton.hasClass('b-order-form__plus')
						? +1 
						: -1
					);	

        if(iNewValue >= 1 && iNewValue <= 10){
			jqCurrentValue.val(iNewValue);
			}
		}
    c.put = function(jqGood, bDelete){
		bDelete = bDelete || false;
		
        var		
			 iGoodId    = jqGood.attr('class').match(/b-good_id_([0-9]{1,8})/)[1]
			,iQty		= jqGood.find('.b-order-form__quantity').val()
			, sGoodIdClassName = 'b-good_id_' + iGoodId
			
		if (bDelete){		// if delete
			jqGood
				.removeClass('b-good_in-cart')
				.find('.b-order-form__quantity').val(1)
				;
			
			delete  c.cartData[iGoodId];
			}
		else {		// if NOT delete, if PUT
			c.cartData[iGoodId] = iQty;
			jqGood.addClass('b-good_in-cart');
			
			var jqCartGood = c.goods.find('.' + sGoodIdClassName)     //    find current good in the cart      
			
			if(!jqCartGood.length){         // no goods in cart
				//склонировать шаблонный ряд
				jqCartGood = c.goods.find('.b-good:first-child').clone(true/*also clone events*/).appendTo(c.goods); //copy of object in the memory
				//fill it with data from the product catalog
				//read the data from catalog
		   
				//to write                              //to read
				jqCartGood.find('.b-good__name').html( jqGood.find('.b-good__name').html() ); //название
				jqCartGood.find('.b-good__price').html( jqGood.find('.b-good__price').html()); //цена
				jqCartGood.find('.b-good__image').attr('src', jqGood.find('.b-good__image').attr('src')); //фото
				jqCartGood.addClass(sGoodIdClassName);
			}
			
			// the product is already in cart
			jqCartGood.find('.b-order-form__quantity').val( jqGood.find('.b-order-form__quantity').val());//количество
						
			}
        
        Cookies.set('goods', c.cartData, { expires: 14, path: '/' }); //    name of cookie is choosen by yourself
   
    }
    c.toggleList = function(){
        c.list.slideToggle();
    }
    
      
     c.remove = function(){
        // var jqDeleteButton = $(this)
        var jqCartGood = $(this).closest('.b-good');
        
        var 
			jqGood = c.find('.' + jqCartGood.attr('class').match(/(b-good_id_[0-9]{1,8})/)[1])
			jqCartGood.remove();	
			
		c.put(jqGood, true);
         
        }
    
    
    
    c.load = function(){
       c.cartData = Cookies.getJSON('goods') || {};       /*82=1 83=4*/
        
        $.each(c.cartData, function(iGoodId, iQty){
            var jqGood = c.find('.b-good_id_' + iGoodId);           //find the product in catalog
            jqGood.find('.b-order-form__quantity').val(iQty);
            c.put(jqGood);                                          //set the goods to cart after document refresh
            
        });
    }
    

    
   
	
	// 3. Events ==================
	c.find('.b-order-form').on('submit', c.add);
    c.button.on('click', c.toggleList);
	// вариант 1
    // c.find('.b-order-form__plus') .add(c.minicart.find('.b-order-form__plus'))	.on('click', c.increase);
    // c.find('.b-order-form__minus').add(c.minicart.find('.b-order-form__minus'))	.on('click', c.decrease);
	// вариант 2
	// к объекту каталога (c.elem) Добавляем объект миникарт, в них ищем кнопки "+" и "-"....
	c.elem.add(c.minicart).find('.b-order-form__plus, .b-order-form__minus').on('click', c.changeQty);

    c.minicart.find('.b-good__delete').on('click', c.remove);
    $(document).ready(c.load);                              //When document is ready - load a cart
}                                      

cart.prototype = new Component();