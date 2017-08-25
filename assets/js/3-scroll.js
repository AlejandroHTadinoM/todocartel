var 
	scrollFlag = false,

	windowH = ($(window).height() / 1.2),

	headerH = headerWrap.height(),

	serviceOffset = serviceSection.offset().top,
	servicePos = serviceSection.position().top,

	sectionAboutOffset = sectionAbout.offset().top,
	sectionAboutH = sectionAbout.height(),
	aboutWrapOffset = aboutWrap.offset().top;


$(window).scroll(function () {
	var wScroll = $(this).scrollTop();
	console.log("Scroll: " + wScroll);
	
	if (wScroll >= (serviceOffset - windowH / 2)) {

		serviceGroup.each(function (i) {

			setTimeout(function () {

				serviceGroup.eq(i).addClass('viewport');

			}, 400 * (i + 1));
		});
	}
	
	if (wScroll >= (servicePos - windowH)) {
		
		aboutWrap.animate({
			
			right: ["0", "swing"],
			opacity: "1"
			
		}, "slow", "linear", function () {
			aboutSub.addClass('pseudo-width');
		});
	}

	if ((wScroll > (sectionAboutOffset - windowH) && (wScroll <=(aboutWrapOffset + sectionAboutH)))) {
		sectionAbout.css({
			"background-position": "center " + (wScroll / 30) + "%"
		});
	}

	if (wScroll <= headerH) {

		pageLead.css({
			"transform": "translateY(" + (wScroll / 10) + "%)"
		});

	}

});