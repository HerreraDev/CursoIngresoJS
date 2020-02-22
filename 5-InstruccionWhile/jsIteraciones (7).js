function mostrar()
{
	var contador = 0;
	var respuesta = prompt("Quiere salir?");
	var valor = 0;
	var acumulador=0;
	//var respuesta = "si";
	while(respuesta != "si"){
	valor = parseInt(prompt("Ingrese un numero: "));
	acumulador += valor;
	contador++;
	respuesta = prompt("Quiere salir?");
	//respuesta+= pregunta;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;



/*cuando dice al menos 1 tenes que usar 
do{
	valor = parseInt(prompt("Ingrese un numero: "));
	acumulador += valor;
	contador++;
	respuesta = prompt("Quiere salir?");
} while(respuesta != "si")*/
}
//FIN DE LA FUNCIÓN