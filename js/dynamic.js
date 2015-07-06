'article aside footer header nav section time'.replace(/\w+/g,function(n){document.createElement(n)});
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
function catalogValvesDesign() {
	var t = $('.catalog-m .main .valves-design a');
	var w = $('.catalog-m').width()-(t.offset().left+t.outerWidth());
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
		$('.catalog-m .main .link a span > em').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2+'px'
			});
		});
	}
	if ( $('.catalog-m .main .link').length > 0 ) {
		$('.catalog-m .main .link').append('<em></em>');
		catalogLinkEm();
	}
	if ( $('.catalog-m .main .valves-design').length > 0 ) {
		$('.catalog-m .main .valves-design a').append('<em></em>');
		catalogValvesDesign();
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
	}
	if ( $('.legend-link').length > 0 ) {
		$('.legend-link').bind('click', function() {
			if ( $(this).hasClass('active') ) {
				$('.legend-modal').stop(true,true).fadeOut(200);
				$(this).removeClass('active');
			}
			else {
				$('.legend-modal').css({
					'left': $(this).offset().left+$(this).outerWidth()+'px',
					'top': $(this).offset().top+'px',
				}).stop(true,true).fadeIn(200);
				$(this).addClass('active');
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
	if ( $('.catalog-m .main .valves-design').length > 0 ) {
		catalogValvesDesign();
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
	if ( $('.development-b .benefits') ) {
		$('.development-b .benefits > div').masonry({
			itemSelector: 'div'
		});
		$('.development-b .benefits > div > div').css({
			'opacity': '1'
		});
	}
});