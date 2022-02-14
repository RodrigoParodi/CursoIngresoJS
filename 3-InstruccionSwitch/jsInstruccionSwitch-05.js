//Instruccion Switch
//Parodi Rodrigo
//Ejercicio 05
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia=document.getElementById('txtIdHora').value;
	let mensaje;

	switch(horaDelDia)
	{
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			mensaje="Son las "+horaDelDia+" de la tarde.";
		break;
		case "20":
		case "21":
		case "22":
		case "23":
			mensaje="Son las "+horaDelDia+" de la noche.";
		break;
		default:
			mensaje="Son las "+horaDelDia+" de la mañana.";
	}

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN