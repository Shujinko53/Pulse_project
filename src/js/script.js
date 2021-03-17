$(document).ready(function() {
	// $('.carousel__inner').slick({
	// 	speed: 800,
	// 	adaptiveHeight: true,
	// 	prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
	// 	nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
	// 	responsive: [
	// 		{
	// 			breakpoint: 992,
	// 			settings: {
	// 				dots: true,
	// 				arrows: false
	// 			},
	// 		}
	// 	]
	// });

	const slider = tns({
		container: '.carousel__inner',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		nav: false
		// navPosition: 'bottom'
	});

	document.querySelector('.prev').addEventListener('click', function() {
		slider.goTo('prev');
	});

	document.querySelector('.next').addEventListener('click', function() {
		slider.goTo('next');
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleClass(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		})
	}

	toggleClass('.catalog-item__link');
	toggleClass('.catalog-item__back');

	$('.feed-form').validate({
		rules: {
			name: "required",
			phone:"required",
			email: "required"
		},
		messages: {
			name: "Пожалуйста, введите Ваше имя",
			phone: "Пожалуйста, введите Ваш номер",
			email: "Пожалуйста, введите Ваш email"
		}
	});
	
	$('input[name=phone]').mask("+7 (999) 999-99-99");

	//  Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn();
	});

	$('.modal__close, .overlay').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	});

	$(window).keydown(function(event) {
		if (event.which == 27) {
			$('.overlay, #consultation, #order, #thanks').fadeOut();
		}
	})

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn();
		})
	});
});
	
	