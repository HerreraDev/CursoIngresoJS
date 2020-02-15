function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;








if (laHora >= "07:00" && laHora <= "11:00"){
    alert("Es de mañana");
}
else if (laHora >= "12:00" && laHora <= "19:00"){
    alert("Es de tarde");
}
else if (laHora >= "20:00" && laHora <= "24:00" || laHora >= "00:00" && laHora <= "06:00" ){
    alert("Es de noche");
}
else {
    alert("No existe la hora");
}

}//FIN DE LA FUNCIÓN