function mostrar()
{
  //PEDIR NOMBRES
    var nombreVaron = prompt("Ingse el nombre: ");
    var nombreMujer = prompt("Ingrse el nombre de su pareja: ")
    var sumatoria;
    var promedio;
  //PEDIR PESOS
    var pesoVaron = prompt("Ingrese el peso del hombre: ");
    var pesoMujer = prompt("Ingrse el peso de su pareja: ");

  //PASAR EL PESO A NUMERICO
    pesoVaron = parseFloat(pesoVaron);
    pesoMujer = parseFloat(pesoMujer);
  //SUMAR PESOS
    sumatoria = pesoVaron + pesoMujer;


  //PROMEDIO DE PESOS
    promedio = sumatoria / 2;

    //MOSTRAR
    //var nombres = "Ustedes se llaman " + nombreVaron + " y " + nombreMujer + ", ";
    //var pesos =  + "pesan "  + pesoVaron + " y " + pesoMujer + " que sumados son " + sumatoria + " y el promedio de peso es " + promedio;
    alert("Ustedes se llaman " + nombreVaron + "y " + nombreMujer + ", " + "pesan " + pesoVaron + "y " + pesoMujer + "que sumados son " + sumatoria + "y el promedio de peso es " + promedio);


}
