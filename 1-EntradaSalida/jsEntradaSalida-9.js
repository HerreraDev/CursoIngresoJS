/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    //tomar sueldo
    var sueldo = document.getElementById("sueldo").value;
  
    //pasar a parseInt
    parsesueldo = parseInt(sueldo);
                    //tambien 1.1 * importe//
                    //para 25 1.25//
    var resultado = (parsesueldo * 1.1) + parsesueldo;
    //alert("El sueldo con su respectivo 10% de aumento es " + resultado);

    document.getElementById("resultado").value = resultado;

}
	

