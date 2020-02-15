function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
var random = Math.random() * (10 - 0) + 0;
random = Math.round(random);
//if(random >= 9 || random == 10){
    if(random > 8){
    alert(random + ": EXCELENTE");
}
else if (random > 4 ){
    alert(random + ": APROBÓ");
}
else {
    alert(random + ": Vamos, la proxima se puede");
}
	


}//FIN DE LA FUNCIÓN