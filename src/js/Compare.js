var Compare = (function(){
	var style ={
		main: s.cl({
			"box-sizing": "border-box",
			"padding": "20px",
			"background-color": "#FFFFFF",
			"box-shadow": "1px 1px 5px #AAAAAA",
			"user-select": "none",
			"float": "left",
			"width": "100%",
			"margin-bottom": "30px",
			"padding-bottom": "60px",
		}),
		leftshift: s.cl({
			"box-sizing": "border-box",
			"padding-left": "100px",
			"margin-top": "30px",

		})
	};

	return {
		controller: function(){
			return {
			};
		},
		view: function(ctrl, values){
			var factor = 2;
			return m("div",{class: style.main},[
				m.component(SubBlockTitle, {
					title: "Vergelijk",
					subtitle: "Bekijk hoeveel je betaalt ten opzichte van de gemiddelde inwoner van Eersel"
				}),
				m("div",{class: style.leftshift},[
					m.component(BarGraph, {
						title: "Gemiddelde",
						blocks: [
							{color: "#4081c2", value:69.48*factor, label: "€69.48", title: "Vastrecht"},
							{color: "#949594", value:17.15*factor, label: "€17.15", title: "Grijs"},
							{color: "#4b9b4a", value:17.15*factor, label: "€17.15", title: "GFT"}
						]
					}),
					m.component(BarGraph, {
						title: "Jij",
						blocks: [
							{color: "#4081c2", value:values.vastrecht()*factor, label: "€"+values.vastrecht()},
							{color: "#949594", value:values.grijs()*factor, label: "€"+values.grijs()},
							{color: "#4b9b4a", value:values.groen()*factor, label: "€"+values.groen()}
						]
					})
				])
			]);
		}
	};

})();
