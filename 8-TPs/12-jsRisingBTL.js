/*Linari Federico TP N°12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edad;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldo;
	var legajo;
	var nacionalidad;
	var respuesta;
	respuesta="si";

	 while(respuesta=="si")
	 
	{
		edad= prompt("ingrese una edad: ");
		edad=parseInt(edad);
		
	while(edad<19 || edad>90 || isNaN(edad))
		{
			edad= prompt("ingrese uan edad entre 19 y 90 años;");
		   edad= parseInt(edad);
		  
		}

		sexoIngresado= prompt("Ingrese M o F");
		//sexoIngresado=parseInt(sexoIngresado);
	while(sexoIngresado=="M" || sexoIngresado=="F")
		{
			sexoIngresado= prompt("erro,reingrese M o F");
			//sexoIngresado=parseInt(sexoIngresado);
			switch(sexoIngresado)
			{
				case "M":
					sexoIngresado="Masculino";
					break;
				case "F":
					sexoIngresado= "Femenino";
					break;
			}
		
		}
		estadoCivilIngresado= prompt("Ingrese su estado civil:");
		estadoCivilIngresado= parseInt(estadoCivilIngresado);
		while(estadoCivilIngresado<1 || estadoCivilIngresado>4 || isNaN(estadoCivilIngresado))
		{
			
			estadoCivilIngresado= prompt("error, reingrese su estado civil:");
		estadoCivilIngresado= parseInt(estadoCivilIngresado);
			switch(estadoCivilIngresado) 
			{
				case 1:
					estadoCivilIngresado="Soltero";
					break;
				case 2:
					estadoCivilIngresado="Casado";
					break;
				case 3:
					estadoCivilIngresado="Divorciado";
				case 4:
					estadoCivilIngresado="Viudo";
					break;
					
			}
		
		}
		sueldo= prompt("ingrese su sueldo: ");
		sueldo=parseFloat(sueldo);
	while(sueldo<8000 ||isNaN(sueldo))
		{
			sueldo= prompt("Ingrese sueldo mayor a 8000$");
			sueldo= parseInt(sueldo);
			
		}
		
		
	
		legajo=prompt("Ingrese su numero de legajo: ");
		legajo=parseInt(legajo);
	while(legajo<1000 || legajo > 9999 || isNaN(legajo))
			
		{
				legajo=prompt("error, reingrese su numero de legajo: ");
				legajo=parseInt(legajo);
			
		}
		nacionalidad=prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
		while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N");
		{
			switch(nacionalidad)
			{
				case "A":
					nacionalidad="Argentino";
					break;
				case "E":
					nacionalidad="Extranjero";
					break;
				case "N":
					nacionalidad="Nacionalizado";
					break;
					
			}

		}	
		
		respuesta= prompt("Quiere ingresar otro dato?");
	} 
	
	
	
	txtIdEdad.value=edad;
	txtIdSueldo.value=sueldo;
	txtIdLegajo.value=legajo;
	txtIdEstadoCivil.value=estadoCivilIngresado;
	txtIdNacionalidad.value=nacionalidad;
	txtIdSueldo.value=sueldo;
	txtIdSexo.value=sexoIngresado;
}
