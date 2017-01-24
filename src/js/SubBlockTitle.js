var SubBlockTitle = (function(){
	var style = {
		title: b.cl({
			"font-size": "12pt",
			"font-weight": "bold",
		}),
		subtitle: b.cl({
			"font-size": "10pt",
			"margin-bottom": "10px",
			"color": "#666666",
		}),
	};


	return {
		controller: function(options){
		},
		view: function(ctrl, options){
			return m("div",{},[
				m("div", {class: style.title}, options.title),
				m("div", {class: style.subtitle}, options.subtitle),
			]);
		}
	};

})();
