function mostrar()
{
	var respuesta = prompt("Quiere salir?");
	var valor = 0;
	var acumulador=0;
	//var respuesta = "si";
	while(respuesta != "si"){
	valor = parseInt(prompt("Ingrese un numero: "));
	acumulador += valor;
	respuesta = prompt("Quiere salir?");
	//respuesta+= pregunta;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5

}//FIN DE LA FUNCIÓN