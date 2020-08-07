/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numeroUno;
    var numeroDos;
    var numeroTres;
    var resultado;

    numeroUno= document.getElementById("txtIdPrecioUno").value;
    numeroUno= parseInt(numeroUno);
    numeroDos= document.getElementById("txtIdPrecioDos").value;
    numeroDos= parseInt(numeroDos);
    numeroTres= document.getElementById("txtIdPrecioTres").value;
    numeroTres= parseInt(numeroTres);

    resultado= numeroUno+numeroDos+numeroTres;

    alert("la suma de los precios es "+ resultado);

}
function Promedio () 
{
	var numeroUno;
    var numeroDos;
    var numeroTres;
    var resultado;

    numeroUno= document.getElementById("txtIdPrecioUno").value;
    numeroUno= parseInt(numeroUno);
    numeroDos= document.getElementById("txtIdPrecioDos").value;
    numeroDos= parseInt(numeroDos);
    numeroTres= document.getElementById("txtIdPrecioTres").value;
    numeroTres= parseInt(numeroTres);

    resultado= (numeroUno+numeroDos+numeroTres)/3;
    
    alert("el promedio de los precios es "+ resultado);
}
function PrecioFinal () 
{
	var numeroUno;
    var numeroDos;
    var numeroTres;
    var suma;
    var iva;
   

    numeroUno= document.getElementById("txtIdPrecioUno").value;
    numeroUno= parseInt(numeroUno);
    numeroDos= document.getElementById("txtIdPrecioDos").value;
    numeroDos= parseInt(numeroDos);
    numeroTres= document.getElementById("txtIdPrecioTres").value;
    numeroTres= parseInt(numeroTres);
    
    suma = numeroUno+numeroDos+numeroTres;
    iva = suma*21/100 + suma;
   alert("el precio final es $"+ iva);
}