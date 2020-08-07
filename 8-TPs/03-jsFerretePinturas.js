/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var centigrados;
    var fahrenheit;
    centigrados = document.getElementById("txtIdTemperatura").value;
    fahrenheit = (centigrados-32)/1800;
    alert(centigrados+ " grados fahrenheit equvialen a "+fahrenheit+ "grados centigrdos");

}

function CentigradosFahrenheit () 
{
	var centigrados;
    var fahrenheit;
    fahrenheit = document.getElementById("txtIdTemperatura").value;
    centigrados = 
}
