document.addEventListener("DOMContentLoaded", function () {
	var $body = document.querySelector('body');
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$body.classList.add('ios');
	} else {
		$body.classList.add('web');
	};
	$body.classList.remove('loaded');
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

function blockVH(el, dif) {
	var block = document.querySelector(el);
	var vh = window.innerHeight;

	if (dif) {
		block.style.minHeight = vh - dif + 'px';
	} else {
		block.style.minHeight = vh + 'px';

	}
}


function parallax(elem, wrapper, animSpeed, posTranslate, resetOnOut) {

	wrapp.addEventListener('mousemove', function (e) {
		var element = this;
		var wrapp_left = element.offsetLeft;
		var wrapp_top = element.offsetTop;
		var wrapp_width = element.offsetWidth;
		var wrapp_height = element.offsetHeight;
		var x_center;
		var y_center;
		var el = elem;

		



		x_center = (wrapp_width / 2) - (e.pageX - wrapp_left);
		y_center = (wrapp_height / 2) - (e.pageY - (wrapp_top + el.offsetHeight));

		console.log(el);



		if (el.getAttribute('data-speed')) {
			var speed = el.attr('data-speed')
		} else if (animSpeed) {
			var speed = animSpeed
		} else {
			var speed = 2
		}

		if (posTranslate) {
			var posCorrection = posTranslate;
		} else {
			var posCorrection = 1;
		}

		var xPos = Math.round(x_center / 20 * speed),
			yPos = Math.round(y_center / 20 * speed);

		el.setAttribute('style', 'transform: translate3d(' + xPos * posCorrection + 'px, ' + yPos * posCorrection + 'px, 0px)');
	});

	// if (resetOnOut == 'reset' || resetOnOut == 'true') {
	// 	wrapp.mouseout(function (e) {
	// 		el = jQuery(this).find(elem);
	// 		el.removeAttr('style');
	// 	})
	// }
		

};



document.addEventListener("DOMContentLoaded", function () {
	

	(function ballsParallax(){
		var $balls = document.querySelectorAll('.ball');
		var $wrapper = document.querySelector('.info');

		for (var i = 0; i < $balls.length; i++){
			var currentBall = $balls[i];
			// currentBall = currentBall.replace()
			// console.log(currentBall);
			parallax($balls[i], $wrapper, 1, 1, 'reset');
		}
	})()
})


var handler = function () {

	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 992) {

	} else {
		blockVH('.info');
	}

}

window.addEventListener('DOMContentLoaded', handler);
window.addEventListener('resize', handler);