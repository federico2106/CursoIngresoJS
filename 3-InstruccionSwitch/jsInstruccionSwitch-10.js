/* Linari Federico
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
 informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/


function mostrar()
{
	var estacionIngresada;
	var destino;
	estacionIngresada =txtIdEstacion.value;
destino=document.getElementById("txtIdDestino").value;

	
	switch(estacionIngresada)
	{
		case "Invierno":
			
			switch(destino)
			{
			case "Bariloche":
				alert("Se viaja");
				break;
			case "Mar del plata":
			case "Cataratas":
			case "Cordoba":
				alert("No se viaja");
				break;
			}
			break;
			case "Verano":
				
				switch(destino)
				{
					case "Mar del plata":
					case "Cataratas":
						alert("Se viaja");
						break;
					case "Bariloche":
					case "Cordoba":
						alert("No se viaja");
						break;
				}
				break;
			case "Primavera":
	
			switch(destino)
			{
				case "Catartas":
				case "Mar del plata":
				case "Cordoba":
					alert("Se viaja");
					break;
				case "Bariloche":
					alert("No se viaja");
					break;
			}
			break;
			case "Otoño":
				
				switch(destino)
				{
					case "Mar del plata":
					case "Cataratas":
					case "Bariloche":
					case "Cordoba":
						alert("Se viaja");
						break;
				}
				break;
		}

}//FIN DE LA FUNCIÓN

