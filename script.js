'use strict';

let sequencia = [];

const GerarSequencia = arr => {
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

  GerarSequencia(arr);
};

document.querySelector('.check').addEventListener('click', function () {
  sequencia = [];
  GerarSequencia(sequencia);

  document.querySelector('.number').textContent = sequencia
    .sort((a, b) => a - b)
    .join('-');
});
