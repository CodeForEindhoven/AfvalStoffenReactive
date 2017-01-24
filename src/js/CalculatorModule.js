var CalculatorModule = (function(){
	var style = {
		parent: b.cl({
			"margin-bottom": "30px",
			"padding-bottom": "30px",
			"border-bottom": "1px solid #eeeeee",
		}),
		title: b.cl({
			"font-size": "12pt",
			"font-weight": "bold",
		}),
		subtitle: b.cl({
			"font-size": "10pt",
			"margin-bottom": "10px",
			"color": "#666666",
		}),
		price: b.cl({
			"margin-top": "120px",
			"font-size": "23pt",
			"width": "100%",
			"text-align": "right"
		})
	};


	return {
		controller: function(options){
			var amount = options.amount;
			var unitprice = options.choices[options.defaultchoice].price;
			var price = 0;

			function updateprice(){
				console.log("updateprice");
				price = amount*unitprice;
				options.onchange(price);
			}

			updateprice();

			return {
				set_unitprice: function(a){
					unitprice = options.choices[a].price;
					updateprice();
				},
				set_amount: function(a){
					amount=a;
					updateprice();
				},
				price: function(){
					return price;
				}
			};
		},
		view: function(ctrl, options){
			//ctrl.updateprice();
			return m("div",{class: style.parent},[
				m.component(SubBlockTitle, options),
				m.component(NumberSpinner, {
					value: options.amount,
					onchange: ctrl.set_amount
				}),
				m.component(SelectContainer, {
					onchange: ctrl.set_unitprice,
					choices: options.choices,
					defaultchoice: options.defaultchoice,
					icon: options.icon
				}),
				m("div", {class: style.price}, "€"+ctrl.price().toFixed(2))
			]);
		}
	};

})();
