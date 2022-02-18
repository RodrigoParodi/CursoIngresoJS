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
	var sumaNegativos=0;
	let sumaDePositivos=0;
	let contadorPositivo=0;
	let contadorNegativo=0;
	let contadorDeCeros=0;
	let contadorNumeroPar=0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	respuesta="SI";

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

		respuesta=prompt("desea continuar?");
		respuesta=respuesta.toUpperCase();
	}//fin del while


	promedioPositivos= sumaDePositivos/contadorPositivo;
	promedioNegativos= -(sumaNegativos)/contadorNegativo;

	promedioNegativos= promedioNegativos.toFixed(2);
	promedioPositivos= promedioPositivos.toFixed(2);

	diferencia=contadorPositivo - contadorNegativo;

	document.write("La suma de negativos es :"+sumaNegativos);
	document.write("<br>");
	document.write("La suma de los positivos es :"+sumaDePositivos);
	document.write("<br>");
	document.write("Se ingreso un total de "+contadorPositivo+" numeros positivos,");
	document.write("<br>");
	document.write("Se ingreso un total de "+contadorNegativo+" numeros negativos.");
	document.write("<br>");
	document.write("Cantidad de ceros ingresados :"+contadorDeCeros);
	document.write("<br>");
	document.write("El promedio de numero positivos es :"+promedioPositivos);
	document.write("<br>");
	document.write("El promedio de numero negativos es :"+promedioNegativos);
	document.write("<br>");
	document.write("La diferencia entre positivos y negativos es :"+diferencia);
	document.write("<br>");
	document.write("Se ingreso un total de "+contadorNumeroPar+" numeros par");


}//FIN DE LA FUNCIÓN