function mostrar()
{
    var marca;
    var peso;
    var temp;
    var respuesta;
    var tempPares = 0;
    var pesoMax = 0;
    var cantMenorCeroGrados = 0;
    var acumuladorPeso = 0;
    var contPeso = 0;
    var pesoMin = 0;
    var marcaMax;
    do
    {
        marca = prompt("Ingrese la marca del producto: ");
        peso = parseInt(prompt("Ingrese el peso del producto: "));
        while(peso < 1 || peso > 100)
        {
            peso = parseInt(prompt("Ingrese el peso del producto: "));
        }
        acumuladorPeso = acumuladorPeso + peso;
        temp = parseInt(prompt("Ingrese la temperatura: "));
        while(temp < (-30) || temp > 30)
        {
            temp = parseInt(prompt("Ingrese la temperatura: "));
        }
        if (contPeso == 0)
        {
            marcaMax = marca;
			pesoMax = peso;
			pesoMin = peso;
		}
        else
        {
            if(peso > pesoMax)
            {
            pesoMax = peso;
            marcaMax = marca;
			}
            if(peso < pesoMin)
            {
			pesoMin = peso;
			}
		}
        if(temp % 2 == 0)
        {
            tempPares++;
        }
        if(temp < 0)
        {
            cantMenorCeroGrados++;
        }
    contPeso++;    
    respuesta = prompt("Desea continuar?");
    }while(respuesta=="si");
    document.write("<li>Cantidad de temperaturas pares: " + tempPares + "<br></br>" + 
    "<li>Cantidad de productos conservados a menos de 0 grados: " + cantMenorCeroGrados + "<br></br>" +
    "<li>Promedio de peso de los productos: " + (acumuladorPeso/contPeso) + "<br></br>" +
    "<li>Peso máximo: " + pesoMax + "<br></br>" + 
    "<li>Peso minimo: " + pesoMin + "<br></br>" +
    "<li>Marca del producto mas pesado: " + marcaMax);

}
