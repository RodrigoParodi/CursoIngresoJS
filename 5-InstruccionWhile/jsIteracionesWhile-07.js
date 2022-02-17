//Instruccion While
//Parodi Rodrigo
//Ejercicio 07
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;
	let promedio;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese Numero");
		numeroIngresado=parseInt(numeroIngresado);

		contador= contador + 1;

		acumulador= acumulador + numeroIngresado;

		respuesta=prompt("Desea continuar?");
	}

	promedio=acumulador/contador;
	promedio=promedio.toFixed(2);


	txtIdSuma.value="la suma es "+acumulador;
	txtIdPromedio.value="El pomedio es "+promedio;

}//FIN DE LA FUNCIÓN