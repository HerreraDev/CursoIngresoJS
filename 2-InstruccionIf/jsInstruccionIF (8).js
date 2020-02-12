function mostrar()
{
//tomo la edad y estado civil  
var edad = document.getElementById("edad").value;
var estadoCivil = document.getElementById("estadoCivil").value;
edad = parseInt(edad);
//menor de 18 y civil que no sea soltero
if(edad <= 18 && estadoCivil == "Casado" || estadoCivil == "Divorciado"){

}
else if(edad >= 18 &&  estadoCivil == "Soltero"){
    alert("Es soltero y no es menor");
}

	


}//FIN DE LA FUNCIÓN