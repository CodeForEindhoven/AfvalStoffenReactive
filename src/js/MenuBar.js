var MenuBar = (function(){

	var style = {
		parent: s.cl({
			//shape
			"box-sizing": "border-box",
			"height": "70px",
			"width": "100%",
			"top": "0px",
			"line-height": "70px",
			"padding-left": "20px",
			"padding-right": "0px",

			//styling
			"background-color": "#1a555c",
			"color": "#fff",
			"box-shadow": "0px 1px 5px #AAAAAA",
		}),
		menuitem: s.cl({
			"float": "right",
			"padding-left": "20px",
			"padding-right": "20px",
			"cursor": "pointer",
			"line-height": "66px",
			"border-bottom": "4px solid white"
		})
	};


	return {
		view: function(){
			return m("nav", {class: style.parent}, [
				m("span","Afvalstoffen tool"),
				m("span", {class: style.menuitem},"Overzicht"),
				m("span", {class: style.menuitem},"Mijn Kosten"),

			]);
		}
	};

})();
