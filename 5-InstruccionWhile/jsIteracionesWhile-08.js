//Instruccion While
//Parodi Rodrigo
//Ejercicio 08
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese Numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos=numeroIngresado * multiplicacionNegativos;
		}

		respuesta=prompt("Desea continuar?");
	}

	txtIdSuma.value="La suma de numero positivos es "+sumaPositivos;
	txtIdProducto.value="La multiplicacion de numeros negativos es "+multiplicacionNegativos;

}//FIN DE LA FUNCIÓN