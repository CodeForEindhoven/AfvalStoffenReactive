var StatsPage = {
	controller: function(){

	},
	view: function(ctrl){
		return m("div",[
			m.component(MenuBar),
			m("div",{class: "page"},[
				"stats yall"
			])
		]);
	}
};
