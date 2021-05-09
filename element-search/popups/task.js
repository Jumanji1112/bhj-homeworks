'use strict'
let modalMain = document.getElementById('modal_main');
let show = document.getElementsByClassName('show-success')[0];
let modalSuccess = document.getElementById('modal_success');
let close = Array.from(document.getElementsByClassName('modal__close_times'));
modalMain.setAttribute('class', 'modal modal_active');

show.onclick = function (){
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
}

close[0].onclick = function() {
	modalMain.classList.remove('modal_active');
}

close[1].onclick = function() {
	modalSuccess.classList.remove('modal_active');
 }


