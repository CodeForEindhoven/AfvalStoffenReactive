var CalculatorModule = (function(){
	var style = {
		parent: s.cl({
			"margin-bottom": "60px"
		}),
		title: s.cl({
			"font-size": "12pt",
			"font-weight": "bold",
		}),
		subtitle: s.cl({
			"font-size": "10pt",
			"margin-bottom": "10px",
			"border-bottom": "1px solid #eeeeee",
			"color": "#666666",
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
			options.onchange(amount*unitprice);
			return {
				set_unitprice: function(a){
					unitprice = options.choices[a].price;
					options.onchange(amount*unitprice);
				},
				set_amount: function(a){
					amount=a;
					options.onchange(amount*unitprice);
				},
				price: function(){
					return amount*unitprice;
				}
			};
		},
		view: function(ctrl, options){
			return m("div",{class: style.parent},[
				m("div", {class: style.title}, options.title),
				m("div", {class: style.subtitle}, options.subtitle),
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
