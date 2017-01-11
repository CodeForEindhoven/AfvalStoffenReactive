var VastRecht = (function(){
	var style = {
		parent: s.cl({
			"margin-bottom": "30px",
			"padding-bottom": "30px",
			"border-bottom": "1px solid #eeeeee",
		}),
		title: s.cl({
			"margin-bottom": "10px",
			"border-bottom": "1px solid #aaaaaa"
		}),
		label: s.cl({
			"float": "left",
			"height": "20px"
		}),
		price: s.cl({
			"margin-top": "10px",
			"font-size": "23pt",
			"width": "100%",
			"text-align": "right"
		})
	};


	return {
		controller: function(options){
			return {

			};
		},
		view: function(ctrl, options){
			return m("div",{class: style.parent},[
				m.component(SubBlockTitle, {
					title: "Vastrecht",
					subtitle: "Vast bedrag over de hele pot"
				}),
				m("div",[
					m("div", {class: style.label}, "Houd Eersel Schoon"),
					m("div", {class: style.price}, "€"+(10.48).toFixed(2)),
				]),
				m("div",[
					m("div", {class: style.label}, "Voor Anderen"),
					m("div", {class: style.price}, "€"+(5.48).toFixed(2)),
				]),
				m("div",[
					m("div", {class: style.label}, "Mijn Afval"),
					m("div", {class: style.price}, "€"+(1.48).toFixed(2)),
				]),
				m("div",[
					m("div", {class: style.label}, "Milieustraat"),
					m("div", {class: style.price}, "€"+(20.48).toFixed(2)),
				])
			]);
		}
	};

})();
