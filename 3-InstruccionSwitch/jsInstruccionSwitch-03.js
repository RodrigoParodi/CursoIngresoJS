//Instruccion Switch
//Parodi Rodrigo
//Ejercicio 03
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	mesDelAño=document.getElementById('txtIdMes').value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene más de 29 días";
		break;
		default:
			mensaje="Este mes tiene 30 dias o más";
		break;
	}

	alert(mensaje);
	


}//FIN DE LA FUNCIÓN