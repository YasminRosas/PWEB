var valorUm = 0,valorDois = 0,valorTres = 0;

function maiorDeTres() {
    valorUm = prompt('Qual é o primeiro número? ');
    valorDois = prompt('Qual é o segundo número? ');
    valorTres = prompt('Qual é o terceiro número? ');
    
    if(!isNaN(valorUm,valorDois,valorTres)){
        alert(Math.max(valorUm,valorDois,valorTres));
    }
    else{
        alert("Insira um número");
    }
}


function ordemCrescente() {
    valorUm = prompt('Qual é o primeiro número? ');
    valorDois = prompt('Qual é o segundo número? ');
    valorTres = prompt('Qual é o terceiro número? ');

    crescente = [valorUm,valorDois,valorTres];
    if(!isNaN(valorUm,valorDois,valorTres)){
    alert(crescente.sort(function(a,b) {return a-b}));
    }
    else{
        alert("Insira um número");
    }
}