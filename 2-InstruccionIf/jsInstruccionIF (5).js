function mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value;

//proceso
if (edad <= 13 && edad >=17 ){
    alert("Usted es adolescente");
}
else {
    alert("Usted no es adolescente");
}

}//FIN DE LA FUNCIÓN