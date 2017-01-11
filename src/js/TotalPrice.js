var TotalPrice = (function(){
	var style = {
		parent: s.cl({
			"margin-bottom": "60px"
		}),
		title: s.cl({
			"margin-bottom": "10px",
		}),
		price: s.cl({
			"margin-top": "10px",
			"font-size": "23pt",
			"width": "100%",
			"text-align": "right"
		}),
		topline: s.cl({
			"width": "100%",
			"height": "3px",
			"border-bottom": "1px solid #aaaaaa",
			"border-top": "1px solid #aaaaaa",
		})
	};


	return {
		controller: function(options){
			return {

			};
		},
		view: function(ctrl, options){
			return m("div",{class: style.parent},[
				m("div", {class: style.title}, "Totaal"),
				m("div", {class: style.topline}, " "),
				m("div", {class: style.price}, "€"+(100.343).toFixed(2))
			]);
		}
	};

})();
