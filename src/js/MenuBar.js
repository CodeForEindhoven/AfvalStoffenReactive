var MenuBar = (function(){

	var style = {
		parent: b.cl({
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
		menuitem: b.cl({
			"float": "right",
			"padding-left": "20px",
			"padding-right": "20px",
			"cursor": "pointer",
			"line-height": "66px",

		}),
		logo: b.cl({
			"height": "25px",
			"margin-right": "10px",
			"vertical-align": "middle"
		})
	};


	return {
		view: function(){
			return m("nav", {class: style.parent}, [
				m("img",{class: style.logo, src: "/img/white_container2.svg"}),
				m("span","Afvalstoffen Gemeente Eersel"),
				m("span", {class: style.menuitem+"menuitem"},"Overzicht"),
				m("span", {class: style.menuitem+"menuitem"},"Mijn Kosten"),
			]);
		}
	};

})();
