/*Linari Federico
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroIngresado
	var bandera;
	var maximo;
	var minimo;
	var respuesta;
	bandera=0;

	respuesta="si";

	
	while(respuesta=="si")
	{

		numeroIngresado= prompt("Ingrese un numero:");
		
		


		if(bandera==0 || numeroIngresado>maximo)
		{
			maximo=numeroIngresado;
		}
		
		if(bandera==0 || numeroIngresado<minimo)
		{
			minimo=numeroIngresado;
			bandera=1;
		}


		respuesta= prompt("Queire ingresar otro numero?");
	}

	
	txtIdMaximo.value=maximo;
	txtIdMinimo.value=minimo;
	
	
}//FIN DE LA FUNCIÓN