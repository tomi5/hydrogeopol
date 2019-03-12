// remove class no--js 

$(document).ready(function () {
	$('.no--js').removeClass('no--js');
	
	
	
// show menu on mobile

function toggleActive() {
	$('.burger').toggleClass('active');
	$('nav').toggleClass('active');
	$('.section').toggleClass('blur');
 
 let x = $('.burger').attr("aria-expanded"); 
 if (x == "true") 
  {
 x = "false"
 } else {
 x = "true"
}
$('.burger').attr("aria-expanded", x);
 
}
	



$('.burger').on('click', toggleActive);

$('.nav__link').on('click', function () {
	if ($('nav').hasClass('active')) {
		toggleActive();
	}
})

// scroll to section

$('.nav__link, .btn--header').on('click', function () {
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

	$('.container--qualities').addClass('no--visible');
	$('.service__list').addClass('no--visible'); 
		
	if ($scrollValue > $qualitiesFromTop - $windowHeight / 1.5) {
		$('.container--qualities').removeClass('no--visible');
	}
	if ($scrollValue > $list1FromTop - $windowHeight / 1.5 ) {
		$('.service__list--a').removeClass('no--visible');
	}
	if ($scrollValue > $list2FromTop - $windowHeight / 1.5 ) {
		$('.service__list--b').removeClass('no--visible');
	}
	if ($scrollValue > $list3FromTop - $windowHeight / 1.5 ) {
		$('.service__list--c').removeClass('no--visible');
	}
	if ($scrollValue > $list4FromTop - $windowHeight / 1.5 ) {
		$('.service__list--d').removeClass('no--visible');
	}
	
})

//menu active possition

function activeMenu() {
	const $scrollValue = $(window).scrollTop();
	const $heightAbout = $('#o-nas').offset().top;
	const $heightQualities = $('.section--qualities').offset().top;
	const $heightServices = $('#uslugi').offset().top;
	const $heightContact = $('#kontakt').offset().top;

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
	
	
});

