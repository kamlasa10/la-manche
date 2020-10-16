@@include('./libs.js');

document.addEventListener('DOMContentLoaded', () => {
	(function ($) {
		let activeSlide = 0
		let totalSlide
		let isFirst = true
		let isFinish = false
		const section = $('section')
		const nav = $('.navigation')
		const anchorLinks = $('.hash-link')
		let headerHeight = 0

		if(document.documentElement.clientWidth >= 800) {
			$('.features').on('mouseenter', (e) => {
				if(isFirst) {
					$('.features').addClass('features--animated')
					noscroll(false)
					$('html, body').stop().animate({ 
						scrollTop : $('.features__wrap').offset().top + headerHeight
					} , 450, 'swing', () => {
						isFirst = false
						$('.features__wrap').slick('setPosition')
					}); 
			
					document.onwheel = function(e) {
						if(!isAnimateFinish) {
							if(e.wheelDeltaY < 0 || e.deltaY > 0) {
								directionWhell = 'bottom'
								$('.features__wrap').slick('slickNext')
			
								if(activeSlide === totalSlide -1  && isFinish) {
									sliderFinish(document.documentElement.clientHeight)
								}
							} else if(e.wheelDeltaY > 0 || e.deltaY < 0) {
								directionWhell = 'top'
								$('.features__wrap').slick('slickPrev')
			
								if(!activeSlide && isFinish) {
									sliderFinish(-document.documentElement.clientHeight)
								}
							}
						}
					}
				}
			})

			let prevCoord = document.documentElement.clientWidth / 1.8
			let currentCord
			let isFirstForGallery = true
			$('.gallery').on('mouseenter', (e) => {
				let directionName = ''
					
				$('.gallery').css({cursor: 'none'})
				$('.gallery-info-slide').css({opacity: 1})

				if(e.originalEvent.clientX > prevCoord) {
					directionName = 'right'
				} else {
					directionName = 'left'
					$('.gallery-info-slide').addClass('gallery-info-slide--prev')
				}
				
		
				document.onmousemove = function(e) {
					$('.gallery-info-slide').css({transform: `translate(${e.offsetX - 70}px, ${e.offsetY - 70}px)`})
					if(prevCoord < e.clientX) {
						if(isFirstForGallery) {
							$('.gallery-info-slide').removeClass('gallery-info-slide--prev')
							directionName = 'right'
							isFirstForGallery = false
						}
					} else {
						if(prevCoord > e.clientX) {
							if(!isFirstForGallery) {
								$('.gallery-info-slide').addClass('gallery-info-slide--prev')
								directionName = 'left'
								isFirstForGallery = true
							}
						}
					}
				}
		
				document.onclick = function() {
					if(directionName === 'right') {
						$('.gallery__wrap').slick('slickNext')
					} else {
						$('.gallery__wrap').slick('slickPrev')
					}
				}
			})

			$('.gallery').on('mouseleave', (e) => {
				e.stopPropagation()
				$('.gallery-info-slide').css({opacity: 0})
				document.onmousemove = null
				document.onclick = null
				$('.gallery').css({cursor: 'default'})
			})
		}

		$(window).on('scroll', (e) => {
			let offset
			let sectionName
			const position = $(this).scrollTop();

			section.each(function () {
				if(document.documentElement.clientWidth < 480) {
					offset = 250
				} else {
					offset = 250
				}

				const topPos = $(this).offset().top - offset,
						bottomPos = topPos + $(this).outerHeight()

				if (position >= topPos && position <= bottomPos) {
					nav.find('.navigation__link').removeClass('navigation__link--active');
					sectionName = $(this).attr('id')
					nav.find('a[href="#' + sectionName + '"]').addClass('navigation__link--active')
				}
			});

			if(document.documentElement.clientWidth >= 850 && sectionName === 'features') {
				if(isFirst) {
					isFirst = false
					$('.features').addClass('features--animated')
					noscroll(false)
					$('html, body').stop().animate({ 
						scrollTop : $('.features__wrap').offset().top + headerHeight
					} , 500, 'swing', () => {
						isFirst = false
						$('.features__wrap').slick('setPosition')
					}); 
			
					document.onwheel = function(e) {
						if(!isAnimateFinish) {
							if(e.wheelDeltaY < 0 || e.deltaY > 0) {
								directionWhell = 'bottom'
								$('.features__wrap').slick('slickNext')
			
								if(activeSlide === totalSlide -1  && isFinish) {
									sliderFinish(document.documentElement.clientHeight)
								}
							} else if(e.wheelDeltaY > 0 || e.deltaY < 0) {
								directionWhell = 'top'
								$('.features__wrap').slick('slickPrev')
			
								if(!activeSlide && isFinish) {
									sliderFinish(-document.documentElement.clientHeight)
								}
							}
						}
					}
				}
			}

			/* SIDEBAR SCROLL COLOR CHANGE */
			let activeSection = $('.navigation__link--active').children('a').attr('href');
		})

		$('.burger__btn--open').click(() => {
			closeAllModal()
			$('.overlay').addClass('overlay--dark')
			$('.header__content').addClass('header__content--show')
		})

		$('.burger__btn--close').click(() => {
			closeAllModal()
			$('.overlay').removeClass('overlay--dark')
			$('.header__content').removeClass('header__content--show')
		})

		anchorLinks.each(function (_, item) {
			$(this).on('click', (e) => {
				$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1500);
				e.preventDefault()
			})
		})
	
		function closeAllModal() {
			$(`[data-modal]`).css('display', 'none')
		}
	
		function initSlider(sliderContainer, showSlide = 1, slidePrev, slideNext, isButton) {
			sliderContainer.slick({
				dots: false,
				arrows: false,
				slidesToShow: showSlide
			})
	
			if(isButton) {
				slidePrev.click(() => {
					sliderContainer.slick('slickPrev')
				})
	
				slideNext.click(() => {
					sliderContainer.slick('slickNext')
				})
			}
	
			return sliderContainer
		}

			
		$('.main__wrap').on('init afterChange', (_, slick, CurrentSlide = 0) => {
			if(document.documentElement.clientWidth <= 800) {
			const content = $(slick.$slides).find('.main__right-wrap')

			$(slick.$slides).each(function(i) {
				$(this).append(content[i])
			})
			}

			const slide = $(slick.$slides[CurrentSlide + 1]) || $(slick.$slides[CurrentSlide])
			const src = slide.find('img').attr('src')

			$('.main__right-slider-content-item img').attr('src', src)
			$('.main__right-slider-current').text(`0${CurrentSlide + 1}`)
		})

		$('.main__wrap').slick({
			dots: false,
			arrows: false,
			slidesToShow: 1,
			infinite: false
		})

		$('.main__right-slider-left-btn--left').click(() => {
			$('.main__wrap').slick('slickPrev')
		})

		$('.main__right-slider-left-btn--right').click(() => {
			$('.main__wrap').slick('slickNext')
		})
	
		let isFirstInit = true
		let isAnimateFinish = false
	
		$('.features__wrap').on('init afterChange', (_, slick, currentSlide = 0) => {
			activeSlide = slick.currentSlide
			totalSlide = slick.$slides.length - 1
	
			if(!slick.activeIndex) {
				isFinish = true
			} else if(slick.currentSlide === slick.$slides.length - 1) {
				isFinish = true
			}
	
			if(isFirstInit) {
				$(slick.$slides[currentSlide]).find('.features__info-total').text(0 + '' + slick.$slides.length)
				$(slick.$slides[currentSlide]).find('.features__info-current').text(`0${currentSlide + 1}`)
				$(slick.$slides[currentSlide + 1]).find('.features__info-total').text(0 + '' + slick.$slides.length)
				$(slick.$slides[currentSlide + 1]).find('.features__info-current').text(`0${currentSlide + 2}`)
	
				isFirstInit = false
				isAnimateFinish = false
				return
			} else if(currentSlide === slick.$slides.length - 2) {
				$(slick.$slides[currentSlide]).find('.features__info-total').text(0 + '' + slick.$slides.length)
				$(slick.$slides[currentSlide]).find('.features__info-current').text(`0${currentSlide + 1}`)
				$(slick.$slides[currentSlide + 1]).find('.features__info-total').text(0 + '' + slick.$slides.length)
				$(slick.$slides[currentSlide + 1]).find('.features__info-current').text(`0${currentSlide + 2}`)
				isAnimateFinish = false
			}
	
			$(slick.$slides[currentSlide]).find('.features__info-total ').text(0 + '' + slick.$slides.length)
			$(slick.$slides[currentSlide]).find('.features__info-current ').text(`0${currentSlide + 1}`)
			isAnimateFinish = false
		})
	
		$('.features__wrap').slick({
			arrows: false,
			dots: false,
			slidesToShow: 2,
			speed: 700,
			infinite: false,
			responsive: [
				{
					breakpoint: 770,
					settings: {
					  slidesToShow: 1,
					  verticalSwiping: true
					}
				  },
			]
		})

		$('.features__wrap').on('beforeChange', () => {
			isAnimateFinish = true
		})
	
		function sliderFinish(offset) {
			$('.features').removeClass('features--animated')
			isFinish = false
			document.onwheel = null
			document.onscroll = null
			$(document).off('touchmove', null)
	
			$('html, body').stop().animate({ 
				scrollTop : $('.features__wrap').offset().top + offset
			} , 350);

			setTimeout(() => {
				isFirst = true
			}, 500)
			noscroll(true)
		}

		let lastY

		$('.features__wrap').on('touchstart', (e) => {
			lastY = e.originalEvent.touches[0].clientX;
			noscroll(false)
			if(isFirst) {
				$('html, body').stop().animate({
					scrollTop : $('.features').offset().top + 15
				} , 450, 'swing', () => {
				isFirst = false
				});

				$(document).on('touchmove', function (e) {
					let te = e.originalEvent.changedTouches[0].clientX;
					if (lastY > te) {
						$('.features__wrap').slick('slickNext')

						if(activeSlide === totalSlide  && isFinish) {
							sliderFinish(document.documentElement.clientHeight)
						}

					} else {
						$('.features__wrap').slick('slickPrev')

						if(!activeSlide && isFinish) {
							sliderFinish(-document.documentElement.clientHeight)
						}
					}
			   });
			}
		})

		function noscroll(isScroll){
			if(isScroll){
			  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
			  document.body.style.paddingRight = "0";
			}else{
			  document.getElementsByTagName("body")[0].setAttribute('style', '-webkit-overflow-y: hidden !important; overflow-y: hidden !important');
			  document.body.style.paddingRight = "17px";
			}
		  }/*noscroll()*/
	
		$('.gallery').on('init afterChange', (_, slick, currentSlide = 0) => {
			$(slick.$slides[currentSlide]).find('.features__info-total').text(0 + '' + slick.$slides.length)
			$(slick.$slides[currentSlide]).find('.features__info-current').text(`0${currentSlide + 1}`)
		})
	
		$('.gallery__wrap').slick({
			arrows: false,
			dots: false,
		})

		$('.gallery__right-slider-left-btn--left').click(() => {
			$('.gallery__wrap').slick('slickPrev')
		})

		$('.gallery__right-slider-left-btn--right').click(() => {
			$('.gallery__wrap').slick('slickNext')
		})
	
		$('.view__wrap').slick({
			dots: false,
			arrows: false,
			variableWidth: true,
			infinite: false
		})
	
		$('.view__control--left').click(() => {
			$('.view__wrap').slick('slickPrev')
		})
	
		$('.view__control--right').click(() => {
			$('.view__wrap').slick('slickNext')
		})
	
		$('.building__wrap').slick({
			arrows: false,
			dots: false,
			slidesToShow: 1,
			variableWidth: true,
			infinite: false
		})

		$('.building__wrap').slick('setPosition')
	
		$('.building__control--left').click(() => {
			$('.building__wrap').slick('slickPrev')
		})
	
		$('.building__control--right').click(() => {
			$('.building__wrap').slick('slickNext')
		})
	
		$('.view__item').on('click', (e) => {
			// if(e.target.tagName.toLowerCase() === 'a') {
			// 	return
			// }
			e.preventDefault()
			closeAllModal()
			const src = e.currentTarget.dataset.viewFull

			$('.preview img').attr('src', src)
			$('.overlay').addClass('overlay--show')
			$('.preview').css('display', 'flex')
		})
	
		function createSlider(slider, sliderPrev, sliderNext) {
			if(slider.hasClass('slick-initialized')) {
				slider.slick('slickGoTo', 0);
				return
			}
	
			slider.slick({
				arrows: false,
				dots: false,
				variableWidth: true,
				infinite: false,
				lazyLoad: 'ondemand',
			})
	
			sliderPrev.click(() => {
				slider.slick('slickPrev')
			})
	
			sliderNext.click(() => {
				slider.slick('slickNext')
			})
		}
	
		$('.building').on('click', (e) => {
			if(e.target.closest('[data-month]')) {
				const parent = e.target.closest('[data-month]')
				let month = parent.dataset.month
				const sliderContainer = $(`[data-record="${month}"]`)
				const slider = $(`[data-record="${month}"]`).find('.record__wrap')
				const prev = sliderContainer.find('.record__control--left')
				const next = sliderContainer.find('.record__control--right')
	
				closeAllModal()
				$('.overlay').addClass('overlay--dark')
				createSlider(slider, prev, next)
				sliderContainer.css('display', 'block')
			}
		})

		$(document).on('touchstart', e => {
			if(e.target === $('.overlay')[0] || e.target === $('.preview')[0]) {
				closeAllModal()
				$('.overlay').removeClass('overlay--show')
				$('.overlay').removeClass('overlay--dark')
				$('.header__content').removeClass('header__content--show')
			}
		})

		$(document).on('click', (e) => {
			if(e.target === $('.overlay')[0] || e.target === $('.preview')[0]) {
				closeAllModal()
				$('.overlay').removeClass('overlay--show')
				$('.overlay').removeClass('overlay--dark')
				$('.header__content').removeClass('header__content--show')
			}
		})
	
		$(`[data-modal-open]`).on('click', function(e) {
			closeAllModal()
			$(`[data-modal="popup"]`).css({display: 'flex'})
			$('.overlay').addClass('overlay--show')
		})
	
		$('.popup__close').on('click', function() {
			$('.overlay').removeClass('overlay--show')
			$('.overlay').removeClass('overlay--dark')
			closeAllModal()
		})
	
		let map
	
		map = new google.maps.Map(document.querySelector('.contacts__left'), {
			center: {lat: 50.4726294, lng: 30.5142653},
			zoom: 15,
			styles: [
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#a6b6bc"
						},
						{
							"visibility": "on"
						}
					]
				}
			]
		})

		let markers = [
			{
				position: {lat: 50.472669, lng: 30.516454},
				icon: 'assets/images/cli/object.svg' 
			},
			{
				position: {lat: 50.473781, lng: 30.512321},
				icon: 'assets/images/cli/hospital.svg' 
			},
			{
				position: {lat: 50.472021, lng: 30.513921},
				icon: 'assets/images/cli/kinder-gat.svg' 
			},
			{
				position: {lat: 50.472894, lng: 30.513015},
				icon: 'assets/images/cli/school.svg' 
			},
			{
				position: {lat: 50.472159, lng: 30.502965},
				icon: 'assets/images/cli/bank.svg' 
			},
			{
				position: {lat: 50.472355, lng: 30.511470},
				icon: 'assets/images/cli/bank.svg' 
			},
			{
				position: {lat: 50.471460, lng: 30.512037},
				icon: 'assets/images/cli/hospital.svg' 
			},
			{
				position: {lat: 50.466557, lng: 30.513491},
				icon: 'assets/images/cli/metro.svg' 
			},
			{
				position: {lat: 50.466369, lng: 30.517440},
				icon: 'assets/images/cli/museum.svg' 
			},
			{
				position: {lat: 50.465546, lng: 30.522570},
				icon: 'assets/images/cli/university.svg' 
			},
			{
				position: {lat: 50.467424, lng: 30.507700},
				icon: 'assets/images/cli/university.svg' 
			},
			{
				position: {lat:  50.467384, lng: 30.508963},
				icon: 'assets/images/cli/university.svg' 
			},
			{
				position: {lat:  50.468431, lng: 30.510183},
				icon: 'assets/images/cli/cinema.svg' 
			},
			{
				position: {lat:  50.472831, lng: 30.511344},
				icon: 'assets/images/cli/sport.svg' 
			},
			{
				position: {lat:  50.474018, lng: 30.503866},
				icon: 'assets/images/cli/metro.svg' 
			},
			{
				position: {lat:  50.471777, lng: 30.507165},
				icon: 'assets/images/cli/shop.svg' 
			},
		]

		markers.forEach(marker => {
			let point =  new google.maps.Marker({
				position: marker.position,
				icon: marker.icon,
				map: map
			  });
		})

		function mask(inputName, mask, evt) {
			try {
				var text = document.querySelector(inputName);
				var value = text.value;
	
				// If user pressed DEL or BACK SPACE, clean the valu
				try {
					var e = evt.which ? evt.which : event.keyCode;
					if (e == 46 || e == 8) {
						text.value = "";
						return;
					}
				} catch (e1) {}
	
				var literalPattern = /[0\*]/;
				var numberPattern = /[0-9]/;
				var newValue = "";
	
				for (var vId = 0, mId = 0; mId < mask.length;) {
					if (mId >= value.length) break;
	
					// Number expected but got a different value, store only the valid portion
					if (mask[mId] == "0" && value[vId].match(numberPattern) == null) {
						break;
					}
	
					// Found a literal
					while (mask[mId].match(literalPattern) == null) {
						if (value[vId] == mask[mId]) break;
	
						newValue += mask[mId++];
					}
	
					newValue += value[vId++];
					mId++;
				}
				text.value = newValue;
			} catch (e) {}
		}

		const phone = document.querySelector('[data-phone]')
		const phone2 = document.querySelector('[data-phone2]')

		phone.addEventListener("keyup", (e) => {
			mask('[data-phone]', "+000(00)000-00-00", e);
		});

		phone2.addEventListener("keyup", (e) => {
			mask('[data-phone2]', "+000(00)000-00-00", e);
		});

		function removeFormTextWarn(input) {
			input.parent().find(".field__error-msg").remove();
		  }
		
		  function removeAllFormTextWarn(inputs) {
			inputs.each(function () {
			  $(this).parent().find(".field__error-msg").remove();
			});
		  }
		
		  function addIndicateWarnForNode(node, classes, isAdded = true) {
			if (isAdded) {
			  $(node).closest(".field").addClass(classes);
			  return;
			}
		
			$(node).closest(".field").removeClass(classes);
		  }
		
		  function removeNodeByDelay(node, delay) {
			setTimeout(() => {
			  node.remove();
			}, delay);
		  }
		
		  function validateForm(inputs) {
			let isValid = true;
			inputs.each(function () {
			  $(this).on("input", (e) => {
				if ($(e.target).val().replace(/\s+/g, "") && $(e.target).attr('name') === 'name'  && e.currentTarget.value.length <= 3) {
				  removeFormTextWarn($(this));
					$(this)
						.parent()
						.append(
							'<div class="field__error-msg">некоректне значення</div>'
						);

				  addIndicateWarnForNode($(this), "field--error", false);
				  isValid = false;
				  return;
				} else if($(e.target).attr('name') === 'phone' && e.currentTarget.value.length < 13) {
					removeFormTextWarn($(this));
					$(this)
						.parent()
						.append('<div class="field__error-msg">введить коректний телефон</div>');
					addIndicateWarnForNode($(this), "field--error", true);
					isValid = false;
					return
				} else {
					removeFormTextWarn($(this));
					isValid = true;
					return
				}
			  });

				if($(this).attr('name') === 'phone' && this.value.length < 12) {
					removeFormTextWarn($(this));
					$(this)
						.parent()
						.append('<div class="field__error-msg">введить коректний телефон</div>');
					addIndicateWarnForNode($(this), "field--error", true);
					isValid = false;
					return
				}
		
			  if (!$(this).val().replace(/\s+/g, "")) {
				removeFormTextWarn($(this));
				$(this)
				  .parent()
				  .append('<div class="field__error-msg">некоректне значення</div>');
				addIndicateWarnForNode($(this), "field--error", true);
				isValid = false;
			  }
			});
		
			return isValid;
		  }
		
		  $(document).on("click", ".submit__form", (e) => {
				e.preventDefault();
			let parent = $(e.target).parent()
			let $form = parent.tagName === 'FORM' ? parent : parent.parent()
			const inputs = $form.find($("[name]"));
			const isValid = validateForm(inputs);
		
			if (isValid) {
			  sendAjaxForm("static/mail.php", $form);
			}
		  });
		
		  function sendAjaxForm(url, selectorForm) {
			const status = {
			  sucess: "Спасибо за заявку мы с вами свяжемся в ближайшее время",
			  error: "Ошибка на сервере повторите попытку позже",
			};
		
			$.ajax({
			  url: url, //url страницы (action_ajax_form.php)
			  type: "POST", //метод отправки
			  dataType: "html", //формат данных
			  data: $(selectorForm).serialize(), // Сеарилизуем объект
			  success: function (response) {
				//Данные отправлены успешно
				$(selectorForm).append(
				  `<div class="form__status">${status.sucess}</div>`
				);
				const msg = $(selectorForm).find(".form__status");
				removeNodeByDelay(msg, 5000);
					if(selectorForm[0].tagName.toLowerCase() === 'form') {
						selectorForm[0].reset();
					} else {
						selectorForm.find('form')[0].reset();
					}
			  },
			  error: function (response) {
				// Данные не отправлены
				$(selectorForm).append(
				  `<div class="form__status">${status.error}</div>`
				);
				const msg = $(selectorForm).find(".form__status");
		
				removeNodeByDelay(msg, 5000);

				if(selectorForm[0].tagName.toLowerCase() === 'form') {
					selectorForm[0].reset();
				} else {
					selectorForm.find('form')[0].reset();
				}
			  },
			});
		  }

		  if(document.documentElement.clientWidth <= 770) {
			  $('.header').append($('.main__right-contacts')[0])
			  $('.main__left').append($('.main__right-slider'))
			  $('.overlay').append($('.header__content'))
		  }

		  if(document.documentElement.clientWidth <= 480) {
			  headerHeight = $('.header').outerHeight()

			  $('.features__item').css({paddingTop: headerHeight})
		  }
	
	})(jQuery);
})