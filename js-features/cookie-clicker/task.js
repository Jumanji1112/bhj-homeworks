let amountClicker = document.getElementById("clicker__counter");
let imgCookie = document.getElementById('cookie');
imgCookie.onclick = function() {
	amountClicker.textContent = Number(amountClicker.textContent) + 1;
	if (imgCookie.width == 200){
		imgCookie.width = 300;
	}
	else if (imgCookie.width == 300){
		imgCookie.width = 200;
	}
}
