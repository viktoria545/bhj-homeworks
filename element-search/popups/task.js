'use strict';
const modalClose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success');
const modalSuccess = document.getElementById('modal_success');
const doWell = showSuccess.item(0);
let arr = Array.from(modalClose);

modalMain.classList.add('modal_active');

for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = function() {
        this.closest('.modal_active').classList.remove('modal_active');
    }
}

doWell.onclick = function() { 
    modalSuccess.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
} 

  