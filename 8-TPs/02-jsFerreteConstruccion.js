/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var alambre;
var perimetro;

largo = document.getElementById("txtIdLargo").value;
largo = parseFloat(largo);
ancho = document.getElementById("txtIdAncho").value;
ancho = parseFloat(ancho);

perimetro = (largo+ancho)*2;
alambre = perimetro*3;
alert ("se necesita comprar "+alambre+ " rollos de alambre");



}
function Circulo () 
{
var radio;
var perimetro;
var alambre;
const PI = Math.PI;



largo = document.getElementById("txtIdLargo").value;
largo = parseFloat(largo);
ancho = document.getElementById("txtIdAncho").value;
ancho = parseFloat(ancho);
radio = document.getElementById("txtIdRadio").value;
radio = parseFloat(radio);

perimetro = 2*PI*radio;
alambre = 3*perimetro;

alert ("se necesita comprar "+alambre+ " rollos de alambre");

}
function Materiales () 
{
    var cemento;
    var cal;
    var area;
    
    cemento = document.getElementById("txtIdLargo").value;
    cemento= parseFloat(cemento);
    cal = document.getElementById("txtIdAncho").value;
    cal = parseFloat(cal);
    
    area= cemento*cal;

    cemento= area*2;
    cal= area*3;
    alert("se necesitan "+cemento+" bolsas de cemeto y "+cal+ " bolsas de cal");
    
        
}