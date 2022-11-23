var selTxt = document.getElementById('textoInput')
var resul = document.getElementById('resultado')

function maiuscula() {
    resul.innerText = selTxt.value.toUpperCase()
}

function minuscula() {
    resul.innerText = selTxt.value.toLowerCase()
}