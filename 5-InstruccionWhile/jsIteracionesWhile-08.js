/*Linari Federico
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	var numeroIngresado;
	var respuesta;
	var numeroPositivo;
	var multiplicarNegativo;
	var bandera;
	bandera=0;

	
	respuesta="si";
	numeroPositivo=0;
	multiplicarNegativo=1;

	while(respuesta=="si")
	
	{
		numeroIngresado= prompt("Ingrese un numero")
		numeroIngresado= parseInt(numeroIngresado);
		
		if(numeroIngresado>=0)//preguntar como armarlo para no poner mayor que o menor que.
		{
			numeroPositivo= numeroPositivo+numeroIngresado;
		}
		else
		{
			bandera=1;
			multiplicarNegativo= multiplicarNegativo*numeroIngresado;
		}
		respuesta= prompt("Quiere ingresar otro numero? si/no");
	}
	

	if(bandera==0)
	{
		txtIdProducto.value=0;
	}
	
	else
	{
		txtIdProducto.value=multiplicarNegativo;
	}
	txtIdSuma.value=numeroPositivo;
	

}//FIN DE LA FUNCIÓN