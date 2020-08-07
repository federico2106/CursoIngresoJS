/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */


function CalcularPrecio () 
{
     var cantidadLamparas;
     var marca;
     var precioFinal;
     var ingresoBruto;
     var precio;

    
     precio= 35;
     cantidadLamparas= document.getElementById("txtIdCantidad").value;
     marca= document.getElementById("Marca").value;
    
    
    

     if(cantidadLamparas>5)
     
     {
          precioFinal= cantidadLamparas*precio/2;    
       
     }
        //para cinco lamparitas
     if(cantidadLamparas==5) 
     {
          precioFinal=cantidadLamparas*precio-cantidadLamparas*precio*40/100;     
             // && marca =="ArgentinaLuz" && marca!="FelipeLamparas" && marca!="JeLuz" && marca!="HazIluminacion"&& marca!="Osram")
             {
                
     }
        else
         {
           precioFinal=cantidadLamparas*precio-cantidadLamparas*precio*30/100;
         }
         
        //para cuatro lamparitas

          if(cantidadLamparas==4) //tener de base
          {
               if(marca=="ArgentinaLuz")
               {
                    precioFinal=cantidadLamparas*precio- cantidadLamparas*precio*25/100;
               }
               else
               {
                    if( marca=="FelipeLamparas")
                    {
                         precioFinal=cantidadLamparas*precio- cantidadLamparas*precio*25/100;
                    }
                    else
                    {
                         precioFinal=cantidadLamparas*precio- cantidadLamparas*precio*20/100;
                    }
               
               }
          }
           //para tres lamparitas

           if(cantidadLamparas==3)
          {
                if(marca=="ArgentinaLuz")
               {
                    precioFinal=cantidadLamparas*precio- cantidadLamparas*precio*15/100;
               }
             
               else
               {
                    if(marca=="FelipeLamparas")
                    {
                          precioFinal=cantidadLamparas*precio- cantidadLamparas*precio*10/100;
                    } 
                    else
                    {
                         precioFinal=cantidadLamparas*precio- cantidadLamparas*precio*5/100;
                    }
               }
          }    
     if(precioFinal>120)
     {
                
          ingresoBruto=precioFinal*10/100;
          precioFinal= ingresoBruto+precioFinal;
          alert("Usted pago "+ingresoBruto+"$ de IIBB. Siendo un total a pagar de "+precioFinal+"$" );
               
     }
          
               document.getElementById("txtIdprecioDescuento").value= precioFinal;
    }

   
}

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioBruto;
 	
 	var descuentoCalculado;
 	var porcentaje;
 	var precioFinal;
 	var aumentoIIBB;


 	
 	cantidadLamparas=txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLamparas=Marca.value;
 	//testing
 	//console.log(marcaLamparas+" "+cantidadLamparas);
	precioBruto=cantidadLamparas*35;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=15;
					break;
				case "FelipeLamparas":
					porcentaje=10;
					break;
				default:
					porcentaje=5;
					break;
						
			}
			break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
					break;
				default:
					porcentaje=20;
					break;
			}
			break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}






	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=15;
			}else
			{
				if(marcaLamparas=="FelipeLamparas")
				{
				porcentaje=10;	
				}else
				{
					porcentaje=5;	
				}
			}
			break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
			{
	 			porcentaje=25;
			}else
			{
	 			porcentaje=20;
			}

			break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else if(cantidadLamparas==5 )
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
 		porcentaje=40;
		}else
		{
 		porcentaje=30;
		}
	}
	else if(cantidadLamparas==4)
	{
		if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
		{
 		porcentaje=25;
		}else
		{
 		porcentaje=20;
		}
	}else if(cantidadLamparas==3)
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
			porcentaje=15;
		}else if(marcaLamparas=="FelipeLamparas")
		{
		porcentaje=10;	
		}else
		{
			porcentaje=5;	
		}
		
	}
	
	
 	


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else
 	{
 		if(cantidadLamparas==5 )
 		{
 			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
 				{
			 		porcentaje=25;
 				}else
 				{
			 		porcentaje=20;
 				}
 			}else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(marcaLamparas=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}else
 					{
 						if(marcaLamparas=="FelipeLamparas")
 						{
							porcentaje=10;	
 						}else
 						{
 							porcentaje=5;	
 						}
 					}
 				}
 			}
 		}
 	}

/*
 	descuentoCalculado=precioBruto*porcentaje/100;
	precioFinal=precioBruto-descuentoCalculado;
	aumentoIIBB=0;
	if(precioFinal>120)
	{
		aumentoIIBB=precioFinal*10/100;
		alert("Usted p/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioBruto;
 	
 	var descuentoCalculado;
 	var porcentaje;
 	var precioFinal;
 	var aumentoIIBB;


 	
 	cantidadLamparas=txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLamparas=Marca.value;
 	//testing
 	//console.log(marcaLamparas+" "+cantidadLamparas);
	precioBruto=cantidadLamparas*35;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=15;
					break;
				case "FelipeLamparas":
					porcentaje=10;
					break;
				default:
					porcentaje=5;
					break;
						
			}
			break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
					break;
				default:
					porcentaje=20;
					break;
			}
			break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}






	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=15;
			}else
			{
				if(marcaLamparas=="FelipeLamparas")
				{
				porcentaje=10;	
				}else
				{
					porcentaje=5;	
				}
			}
			break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
			{
	 			porcentaje=25;
			}else
			{
	 			porcentaje=20;
			}

			break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else if(cantidadLamparas==5 )
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
 		porcentaje=40;
		}else
		{
 		porcentaje=30;
		}
	}
	else if(cantidadLamparas==4)
	{
		if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
		{
 		porcentaje=25;
		}else
		{
 		porcentaje=20;
		}
	}else if(cantidadLamparas==3)
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
			porcentaje=15;
		}else if(marcaLamparas=="FelipeLamparas")
		{
		porcentaje=10;	
		}else
		{
			porcentaje=5;	
		}
		
	}
	
	
 	


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else
 	{
 		if(cantidadLamparas==5 )
 		{
 			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
 				{
			 		porcentaje=25;
 				}else
 				{
			 		porcentaje=20;
 				}
 			}else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(marcaLamparas=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}else
 					{
 						if(marcaLamparas=="FelipeLamparas")
 						{
							porcentaje=10;	
 						}else
 						{
 							porcentaje=5;	
 						}
 					}
 				}
 			}
 		}
 	}


 	descuentoCalculado=precioBruto*porcentaje/100;
	precioFinal=precioBruto-descuentoCalculado;
	aumentoIIBB=0;
	if(precioFinal>120)
	{
		aumentoIIBB=precioFinal*10/100;
		alert("Usted pago "+aumentoIIBB+" de IIBB.")
	}
 	txtIdprecioDescuento.value=precioFinal+aumentoIIBB;
}
ago "+aumentoIIBB+" de IIBB.")
	}
 	txtIdprecioDescuento.value=precioFinal+aumentoIIBB;
}
*/
