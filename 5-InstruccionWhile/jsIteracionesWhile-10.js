//Instruccion While
//Parodi Rodrigo
//Ejercicio 10
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	let sumaDePositivos;
	let contadorPositivo;
	let contadorNegativo;
	let contadorDeCeros;
	let contadorNumeroPar;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	respuesta="SI";
	sumaNegativos=0;
	sumaDePositivos=0;
	contadorPositivo=0;
	contadorNegativo=0;
	contadorDeCeros=0;
	contadorNumeroPar=0;

	while(respuesta=="SI")
	{
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			contadorPositivo= contadorPositivo +1;
			sumaDePositivos=sumaDePositivos + numeroIngresado;
		}
		else
		{
			if(numeroIngresado<0)
			{
				contadorNegativo= contadorNegativo +1;
				sumaNegativos= sumaNegativos + numeroIngresado;
			}
			else
			{
				contadorDeCeros= contadorDeCeros +1;	
			}
		}

		if(numeroIngresado%2 == 0)
		{
			contadorNumeroPar=contadorNumeroPar+1;
		}

		respuesta=prompt("desea continuar?");
		respuesta=respuesta.toUpperCase();
	}//fin del while

	
	diferencia=contadorPositivo - contadorNegativo;

	document.write("La suma de negativos es :"+sumaNegativos+"<br>");
	document.write("La suma de los positivos es :"+sumaDePositivos+"<br>");
	document.write("Se ingreso un total de "+contadorPositivo+" numeros positivos."+"<br>");
	document.write("Se ingreso un total de "+contadorNegativo+" numeros negativos."+"<br>");
	document.write("Cantidad de ceros ingresados :"+contadorDeCeros+"<br>");

	if(contadorPositivo>0)
	{
		promedioPositivos= sumaDePositivos/contadorPositivo;
		promedioPositivos= promedioPositivos.toFixed(2);

		document.write("El promedio de numero positivos es :"+promedioPositivos+"<br>");
	}
	else
	{
		document.write("No se ingresaron numeros positivos para calcular el promedio"+"<br>");
	}
	if(contadorNegativo>0)
	{
		promedioNegativos= sumaNegativos/contadorNegativo;
		promedioNegativos= promedioNegativos.toFixed(2);

		document.write("El promedio de numero negativos es :"+promedioNegativos+"<br>");
	}
	else
	{
		document.write("No se ingresaron numeros negativos para calcular el promedio"+"<br>");
	}
	
	document.write("La diferencia entre positivos y negativos es :"+diferencia+"<br>");
	document.write("Se ingreso un total de "+contadorNumeroPar+" numeros par");


}//FIN DE LA FUNCIÓN