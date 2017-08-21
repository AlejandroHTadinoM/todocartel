scrollFlag = false;

$(window).scroll(function () {
	wScroll = $(this).scrollTop();
	
	if (wScroll >= (serviceGroup.offset().top - ($(window).height() / 1.2))) {

		serviceGroup.each(function (i) {

			setTimeout(function () {

				serviceGroup.eq(i).addClass('viewport');

			}, 150 * (i + 1));
		});
	}
});