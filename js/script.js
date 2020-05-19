window.addEventListener('load', start);

var vermelho, azul, verde = '';


function start() {
    vermelho = document.querySelector('#vermelho');
    vermelho.addEventListener('change', modificaValorVermelho);

    azul = document.querySelector('#azul');
    azul.addEventListener('change', modificaValorAzul);

    verde = document.querySelector('#verde');
    verde.addEventListener('change', modificaValorVerde);
}


function modificaValorVermelho() {
    var inputVermelho = document.querySelector('#vlrVermelho');
    inputVermelho.value = vermelho.value;
    atualizaCorRgb(vermelho.value, azul.value, verde.value);
};

function modificaValorAzul() {
    var inputAzul = document.querySelector('#vlrAzul');
    inputAzul.value = azul.value;
    atualizaCorRgb(vermelho.value, azul.value, verde.value);
};

function modificaValorVerde() {
    var inputVerde = document.querySelector('#vlrVerde');
    inputVerde.value = verde.value;
    atualizaCorRgb(vermelho.value, azul.value, verde.value);
}

function atualizaCorRgb(vermelho, azul, verde) {
    var campoRgb = document.querySelector('#CampoRgb');
    campoRgb.style.backgroundColor = `rgb(${vermelho}, ${verde}, ${azul})`;
};