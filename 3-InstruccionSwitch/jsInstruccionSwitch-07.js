//Instruccion Switch
//Parodi Rodrigo
//Ejercicio 07
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	destinoIngresado=document.getElementById('txtIdDestino').value;
	let mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje=destinoIngresado+" se encuentra en el oeste argentino.";
		break;
		case "Cataratas":
			mensaje=destinoIngresado+" se encuentra en el norte argentino.";
		break;
		case "Mar del plata":
			mensaje=destinoIngresado+" se encuentra en el este argentino";
		break;
		case "Ushuaia":
			mensaje=destinoIngresado+" se encuentra en el sur argentino.";
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN