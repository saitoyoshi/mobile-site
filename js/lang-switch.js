'use strict';
const selectForm = document.getElementById('lauguage');
selectForm.addEventListener('change', switchLang);
function switchLang() {
  const selectForm = document.getElementById('lauguage');
  const value = selectForm.value;
  if (value === 'chinese') {
    location.href = '/mobile-site/zh/index.html';
    // location.href = '/zh/index.html';
  } else if (value === 'korean') {
    location.href = '/mobile-site/ko/index.html';
    // location.href = '/ko/index.html';
  } else if (value === 'english') {
    console.log(location.pathname);
    location.href = '/mobile-site/en/index.html';
    // location.href = '/en/index.html';
  }
}
