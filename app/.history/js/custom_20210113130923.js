$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});
/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	}
};


/* viewport width */
$(function () {
	/* placeholder*/
	// $('input, textarea').each(function () {
	// 	var placeholder = $(this).attr('placeholder');
	// 	$(this).focus(function () {
	// 		$(this).attr('placeholder', '');
	// 	});
	// 	$(this).focusout(function () {
	// 		$(this).attr('placeholder', placeholder);
	// 	});
	// });

	var y_offsetWhenScrollDisabled = 0,
		offset = 0;

	$(window).scroll(function () {
		y_offsetWhenScrollDisabled = $(window).scrollTop();
	});

	function lockScroll() {
		offset = y_offsetWhenScrollDisabled;
		$('html').addClass('scrollDisabled');
		$('html').css('margin-top', -y_offsetWhenScrollDisabled);
	}

	function unlockScroll() {
		$('html').removeClass('scrollDisabled');
		$('html').css('margin-top', '');
		$('html, body').animate({
			scrollTop: offset
		}, 0);
	}


});


function blockVH(el, dif) {
	var block = $(el),
		vh = $(window).height();

	if (dif) {
		block.css({
			'min-height': vh - dif,
		});
	} else {
		block.css({
			'min-height': vh,
		});
	}
}

var handler = function () {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {
		
	} else {
		blockVH('.info-section', $('.header').height());
	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);