
$(function(){
	$(window).resize();
	$("#block-nav").css("z-index", 1);

	// fixed bar
	$("#block-nav").navFixed();

	// fluent scroll
	$('#fstPage-down a, nav a, #logo').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
		event.preventDefault();
	});
});

$(window).resize(function(){ 

	$("#block-firstPage").css("height", $(window).height());
	// $("#block-hwd").css("height", $(window).width()*0.4);
	// $("#block-caption").css("height", $(window).width()*0.5);
	// $("#block-gmm").css("height", $(window).width()*0.35);
	// $("#block-pca").css("height", $(window).width()*0.4);
	// $("#block-mem").css("height", $(window).width()*0.8);
	// $("#block-video").css("height", $(window).width()*0.5);
	// $("#block-magic").css("height", $(window).width()*0.8);
	// $("#block-elevator").css("height", $(window).width()*0.7);
	// $("#block-poems").css("height", $(window).width()*0.7);
	// $("#block-skill1").css("height", $(window).width()*0.6);
	// $("#block-elevator").css("height", $(window).width()*0.8);
	// $("#block-blog").css("height", $(window).width()*0.9);
	// $("#block-skill1").css("height", $(window).height()*0.8);
	// $("#block-workEXP").css("height", $(window).height()*0.6);

	// title effect in first page
	$('.blockTitle').stop().fadeIn("normal").animate({
		"top" : ($(window).height() - $('.blockTitle').outerHeight())/2
	},500); 

	$("#block-wantMore").css("height", $(window).height());
	$('#block-wantMore>p').css("top", $("#block-wantMore").outerHeight(true)/2 + "px"); 
	// $('#block-wantMore>p').css("top", ($("#block-wantMore").outerHeight(true) - $('#block-wantMore>p').outerHeight())/2 + "px"); 
});
