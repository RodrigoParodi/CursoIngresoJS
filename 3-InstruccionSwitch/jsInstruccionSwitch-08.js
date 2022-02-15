//Instruccion Switch
//Parodi Rodrigo
//Ejercicio 08
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	destinoIngresado=document.getElementById('txtIdDestino').value;
	let mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="En "+destinoIngresado+" hace Frio.";
		break;
		default:
			mensaje="En "+destinoIngresado+" hace Calor.";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN