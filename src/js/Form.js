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
			var grijs = 25.70;
			var groen = 9.00;
			var pmd = 0;
			var vastrecht = 69.48;
			return {
				grijs: function(a){grijs=a;},
				groen: function(a){groen=a;},
				pmd: function(a){pmd=a;},
				total: function(){
					return grijs + groen + pmd + vastrecht;
				}
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
							{label: "140 Liter - €8.60", price:  8.60},
							{label: "80 Liter - €4.91", price: 4.91},
							{label: "40 Liter - €2.25", price: 2.25},
						],
						onchange: ctrl.grijs
					}),
				m.component(CalculatorModule,
					{
						title: "Groene Container",
						amount: 6,
						icon: "/img/green_container2.svg",
						choices: [
							{label: "140 Liter - €1.50", price: 1.50},
							{label: "80 Liter - €1.50", price: 1.50},
							{label: "25 Liter - €1.50", price: 1.50},
						],
						onchange: ctrl.groen
					}),
				m.component(CalculatorModule,
					{
						title: "PMD Zakken",
						amount: 59,
						icon: "/img/yellow_bag2.svg",
						choices: [
							{label: "60 Liter - €0.00", price: 0}
						],
						onchange: ctrl.pmd
					}),
				m.component(VastRecht),
				m.component(TotalPrice, {
					values: ctrl.total()
				})
			]);
		}
	};

})();
