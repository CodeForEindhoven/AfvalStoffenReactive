var Form = (function(){
	var style = s.cl({
		"box-sizing": "border-box",
		"padding": "20px",
		"background-color": "#FFFFFF",
		"box-shadow": "1px 1px 5px #AAAAAA",
		"float": "left",
		"width": "100%",
		"margin-bottom": "30px",
	});

	return {
		controller: function(values){

			return {
				grijs: values.grijs,
				groen: values.groen,
				pmd: values.pmd,
				vastrecht: values.vastrecht,
				total: function(){
					console.log("update total");
					return values.grijs() + values.groen() + values.pmd() + values.vastrecht();
				}
			};
		},
		view: function(ctrl){
			return m("div",{class: style},[
				m.component(CalculatorModule,
					{
						title: "Restafval",
						subtitle: "Het huishoudelijke afval voor zover dat niet wordt gerekend tot het gft-afval",
						amount: 5,
						choices: [
							{label: "140 Liter - €8.60", price:  8.60, icon: "/img/black_container2.svg"},
							{label: "80 Liter - €4.91", price: 4.91, icon: "/img/black_container3.svg"},
							{label: "40 Liter - €2.25", price: 2.25, icon: "/img/black_container4.svg"},
							{label: "60 Liter - €3.43", price: 3.43, icon: "/img/black_bag2.svg"},
						],
						defaultchoice: 1,
						onchange: ctrl.grijs
					}),
				m.component(CalculatorModule,
					{
						title: "Gft-afval",
						subtitle: "Groente-, fruit- en tuinafval",
						amount: 6,
						choices: [
							{label: "140 Liter - €1.50", price: 1.50, icon: "/img/green_container2.svg"},
							{label: "80 Liter - €1.50", price: 1.50, icon: "/img/green_container3.svg"},
							{label: "25 Liter - €1.50", price: 1.50, icon: "/img/green_container4.svg"},
						],
						defaultchoice: 1,
						onchange: ctrl.groen
					}),
				m.component(CalculatorModule,
					{
						title: "Pmd-afval",
						subtitle: "plastic-, metalenverpakkingen en drankkartons",
						amount: 59,
						choices: [
							{label: "60 Liter - €0.00", price: 0, icon: "/img/yellow_bag2.svg",}
						],
						defaultchoice: 0,
						onchange: ctrl.pmd
					}),
				m.component(VastRecht),
				m.component(TotalPrice, {
					values: ctrl.total
				})
			]);
		}
	};

})();
