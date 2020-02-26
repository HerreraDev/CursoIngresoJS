/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//tomar la temp
    var fahrenheit = document.getElementById("Temperatura").value;
    
    //pasar a numero
    fahrenheit = parseFloat(fahrenheit);

    //pasar a centigrados
    var resultado = (fahrenheit - 32) * 5/9;

    //mostrar
    alert(fahrenheit + " Fahrenheit son: " + resultado + " centigrados.");
}

function CentigradosFahrenheit () 
{
	//tomar la temp
    var celcius = document.getElementById("Temperatura").value;

    //pasara numero
    celcius = parseFloat(celcius);

    //pasar a fahrenheit
    var resultado = (celcius * 9/5) + 32;

    //mostrar
    alert(celcius + " Centigrados son: " + resultado + " Fahreinheit");
}
