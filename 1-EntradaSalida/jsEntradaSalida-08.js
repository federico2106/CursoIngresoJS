/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	var NumeroDividendo;
	var NumeroDivisor;
	var resultado;
	
	NumeroDividendo= document.getElementById("txtIdNumeroDividendo").value;
	NumeroDividendo= parseInt(NumeroDividendo);
	NumeroDivisor= document.getElementById("txtIdNumeroDivisor").value;
	NumeroDivisor= parseInt(NumeroDivisor);
	
	resultado= NumeroDividendo % NumeroDivisor;

	alert("La division da como resultado: " +resultado);
}
