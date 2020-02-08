/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno = document.getElementById("numeroUno").value;
    var numeroDos = document.getElementById("numeroDos").value;
  

    //pasar a parseInt
    numberOne = parseInt(numeroUno);
    numberTwo = parseInt(numeroDos);

    var resultado = numberOne + numberTwo;

    alert("El resultado de la suma es " + resultado);
}

function restar()
{
	var numeroUno = document.getElementById("numeroUno").value;
    var numeroDos = document.getElementById("numeroDos").value;
  

    //pasar a parseInt
    numberOne = parseInt(numeroUno);
    numberTwo = parseInt(numeroDos);

    var resultado = numberOne - numberTwo;

    alert("El resultado de la resta es " + resultado);
}

function multiplicar()
{ 
	var numeroUno = document.getElementById("numeroUno").value;
    var numeroDos = document.getElementById("numeroDos").value;
  

    //pasar a parseInt
    numberOne = parseInt(numeroUno);
    numberTwo = parseInt(numeroDos);

    var resultado = numberOne * numberTwo;

    alert("El resultado de la suma es " + resultado);
}


function dividir()
{
	var numeroUno = document.getElementById("numeroUno").value;
    var numeroDos = document.getElementById("numeroDos").value;
  

    //pasar a parseInt
    numberOne = parseInt(numeroUno);
    numberTwo = parseInt(numeroDos);

    var resultado = numberOne / numberTwo;

    alert("El resultado de la division es " + resultado);
}


