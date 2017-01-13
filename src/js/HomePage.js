var HomePage = {
	controller: function(){
		var grijs = m.prop(0);
		var groen = m.prop(0);
		var pmd = m.prop(0);
		var vastrecht = m.prop(69.48);

		return {
			values: {
				grijs: grijs,
				groen: groen,
				pmd: pmd,
				vastrecht: vastrecht,
			}
		};
	},
	view: function(ctrl){
		return m("div",[
			m.component(MenuBar),
			m("div",{class: "page"},[
				m.component(Form, ctrl.values),
				m.component(Compare, ctrl.values)
			])
		]);
	}
};
