'use strict';

let sequencia = [];

const RNG = arr => {
  if (arr.length === 6) {
    return;
  }

  const numero = Math.trunc(Math.random() * 60) + 1;
  let possuiNumero = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numero) {
      possuiNumero = true;
      break;
    }
  }

  if (!possuiNumero) {
    arr.push(numero);
  }

  RNG(arr);
};

document.querySelector('.check').addEventListener('click', function () {
  sequencia = [];
  RNG(sequencia);

  document.querySelector('.number').textContent = sequencia
    .sort((a, b) => a - b)
    .join('-');
});
