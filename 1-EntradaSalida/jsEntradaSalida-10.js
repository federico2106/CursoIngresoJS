/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var nuevoSueldo;
	var resultado;

	importe=document.getElementById("txtIdImporte").value;
	importe=parseFloat(importe);
	
	/*document.getElementById("txtIdResultado").value = resultado;
    resultado=parseFloat(resultado);*/

    nuevoSueldo=importe*.25;
    resultado= importe-nuevoSueldo;
	document.getElementById("txtIdResultado").value = resultado;
    resultado=parseFloat(resultado);
}
