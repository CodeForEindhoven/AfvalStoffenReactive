var Paper = (function(){
	var style = b.mq({
		"monitor":{
			"box-sizing": "border-box",
			"padding": "20px",
			"background-color": "#FFFFFF",
			"box-shadow": "1px 1px 5px #AAAAAA",
			"float": "left",
			"width": "360px",
			"margin-bottom": "30px",
			"margin-right": "15px"
		},
		"mobile": {
			"box-sizing": "border-box",
			"padding": "20px",
			"background-color": "#FFFFFF",
			"box-shadow": "1px 1px 5px #AAAAAA",
			"float": "left",
			"width": "100%",
			"margin-bottom": "30px",
			"margin-right": "15px"
		}
	});

	return {
		controller: function(values){

		},
		view: function(ctrl, content){
			return m("div",{class: style},content);
		}
	};

})();
