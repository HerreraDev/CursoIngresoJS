function mostrar()
{
    var precio;
    var descuento;
    var precioDescontado;
    
    //PEDIR PROMPT CON PRECIO
    precio = prompt("Ingese el precio: ");
    
    //PEDIR PROMPT % DE DESCUENTO
    descuento = prompt("Ingrese el descuento: ");
    
    //PASAR a NUMERO EL DESCUENTO
    descuento = parseFloat(descuento);
    
    //DESCONTAR
    precioDescontado = precio - (precio * descuento) /100 ;
    
    //MOSTRAR PRECIO FINAL CON DESCUENTO CON ID
    precioFinal = document.getElementById("elPrecioFinal").value = precioDescontado;
}
