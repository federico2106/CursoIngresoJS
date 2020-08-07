/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
 


function mostrar()
{
	var edad;
	var estadoCivilIngresado;

	//edad= parseInt(edad);
	edad=document.getElementById("txtIdEdad").value;
	estadoCivilngresado=document.getElementById("estadoCivil").value;
	
	if(edad<18 && estadoCivilIngresado !="Soltero")
	{
alert("Es muy pequeño para NO ser soltero.");

	}


}//FIN DE LA FUNCIÓN