let idadetotal = 0, menor = 180, media, pessimo = 0,
    maior = 0,
    opiniaoboaeotima = 0, porcentagem = 0, mulher = 0, homem = 0, cont = 46;
for (var x = 1; x < cont; x++) {
    let idade = parseInt(prompt(`Insira a idade da ${x}º pessoa: `))
    let sexo = prompt(`O sexo da ${x}º pessoa é F ou M?: `).toLocaleUpperCase()
    let opiniao = parseInt(prompt(`Qual a nota da ${x}º pessoa sendo ótimo=4,bom=3,regular=2,péssimo=1: `))

    idadetotal += idade

    function menoridade(idade) {
        if (idade < menor) {
            menor = idade
        } else {
            menor = menor
        }
    }

    function maioridade(idade) {
        if (idade > maior) {
            maior = idade
        } else {
            maior = maior
        }
    }


    function totalmedia(idadetotal) {
        media = parseInt(idadetotal / cont)
    }

    function totalopiniao(opiniao) {
        if (opiniao == 1) {
            pessimo += 1
        } else {
            pessimo = pessimo
        }

        return pessimo
    }

    function boaeotima(opiniao) {
        if (opiniao == 4 || opiniao == 3) {
            opiniaoboaeotima += 1
        } else {
            opiniaoboaeotima = opiniaoboaeotima
        }

        porcentagem = ((opiniaoboaeotima * 100) / cont)

    }

    function totalresposta(sexo) {
        if (sexo == "F") {
            mulher += 1
        } else {
            homem += 1
        }

        return mulher, homem
    }

    function mostrar() {
        menoridade(idade)
        maioridade(idade)
        totalmedia(idadetotal)
        totalopiniao(opiniao)
        boaeotima(opiniao)
        totalresposta(sexo)
    }

    mostrar()

}


document.write(`
Média da idade das pessoas que responderam ao questionário: ${media} <br>
Idade da pessoa mais velha: ${maior} <br>
Idade da pessoa mais nova:  ${menor} <br>
Quantidade de pessoas que responderam péssimo:  ${pessimo} <br>
Porcentagem de pessoas que responderam ótimo e bom:  ${porcentagem} <br>
Número de mulheres e homens que responderam ao questionário:  ${homem} Homens e  ${mulher} Mulheres
`)