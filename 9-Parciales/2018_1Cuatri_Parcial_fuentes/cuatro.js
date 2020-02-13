function mostrar()
{
     //PIDO DOS NUMEROS
     var num1 = prompt("Ingrese el primero valor: ");
     var num2 = prompt ("Ingrese el segundo valor: ");
 
     //IFS
     //SI SON IGUALES CONCATENAR
     if (num1 == num2 ){
         alert(num1 + num2);
     }
     //SI NUM1 MAYOR QUE NUM2 RESTAR SINO SUMAR
     else if (num1 > num2){
         num1 = parseFloat(num1);
         num2 = parseFloat(num2);
         var resta = num1 - num2;
         alert("La resta da: " + resta);
     }
     else{
         num1 = parseFloat(num1);
         num2 = parseFloat(num2);
         var suma = num1 + num2;
         alert("La suma da: " + suma);
     }
     if (suma > 10){
         num1 = parseFloat(num1);
         num2 = parseFloat(num2);
         alert("La suma es: " + suma + " y supero el 10 ");
     }
}
