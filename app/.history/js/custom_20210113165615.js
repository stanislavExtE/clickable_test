document.addEventListener("DOMContentLoaded", function () {
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

function blockVH(el, dif) {
	var block = document.querySelector(el);
	var vh = window.innerHeight;

	if (dif) {
		block.style.minHeight = vh - dif
	} else {
		block.style.minHeight = vh
	}
}

document.addEventListener("DOMContentLoaded", function () {

})


var handler = function () {

	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {
		
	} else {
		var height_dif = document.querySelector('.header').innerHeight;
		blockVH('.info-section', height_dif);
	}

}

window.addEventListener('DOMContentLoaded', handler);
window.addEventListener('resize', handler);