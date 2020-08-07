/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	contador=0;
	acumulador=0;
	respuesta='si';
	
	while(respuesta=="si")
	{
		numeroIngresado= prompt("Ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);
		acumulador= acumulador+numeroIngresado;
		contador++;
		respuesta= prompt("Queire ingresar otro numero? si/no");
	}


	promedio=acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN