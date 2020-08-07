/*Linari Federico
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/



function mostrar()
{	var destinoIngresado;
	var destinoIngresado =txtIdDestino.value;
	

switch(destinoIngresado)
{
	case "Cataratas":
			alert("Calor");
			break;
	case "Mar del plata":
	case "Bariloche":
	case "Ushuaia": 
			alert("Frio");
			break;
}
}//FIN DE LA FUNCIÓN