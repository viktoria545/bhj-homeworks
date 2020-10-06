 let startTimer = document.getElementById('timer');
 const id = setInterval(() => startTimer.textContent--, 1000);
 const stop = () => {
 	clearInterval(id);
 	 alert('Вы победили в конкурсе!');
 }
 setTimeout(stop, 60000);