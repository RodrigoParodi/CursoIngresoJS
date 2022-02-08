//Instruccion
//Parodi Rodrigo
//Ejercicio 6
function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Usted tiene "+edadIngresada+" años y es Mayor de edad");
	}
	else
	{
		if(edadIngresada<13)
		{
			alert("Usted tiene "+edadIngresada+" años y es un Niño");
		}else
		{
			alert("Usted tiene "+edadIngresada +" años y es Adolecente");
		}
	}
}
//FIN DE LA FUNCIÓN