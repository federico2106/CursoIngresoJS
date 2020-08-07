/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var iva;
	var resultado;

	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseFloat(sueldo);
	
	/*document.getElementById("txtIdResultado").value = resultado;
    resultado=parseFloat(resultado);*/

    iva=sueldo*10/100;
    resultado= sueldo+iva;
	document.getElementById("txtIdResultado").value = resultado;
    resultado=parseFloat(resultado);

}
