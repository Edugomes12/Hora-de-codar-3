var intervalo = 0;
var fora = 0

var num1 = parseFloat(prompt("Digite o primeiro número"));
if (num1 >= 24 && num1 <= 42) {
    intervalo++;
}
else{
    fora++;
}

var num2 = parseFloat(prompt("Digite o segundo número"));
if (num2 >= 24 && num2 <= 42) {
    intervalo++;
}
else{
    fora++;
}

var num3 = parseFloat(prompt("Digite o terceiro número"));
if (num3 >= 24 && num3 <= 42) {
    intervalo++;
}
else{
    fora++;
}

var num4 = parseFloat(prompt("Digite o quarto número"));
if (num4 >= 24 && num4 <= 42) {
    intervalo++;
}
else{
    fora++;
}

var num5 = parseFloat(prompt("Digite o quinto número"));
if (num5 >= 24 && num5 <= 42) {
    intervalo++;
}
else{
    fora++;
}

var num6 = parseFloat(prompt("Digite o sexto número"));
if (num6 >= 24 && num6 <= 42) {
    intervalo++;
}
else{
    fora++;
}

var num7 = parseFloat(prompt("Digite o sétimo número"));
if (num7 >= 24 && num7 <= 42) {
    intervalo++;
}
else{
    fora++;
}

var num8 = parseFloat(prompt("Digite o oitavo número"));
if (num8 >= 24 && num8 <= 42) {
    intervalo++;
}
else{
    fora++;
}

var num9 = parseFloat(prompt("Digite o nono número"));
if (num9 >= 24 && num9 <= 42) {
    intervalo++;
}
else{
    fora++;
}

var num10 = parseFloat(prompt("Digite o décimo número"));
if (num10 >= 24 && num10 <= 42) {
    intervalo++;
}
else{
    fora++;
}

document.write("Há " + intervalo + " números entre 24 e 42." + "<BR>");
document.write("os valores ditos foram " + num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5 + " " + num6 + " " + num7 + " " + num8 + " " + num9 + " " + num10 + "<BR>" );
document.write("Há " + fora + " fora dos números entre 24 e 42." + "<BR>");