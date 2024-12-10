


//Бургер меню

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.header__menu a').click(function () {
		$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

// Search

$(document).ready(function () {
	// Клик по кнопке: добавляем/удаляем класс active для кнопки и поля
	$('.header__btn').click(function () {
		$(this).toggleClass('active'); // Переключаем класс для кнопки
		$('.header__input').toggleClass('active').focus(); // Переключаем класс для поля и устанавливаем фокус
	});

	// Клик по документу: убираем классы, если клик вне кнопки или поля
	$(document).click(function (event) {
		if (!$(event.target).closest('.header__btn, .header__input').length) {
			$('.header__btn').removeClass('active'); // Убираем класс с кнопки
			$('.header__input').removeClass('active'); // Убираем класс с поля
		}
	});

	// Отслеживание нажатия Enter в поле ввода
	$('.header__input').keypress(function (event) {
		if (event.which === 13) { // 13 — код клавиши Enter
			event.preventDefault(); // Предотвращаем отправку формы
			$('.header__btn').removeClass('active'); // Убираем класс с кнопки
			$('.header__input').removeClass('active'); // Убираем класс с поля
			let query = $(this).val(); // Получаем текст из input
			if (query) {
				console.log('Ищем: ' + query); // Здесь обработка поискового запроса
				performSearch(query);
			}
		}
	});
});




// Из фото в БГ

function ibg(){
		$.each($('.ibg'), function(_index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
}
ibg();

// Якоря

const elemHome = document.querySelector('.scroll-home');
const elemAbout = document.querySelector('.scroll-about');
const elemTreatment = document.querySelector('.scroll-treatment');
const elemBlog = document.querySelector('.scroll-blog');
const elemShop = document.querySelector('.scroll-shop');

const blockHome = document.querySelector('.main');
const blockAbout = document.querySelector('.about');
const blockTreatment = document.querySelector('.treatment');
const blockBlog = document.querySelector('.activity');
const blockShop = document.querySelector('.shop');

elemHome.addEventListener('click', function () {
	blockHome.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
elemAbout.addEventListener('click', function() {
	blockAbout.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
elemTreatment.addEventListener('click', function () {
	blockTreatment.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
elemBlog.addEventListener('click', function () {
	blockBlog.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
elemShop.addEventListener('click', function () {
	blockShop.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});

// Слайдер

const swiperSlider = document.querySelectorAll('.item-shop__slide');

const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		900: {
			slidesPerView: 3,
			spaceBetween: 100,
		},
	},
	autoplay: {
		delay: 5000,
		stopOnLastSlide: true,
		disableOnInteraction: true,
	},
});



