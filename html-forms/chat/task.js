'use strict';
let chat = document.querySelector('.chat-widget');
let chatSide = document.querySelector('.chat-widget__side-text');
let input = document.getElementById('chat-widget__input');
let unsverMessage = ['Привет, я автоответчик. Нас нет на месте','Ответим, как только вернемся','Спасибо за понимание!']

chatSide.addEventListener('click', function(e) {
	 chat.classList.toggle('chat-widget_active');
});
chat.addEventListener('keydown', function(event) {
	let message = input.value;
	if (event.key === "Enter" && input.checkValidity()) {
		let time = new Date().getHours() + ":" + new Date().getMinutes();
		let messages = document.querySelector( '.chat-widget__messages' );
		messages.innerHTML += `
			<div class="message message_client">
				<div class="message__time"> ${time} </div>
				<div class="message__text">
				  ${message}
				</div>
			</div>
			<div class="message">
				<div class="message__time"> ${time} </div>
				<div class="message__text">` + unsverMessage[Math.floor(Math.random() * unsverMessage.length)] +`
				  
				</div>
			</div>
		`;
		input.value = "";
	}
	});