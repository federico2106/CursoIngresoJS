/* Linari Federico
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/



function mostrar()
{	
	var edad;
	var estadoCivil;
	var mensaje;


	edad=txtIdEdad.value;
	estadoCivil=document.getElementById("estadoCivil").value;
	
	if(edad>17)
	{
		
		switch(estadoCivil)
		{
			case "Soltero":
				mensaje="Se responsable vive la vida";
				break;
			case "Casado":
				mensaje="Se responsable a disfrutar la pareja";
				break;
			case "Divorciado":
				mensaje="Se responsable a intentarlo nuevamente";
				break;
		}
	
		
		

	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN
