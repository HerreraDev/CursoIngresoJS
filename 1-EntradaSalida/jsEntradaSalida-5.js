/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre = document.getElementById("elNombre").value;
    var edad = document.getElementById("laEdad").value;
    //concatenar
    var mensaje = "Usted se llama " + nombre + " Y tiene " + edad;


    alert(mensaje);
}

