//Instruccion Switch
//Parodi Rodirog
//Ejercicio 10
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	let destino;
	let mensaje;
	
	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje="Se puede viajar a "+destino;
				break;
				default:
					mensaje="No se puede viajar a "+destino;
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje="Se puede viajar a "+destino;
				break;
				default:
					mensaje="No se puede viajar a "+destino;
				break;
			}
		break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje= "No se puede viajar a "+destino;
				break;
				default:
					mensaje="Se puede viajar a "+destino;
				break;
			}
		break;
		default:
			mensaje="Se puede viajar a "+destino;
		break;
	}

	alert(mensaje);
}