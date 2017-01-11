var CalculatorModule = (function(){
	var style = {
		parent: s.cl({
			"margin-bottom": "60px"
		}),
		title: s.cl({
			"margin-bottom": "10px",
			"border-bottom": "1px solid #eeeeee"
		}),
		price: s.cl({
			"margin-top": "90px",
			"font-size": "23pt",
			"width": "100%",
			"text-align": "right"
		})
	};


	return {
		controller: function(options){
			var amount = options.amount;
			var unitprice = options.choices[0].price;

			return {
				set_unitprice: function(a){unitprice = options.choices[a].price;},
				set_amount: function(a){amount=a;},
				price: function(){return amount*unitprice;}
			};
		},
		view: function(ctrl, options){
			return m("div",{class: style.parent},[
				m("div", {class: style.title}, options.title),
				m.component(NumberSpinner, {
					value: options.amount,
					onchange: ctrl.set_amount
				}),
				m.component(SelectContainer, {
					onchange: ctrl.set_unitprice,
					choices: options.choices,
					icon: options.icon
				}),
				m("div", {class: style.price}, "€"+ctrl.price().toFixed(2))
			]);
		}
	};

})();
