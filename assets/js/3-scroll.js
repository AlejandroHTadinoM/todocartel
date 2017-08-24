var 
	scrollFlag = false,

	windowH = ($(window).height() / 1.2),

	serviceOffset = serviceSection.offset().top,
	serviceH = serviceSection.height(),
	servicePos = serviceSection.position().top,

	sectionAboutOffset = sectionAbout.offset().top,
	sectionAboutH = sectionAbout.height(),
	sectionAboutPos = sectionAbout.position().top,
	aboutWrapOffset = aboutWrap.offset().top;


$(window).scroll(function () {
	var wScroll = $(this).scrollTop();
	//console.log("Scroll: " + wScroll + " Section About pos: " + sectionAboutPos);
	
	if (wScroll >= (serviceOffset - windowH / 2)) {

		serviceGroup.each(function (i) {

			setTimeout(function () {

				serviceGroup.eq(i).addClass('viewport');

			}, 400 * (i + 1));
		});
	}

	if (wScroll >= (sectionAboutPos - (sectionAboutH * 2))) {
		sectionAbout.css({
			"background-position": "center " + (wScroll / 32) + "%"
		});
	}

	if (wScroll >= (aboutWrapOffset - windowH)) {

		aboutWrap.animate({

			right: ["0", "swing"],
			opacity: "1"

		}, "slow", "linear", function () {
			aboutSub.addClass('pseudo-width');
		});
	}
});