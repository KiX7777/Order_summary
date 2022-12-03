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

const pop = document.querySelectorAll('.pop');

// pop.forEach((option) => {
//   option.addEventListener(
//     'click',
//     function (e) {
//       console.log(e.target);
//       option.classList.add('active');
//     },
//     { capture: false }
//   );
// });

const selectedPlan = document.querySelector('#selectedPlan');
const selectedPrice = document.querySelector('#selectedPrice');

popup.addEventListener(
  'click',
  function (e) {
    pop.forEach((el) => el.classList.remove('active'));
  },

  true
);

pop.forEach((tab) => {
  tab.addEventListener('click', function (e) {
    tab.classList.toggle('active');
  });
  popup.classList.remove('active');
});
