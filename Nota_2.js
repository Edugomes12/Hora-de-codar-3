var nota1 = 11
var nota2 = 11
var nota3 = 11
var nota4 = 11
var nota5 = 11
var nota6 = 11
var media = 0

while(nota1 > 10)
{
    nota1 =  parseFloat(prompt("me diga a primeira nota"));
}

while(nota2 > 10)
{
    nota2 =  parseFloat(prompt("me diga a segunda nota"));
}

while(nota3 > 10)
{
    nota3 =  parseFloat(prompt("me diga a terceira nota"));
}

while(nota4 > 10)
{
    nota4 =  parseFloat(prompt("me diga a quarta nota"));
}

while(nota5 > 10)
{
    nota5 =  parseFloat(prompt("me diga a quinta nota"));
}
while(nota6 > 10)
{
    nota6 =  parseFloat(prompt("me diga a sexta nota"));
}
media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6

alert ("a media do aluno é de " + media);