'use strict';
const sliderArrow = document.querySelectorAll('.slider__arrow');
const sliderItem = document.querySelectorAll('.slider__item');

let arrowSlider = Array.from(sliderArrow);
let itemSlider = Array.from(sliderItem);
let count = 0;

for (let i = 0; i < arrowSlider.length; i++) {

    arrowSlider[i].onclick = function() {
        if (arrowSlider[i].matches('.slider__arrow_next')) {
            if (count >= itemSlider.length - 1) {
                count = -1;
            }
            itemSlider[count + 1].classList.add('slider__item_active');
            //

            if (count == -1) {
                itemSlider[itemSlider.length - 1].classList.remove('slider__item_active');

            } else {

                itemSlider[count + 1].previousElementSibling.classList.remove('slider__item_active');

            }
            count == ++count;

        } else if (arrowSlider[i].matches('.slider__arrow_prev')) {
            if (count == 0) {
                count = itemSlider.length;
                itemSlider[0].nextElementSibling.classList.remove('slider__item_active');
                itemSlider[count - 1].classList.add('slider__item_active');

            } else {
                itemSlider[count - 1].classList.add('slider__item_active');
                itemSlider[count - 1].nextElementSibling.classList.remove('slider__item_active');
            }
            count = --count;

        }

    }
}