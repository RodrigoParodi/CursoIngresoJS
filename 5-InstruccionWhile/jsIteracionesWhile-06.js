//Instruccion While
//Parodi Rodrigo
//Ejercicio 06
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	let mensajeSuma;
	let mensajePromedio;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese Numero");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador + numeroIngresado;
		
		contador= contador + 1 ;

	}
	
	mensajeSuma ="La suma es ";
	mensajePromedio ="El promedio es "
	
	txtIdSuma.value=mensajeSuma+acumulador;
	txtIdPromedio.value=mensajePromedio+acumulador/5;
}//FIN DE LA FUNCIÓN