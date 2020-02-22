function mostrar()
{

	/*var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo = 0;
	var minimo = 0;
	var valor = 0;
	var acumulador = 0;
	var acumuladorMax = 0;
	var acumuladorMin = 0;
	respuesta = prompt("Quiere continuar?");
	while(respuesta!='no')
	{
		valor = parseInt(prompt("Ingrese un valor:"));
		acumulador = valor;
		respuesta = prompt("Quiere continuar?");

		if (acumulador < valor){
			acumuladorMax = Math.max(acumulador, valor);
		}
		else{
			acumuladorMin = Math.min(acumulador, valor);
		}
	}
	document.getElementById("maximo").value = acumuladorMax;
	document.getElementById("minimo").value = acumuladorMin;*/

	//ASI ES CON DO WHILE//
	/*var contador = 0;
	var numero = 0;
	var maximo;
	var minimo;
	var continuar;
	do{
		numero = parseInt(prompt("Ingrse un numero: "));
		if (contador == 0){
			maximo = numero;
			minimo = numero;
		}
		else {
				if(numero > maximo){
				maximo = numero;
				}
				if(numero < minimo){
				minimo = numero;
				}
			}
		continuar = prompt("desea continuar? si o no");
		contador++;
	}while(continuar=="si"); //al ser verdadero lo vuelve a ejecutar;

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;*/


	//ASI ES CON WHILE
	var contador = 0;
	var numero = 0;
	var maximo;
	var minimo;
	var continuar;
	continuar = prompt("desea continuar? si o no");

	while(continuar=="si"){
		numero = parseInt(prompt("Ingrse un numero: "));
		if (contador == 0){
			maximo = numero;
			minimo = numero;
		}
		else {
				if(numero > maximo){
				maximo = numero;
				}
				if(numero < minimo){
				minimo = numero;
				}
			}
		continuar = prompt("desea continuar? si o no");
		contador++;
	}
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
	
}//FIN DE LA FUNCIÓN