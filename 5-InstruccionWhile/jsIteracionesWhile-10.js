/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
/*function mostrar()
{
	
	var numeroIngresado;
	//var bandera;
	var sumaPositivo;
	var contadorPositivo;
	var acumuladorNegativos;
	var contadorNegativo;
	var numerosPares;
	var cantidadPositivos;
	var cantidadNegativos;
	var ceros;
	var promedioPositivo;
	var promedioNegativo;
	var diferencia;
	var respuesta;
	var contadorPares;
	var contadorCeros;
	contadorCeros=0;
	contadorNegativo=0;
	acumuladorNegativos=0;
	sumaPositivo=0;
	contadorPositivo=0;
	respuesta= "si";


	
	while(respuesta=="si")
	{
		numeroIngresado= prompt("Ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);

	
			if(numeroIngresado<0 )
			{
				acumuladorNegativos= acumuladorNegativos+ numeroIngresado;
				contadorNegativo++;
				contadorNegativo= contadorNegativo++;
				promedioNegativo=acumuladorNegativos/contadorNegativo;
			}
			
			else
			{
				if(numeroIngresado>0)
				{	
				
				sumaPositivo= sumaPositivo+numeroIngresado;
				contadorPositivo++;
				contadorPositivo= contadorPositivo++;
				promedioPositivo=sumaPositivo/contadorPositivo;
				
				
				}
			
				else
				{
				contadorCeros++;
				}
				
			}




			
			


		respuesta= prompt("Quiere ingresar otro numero?");
	}
	
	
	
	document.write("La suma de lo numeros negativos es: "+acumuladorNegativos+" y la suma de los positivos es "+sumaPositivo+",hay una cantidad de numeros negativos: "+contadorNegativo+" la cantidad de numeros postivos;  "+contadorPositivo+ "el promedio es "+promedioNegativo+" el promedio positivo es "+promedioPositivo+" cantidad de ceros; "+contadorCeros);
	
	

	
}//FIN DE LA FUNCIÓN*/

/*
Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;*/
function mostrar()

{
    var edad;
    var nombre;
    var sexo;
	var contadorSexo;
	var contadorHombre;
	var contadorMujer;
	var contadorNombre;
	var viejo;
	var mujer;
	var hombre;
	var joven;
	var contadorEdad;
	var acumuladorEdad;
	var banderaMasVuejo;
    var respuesta;
	var contadorMayores;
	var contadorMenores;
	var contadorNombre;
	var contadorAdolescente;
	var contadorNiño;
	var contadorNiñoHombre;
	var promedioMujeres;
	var acumuladorMujeres;
	var promedioHombres;
	var acumuladorHombres;
	acumuladorHombres=0;
	acumuladorMujeres=0;
	contadorAdolescente=0;
	contadorNiñoHombre=0;
	contadorNiño=0;
	contadorNombre=0;
	contadorMenores=0;
	contadorSexo=0;
	contadorEdad=0;
	contadorNombre=0;
	contadorHombre=0;
	contadorMujer=0;
    bandera=0;
	acumuladorEdad=0;
	banderaMasVuejo=0;
	contadorMayores=0;
	contador=0;
    respuesta="si";
   
	
	
	
	while(respuesta=="si")
	{
		nombre= prompt("Ingrese su nombre");
		while(nombre=="")
		{
			nomobre= prompt("Reingrese nombre");
		
		}



		edad= prompt("Ingrese edad: ");
		edad= parseInt(edad);
	

		while(edad<0 || edad>120 || isNaN(edad))
		{
		   
			edad= prompt("Ingrese una edad entre 1 y 120 años:");
			edad= parseInt(edad);

			
		}
		sexo= prompt("Ingrese M o F");
		while(sexo!="M" && sexo!="F")
		{
			sexo= prompt("erro,reingrese M o F");
			
		}
		if(sexo=="M")
			{
				contadorHombre++;
				acumuladorHombres= edad+acumuladorHombres;
			}
			
			else
			{
				if(edad<12 && sexo=="F")
				{
					contadorMujer++;
				}
				else
				{
					contadorMujer++;
					acumuladorMujeres=edad+acumuladorMujeres;
				}

			}	

		if(edad>0 && edad<120)
		{
			edad=parseInt(edad);
			contadorEdad++;
		}	
		if(edad>17)
		{
			contadorMayores++;
			
		}
		
		else
		{
			if(edad<18 && edad>12)
			{
				
				contadorMenores++;
			}
			
			if(edad<12 && sexo=="M")
			{
				contadorNiñoHombre++;
			}
			else
			{
				contadorNiño++;
			}
		}
		

		if(banderaMasVuejo==0 || edad>viejo)
		{
			viejo=edad;
		}
		
		if(banderaMasVuejo==0 || edad<joven)
		{
			joven=edad;
			banderaMasVuejo=1;
		}
		

		respuesta= prompt("Quiere ingresar otro dato?");

	}

	promedioHombres=  acumuladorHombres/contadorHombre;
	promedioMujeres=acumuladorMujeres/contadorMujer;
	document.write("la cantidad de mayores de edad son :"+ contadorMayores+"<br>");
	document.write("la cantidad de menores de edad son :"+contadorMenores+"<br>");
	document.write("la cantidad de adolescentes de edad son :"+contadorMenores+"<br>");
	document.write("la cantidad de niños son :"+contadorNiño+"<br>");
	document.write("la cantidad de viejos son: "+banderaMasVuejo+"<br>");
	document.write("el mas viejo es: "+viejo+"<br>");
	document.write("el mas joven es: "+joven+"<br>");
	document.write("la cantidad de total de personas ingresadas son: "+contadorEdad+"<br>");
	document.write("su nombre es: "+nombre+"<br>");
	document.write("hay una cantidad de mujeres: "+ contadorMujer+"<br>");
	document.write("hay una cantidad de hombres: "+ contadorHombre+"<br>");
	//document.write("Los nombres son: "+contadorNombre+"<br>");
	//document.write("Los sexos son: "+contadorSexo+"<br>");
	document.write("la cantidad de niños hombres son: "+contadorNiñoHombre+"<br>");
	document.write("hay una cantidad de mujeres adolescentes: "+contadorMujer+"<br>");
	document.write("el promedio de edades de los hombres es:"+promedioHombres+"<br>");
	document.write("el promedio de edades de las mujeres es:"+promedioMujeres+"<br>");
}

/*



nivel:2

cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares */







/*
nivel 3:


el nombre de la persona mas vieja
el nombre de la persona mas joven

el sexo de la persona mas vieja
el sexo de la persona mas joven

nivel dios:

cuantas personas hay con la edad minima
cuantas personas hay con la edad maxima
el nombre de la ultima persona con la mayor edad encontrada
el nombre de la ultima persona con la menor edad encontrada

*/





