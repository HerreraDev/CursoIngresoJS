function mostrar()
{
	 //CON WHILE//
	/*var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	while(isNaN(numero)){
		numero = prompt("Reingrese un numero entre 0 y 10.");
	}
	while(numero > 10 || numero < 0){	
		numero = prompt("Error, ingrese nuevamente el numero: ");
		numero = parseInt(numero);
	}
	document.getElementById("Numero").value = numero;	*/

	
	// CON DO WHILE ///*
	
	/*var numero = parseInt(prompt("Ingrese un numero: "));
	
	while(isNaN(numero)){
		numero = prompt("Reingrese un numero entre 0 y 10.");
	}

	do{
		numero = parseInt(prompt("Ingrese el numero nuevamente: "));
	}while(numero > 10 || numero < 0);
	
	document.getElementById("Numero").value = numero;*/

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	do{
		numero = prompt("Reingrese un numero entre 0 y 10.");
	}while(isNaN(numero));
	do{	
		numero = prompt("Error, ingrese nuevamente el numero: ");
		numero = parseInt(numero);
	}while(numero > 10 || numero < 0);
	document.getElementById("Numero").value = numero;	
	


}//FIN DE LA FUNCIÓN