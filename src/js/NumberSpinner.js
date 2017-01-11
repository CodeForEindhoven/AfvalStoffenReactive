var NumberSpinner = (function(){
	var style = {
		parent: s.cl({
			"float": "left",
			"position": "relative"
		}),
		box: s.cl({
			"width": "30px",
			"height": "30px",
			"border": "1px solid black",
			"line-height": "30px",
			"text-align": "center",
			"margin-bottom": "-1px",
			"cursor": "pointer"
		}),
		times: s.cl({
			"position":"absolute",
			"top": "30px",
			"left": "55px",
			"width": "30px",
			"height": "30px",
			"line-height": "30px",
			"text-align": "center",
		})
	};

	return {
		controller: function(options){
			var value = options.value;
			return {
				value: function(){return value;},
				onup: function(){
					value++;
					options.onchange(value);
				},
				ondown: function(){
					value--;
					options.onchange(value);
				},
			};
		},
		view: function(ctrl){
			return m("div",{class: style.parent},[
				m("div", {class: style.box, onclick: ctrl.onup},"+"),
				m("div", {class: style.box},ctrl.value()),
				m("div", {class: style.box, onclick: ctrl.ondown},"-"),
				m("div", {class: style.times}, "x")
			]);
		}
	};
})();
