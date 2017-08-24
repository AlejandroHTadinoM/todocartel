$grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: '.grid-item',
	isAnimated: true,
	isAnimatedFromBottom: true
});

$grid.imagesLoaded().progress( function() {
	$grid.masonry('layout');
});

$grid.on('click', '.grid-item', function () {
	$(this).toggleClass('sizer');
	$grid.masonry('layout');
});