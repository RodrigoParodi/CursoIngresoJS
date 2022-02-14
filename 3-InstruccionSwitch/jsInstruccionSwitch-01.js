//Instruccio Switch
//Parodi Rodrigo
//Ejercicio 1
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	mesDelAño=document.getElementById('txtIdMes').value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje="Que comiences bien el año!!!";
		break;
		case "Marzo":
			mensaje="A clases!!!";
		break;
		case "Julio":
			mensaje="Se vienen las vacaciones!!!";
		break;
		case "Diciembre":
			mensaje="Felices Fiestas!!!";
		break;
		default:
			mensaje="Este mes no estaba en el enunciado";
		break;
	}

	alert(mensaje);
}