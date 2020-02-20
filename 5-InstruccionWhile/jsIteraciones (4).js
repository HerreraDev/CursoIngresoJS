function mostrar()
{
	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	while(isNan(numero)){
		numero = prompt("Reingrese un numero entre 0 y 10.");
	}
	while(numero > 10 || numero < 0){	
		numero = prompt("Error, ingrese nuevamente el numero: ");
		numero = parseInt(numero);
	}
	document.getElementById("Numero").value = numero;	


	/*while(isNan(numero)){
		numero = prompt("Reingrese un numero entre 0 y 10.");
	}
	*/
}//FIN DE LA FUNCIÓN