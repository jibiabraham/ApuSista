$(function(){

	var toCenter = $(".center"), throttle;
	center();
	$(window).resize(center);
	function center(){
		throttle && clearTimeout(throttle);
		throttle = setTimeout(function() {
			if ($(window).width() < 768){
				toCenter.each(function(i, d){
					$(d).css({
						position: "static",
						top: "0",
						left: "0",
						marginTop: "",
						marginLeft: ""
					});
				});
			}
			else {
				toCenter.each(function(i, d){
					d = $(d);
					var height = d.height(), width = d.width();
					d.css({
						position: "absolute",
						top: "50%",
						left: "50%",
						marginTop: -height/2,
						marginLeft: -width/2
					});
				});
			}
		}, 100);
	}

});