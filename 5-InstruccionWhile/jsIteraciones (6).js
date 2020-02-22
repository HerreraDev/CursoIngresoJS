function mostrar()
{ 
	//var valor = 0;
	var valor;
	var acumulador=0;
	var contador = 0;
	while(contador < 5){
	valor = parseInt(prompt("Ingrese un numero: "));
	acumulador = acumulador + valor;
	contador++;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN