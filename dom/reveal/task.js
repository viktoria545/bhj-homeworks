'use strict'
const reveal = Array.from(document.getElementsByClassName('reveal'));

window.addEventListener('scroll', function() {

    console.log(pageYOffset);
    reveal.forEach(item => {
        if (pageYOffset > item.getBoundingClientRect() || pageYOffset > item.getBoundingClientRect().bottom) {
            item.classList.add('reveal_active');
        }
        })
})