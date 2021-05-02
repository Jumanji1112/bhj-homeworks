 let startCSecond = document.getElementById('timer');

 function countingTimer () {
 	if (startCSecond.textContent > 0){
 		startCSecond.textContent -= 1;
 	}
 	else if (startCSecond.textContent <= 0) {
 		clearInterval(countingTimer);
 		alert('Вы победили в конкурсе!');
 		location.reload();
 	}
 }
 setInterval(countingTimer, 1000);