// --------- swiper services

document.addEventListener("DOMContentLoaded", function() {
	const swiper = new Swiper('.services__slider', {
	 
		pagination: {
			el: ".services-pagination",
		 },
		 grid: {
			rows: 2,
			fill: 'row'
		 }, 
			//Включение/отключение
			//Перетаскивание на ПК
			simulateTouch: true,
			//Чувствительность свайпа (0 - отключает перетаскивание)
			touchRatio: 2,
			//Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			//Курсор перетаскивания
			grabCursor: true,
			//Переключение при клике на слайд
			slideToClickedSlide: true,
			//Управление клавиатурой
			keyboard: {
				//включить/выключить
				enabled: true,
				//включить/выключить
				//только когда слайдер 
				//в пределах вьюпорта
				onlyInViewport: true,
				//включить/выключить
				//управление клавишами
				//pageUp, pageDown
				pageUpDown: true,
			},
			//Управление колесом мышы
			mousewheel: {
				//Чувствительность колеса мыши
				sensitivity: 1, 
				//Класс обьекта на котором
				//будет срабатывать прокрутка мышью
				// eventsTarget: ".contrasts__swiper" //МОгут перелистываться и другие слайты одновременно
			},
			//Автовысота слайдеров
			// autoHeight: true,
			//количество слайдов для показа
			slidesPerView: 2,
			//Отключение функционала
			//если слайдов меньше чем нужно
			watchOverflow: true,
			//Отступы между слайдами
			spaceBetween: 0,

			//Количество пролистываемых слайдов
			slidePerGroup: 1,

			//Активный слайд по центру
			centeredSlides: false,

			//бесконечное перелистывание слайдов
			loop: false,

			//Обновить свойпер при изменении элементов слайдера
			observe: true,
			//Обновить свойпер при изменении родительских элементов слайдера
			observeParents: true,
			//Обновить свойпер при изменении дочерных элементов слайдера
			observeSlideChildren: true,
			//Брейк поинты (адаптив)
			breakpoints: {
				320: {
					grid: {
						rows: 1
					 }, 
					slidesPerView:1,
				},
				768: {
					grid: {
						rows: 1
					 }, 
					slidesPerView:2,
				},
				1150.98: {
					grid: {
						rows: 6
					 }, 
					slidesPerView:2,
				}
			},
	}
	);
 });

// --------- swiper house
document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.house-slider', {
	 
	  navigation: {
		 nextEl: '.house-button-next',
		 prevEl: '.house-button-prev',
	  },
			//Включение/отключение
			//Перетаскивание на ПК
			simulateTouch: true,
			//Чувствительность свайпа (0 - отключает перетаскивание)
			touchRatio: 2,
			//Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,
			//Курсор перетаскивания
			grabCursor: true,
			//Переключение при клике на слайд
			slideToClickedSlide: true,
			//Управление клавиатурой
			keyboard: {
				//включить/выключить
				enabled: true,
				//включить/выключить
				//только когда слайдер 
				//в пределах вьюпорта
				onlyInViewport: true,
				//включить/выключить
				//управление клавишами
				//pageUp, pageDown
				pageUpDown: true,
			},
			//Управление колесом мышы
			mousewheel: {
				//Чувствительность колеса мыши
				sensitivity: 1, 
				//Класс обьекта на котором
				//будет срабатывать прокрутка мышью
				// eventsTarget: ".contrasts__swiper" //МОгут перелистываться и другие слайты одновременно
			},
			//Автовысота слайдеров
			autoHeight: true,
			//количество слайдов для показа
			slidesPerView: 3,
			//Отключение функционала
			//если слайдов меньше чем нужно
			watchOverflow: true,
			//Отступы между слайдами
			spaceBetween: 19,

			//Количество пролистываемых слайдов
			slidePerGroup: 1,

			//Активный слайд по центру
			centeredSlides: false,

			//бесконечное перелистывание слайдов
			loop: false,

			//Обновить свойпер при изменении элементов слайдера
			observe: true,
			//Обновить свойпер при изменении родительских элементов слайдера
			observeParents: true,
			//Обновить свойпер при изменении дочерных элементов слайдера
			observeSlideChildren: true,



			//Брейк поинты (адаптив)
			breakpoints: {
			
				320: {
					slidesPerView:1,
					spaceBetween:0,
				},
				768: {
					slidesPerView:2,
					// spaceBetween:30,
				},
				992: {
					slidesPerView:3,
				}

			},

	}
	);


 });

//  ----------------для формы 
function forms() {
	// Функция, которая убирает placeholder при фокусе на input
	function dataValue() {
	  // Выбираем все input с атрибутом data-value
	  const inputs = document.querySelectorAll('input[data-value]');
 
	  inputs.forEach(input => {
		 // Удаление placeholder при фокусировке
		 input.addEventListener('focus', function() {
			this.placeholder = '';
		 });
 
		 // Восстановление placeholder, если поле пустое
		 input.addEventListener('blur', function() {
			if (this.value === '') {
			  // Восстанавливаем placeholder из атрибута data-value
			  this.placeholder = this.getAttribute('data-value');
			}
		 });
	  });
	}
 
	// Вызов функции внутри forms()
	dataValue();
 }
 
 // Экспорт функции (для использования в других модулях)
 document.addEventListener('DOMContentLoaded', () => {
	forms();
 }); 