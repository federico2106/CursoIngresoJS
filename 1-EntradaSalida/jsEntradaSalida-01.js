/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
	alert("Esto funciona de maravilla");
}

*/

/*Lianri
ejercicio 01:
se ingresa nombre del producto , el importe y el porcentaje de aumento a aplicar (por prompt).
y semuestra el siguient mensaje(por alert):
"el producto XXXX cuesta $xxxx sin aumento, tiene aumento de $XXXX y el precio final es: $xxxx, gracias por su compra"*/
function mostrar()

{
	var nombreDelProducto;
	var importe;
	var porcentaje;
	var resultado;


	nombreDelProducto=prompt("el nombre del producto es: " );
	importe= prompt("ingrese importe");
	importe=parseInt(importe);
	porcentaje=prompt("el aumento aplicado es de: ");
	porcentaje=parseInt(porcentaje);
	porcentaje=porcentaje*importe/100;
	resultado=importe + porcentaje;


	alert("el producto " +nombreDelProducto+" cuesta $ "+importe+ " sin aumento, tiene aumento de $ "+porcentaje+ " y el precio final es: $ "+resultado+" gracias por su compra");

}

/*ejercicio 02:
se pide el anco y largo de un terreno ,necesitamos informar el prerimetro y la supreficie.
mostrar el siguiente mensaje.
"el terreno tiene ??? x ??? su perimetro total es de ??? y la superficie es de ???"*/
/*
function mostrar()

{
var ancho;
var largo;
var perimetro;
var superficie;

ancho= prompt("ingrese el ancho:");
ancho=parseInt(ancho);
largo=prompt("ingrese el largo:");
largo=parseInt(largo);
perimetro=parseInt(perimetro);
superficie=parseInt(perimetro);
perimetro= (ancho+largo)*2;
superficie=ancho*largo;
alert("el terreno tiene "+ancho+" metros de ancho y "+largo+" metros de largo, su perimetro total es de: "+perimetro+" metros y la superficie es de "+superficie+" metros cuadrados.");

}*/