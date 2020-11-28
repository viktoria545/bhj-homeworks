'use strict';
let tab = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tab__content'));
let indexTab = 0;
for (let i = 0; i < tab.length; i++) {
    tab[i].onclick = function() {
        tab[indexTab].classList.remove('tab_active');
        tab[i].classList.add('tab_active');
        tabContent[indexTab].classList.remove('tab__content_active');
        tabContent[i].classList.add('tab__content_active');
        indexTab = i;
    }
}