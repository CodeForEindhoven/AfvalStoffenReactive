var Form = (function(){
	var style = s.cl({
		"box-sizing": "border-box",
		"padding": "20px",
		"background-color": "#FFFFFF",
		"box-shadow": "1px 1px 5px #AAAAAA",
		"user-select": "none",
		"float": "left",
		"width": "100%"
	});

	return {
		controller: function(){

			return {

			};
		},
		view: function(ctrl){
			return m("div",{class: style},[
				m.component(CalculatorModule,
					{
						title: "Grijze Container",
						amount: 5,
						icon: "/img/black_container2.svg",
						choices: [
							{label: "40 Liter", price: 5.14},
							{label: "80 Liter", price: 6.14},
							{label: "120 Liter", price: 7.14},
						]
					}),
				m.component(CalculatorModule,
					{
						title: "Groene Container",
						amount: 6,
						icon: "/img/green_container2.svg",
						choices: [
							{label: "10 Liter", price: 1.50},
							{label: "20 Liter", price: 1.50},
							{label: "120 Liter", price: 1.50},
						]
					}),
				m.component(CalculatorModule,
					{
						title: "PMD Zakken",
						amount: 59,
						icon: "/img/yellow_bag2.svg",
						choices: [
							{label: "40 Liter", price: 0}
						]
					}),
				m.component(VastRecht),
				m.component(TotalPrice)
			]);
		}
	};

})();
