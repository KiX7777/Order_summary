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

const Plan = document.querySelectorAll('.plan');
const Price = document.querySelectorAll('.price');
const selectedPlan = document.querySelector('.selectedPlan');
const selectedPrice = document.querySelector('.selectedPrice');

pop.forEach((tab) => {
  tab.addEventListener('click', function (e) {
    pop.forEach((el) => {
      el.classList.remove('active');
    });
    // selectedPlan.textContent = activeOption.;
    tab.classList.toggle('active');
    const activeOption = document.querySelector('.active');
    const activePlan = activeOption.querySelector('.plan');
    const activePrice = activeOption.querySelector('.price');
    selectedPlan.textContent = activePlan.textContent;
    selectedPrice.textContent = activePrice.textContent;
  });
});

// Plan.forEach((plan) =>
//   plan.addEventListener('click', function (e) {
//     console.log(e.target);
//     plan.classList.add('selectedPlan');
//   })
// );

const payment = document.querySelector('.payment');

const pay = function () {
  if (confirm('Do you want to pay for your order?')) {
    alert('Payment and order successful!');
  } else {
    return;
  }
};
