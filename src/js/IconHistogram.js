var IconHistogram = (function(){

	var s = {
		icon: b.cl({
			"vertical-align": "middle",
			"margin-left": "2px"
		}),
		number: b.cl({
			"margin-right": "10px",
			"width": "60px",
			"display": "inline-block",
			"font-size": "8pt",
		}),
		iconstack: b.cl({
			"margin-bottom": "5px"
		}),

		block: b.cl({
			"margin-bottom": "15px",
			"border-bottom": "1px solid #d8d8d8",
			"padding-bottom": "15px",
			"position": "relative"
		}),
		label: b.cl({
			"font-weight": "bold",
			"display": "inline-block"
		}),
		price: b.cl({
			"margin-top": "5px",
			"float": "right",
			"display": "inline-block",
			"font-size": "8pt",
		}),
	};

	var PriceBar = {
		controller: function(){
			return {

			};
		},
		view: function(ctrl, data){
			return m("div",data);
		}
	};

	var Iconstack = {
		controller: function(){

		},
		view: function(ctrl, number, icon){
			if(number.amount){
				return m("div", {class: s.iconstack},(function(total){
					var containers = [];
					while(total > 1){
						total-=1;
						containers.push(m("img", {src: icon, class: s.icon}));
					}
					containers.push(m("img", {
						src: icon,
						style: "-webkit-clip-path: inset("+((1-total)*15)+"px 0px 0px 0px ); " + "clip-path: inset("+((1-total)*15)+"px 0px 0px 0px ); ",
						class: s.icon
					}));
					containers.unshift(m("div", {class: s.number}, (number.amount*1000).toFixed(0)+" kg"));
					console.log(number);
					if(number.price){containers.push(m("div", {class: s.price}, ["€"+(number.price).toFixed(2)]));}
					return containers;
				})(number.amount/10));
			}
			return m("");
		}
	};

	var Histogram = {
		controller: function(){

		},
		view: function(ctrl, data, options){

			return m("div", {class: "visualization iconhistogram"}, [
				data.map(function(block){
					return m("div", {class: s.block}, [
						m("div",[
							m("div", {class: s.label}, block[options.label]),
							block.vastrecht?m("div", {class: s.price}, "€"+(block.vastrecht).toFixed(2)): m(""),
						]),
						options.display.map(function(stack){
							return m.component(Iconstack, block[stack.column], stack.icon);
						}),
						//m("div", {class: s.prices},(function(){
						//	if(block.price){
						//		return [
						//			m("div", block.price.rest),
						//			m("div", block.price.gft),
						//			m("div", block.price.vast),
						//		];
						//	}
						//})())
					]);
				})
			]);
		}
	};

	return Histogram;
}());

//displays data as a stack of icons
