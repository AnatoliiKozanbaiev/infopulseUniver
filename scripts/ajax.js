$.fn.removeClassByMask = function (sClassNameMask){
	this.attr('class',
		this.attr('class').replace(
			new RegExp(
				sClassNameMask.replace('*', '[^ ]+')
				, 'g'
				)
			, ''
			)
		);
	return this;
	}

function ajaxCalc(sSelector){
	var c = this;
	
	// 1. Data ====================
	c.init(sSelector);
	// c.propertyName = null;
	c.a = c.find('.b-calc__a');
	c.b = c.find('.b-calc__b');
	c.result = c.find('.b-calc__result');
	
	// 2. Logic ===================
	// c.methodName = function (){}
	c.calculate = function(event){
		event.preventDefault();			// не отправляем форму на сервер
		
		c.elem.removeClassByMask('b-ajax_status_*');
		c.elem.addClass('b-ajax_status_progress')
		$.ajax({
			 'url'		: 'ajaxcalc.php?t=' + new Date().getTime()
			,'method'	: 'POST'
			,'dataType'	: 'json'
			,'timeout'	: 5000
			,'data'		: {
				 'a' : c.a.val()
				,'b' : c.b.val()
			}
			,'success'	: function (oServerResponse /*json*/){
				// oServerResponse = { result : "7"}
				// console.log(oServerResponse);
				c.result.html(oServerResponse.result);
			}
			,'error'	: function (oAjax){
				// console.log(oAjax);
			}
			,'complete'	: function (oAjax){
				if(oAjax.status == 200){
					if(typeof oAjax.responseJSON === 'undefined'){
						
						c.elem.removeClassByMask('b-ajax_status_*');
						console.log('Corrupt JSON response: ', oAjax.responseText);
						c.elem.addClass('b-ajax_status_error');
					}
					else {
						c.elem.removeClassByMask('b-ajax_status_*');
						c.elem.addClass('b-ajax_status_ok');
						}
				}
				
				else if(oAjax.status == 404){
					c.elem.removeClassByMask('b-ajax_status_*');
					console.error('Backend script is not found');
					c.elem.addClass('b-ajax_status_error');
				}
				else if(oAjax.status == 403){
					c.elem.removeClassByMask('b-ajax_status_*');
					console.error('Backend acces is forbidden.');
					c.elem.addClass('b-ajax_status_error');
				}
				else if(oAjax.statusText == 'timeout'){
					c.elem.removeClassByMask('b-ajax_status_*');
					console.error('Waiting for backend response has time out');
					c.elem.addClass('b-ajax_status_error');
				}
				else {
					c.elem.removeClassByMask('b-ajax_status_*');
					console.error('Unpredicted error');
					c.elem.addClass('b-ajax_status_error');
				}
			}
			});	
			
		
	}
	
	// 3. Events ==================
	c.elem.on('submit', c.calculate);

	}

ajaxCalc.prototype = new Component();