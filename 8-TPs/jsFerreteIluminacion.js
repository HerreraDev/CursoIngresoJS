/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas = document.getElementById("Cantidad").value;
    var empresa = document.getElementById("Marca").value;
    var descuento = document.getElementById("precioDescuento").value;
    var precio = 35;
    cantidadLamparas = parseInt(cantidadLamparas);
    switch(empresa){
        case "ArgentinaLuz": 
            if (cantidadLamparas >= 6){
         precio = (precio * cantidadLamparas) * 0.5;        
         document.getElementById("precioDescuento").value = precio;
            }
            else if(cantidadLamparas == 5){
            precio = (precio * cantidadLamparas) * 0.6; 
            document.getElementById("precioDescuento").value = precio;
            }
            else if (cantidadLamparas == 4){
            precio = (precio * cantidadLamparas) * 0.75;
            document.getElementById("precioDescuento").value = precio;
            }
            else if (cantidadLamparas == 3){
                precio = (precio * cantidadLamparas) * 0.85;
                document.getElementById("precioDescuento").value = precio;
            }
        break;
        case "FelipeLamparas":
        if (cantidadLamparas == 4){
            precio = (precio * cantidadLamparas) * 0.75; 
            document.getElementById("precioDescuento").value = precio;
        }
        else if (cantidadLamparas == 3){
            precio = (precio * cantidadLamparas) * 0.9;
            document.getElementById("precioDescuento").value = precio;
        }
        break;
        default:
            if(cantidadLamparas == 5){
            precio = (precio * cantidadLamparas) * 0.70;
            document.getElementById("precioDescuento").value = precio;
            }
            else if (cantidadLamparas == 4){
                precio = (precio * cantidadLamparas) * 0.80;
                document.getElementById("precioDescuento").value = precio;
            }
            else if (cantidadLamparas == 3){
                precio = (precio * cantidadLamparas) * 0.95;
                document.getElementById("precioDescuento").value = precio;
            }    
    }

    if (precio > 120){
        var ingresosBrutos = (precio * 1.10) - precio ;
        document.getElementById("precioDescuento").value = precio + ingresosBrutos;
        alert("Usted pago " + ingresosBrutos + " de ingresos brutos");
    }
  
}
