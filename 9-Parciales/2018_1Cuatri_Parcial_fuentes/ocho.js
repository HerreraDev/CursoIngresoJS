function mostrar()
{
    var letra;
    var numero = 0;
    var respuesta;
    var contPares = 0;
    var contImpares = 0;
    var contCeros = 0;
    var acumPos = 0;
    var contPos = 0;
    var acumNeg = 0;
    var contador = 0;
    var letraMax;
    var numMax = 0;
    var letraMin;
    var numMin = 0;

    do{
        letra = prompt("Ingrese una letra: ");
        numero = parseInt(prompt("Ingrese un numero: "));
        while(numero < (-100) || numero > 100)
        {
            numero = parseInt(prompt("Ingrese un numero: "));
        }
        if (contador == 0)
        {
            letraMax = letra;
            numMax = numero;
            letraMin = letra;
            numMin = numero;
        }
        else
        {
            if (numero > numMax)
            {
            letraMax = letra;
            numMax = numero;
            }
            if (numero < numMin)
            {
                letraMin = letra;
                numMin = numero;
            }
        }
        if (numero % 2 == 0){
            contPares++;
        }
        else
        {
            contImpares++;
        }
        if (numero == 0){
            contCeros++;
        }
        if (numero > 0)
        {
            acumPos = acumPos + numero;
            contPos++;
        }
        else
        {
            acumNeg = acumNeg + numero;
        }



    contador++;
    respuesta = prompt("Desea continuar? ");
    }while(respuesta == "si");

    document.write("<li>Cantidad de numeros pares: " + contPares + "<br></br>" +
    "<li>Cantidad de Impares: " + contImpares + "<br></br>" +
    "<li>Cantidad de ceros: " + contCeros + "<br></br>" + 
    "<li>Promedio de positivos: " + (acumPos/contPos) + "<br></br>" +
    "<li>Suma de los negativos: " + acumNeg + "<br></br>" +
    "<li>Letra y numero del maximo: " + letraMax + ": " + numMax + "<br></br>" +
    "<li>Letra y numero del minimo: " + letraMin + ": " + numMin); 

}
