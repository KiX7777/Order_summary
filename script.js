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
    // option.classList.remove('active');
    pop.forEach((opcija) => {
      // opcija.classList.remove('active');
      opcija.classList.remove('active');
    });
    console.log(e.target);
    if (e.target.classList.contains('pop')) {
      selectedPlan.textContent = 'mmm';
      e.target.classList.toggle('active');
    }
  },
  { capture: false }
);

// pop.forEach((tab) => {
//   tab.addEventListener('click', function (e) {
//     e.target.classList.toggle('active');
//     tab.classList.remove('active');
//   });
//   popup.classList.remove('active');
//   e.target.classList.toggle('active');
// });
