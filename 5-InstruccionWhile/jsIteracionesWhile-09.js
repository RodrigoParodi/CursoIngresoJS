//Instruccion While
//Parodi Rodrigo
//Ejercicio 09
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="subo";
	respuesta='SI';
	while(respuesta=="SI")
	{
		numeroIngresado=prompt("Ingrese Numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(banderaDelPrimero=="subo")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero="bajo";
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
		respuesta=respuesta.toUpperCase();
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN