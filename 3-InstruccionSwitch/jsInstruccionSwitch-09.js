//Instruccion Switch
//Parodi Rodrigo
//Ejercicio 09
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	let destino;
	let precio;
	let precioTotal;
	let precioFinal;
	let porcentaje;
	let mensaje;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje=20;
				break;
				case "Mar del plata":
					porcentaje=-20;
				break;
				default:
					porcentaje=-10;
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case"Bariloche":
					porcentaje=-20;
				break;
				case "Mar del plata":
					porcentaje=20;
				break;
				default:
					porcentaje=10;
				break;
			}
		break;
		default:
			switch(destino)
			{
				case "Cordoba":
					porcentaje=0;
				break;
				default:
					porcentaje=10;
			}
	}

	precio=15000;
	precioTotal=precio * porcentaje/100;
	precioFinal=precio + precioTotal;

	mensaje="Para ir a "+destino+" en "+estacionIngresada+" usted debe pagar un total de $"+precioFinal;

	alert(mensaje);
}//FIN DE LA FUNCIÓN