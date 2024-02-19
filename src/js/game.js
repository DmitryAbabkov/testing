export default class Card {
  constructor(input, btn) {
  this.input = input;
  this.btn = btn;
  this.visa = document.querySelector('.cards__logo-visa');
  this.mir = document.querySelector('.cards__logo-mir');
  this.mc = document.querySelector('.cards__logo-mc');
  this.jcb = document.querySelector('.cards__logo-jcb');
  this.ae = document.querySelector('.cards__logo-ae');
  this.discover = document.querySelector('.cards__logo-discover');
  this.diners = document.querySelector('.cards__logo-diners');
  this.cards = document.querySelectorAll('.cards__logo');
  }

  buttonListener() {
  this.btn.addEventListener('click', (e) => {
    e.preventDefault();
    this.checkValidateNumber(this.input.value);
  })
  }

  checkValidateNumber(value) {
    const arr = value.split(''),
      arrModifyOdd = [],
      arrModifyEven = [];

    for (let i = 0; i < arr.length; i+=2) {
      arrModifyOdd.push(arr[i] * 2);
    }
    for (let i = 1; i < arr.length; i+=2) {
      arrModifyEven.push(+arr[i]);
    }

    const sum = arrModifyOdd.map(number => {
      const digits = number.toString().split('');
      return digits.reduce((acc, digit) => acc + parseInt(digit), 0);
    });

    const resultArr = [...sum, ...arrModifyEven];
   let result = resultArr.reduce((currentSum, currentNumber) => {
      return currentSum + currentNumber;
    }, 0)

    if(result % 2 === 0 && arr.length >= 13) {
      this.input.classList.remove('error');
      this.input.classList.add('success');
    } else {
      this.input.classList.remove('success');
      this.input.classList.add('error');
    }

    this.checkPaymentSystem(arr[0], arr[1], arr[2], arr[3]);
  }

  checkNum(card) {
    this.cards.forEach(item => item.classList.add('cards__blur'));
    card.classList.remove('cards__blur')
  }

  checkPaymentSystem(...args) {
    if (args[0] === '4') this.checkNum(this.visa);
    if (args[0] === '2') this.checkNum(this.mir);
    if (args[0] === '5' && args[1] === '4') this.checkNum(this.mc);
    if (args[0] === '3' && args[1] === '5') this.checkNum(this.jcb);
    if (args[0] === '3' && args[1] === '4') this.checkNum(this.ae);
    if (args[0] === '6' && args[1] === '0' && args[2] === '1' && args[3] === '1' ) this.checkNum(this.discover);
    if (args[0] === '3' && args[1] === '0' && (args[2] === '4' || args[2] === '1' || args[2] === '5')) this.checkNum(this.diners);
  }
}
