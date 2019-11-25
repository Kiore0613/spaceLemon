$(document).ready(function(){

// Scroll Elementos Menu
	var home = $('#home').offset().top,
		aboutUs = $('#about-us').offset().top,
		contactUs = $('#contact-us').offset().top;

// Boton Home
	$('#btn-home').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});

	$('#btn-about-us').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: aboutUs - 40
		});
	});

	$('#btn-contact-us').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contactUs - 40
		});
	});


// Efecto Menu
	/*$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		},2000 + (index * 500));
	}); */


// Efecto Header
	/*if ($(window).width() > 800){
		$('header .header-text').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .header-text').animate({
			opacity: 1,
			marginTop: '-52px'
		},1500);
		}
*/
}); 
