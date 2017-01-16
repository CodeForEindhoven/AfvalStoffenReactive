var BarGraph = (function(){
	var style = {
		main: s.cl({
			"box-sizing": "border-box",
			"user-select": "none",
			"float": "left",
			"width": "80px",
			"margin-right": "20px;"
		}),
		block: s.cl({
			"font-size": "10pt",
			"color": "#FFFFFF",
			"padding": "10px",
			"position": "relative",
		}),
		title: s.cl({
			"position": "absolute",
			"text-align": "right",
			"top": "0px",
			"left": "-110px",
			"color": "#000000",
			"width": "100px"
		})
	};

	return {
		controller: function(){
			return {
			};
		},
		view: function(ctrl, options){
			return m("div",{class: style.main},[
				m("div",{},options.title),
				options.blocks.map(function(b){
					if(b.value>0){
						return m("div",{
							class: style.block,
							style: "height:"+b.value+"px; background-color: "+b.color+";"
						},[
							m("span",{},b.label),
							m("span",{class: style.title}, b.title)
						]);
					} else {
						return m("div");
					}
				})
			]);
		}
	};

})();
