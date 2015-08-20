function headerLines() {
	$('header .before').css({
		'width': $('header .menu.lc').offset().left+$('header .menu.lc').outerWidth()+'px'
	});
	$('header .after').css({
		'width': $('header').width()-$('header .menu.rc').offset().left+'px'
	});
}
function aboutUsH6() {
	var posLeft = $('.about-us h6').offset().left;
	$('.about-us h6 em').css({
		'left': -posLeft+'px',
		'width': posLeft-30+'px'
	});
}
function catalogLinkEm() {
	$('.catalog-m .main .link.num1, .catalog-m .main .link.num3').each(function() {
		var w = $(this).offset().left;
		$(this).children('em').css({
			'left': -w+'px',
			'width': w+'px'
		});
	});
	$('.catalog-m .main .link.num2, .catalog-m .main .link.num4').each(function() {
		var w = $('.catalog-m').width()-($(this).offset().left+$(this).outerWidth());
		$(this).children('em').css({
			'right': -w+'px',
			'width': w+'px'
		});
	});
}
function valvesDesign() {
	var t = $('.valves-design a');
	var w = $('.wrapper').width()-(t.offset().left+t.outerWidth());
	t.children('em').css({
		'right': -w+'px',
		'width': w+'px'
	});
}
function developmentUl() {
	$('.development-b .main ul.left li').each(function() {
		var w = $(this).offset().left;
		$(this).children('em').css({
			'left': -w+'px',
			'width': w+'px'
		});
	});
	$('.development-b .main ul.right li').each(function() {
		var w = $('.development-b').width()-($(this).offset().left+$(this).outerWidth());
		$(this).children('em').css({
			'right': -w+'px',
			'width': w+'px'
		});
	});
}
function introSlider() {
	var ml = $('.wrapper').width()-$('.slider-m > div').width();
	if ( ml > 0 ) {
		ml = 0;
	}
	$('.slider-m > div').draggable({
		axis: 'x',
		containment: [ eval(ml), 0, 0, 0],
		drag: function(event, ui) {
			var p = ui.position.left/($('.slider-m > div').width()-$('.slider-m').width());
			var t = $('.intro-i .navigator').width()-$('.intro-i .navigator > span').width();
			$('.intro-i .navigator > span').css({
				'left': -Math.round(t*p)+'px',
				'background-position': Math.round(t*p)+'px top'
			});
		},
		create: function(event, ui) {
			$('.slider-m > div').stop(true,true).animate({
				'left': '-80px'
			}, 1000, 'easeOutBack');
			$('.intro-i .navigator > span').width($('.slider-m').width()/$('.slider-m > div').width()*$('.intro-i .navigator').width());
			var p = -80/($('.slider-m > div').width()-$('.slider-m').width());
			var t = $('.intro-i .navigator').width()-$('.intro-i .navigator > span').width();
			$('.intro-i .navigator > span').css({
				'left': -Math.round(t*p)+'px',
				'background-position': Math.round(t*p)+'px top'
			});
		}
	});
}
function introLink() {
	$('.intro-i .link').width(($('.intro-i').width()-960)/2+150);
}
function newsIndex() {
	var s = $('.news-i').width()-960;
	$('.news-i .core > div > div > ul').css({
		'padding-left': s/2+'px',
		'padding-right': s/2+'px'
	});
	var w = $('.news-i .core > div > div ul').outerWidth();
	$('.news-i > .core > div > div').width(w);
	var ml = $('.wrapper').width()-w;
	if ( ml > 0 ) {
		ml = 0;
	}
	$('.news-i .core > div').draggable({
		axis: 'x',
		containment: [ eval(ml), 0, 0, 0],
		drag: function(event, ui) {
			var p = -ui.position.left/($('.news-i .core > div > div').outerWidth()-$('.news-i .core > div').width());
			$('.news-i .core .line').width(960*p);
		}
	});
}
function aboutInteractive() {
	var l = (1920-$('.wrapper').width())/2;
	$('.about-i > div').css({
		'left': -l+'px'
	});
}
$(document).ready(function() {
	if ( $('.about-us').length > 0 ) {
		$('.about-us h6').each(function() {
			$(this).prepend('<em></em>');
		});
		aboutUsH6();
	}
	if ( $('.about-us .slider').length > 0 ) {
		$('.about-us .slider ul').jcarousel({
			scroll: 1,
			animation: 500,
			wrap: 'circular'
		});
		$('.about-us .slider').prepend('<div class="big"></div>');
		$('.about-us .slider .jcarousel-item').bind('click', function() {
			$(this).parents('.slider').find('.big').empty().append('<img src="'+$(this).attr('data-big')+'" alt="">');
		}).filter(':first').click();
	}
	if ( $('select').length > 0 ) {
		$('select').selectbox();
	}
	$('.tab.photo .preview li[data-img]').bind('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.photo').find('img[data-big="'+$(this).attr('data-img')+'"]').show().siblings().hide();
	}).filter(':first').click();
	if ( $('.catalog-m .main .link').length > 0 ) {
		$('.catalog-m .main .link').append('<em></em>');
		catalogLinkEm();
		$('.catalog-m .main .link.num1, .catalog-m .main .link.num3').each(function() {
			$(this).css({
				'margin-left': '-480px'
			});
		});
		$('.catalog-m .main .link.num2, .catalog-m .main .link.num4').each(function() {
			$(this).css({
				'margin-right': '-480px'
			});
		});
		$('.catalog-m .main .link a span > em').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2+'px'
			});
		});
	}
	if ( $('.valves-design').length > 0 ) {
		$('.valves-design a').append('<em></em>');
		valvesDesign();
	}
	$('.production-b > ul > li .title').bind('click', function() {
		$(this).stop(true,true).slideUp(250);
		$(this).parent().siblings().find('.title').stop(true,true).slideDown(250);
		$(this).next().stop(true,true).delay(250).slideDown(500, function() {
			$(this).find('h2').css({
				'margin-top': -$(this).find('h2').outerHeight()/2+'px',
				'opacity': '1'
			});
		});
		$(this).parent().siblings().find('.gallery').stop(true,true).slideUp(250);
	});
	if ( $('.zoom').length > 0 ) {
		$('.zoom').fancybox({
			padding: 0
		});
	}
	if ( $('.development-b .main ul').length > 0 ) {
		$('.development-b .main ul li').each(function() {
			$(this).append('<em></em>');
		});
		developmentUl();
		$('.development-b .main ul.left li').css({
			'margin-left': '-480px'
		});
		$('.development-b .main ul.right li').css({
			'margin-left': '480px'
		});
	}
	if ( $('.legend-link').length > 0 ) {
		$('.legend-link em').bind('click', function() {
			if ( $(this).parent().hasClass('active') ) {
				$('.legend-modal').stop(true,true).fadeOut(200);
				$(this).parent().removeClass('active');
			}
			else {
				var l = $(this).offset().left+$(this).outerWidth();
				if ( l+$('.legend-modal').outerWidth()+20 < $('.wrapper').width() ) {
					$('.legend-modal').removeClass('left right').addClass('right').css({
						'left': l+'px',
						'top': $(this).offset().top+'px',
					}).stop(true,true).fadeIn(200);
				}
				else {
					$('.legend-modal').removeClass('left right').addClass('left').css({
						'left': $(this).offset().left-40-$('.legend-modal').outerWidth()+'px',
						'top': $(this).offset().top+'px',
					}).stop(true,true).fadeIn(200);
				}
				$(this).parent().addClass('active');
			}
		});
		$('html').click(function() {
			$('.legend-modal').stop(true,true).fadeOut(200);
			$('.legend-link').removeClass('active');
		});
		$('.legend-modal, .legend-link').click(function(event){
			event.stopPropagation();
		});
	}
	if ( $('.form-b span.date').length > 0 ) {
		$('.form-b span.date input').datepicker({
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			prevText: '',
			nextText: '',
			dayNamesMin: [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
			monthNames: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ]
		});
		$('.form-b span.date').append('<em></em>');
		$('.form-b span.date em').bind('click', function() {
			$(this).parent().find('input').focus();
		});
	}
	if ( $('.form-b .file, .form-b .download').length > 0 ) {
		$('.form-b .file .browse, .form-b .download .browse').bind('click', function() {
			$(this).parent().find('input[type="file"]').trigger('click');
		});
		$('.form-b .file input[type="text"], .form-b .download input[type="text"]').bind('click', function() {
			$(this).parent().find('input[type="file"]').trigger('click');
		});
		$('.form-b .file input[type="file"], .form-b .download input[type="file"]').bind('change', function() {
			$(this).parent().find('input[type="text"]').val($(this).val().replace(/^.*[\\\/]/, ''));
		});
	}
	$('.map-b .open').bind('click', function() {
		$('.map-b .requisites').css({
			'top': $('.map-b .contacts').offset().top+$('.map-b .contacts').outerHeight()+'px'
		}).stop(true,true).fadeIn(250);
	});
	$('.map-b .requisites h5 span').bind('click', function() {
		$('.map-b .requisites').stop(true,true).fadeOut(250);
	});
	if ( $('.modal').length > 0 ) {
		$('.modal').append('<span class="close"></span>');
	}
	if ( $('.added').length > 0 ) {
		$('.added').append('<span class="close"></span>');
	}
	$('[data-open]').bind('click', function(event) {
		var e = $(this).attr('data-open');
		var t = $(document).scrollTop()+($(window).height()-$('[data-target="'+e+'"]').outerHeight())/2;
		if ( t < 0 ) {
			t = 0;
		}
		$('[data-target="'+e+'"]').css({
			'top': t+'px'
		}).stop(true,true).fadeIn(250);
		$('.fade').stop(true,true).fadeIn(250);
		event.preventDefault();
	});
	$('[data-target] .close, .fade').bind('click', function() {
		$('[data-target], .fade').stop(true,true).fadeOut(250);
	});
	if ( $('.slider-m').length > 0 ) {
		$('.intro-i .navigator > span').draggable({
			axis: 'x',
			containment: 'parent',
			drag: function(event, ui) {
				var p = ui.position.left/($('.intro-i .navigator').width()-$('.intro-i .navigator > span').width());
				var t = $('.slider-m > div').width()-$('.slider-m').width();
				$('.slider-m > div').css({
					'left': -t*p+'px'
				});
				$('.intro-i .navigator > span').css({
					'background-position': -Math.round(ui.position.left)+'px top'
				});
			}
		});
		introSlider();
		$('area').hover(
			function() {
				var t = $(this).parent().parent();
				t.find('img').css({
					'opacity': '1'
				});
				if ( t.offset().left+t.width()+t.find('div').width()+28 < $('.slider-m').width() ) {
					t.find('div').removeClass().addClass('rp').css({
						'left': t.width()+'px',
						'right': 'auto'
					}).stop(true,true).delay(150).fadeIn(250);
				}
				else {
					t.find('div').removeClass().addClass('lp').css({
						'left': 'auto',
						'right': t.width()+'px'
					}).stop(true,true).delay(150).fadeIn(250);
				}
				t.find('div').css({
					'top': -$(this).offset().top+$('.slider-m').offset().top+20+'px'
				});
			}
		);
		$('.slider-m .dummy').hover(
			function() {
				var t = $(this).parent();
				t.find('img').css({
					'opacity': '0'
				});
				t.children('div').children('div').stop(true,true).delay(150).fadeOut(250);
			}
		);
		$('.slider-m > div > div').hover(
			function() {
				$(this).siblings().find('img').css({
					'opacity': '0'
				});
				$(this).siblings().find('div').stop(true,true).delay(150).fadeOut(250);
			}
		);
	}
	if ( $('.intro-i').length > 0 ) {
		introLink();
	}
	if ( $('.news-i').length > 0 ) {
		newsIndex();
	}
	$('.catalog-b .specification tbody tr, .table-d tbody tr').bind('click', function(event) {
		window.location = $(this).attr('data-href');
		event.preventDefault();
	});
	if ( $('.catalog-m .main').length > 0 ) {
		$('.catalog-m .main .link a').hover(function() {
			console.log('asdasd');
			$(this).parents('.main').find('img[data-img="'+$(this).parent().attr('data-hover')+'"]').stop(true,true).fadeIn(250).siblings('img').fadeOut(250);
		});
		$('.catalog-m .main img[data-img="1"').stop(true,true).fadeIn(250);
	}
	if ( $('.user-select').length > 0 ) {
		$('.user-select').each(function() {
			$(this).find('input').val($(this).find('select').val());
		});
		$('.open-select').bind('click', function(event) {
			$(this).parent().find('.select').trigger('click');
		});
		$('select').change(function() {
			if ( $(this).parents().hasClass('user-select') ) {
				$(this).parents('.user-select').find('input').val($(this).val());
			}
		});
	}
});
$(window).resize(function() {
	if ( $('header').length > 0 ) {
		headerLines();
	}
	if ( $('.about-us').length > 0 ) {
		aboutUsH6();
	}
	if ( $('.catalog-m .main .link').length > 0 ) {
		catalogLinkEm();
	}
	if ( $('.valves-design').length > 0 ) {
		valvesDesign();
	}
	if ( $('.development-b .main ul').length > 0 ) {
		developmentUl();
	}
	if ( $('.legend-link').length > 0 && $('.legend-link').hasClass('active') ) {
		$('.legend-modal').css({
			'left': $('.legend-link').offset().left+$('.legend-link').outerWidth()+'px',
			'top': $('.legend-link').offset().top+'px',
		});
	}
	if ( $('.slider-m').length > 0 ) {
		introSlider();
	}
	if ( $('.intro-i').length > 0 ) {
		introLink();
	}
	if ( $('.news-i').length > 0 ) {
		newsIndex();
	}
	if ( $('.about-i').length > 0 ) {
		aboutInteractive();
	}
});
$(window).load(function() {
	if ( $('header').length > 0 ) {
		$('header').append('<span class="before"></span>');
		$('header').append('<span class="after"></span>');
		headerLines();
	}
	if ( $('.production-b').length > 0 ) {
		$('.production-b > ul > li .title h5 span').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2+'px',
				'margin-left': -$(this).outerWidth()/2+'px',
				'opacity': '1'
			});
		});
	}
	if ( $('.development-b .main').length > 0 ) {
		$('.development-b .main ul li a span').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2+'px',
				'opacity': '1'
			});
		});
	}
	if ( $('.development-b .annotation').length > 0 ) {
		$('.development-b .annotation > div h5').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2+'px',
				'opacity': '1'
			});
		});
	}
	if ( $('.development-b .benefits').length > 0 ) {
		$('.development-b .benefits > div').masonry({
			itemSelector: 'div'
		});
		$('.development-b .benefits > div > div').css({
			'opacity': '1'
		});
		if ( $('.development-b .benefits h2').outerHeight() > 30 ) {
			$('.development-b .benefits h2').addClass('left');
		}
	}
	if ( $('.about-i').length > 0 ) {
		aboutInteractive();
	}
	if ( $('.catalog-m .main .link').length > 0 ) {
		$('.catalog-m .main .link.num1, .catalog-m .main .link.num3').each(function() {
			$(this).stop(true,true).animate({
				'margin-left': '0',
				'opacity': '1'
			}, 1000);
		});
		$('.catalog-m .main .link.num2, .catalog-m .main .link.num4').each(function() {
			$(this).stop(true,true).animate({
				'margin-right': '0',
				'opacity': '1'
			}, 1000);
		});
	}
	if ( $('.development-b .main').length > 0 ) {
		$('.development-b .main ul li').each(function() {
			$(this).stop(true,true).animate({
				'margin-left': '0',
				'opacity': '1'
			}, 1000);
		});
	}
});