//Instruccion Switch
//Rodrigo Parodi
//Ejercicio 04
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	mesDelAño=document.getElementById('txtIdMes').value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes tiene 28 dias.";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Este mes tiene 30 dias.";
		break;
		default:
			mensaje="Este mes tiene 31 dias.";
		break;
	}

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN