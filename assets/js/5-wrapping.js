var footerWrapH = footerWrap.outerHeight();

outerWrap.css({
	'margin-bottom' : footerWrapH
});

$(window).resize(function () {
	var footerWrapH = footerWrap.outerHeight();
	
	outerWrap.css({
		'margin-bottom' : footerWrapH
	});
});