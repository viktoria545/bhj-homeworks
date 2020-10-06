let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');

cookie.style.width = 200 + 'px';

cookie.onclick = () => {
    if (cookie.style.width == '200px') {
        cookie.style.width = 230 + 'px';
    } else {
        cookie.style.width = 200 + 'px';
    }

    clickerCounter.textContent++;
}