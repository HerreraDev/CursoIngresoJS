function mostrar()
{

/*var sexo = prompt("ingrese f ó m .");
while(sexo != "f" && sexo != "m"){
    sexo = prompt("Ingrese el sexo nuevamente: ");
}
document.getElementById('Sexo').value=sexo;*/

var sexo = prompt("ingrese f ó m .");
do{
    sexo = prompt("Ingrese el sexo nuevamente: ");
}while(sexo != "f" && sexo != "m");
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN