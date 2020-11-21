 'use strict'
const menuSub = document.querySelectorAll('.menu_sub');
const menuLink = document.querySelectorAll('.menu__link');


let linkMenu = Array.from(menuLink);
let SubMenu = Array.from(menuSub);

for (let i = 0; i < linkMenu.length; i++) {
    menuLink[i].onclick = function() {

        if (linkMenu[i].nextElementSibling.matches('.menu_sub')) {
            (linkMenu[i].nextElementSibling.classList.toggle('menu_active'));
            return false;
        }


    }
}
