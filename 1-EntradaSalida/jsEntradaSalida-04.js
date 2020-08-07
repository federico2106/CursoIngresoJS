/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre= document.getElementById("txtIdNombre").value;
	 nombre = prompt("Ingresa tu nombre", nombre);
	 
	 alert("el nombre ingresado es: "+ nombre);
	 
}

