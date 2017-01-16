var SelectContainer = (function(){
	var style = {
		parent: s.cl({
			"position": "relative",
			"margin-top": "20px",
			"float": "right",
			"user-select": "none",
		}),
		box: s.cl({
			"width": "180px",
			"height": "30px",
			"border": "1px solid black",
			"line-height": "30px",
			"margin-bottom": "-1px",
			"padding": "10px",
			"cursor": "pointer"
		}),
		options: s.cl({
			"width": "200px",
			"border": "1px solid black",
			"position": "absolute",
			"background-color": "#FFFFFF",
			"box-shadow": "0px 1px 5px #AAAAAA",
			"z-index": "9999"
		}),
		option: "hover "+s.cl({
			"cursor": "pointer",
			"padding": "10px"
		}),
		right: s.cl({
			"float": "right",
			"margin-right": "5px"
		}),
		icon: s.cl({
			"height": "30px",
			"margin-right": "10px",
			"vertical-align": "middle"
		})
	};

	return {
		controller: function(options){
			var value = options.choices[options.defaultchoice];
			var show = false;
			return {
				show: function(){return show;},
				value: function(){return value;},
				onclick: function(){
					if(options.choices.length>1) show = !show;
				},
				gen_onselect: function(v){
					return function(){
						value = options.choices[v];
						options.onchange(v);
						show = false;
					};
				}
			};
		},
		view: function(ctrl, options){
			return m("div",{class: style.parent},[
				m("div", {class: style.box, onclick: ctrl.onclick},[
					m("img",{class: style.icon, src: ctrl.value().icon}),
					m("span",{},ctrl.value().label),
					m("span",{class: style.right},options.choices.length>1?"▼":"")
				]),
				(function(){
					if(ctrl.show()===true){
						return m("div", {class: style.options},
							options.choices.map(function(choice, count){
								return m("div", {class: style.option, onclick: ctrl.gen_onselect(count)},[
									m("img",{class: style.icon, src: choice.icon}),
									m("span",{},choice.label)
								]);
							})
						);
					}
				})()

			]);
		}
	};
})();
