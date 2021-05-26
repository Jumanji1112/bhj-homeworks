'use strict'
let menuLinks = Array.from(document.getElementsByClassName('menu__link'));
for (let link of menuLinks) {
    link.onclick = function() {
        let parent = link.parentElement;

        if (parent.querySelector('.menu_sub').classList.contains('menu_sub')){
            parent.querySelector('.menu_sub').classList.toggle('menu_active')
				}
        if (link.closest('.menu_main')) {
            return false;
        }
    }
}