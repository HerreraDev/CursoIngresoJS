function mostrar()
{
	//declarar contadores y variables 
	
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantPositivos=0;
	var cantNegativos=0;
	var cantCeros = 0;
	var cantPares = 0;
	var cantImpares = 0;
	//var promPositivos;
	//var promNegativos;
	//var difPosyNeg;
	var respuesta;
	var numero;
	//var contador = 0;
	do{
		numero = parseInt(prompt("Ingrsar numero: "));

		if(numero > 0) //positivos
		{
			sumaPositivos = sumaPositivos + numero;
			cantPositivos++;
		}
		else if(numero < 0) //negativos
		{
			sumaNegativos = sumaNegativos + numero;
			cantNegativos++;
		}
		else{    //ceros
			cantCeros++;
		}
		if(numero % 2 == 0){ //pares
			cantPares++;
		}
		else{	//impares
			cantImpares++;
		}

	contador++;
	respuesta = prompt("DEsea continuar");
	}while(respuesta == "si");	

	document.write("<li>la suma es: " + sumaPositivos +"<br></br>"+ "<li>la suma de los negativos es: " + sumaNegativos + "<br></br>"
	+ "<li>la cantidad de positivos es: " + cantPositivos + "<br></br>" + "<li>la cantidad de negativos es: " + cantNegativos + "<br></br>"
	+ "<li>la cantidad de ceros es: " + cantCeros + "<br></br>" + "<li>la cantidad de pares es: " + cantPares + "<br></br>"
	+ "<li>la cantidad de inpares es: " + cantImpares + "<br></br>" + "<li> el promedio de positivos es : " + sumaPositivos/cantPositivos + "<br></br>" 
	+ "<li>el promedio de negativos es: " + sumaNegativos/cantNegativos
	+ "<li>la diferencia entre positivos y negativos es: " + (sumaPositivos - sumaNegativos));

//promedio suma acumulada / contador de veces



}//FIN DE LA FUNCIÓN