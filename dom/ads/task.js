'use strict';
let rotatorCase =  document.getElementsByClassName('rotator__case');
let i = 0;

setInterval(function() {
	rotatorCase[i].classList.remove('rotator__case_active');
	i++;
	if (i > rotatorCase.length - 1) {
		i = 0;
	}
	rotatorCase[i].classList.add('rotator__case_active');
}, 1000);

