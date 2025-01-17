/*4.	
//TP 4
// PARODI RODRIGO
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

//EJERCICIO REALIZADO CON SWITCH
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
    let impuesto;

    lamparas=document.getElementById('txtIdCantidad').value;
    marca=document.getElementById('Marca').value;

    lamparas=parseInt(lamparas);

    precio=35;
    porcentaje=0;
    preciototalLampara=lamparas*precio;

    switch(lamparas)
    {
        case 3:
            switch(marca)
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
            switch(marca)
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
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje=40;
                break;
                default:
                    porcentaje=30;
                break;
            }
        break;

        case 1:
        case 2:
            porcentaje=0;
        break;

        default:
            porcentaje=50;
        break;
    }

    descuento=preciototalLampara*porcentaje/100;
    precioFinal=preciototalLampara - descuento;

    if(precioFinal>120)     //Ejercicio E
    {
        impuesto=precioFinal * 10/100;
        precioFinal=precioFinal + impuesto;
        alert("Usted pago $"+impuesto+" de mas debio a impuestos IIBB");
    }

    mensaje = "Total a pagar $"+precioFinal;

    document.getElementById('txtIdprecioDescuento').value = mensaje;


}


//EJERCICIO REALIZADO CON IF Y ELSE
/*
function CalcularPrecio () 
{
    let lamparas;
    let marca;
    let preciototalLampara;
    let descuento;
    let precioFinal;
    let precio;
    let porcentaje;
    let impuesto;

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
    else       //ejercicio B
    {
        if(lamparas>4)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentaje=40;
            }
            else
            {
                porcentaje=30;
            }
        }
        else         //ejercicio C
        {
            if(lamparas>3)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentaje=25;
                }
                else
                {
                    porcentaje=20;
                }
            }
            else         //Ejercicio D
            {
                if(lamparas>2)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentaje=15;
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            porcentaje=10;
                        }
                        else
                        {
                            porcentaje=5;
                        }
                    }
                }
            }
        }
    }

    descuento=preciototalLampara*porcentaje/100;
    precioFinal=preciototalLampara - descuento;

    if(precioFinal>120)     //Ejercicio E
    {
        impuesto=precioFinal * 10/100;
        precioFinal=precioFinal + impuesto;
        alert("Usted pago $"+impuesto+" de mas debio a impuestos IIBB");
    }

    mensaje = "Total a pagar $"+precioFinal;

    document.getElementById('txtIdprecioDescuento').value = mensaje;

/*
}