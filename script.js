'use strict';

const change = document.querySelector('.change');
const popup = document.querySelector('.popup');

const openpopup = function () {
  popup.classList.toggle('hidden');
  popup.classList.toggle('scale-in-center');
  popup.classList.remove('scale-out-center');
};

const closep = function () {
  popup.classList.toggle('hidden');
  popup.classList.toggle('scale-in-center');
  popup.classList.add('scale-out-center');

  // popup.classList.toggle('scale-out-center');
};
