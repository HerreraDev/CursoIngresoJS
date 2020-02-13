
function mostrar()
{
    var largo = prompt("Ingrese el ancho del rectangulo: ");
    var ancho = prompt("Ingrese el largo del mismo: ");

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    var perimetro = 2 * (largo + ancho);
    
    alert(perimetro);
}
