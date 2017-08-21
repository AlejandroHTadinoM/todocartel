inputTarget.focusout(function (e) {
	value = $(this).val();

	if (value != (null | undefined)) {
		$(this).addClass('text-light');
	} else {
		$(this).removeClass('text-light');
	}
});