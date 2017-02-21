var StatsPage = {
	controller: function(){
		var data = [
			{"year":"2015", "vastrecht": 69.12, "rest": {"amount": 53.1, "price": 8.00},  "gft":{"amount":78.7, "price": 1.47} ,"pmd": {"amount":22.8}},
			{"year":"2014", "vastrecht": 41.65, "rest": {"amount": 54.3, "price": 8.00},  "gft":{"amount":72.6, "price": 1.00} ,"pmd": {"amount":null}},
			{"year":"2013", "vastrecht": 51.40, "rest": {"amount": 98.9, "price": 4.47},  "gft":{"amount":43.3, "price": 3.83} ,"pmd": {"amount":null}},
			{"year":"2012", "vastrecht": 50.70, "rest": {"amount": 99.8, "price": 4.47},  "gft":{"amount":46.4, "price": 3.80} ,"pmd": {"amount":null}},
			{"year":"2011", "rest": {"amount": 95.2},  "gft":{"amount":50.4} ,"pmd": {"amount":null}},
			{"year":"2010", "rest": {"amount": 91.6},  "gft":{"amount":48.7} ,"pmd": {"amount":null}},
			{"year":"2009", "rest": {"amount": 96.6},  "gft":{"amount":49.9} ,"pmd": {"amount":null}},
			{"year":"2008", "rest": {"amount": 104.0}, "gft":{"amount":51.1} ,"pmd": {"amount":null}},
			{"year":"2007", "rest": {"amount": 107.1}, "gft":{"amount":52.0} ,"pmd": {"amount":null}},
			{"year":"2006", "rest": {"amount": 102.5}, "gft":{"amount":50.1} ,"pmd": {"amount":null}},
			{"year":"2005", "rest": {"amount": 123.2}, "gft":{"amount":50.3} ,"pmd": {"amount":null}},
			{"year":"2004", "rest": {"amount": 125.1}, "gft":{"amount":53.5} ,"pmd": {"amount":null}},
			{"year":"2003", "rest": {"amount": 124.3}, "gft":{"amount":51.5} ,"pmd": {"amount":null}},
			{"year":"2002", "rest": {"amount": 124.0}, "gft":{"amount":58.2} ,"pmd": {"amount":null}},
			{"year":"2001", "rest": {"amount": 115.3}, "gft":{"amount":63.7} ,"pmd": {"amount":null}}
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
