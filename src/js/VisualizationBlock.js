var VisualizationBlock = {
	controller: function(){
		return {
			applyfilters: function(filters, data){
				var output = [];
				for(var i in data){
					var source = {};
					for(var j in data[i]){
						source[j] = data[i][j];
						for(var k in filters){
							if(filters[k].column === j){
								if(filters[k].type==="bool"){
									if(filters[k].value === false){
										source[j] = null;
									}
								}
							}
						}
					}
					output.push(source);
				}
				return output;
			}
		};
	},
	view: function(ctrl, input){
		return m("div", {class: "visualizationblock"},[
			m("div", {class: "title"}, [
				m("h1", input.title),
				m("div", {class: "source"}, [
					m("span", "Gebruikt data uit: "),
					m("a", {href: input.source.href}, input.source.label)
				])
			]),
			m.component(Filter, input.filters),
			m.component(Visualizations[input.visualization.type], ctrl.applyfilters(input.filters, input.source.data), input.visualization.options)
		]);
	}
};
