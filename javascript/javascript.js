// remove class no--js 

$(document).ready(function () {
	$('body *').removeClass('no--js')
});


// show menu on mobile

function toggleActive() {
	$('.burger').toggleClass('active');
	$('nav').toggleClass('active');
	$('.section').toggleClass('blur');
}

$('.burger').on('click', toggleActive);

$('.nav__link').on('click', function () {
	if ($('nav').hasClass('active')) {
		toggleActive();
	}
})

// desactive mobile menu when window is resizing
$(window).resize(function () {
	$('.burger').removeClass('active');
	$('nav').removeClass('active');
	$('.section').removeClass('blur');
});


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
	const $list1FromTop = $('.service__list--a').offset().top;
	const $list2FromTop = $('.service__list--b').offset().top;
	const $list3FromTop = $('.service__list--c').offset().top;
	const $list4FromTop = $('.service__list--d').offset().top;

	if ($scrollValue > $qualitiesFromTop - $windowHeight / 2) {
		$('.container--qualities').addClass('active');
	}
	if ($scrollValue > $list1FromTop - $windowHeight / 2) {
		$('.service__list--a').addClass('active');
	}
	if ($scrollValue > $list2FromTop - $windowHeight / 2) {
		$('.service__list--b').addClass('active');
	}
	if ($scrollValue > $list3FromTop - $windowHeight / 2) {
		$('.service__list--c').addClass('active');
	}
	if ($scrollValue > $list4FromTop - $windowHeight / 2) {
		$('.service__list--d').addClass('active');
	}
	if ($scrollValue < 300) {
		$('.container--qualities').removeClass('active')
		$('.service__list').removeClass('active'); // cleaner
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