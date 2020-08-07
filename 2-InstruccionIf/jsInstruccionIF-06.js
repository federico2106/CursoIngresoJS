function mostrar()
{ 
	var edad;
	edad= 18;


edad=document.getElementById("txtIdEdad").value;
if(edad>=18)
{
alert("sos mayor de edad");
	
}
else if (edad>=13&&edad<=17)

{

	alert("sos adolescente");
}

else

{

	alert("sos un niño");
}
}//FIN DE LA FUNCIÓN
