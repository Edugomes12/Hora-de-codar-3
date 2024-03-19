var nota1 = 0;
var nota2 = 0;
var media = 0;
var i = 1;

while(i == 1)
{
    nota1 =  parseFloat(prompt("me diga a primeira nota"));
    nota2 =  parseFloat(prompt("me diga a segunda nota"));
    media = (nota1 + nota2) / 2
    if (media >= 9.5){
        alert ("a media do aluno é de " + media + " parabens, você foi aprovado")
    }
    else{
        alert ("a media do aluno é de " + media + " você reprovou")
    }

    i =  parseInt(prompt("deseja fazer a média de mais um aluno 1= S  2= N"));
}