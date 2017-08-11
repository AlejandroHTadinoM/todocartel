function dropPos (o) {
	o = $(this);
	var dropW = o.width(),
		dropH = o.height();

	o.css({
		"top" : (dropH - (dropH / .1)) + "%"
	});

	lastW = dropW;
	lastH = dropH;
}
