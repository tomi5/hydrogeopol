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

// scroll to section

$('.nav__link').on('click', function () {
	const goToSection = $(this).attr('href');
	$('body, html').animate({
		scrollTop: $(goToSection).offset().top
	}, 1000)
})

$('.btn--header').on('click', function () {
	const goToSection = $(this).attr('href');
	$('body, html').animate({
		scrollTop: $(goToSection).offset().top
	}, 1000)

})