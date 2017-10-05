$(function () {
	$('.menu a, .button a, .price__card a').on('click', function (e) {
		e.preventDefault();

		var selector = $(this).attr('href');
		var h = $(selector);

		$('html, body').animate({
			scrollTop: h.offset().top -100
		}, 1100);
	});
});

$(document).ready(function(){
  $('#foobar').bxSlider({
  	  minSlides: 2,
  	  slideWidth: 720,
	  maxSlides: 4,
	  slideMargin: 30
  });
});

//popup


var showPopup = document.querySelector('.show_popup');
var popup = document.querySelector('.popup');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.close');

showPopup.addEventListener('click', function() {
	event.preventDefault();
	popup.classList.add('popup__block');
	overlay.classList.add('overlay__block');
});

overlay.addEventListener('click', function() {
	event.preventDefault();
	popup.classList.remove('popup__block');
	overlay.classList.remove('overlay__block');
});

close.addEventListener('click', function() {
	event.preventDefault();
	popup.classList.remove('popup__block');
	overlay.classList.remove('overlay__block');
});


//ajax

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});