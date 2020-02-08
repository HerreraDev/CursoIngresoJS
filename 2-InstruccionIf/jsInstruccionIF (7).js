function mostrar()
{
//tomo la edad y estado civil  
var edad = document.getElementById("edad").value;
var estadoCivil = document.getElementById("estadoCivil").value;

//18 y civil que no sea soltero

if(edad == 18 && estadoCivil == "Casado" || estadoCivil == "Divorciado"){
 alert("Es muy pequeño para NO ser soltero");
}

}//FIN DE LA FUNCIÓN