var StatsPage = {
	controller: function(){
		var data = [
			{"year":"2015", "rest":53.1, "gft":78.7,"pmd":22.8},
			{"year":"2014", "rest":54.3, "gft":72.6,"pmd":null},
			{"year":"2013", "rest":98.9, "gft":43.3,"pmd":null},
			{"year":"2012", "rest":99.8, "gft":46.4,"pmd":null},
			{"year":"2011", "rest":95.2, "gft":50.4,"pmd":null},
			{"year":"2010", "rest":91.6, "gft":48.7,"pmd":null},
			{"year":"2009", "rest":96.6, "gft":49.9,"pmd":null},
			{"year":"2008", "rest":104, "gft":51.1,"pmd":null},
			{"year":"2007", "rest":107.1, "gft":52,"pmd":null},
			{"year":"2006", "rest":102.5, "gft":50.1,"pmd":null},
			{"year":"2005", "rest":123.2, "gft":50.3,"pmd":null},
			{"year":"2004", "rest":125.1, "gft":53.5,"pmd":null},
			{"year":"2003", "rest":124.3, "gft":51.5,"pmd":null},
			{"year":"2002", "rest":124, "gft":58.2,"pmd":null},
			{"year":"2001", "rest":115.3, "gft":63.7,"pmd":null}
		];

		var options = {
			"label": "year",
			"display": [
				{"column": "rest", "icon": "./img/black_container2.svg"},
				{"column": "gft", "icon": "./img/green_container2.svg"},
				{"column": "pmd", "icon": "./img/yellow_bag2.svg"}
			]
		};

		var filters = [
			{"type": "bool", "column": "rest", "label": "grijze containers", "value":true, "icon": "./img/black_container2.svg"},
			{"type": "bool", "column": "gft", "label": "groene containers", "value":true, "icon": "./img/green_container2.svg"},
			{"type": "bool", "column": "pmd", "label": "plastic", "value":true, "icon": "./img/yellow_bag2.svg"},
			{"type": "range", "column": "year", "label": "jaar", "value":[2010, 2015]}
		];

		var callback = function(id, value){
			filters[id].value = value;
		};

		var applyfilters = function(){
			var output = [];
			for(var i in data){
				var source = {};
				for(var j in data[i]){
					source[j] = data[i][j];
					for(var k in filters){

						if(filters[k].column === j){
							if(filters[k].type==="bool"){
								if(filters[k].value === false){
									console.log(filters[k].value);
									source[j] = null;
								}
							}
						}
					}

				}
				output.push(source);
			}

			return output;
		};

		return {
			data: data,
			options: options,
			filters: filters,
			callback: callback,
			applyfilters: applyfilters
		};
	},
	view: function(ctrl){
		return m("div",[
			m.component(MenuBar),
			m("div",{class: "page"},[
				m.component(Paper,[
					m.component(Filter, ctrl.filters, ctrl.callback)
				]),
				m.component(Paper,[
					m.component(IconHistogram, ctrl.applyfilters(), ctrl.options)
				])
			])
		]);
	}
};
