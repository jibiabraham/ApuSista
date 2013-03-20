$(function(){

	var base = "/images/", defArray, images = [1,2,3,4,5,6], stylesheet = "/css/style2.css";
	
	images = images.
		map(function(d){
			return base + d + ".jpg";
		});

	defArray = images.map(function(d){
			var img = new Image(), def = $.Deferred();
			img.onload = function(){
				def.resolve();
			};
			img.onerror = function(){
				def.reject();
			};
			img.src = d;
			return def.promise();
		});

	$.when.apply(null, defArray).
		always(function(){
			var sheet = document.createElement("link");
			sheet.rel = "stylesheet";
			sheet.href = stylesheet;
			sheet.type = "text/css";
			sheet.media = "screen";
			sheet.onload = startBackgroundAnimation;
			document.head.appendChild(sheet);
		});

	function startBackgroundAnimation () {
		var list = $(document.createElement("ul")).addClass("cb-slideshow");
		$.each(images, function(i, d){
			var listItem = $("<li><span>x</span></li>");
			list.append(listItem);
		});
		$("body").append(list);
		$("#loader").remove();
	}

});