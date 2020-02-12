/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //tomar los valores
    var precio1 = document.getElementById("PrecioUno").value;
    var precio2 = document.getElementById("PrecioDos").value;
    var precio3 = document.getElementById("PrecioTres").value;


    //pasarlos a numero
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    var resultado = (precio1 + precio2 + precio3);

    alert(resultado);
}
function Promedio () 
{
	//tomar los valores
    var precio1 = document.getElementById("PrecioUno").value;
    var precio2 = document.getElementById("PrecioDos").value;
    var precio3 = document.getElementById("PrecioTres").value;

    //pasarlos a numero
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    var resultado = (precio1 + precio2 + precio3)/3;

    alert(resultado);
}
function PrecioFinal () 
{
	//tomar los valores
    var precio1 = document.getElementById("PrecioUno").value;
    var precio2 = document.getElementById("PrecioDos").value;
    var precio3 = document.getElementById("PrecioTres").value;

    //pasarlos a numero
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    var resultado = (precio1 + precio2 + precio3);
    var preciofinal = resultado * 1.21;
    
    alert(preciofinal);
}