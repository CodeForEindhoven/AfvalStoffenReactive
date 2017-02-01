var StatsPage = {
	controller: function(){

	},
	view: function(ctrl){
		return m("div",[
			m.component(MenuBar),
			m("div",{class: "page"},[
				m.component(Paper,"stats")
			])
		]);
	}
};
