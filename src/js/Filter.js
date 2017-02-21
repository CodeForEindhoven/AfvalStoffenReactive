var Filter = (function(){

	var s = {
		switchline: b.cl({
			"margin-top": "10px",
			"margin-bottom": "10px"
		}),
		icon: b.cl({
			"vertical-align": "middle",
			"margin-left": "15px",
			"margin-right": "15px"
		})
	};

	return {
		controller: function(filters, callback){
			return {
				onchange: function(id){
					return function(e){
						callback(id, e.target.checked);
						//var a = Model.vis();
						//a.filters[id].value = e.target.checked;
						//Model.vis(a);
					};
				}
			};
		},
		view: function(ctrl, filters){
			return m("div", {class: "options"}, filters.map(function(filter, id){
				if(filter.type === "bool"){
					return m("div", {class: s.switchline}, [
						//m("input", {
						//	"type": "checkbox",
						//	"checked": filter.value,
						//	"onchange": ctrl.onchange(id)
						//}),
						m("img", {src: filter.icon, class: s.icon}),
						m("span", filter.label)
					]);
				}
			}));
		}
	};
}());
