/*
al presionar el botón pedir un número.
 mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{

	var numero;
	var i;
	var contadorDivisores;



	contadorDivisores=0;

	numero=prompt("Ingrese un numemero");
	numero=parseInt(numero);
	for(i=1;i<=numero;i++)
	{
		if(numero%i==0)
		{
			document.write(i+"<br>")
			contadorDivisores++;
		}
	}
	document.write("cantidad de numero: "+contadorDivisores+"<br>");
	

}//FIN DE LA FUNCIÓN