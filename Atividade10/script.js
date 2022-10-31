/* New Object */

var Aluno = new Object();

Aluno.nome = "Carlinhos Arroba";
Aluno.ra = "123456789";

alert("Com new Object\nNome do aluno: " + Aluno.nome + "\nRA do aluno: " + Aluno.ra);


/* Dotnotation */

var propriedade = {};
propriedade["nomeAluno"] = "Carlota Anderline";
propriedade["raAluno"] = "987654321";

alert("Com dotnotation\nNome do aluno: " + propriedade.nomeAluno + "\nRA do aluno: " + propriedade.raAluno);


/* Literal */

var propriedadeAluno = {
    nomeAlunoLiteral: "Carminha Ponto e Vírgula",
    raAlunoLiteral: 987451236 
};
alert("De forma literal\nNome do aluno: " + propriedadeAluno.nomeAlunoLiteral + "\nRA do aluno: " + propriedadeAluno.raAlunoLiteral);