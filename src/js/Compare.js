var Compare = (function(){
	var style ={
		main: b.cl({
			"box-sizing": "border-box",
			"user-select": "none",
			"margin-bottom": "30px",
			"padding-bottom": "60px",
		}),
		leftshift: b.cl({
			"box-sizing": "border-box",
			"padding-left": "100px",
			"margin-top": "30px",

		}),
		label: b.cl({
			"margin-top": "30px",
			"margin-bottom": "50px",
			"float": "left",
			"height": "20px",

		}),
		price: b.cl({
			"font-size": "20pt",
			"width": "100%",
			"text-align": "right"
		})
	};

	return {
		controller: function(values){
			return {
				totaldif: function(){
					return (values.vastrecht()+values.grijs()+values.groen()-(69.48+25.70+9.00));
				}
			};
		},
		view: function(ctrl, values){
			var factor = 2;
			return m.component(Paper, [
				m("div",{class: style.main},[
					m.component(SubBlockTitle, {
						title: "Vergelijk",
						subtitle: "Bekijk hoeveel je betaalt ten opzichte van de gemiddelde inwoner van Eersel"
					}),
					m("div",{class: style.leftshift},[
						m.component(BarGraph, {
							title: "Gemiddelde",
							blocks: [
								{color: "#4081c2", value:69.48*factor, label: "€69.48", title: "Vastrecht"},
								{color: "#949594", value:25.70*factor, label: "€25.70", title: "Grijs"},
								{color: "#4b9b4a", value:9.00*factor, label: "€9.00", title: "GFT"},
								//{color: "#FFC41D", value:0*factor, label: "€0", title: "PMD"}
							]
						}),
						m.component(BarGraph, {
							title: "Jij",
							blocks: [
								{color: "#4081c2", value:values.vastrecht()*factor, label: "€"+values.vastrecht().toFixed(2)},
								{color: "#949594", value:values.grijs()*factor, label: "€"+values.grijs().toFixed(2)},
								{color: "#4b9b4a", value:values.groen()*factor, label: "€"+values.groen().toFixed(2)}
							]
						})
					]),
					m("div",{class: style.label},[
						m("span", {}, "U betaalt "),
						m("span", {class: style.price}, "€"+Math.abs(ctrl.totaldif()).toFixed(2)),
						m("span", {}, ((ctrl.totaldif()<0)?" minder ":" meer ")),
						m("span", {}, " dan de gemiddelde inwoner."),
					]),
				])
			]);
		}
	};

})();
