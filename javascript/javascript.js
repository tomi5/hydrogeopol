// remove class no--js 

$(document).ready(function () {
	$('body *').removeClass('no--js')
});


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


// animation effect

$(document).on('scroll', function () {
	const $scrollValue = $(this).scrollTop();
	const $windowHeight = $(window).height();
	const $qualitiesFromTop = $('.container--qualities').offset().top;
	const $listFromTop = $('.service__list').offset().top;

	if ($scrollValue > $qualitiesFromTop - $windowHeight / 2) {
		$('.container--qualities').addClass('active');
	}
	if ($scrollValue > $listFromTop - $windowHeight / 2) {
		$('.service__list').addClass('active');
	}
	if ($scrollValue < 300) {
		$('.container--qualities').removeClass('active')
		$('.service__list').removeClass('active'); // czyszczyciel
	}
})


//menu active possition

function activeMenu() {
	const $scrollValue = $(window).scrollTop();
	const $heightAbout = $('#about').offset().top;
	const $heightQualities = $('.section--qualities').offset().top;
	const $heightServices = $('#services').offset().top;
	const $heightContact = $('#contact').offset().top;

	if ($scrollValue < $heightAbout) {
		$('.nav__item').removeClass('active');
		$('.nav__item--home').addClass('active');
	} else if ($scrollValue < $heightQualities) {
		$('.nav__item').removeClass('active');
		$('.nav__item--about').addClass('active');
	} else if ($scrollValue < $heightServices) {
		$('.nav__item').removeClass('active');
	} else if ($scrollValue < $heightContact) {
		$('.nav__item').removeClass('active');
		$('.nav__item--services').addClass('active');
	} else {
		$('.nav__item').removeClass('active');
		$('.nav__item--contact').addClass('active');
	}
}
$(window).on("scroll", activeMenu)