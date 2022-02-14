//Instruccion Switch
//Parodi Rodrigo
//Ejercicio 06
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia=document.getElementById('txtIdHora').value;
	let mensaje;

	switch(horaDelDia)
	{
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "20":
		case "21":
		case "22":
		case "23":
			mensaje="La hora es "+horaDelDia+" y es de noche.";
		break;
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje="La  hora es "+horaDelDia+" y es de mañana.";
		break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			mensaje="La hora es "+horaDelDia+" y es de tarde.";
		break;
		default:
			mensaje="Esta hora no existe. Porfavor ingrese una correcta."
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN