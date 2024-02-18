import Card from '../src/js/game.js';
const input = document.querySelector('.input__validate')
const btn = document.querySelector('.btn__validate');

const card = new Card(input, btn);

card.buttonListener();
