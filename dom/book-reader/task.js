'use strict'
const book = document.getElementById('book');
let fontSize = Array.from(document.querySelectorAll('.font-size'));

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].onclick = function() {
        if (fontSize[i].matches('.font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (fontSize[i].matches('.font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }

        book.querySelector('.font-size_active').classList.remove('font-size_active');
        fontSize[i].classList.add('font-size_active');

        return false;
    }
}