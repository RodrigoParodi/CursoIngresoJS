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
 	let lamparas;
    let marca;
    let preciototalLampara;
    let descuento;
    let precioFinal;
    let precio;
    let porcentaje;
    let importeFinal;
    let iibb;

    lamparas=document.getElementById('txtIdCantidad').value;
    marca=document.getElementById('Marca').value;

    lamparas=parseInt(lamparas);

    precio=35;
    porcentaje=0;
    preciototalLampara=lamparas*precio;

    if(lamparas>5) //ejercicio A
    {
        porcentaje=50;
    }
    else  //ejercicio B
    {
        if(lamparas == 5 && marca == "ArgentinaLuz")
        {
            porcentaje=40;
        }
        else
        {
            if(lamparas == 5)
            {
                porcentaje=30;
            }
            else   //ejercicio C
            {
                if(lamparas == 4 && marca == "ArgentinaLuz" || lamparas == 4  && marca == "FelipeLamparas")
                {
                    porcentaje=25;
                }
                else
                {
                    if(lamparas == 4)
                    {
                        porcentaje=20;
                    }
                    else    //ejercicio D
                    {
                        if(lamparas == 3 && marca == "ArgentinaLuz")
                        {
                            porcentaje=15;
                        }
                        else
                        {
                            if(lamparas == 3 && marca == "FelipeLamparas")
                            {
                                porcentaje=10;
                            }
                            else
                            {
                                if(lamparas == 3)
                                {
                                    porcentaje=5;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    descuento=preciototalLampara*porcentaje/100;
    precioFinal=preciototalLampara - descuento;
    mensaje="$"+precioFinal;
    document.getElementById('txtIdprecioDescuento').value = mensaje;

    importeFinal=precioFinal * lamparas;

    if(importeFinal >120)
    {
        iibb= importeFinal*10/100;

        alert("Total: $"+importeFinal+". Usted pago $"+iibb+" de ingresos brutos");
    }
    else
    {
        alert("Total: $"+importeFinal);
    }
}
