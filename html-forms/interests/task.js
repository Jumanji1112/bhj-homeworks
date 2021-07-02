'use strict';
let boxCheck = document.querySelectorAll('.interest__check');

boxCheck[0].addEventListener('click', () => {
  if (boxCheck[0].checked) {
    boxCheck[1].checked = true;
    boxCheck[2].checked = true;
  } 
  
  else if (boxCheck[0].checked == false) {
    boxCheck[1].checked = false;
    boxCheck[2].checked = false;
  }
});

boxCheck[3].addEventListener('click', () => {
  if (boxCheck[3].checked) {
    boxCheck[4].checked = true;
    boxCheck[5].checked = true;
  } 
  
  else if (boxCheck[3].checked == false) {
    boxCheck[4].checked = false;
    boxCheck[5].checked = false;
  }
});