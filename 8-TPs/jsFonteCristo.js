/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
     var numero = document.getElementById("numero").value;
}
function NumerosPares()
{
    var numero = document.getElementById("numero").value;
    var contadorPares = 0;
    for(var i = numero; i >= 0; i--)
    {   
        if(i % 2 == 0)
        {
            contadorPares ++;
        }
    }
    alert("Cantidad de pares: " + contadorPares);
}
function NumerosImpares()
{
    var numero = document.getElementById("numero").value;
    var contadorImpares = 0;
    for(var i = numero; i >= 0; i--)
    {   
        if(i % 2 != 0)
        {
            contadorImpares++;
        }
    }
    alert("Cantidad de pares: " + contadorImpares);
}
function NumerosDivisibles()
{
    var numero = document.getElementById("numero").value;
    var contadorDiv = 0;
    for(var i = 100; i>=0; i--)
    {
        if(i % numero == 0)
        {
            contadorDiv++;
        }
    }
    alert("Cantidad de divisibles por dicho numero: " + contadorDiv);
}
