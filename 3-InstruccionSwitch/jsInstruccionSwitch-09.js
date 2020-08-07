/*Linari Federico
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Curso de ingreso*/




function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var estadiaBase;
	var porcentaje;
	var precioFinal;
	var mensaje;
	
	estadiaBase=15000;
	porcentaje=0;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
		{
			 case "Bariloche":
			 		porcentaje = 20;
			 		mensaje=("Su incremento por temporada es:");
			 		break;
			 case "Cordoba":
			case "Cataratas":
					porcentaje = -10;
					mensaje=("Su Descuento por fuera de temporada es:");
					break;
			case "Mar del plata":
					porcentaje = -20;
					mensaje=("Su Descuento por fuera de temporada es:" );
					break;
		}
		break;
		case "Verano":
			switch(destinoIngresado)
		{
			case "Bariloche":
				porcentaje = -20;
				mensaje=("Su Descuento por fuera de temporada es:" );
				break;
			case "Cataratas":
			case "Cordoba":
				porcentaje = 10;
				mensaje=("Su incremento por temporada es:");
				break;
			case "Mar del plata":
				porcentaje = 20;
				mensaje=("Su incremento por temporada es:");
				break;			
		}
		break;
		case "Otoño":
		case "primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					mensaje=("Su incremento por temporada es:");
					break;
					default:
						mensaje=("Su destino no tiene descuento");
						break;
			}
		break;



}



precioFinal= estadiaBase + estadiaBase*porcentaje/100;
alert(mensaje+ precioFinal);

}