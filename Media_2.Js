
    var valor = 0
    var quant = 0
    var num1 = parseInt(prompt("me diga o primeiro número"));
    var num2 = parseInt(prompt("me diga o segundo número"));

        while(num1 <= num2)
        {
            valor += num1;
            num1++;
            quant++;
         
        }

        var resul = (valor / quant);
        document.write(resul + "<BR>");
