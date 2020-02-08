/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno = document.getElementById("numeroDividendo").value;
    var numeroDos = document.getElementById("numeroDivisor").value;
  

    //pasar a parseInt
    numberOne = parseInt(numeroUno);
    numberTwo = parseInt(numeroDos);

    var resultado = numberOne % numberTwo;

    alert("El resto de la division es " + resultado);
}

