//Instruccion Switch
//Parodi Rodrigo
//Ejercicio 02
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	mesDelAño=document.getElementById('txtIdMes').value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Octubre":
		case"Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje="Ya pasamos el frio, ahora calor!!!";
		break;
		case "Marzo":
		case "Abril":
		case "Mayo":
			mensaje="Falta para el invierno";
		break;
		default:
			mensaje="Abrigate que hace frio";
		break;
	}

	alert(mensaje);





}//FIN DE LA FUNCIÓN