function mostrar()
{
	var respuesta = prompt("Quiere salir?");
	var valor = 0;
	var positivo = 0;
	var contador = 0;
	var negativo1 = 1;
	var negativo2;
	//var respuesta = "si";
	while(respuesta != "si")
	{
		valor = parseInt(prompt("Ingrese un numero: "));
		if(valor > 0)
		{
		positivo += valor;
		respuesta = prompt("Quiere salir?");
		}
		//else if(contador > 0)
		else
		{
		negativo1 = negativo1 * valor;
		respuesta = prompt("Quiere salir?");
		}
		contador++;
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo1;

}//FIN DE LA FUNCIÓN