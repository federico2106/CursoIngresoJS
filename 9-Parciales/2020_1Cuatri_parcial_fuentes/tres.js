/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var contadorCasado;
	var contadorHombre;
	var contadorViudo;
	var acumuladorHombreSoltero;
	var contadorSoltero;
	var nombreMasTemperatura;
	var banderaTemperatura;
	var contadorMayoresTemperatura;
	var contadorTemperatura;
	var contadorMayoresViudos;
	var personaMasTemperatura;
	var respuesta;
	respuesta="si";
	acumuladorHombre=0;
	contadorMayoresTemperatura=0;
	acumuladorHombreSoltero=0;
	contadorHombre=0;
	contadorSoltero=0;
	contadorTemperatura=0;
	contadorCasado=0;
	contadorMayoresViudos=0;
	contadorViudo=0;
	banderaTemperatura=1;
	
	while(respuesta=="si")
	{
		nombre= prompt("Ingrese su nombre");
		
		while(nombre=="")
		{
			nombre=prompt("Reingrese su nombre:");
			
		}
		
		edad=prompt("Ingrese su edad:");
		edad=parseInt(edad);
		while(edad<1 || isNaN(edad)==true)
		{
			edad=prompt("Reingrese su edad: ");
			edad=parseInt(edad);
		}
		
		sexo=prompt("Ingrese F para Femenino o M para masculino");
		while(sexo!="M" && sexo!="F")
		{
			sexo= prompt("error,reingrese M o F");
			
		}
		
		estadoCivil= prompt("Ingrese su estado civil:");
	
		while(estadoCivil!="casado" && estadoCivil!="soltero" && estadoCivil!="viudo")
		{
			
			estadoCivil= prompt("error, reingrese su estado civil:");
		
		}
		temperaturaCorporal=prompt("Ingrese su temperatura: ");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		
		while(temperaturaCorporal<0 || isNaN(temperaturaCorporal)==true) 
		{

			temperaturaCorporal=prompt("Reingrese la temperatura: ");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}    
		
		
		
			if(banderaTemperatura == 1)
		{
			personaMasTemperatura = temperaturaCorporal;
			nombreMasTemperatura =nombre;
			banderaTemperatura = 0;
		}
		else 
		{
			if(personaMasTemperatura < temperaturaCorporal)
			{
				personaMasTemperatura = temperaturaCorporal;
				nombreMasTemperatura=nombre;
			}
		}
		
		
		if(edad>17 && estadoCivil=="viudo")
		{
			contadorMayoresViudos++;
		}
		
		if(sexo=="M")
		{
			if(estadoCivil=="viudo" || estadoCivil=="soltero")
			{
				contadorHombre++;
			}
			
			else
			{
				contadorSoltero++;
				
				acumuladorHombreSoltero= edad+acumuladorHombreSoltero;
				
			}
		}
		
		if(edad>60 && temperaturaCorporal>38)
		{
			contadorMayoresTemperatura++;
		}

		respuesta=prompt("Quiere ingresar de nuevo? si/no ");
	}
	promedio=acumuladorHombreSoltero/contadorSoltero;
	
	document.write("la cantidad de mayores viudos son: "+contadorMayoresViudos+"<br>");
	document.write("El nombre de la persona con mas temperatura es: " +nombreMasTemperatura+"<br>");
	document.write("la cantidad de solteros o viudos son: "+contadorHombre+"<br>");
	document.write("el promedio de los hombres solteros es de: "+promedio+"<br>")
	document.write("la cantidad de mayores de edad con temperatura superior a los 38° son: "+contadorMayoresTemperatura+"<br>");
}



