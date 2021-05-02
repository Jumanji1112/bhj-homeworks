let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let holes = document.querySelector('.hole');

getHole = Index => document.getElementById(`hole${Index}`);

for (let i = 1; i < 10; i++) {
	this.getHole(i).onclick = check;
}

function check () {
	if (this.classList.contains('hole_has-mole')) {
		dead.textContent = Number(dead.textContent) + 1;
	} else {
		lost.textContent = Number(lost.textContent) + 1;
	}
	if (Number(lost.textContent) === 5) {
		alert("Вы проиграли");
		location.reload();
	} else if (Number(dead.textContent) === 10) {
		alert("Вы победили");
		location.reload();
	}
}