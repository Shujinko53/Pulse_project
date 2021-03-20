$(document).ready(function() {
	const slider = tns({
		container: '.carousel__inner',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		nav: false
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

	//  Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn();
	});

	$('.modal__close').on('click', function() {
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

	// Forms validate

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone:"required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста, введите Ваше имя",
				phone: "Пожалуйста, введите Ваш номер",
				email: {
					required: "Пожалуйста, введите Ваш email",
					email: "Неправильно введён адрес почты"
				}
			}
		});
	};

	validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order .feed-form_modal');
	
	
	$('input[name=phone]').mask("+7 (999) 999-99-99");

	// Smooth scroll amd pageup

	$(window).scroll(function() {
		if ($(window).scrollTop() > 1300) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
});
	
	