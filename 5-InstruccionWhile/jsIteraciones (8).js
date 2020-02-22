function mostrar()
{
	var respuesta = prompt("Quiere salir?");
	var valor = 0;
	var positivo=0
	var negativo1;
	var negativo2;
	//var respuesta = "si";
	while(respuesta != "si"){
	valor = parseInt(prompt("Ingrese un numero: "));
	if(valor > 0){
		positivo += valor;
		respuesta = prompt("Quiere salir?");
	}
	else{
	//	negativo += valor;
	//   var negativo = valor;
		negativo1 = valor;
		respuesta = prompt("Quiere salir?");
		negativo2 = parseInt(prompt("ingrese un numero"));
		negativo = negativo1 * negativo2;
		respuesta = prompt("Quiere salir?");
	}
		//respuesta+= pregunta;
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN