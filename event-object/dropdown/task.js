'use strict';
const dropdown = document.querySelectorAll('.dropdown');
const dropdownItem = document.querySelectorAll('.dropdown__item');
let itemDropdown = Array.from(dropdownItem);
let dropdowns = Array.from(dropdown);

itemDropdown.forEach(function(item) {
	item.onclick = function() {
		this.closest('.dropdown').childNodes[1].textContent = item.textContent;
	}
}
);
dropdowns.forEach(function(item){
	item.addEventListener('click', function(e) {
		e.preventDefault();
		if( item.childNodes[3].classList.contains('dropdown__list_active')) {
			item.childNodes[3].classList.remove('dropdown__list_active');
		} else {
			item.childNodes[3].classList.add('dropdown__list_active');
		}
	});
});





