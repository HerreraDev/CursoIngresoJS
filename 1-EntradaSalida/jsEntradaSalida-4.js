/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//tomar dato con prompt
	var nombre;
	nombre = prompt("", "Ingrese su nombre");
	

	//mostrar
	document.getElementById("elNombre").value = nombre;

}


