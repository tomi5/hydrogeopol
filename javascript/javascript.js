// show menu on mobile


function toggleActive() {
	$('.burger').toggleClass('active');
	$('nav').toggleClass('active');
	$('.burger__bar').removeClass('dark');
	$('.section').toggleClass('blur');
}

$('.burger').on('click', toggleActive);

$('.nav__link').on('click', function () {
	if ($('nav').hasClass('active')) {
		toggleActive();
	}
})