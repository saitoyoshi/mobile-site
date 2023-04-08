'use strict';
const selectForm = document.getElementById('lauguage');
selectForm.addEventListener('change', switchLang);
function switchLang() {
  const selectForm = document.getElementById('lauguage');
  const value = selectForm.value;
  if (value === 'chinese') {
    // console.log('c');
    location.href = '/zh/index.html';
  } else if (value === 'korean') {
    location.href = '/ko/index.html';
    // console.log('korean');
  }
}
