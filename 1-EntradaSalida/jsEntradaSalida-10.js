/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    //tomar importe por ID
    var importe = document.getElementById("importe").value;

    //transformar a entero
    importeNumerico = parseInt(importe);

    var resultado = importeNumerico - (importeNumerico * 0.25);

    //mostrar con descuento
    document.getElementById("resultado").value = resultado;

}
