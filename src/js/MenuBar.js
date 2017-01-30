var MenuBar = (function(){

	var style = {
		parent: b.cl({
			//shape
			"position": "relative",
			"box-sizing": "border-box",
			"height": "70px",
			"width": "100%",
			"top": "0px",
			"line-height": "70px",
			"padding-right": "0px",

			//styling
			"background-color": "#1a555c",
			"color": "#fff",
			"box-shadow": "0px 1px 5px #AAAAAA",
			"z-index": "10"
		}),
		menuitem: b.mq({
			"mobile": {
				"display": "block",
				"background-color": "#267f79",
				"padding-left": "20px",
				"padding-right": "20px",

			},
			"monitor": {
				"float": "right",
				"padding-left": "20px",
				"padding-right": "20px",
				"cursor": "pointer",
				"line-height": "66px",
			}
		}),
		menuclosed: b.mq({
			"mobile": {
				"display": "none!important"
			}
		}),
		menubutton: b.mq({
			"mobile": {
				"float": "right",
				"vertical-align": "middle",
				"margin-right": "20px",
				"line-height": "66px!important",
			},
			"monitor": {
				"display": "none!important"
			}
		}),
		hover: b.cl({},{
			":hover" : {
				"border-bottom": "4px solid white",
			}
		}),
		selected: b.cl({
			"border-bottom": "4px solid white",
		}),
		logo: b.cl({
			"margin-left": "20px",
			"height": "25px",
			"margin-right": "10px",
			"vertical-align": "middle"
		})
	};

	return {
		controller: function(){
			var status = m.prop(false);
			return {
				status: status,
				switch_menu: function(){
					status(!status());
				},
				get_onclick: function(nmb){
					return function(){
						if(nmb===0) return m.route("/");
						if(nmb===1) return m.route("/stats");
					};
				}
			};
		},
		view: function(ctrl){
			return m("nav", {class: style.parent}, [
				m("img",{class: style.logo, src: "/img/white_container2.svg"}),
				m("span","Afvalstoffen Gemeente Eersel"),
				m("i", {
					class: style.menubutton+" material-icons",
					onclick: ctrl.switch_menu
				},"menu"),
				m("span", {
					class: style.menuitem+style.hover + (m.route()==="/stats"?style.selected:"") + (ctrl.status()?"":style.menuclosed),
					onclick: ctrl.get_onclick(1)
				},"Overzicht"),
				m("span", {
					class: style.menuitem+style.hover + (m.route()==="/"?style.selected:"") + (ctrl.status()?"":style.menuclosed),
					onclick: ctrl.get_onclick(0)
				},"Mijn Kosten"),
			]);
		}
	};

})();
