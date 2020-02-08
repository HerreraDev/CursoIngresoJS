/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //tomar los datos
    var numeroUno = document.getElementById("numeroUno").value;
    var numeroDos = document.getElementById("numeroDos").value;
  

    //pasar a parseInt
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    //sumar
    var resultado = numeroUno + numeroDos;

    //mostrar
    alert("La suma es " + resultado);
}

