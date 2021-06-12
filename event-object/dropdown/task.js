'use strict'
let button = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let item = document.querySelector('.dropdown__item');
let link = document.querySelectorAll('.dropdown__link');

button.addEventListener('click', function(e) {
	list.classList.toggle('dropdown__list_active');
	});
for (let l of link) {
					l.addEventListener('click', function(e) {
						e.preventDefault();
						button.textContent = l.textContent;
						list.classList.remove('dropdown__list_active');
					});
				}

				