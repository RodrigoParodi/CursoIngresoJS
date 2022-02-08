//Instruccion
//Parodi Rodrigo
//Ejercicio 4
function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>="13")
	{

		if(edadIngresada<="17")
		{

			alert("Usted tiene "+edadIngresada+" años y es adolecente");

		}
	}
}
//FIN DE LA FUNCIÓN