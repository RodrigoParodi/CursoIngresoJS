//Instruccion
//Parodi Rodrigo
//Ejercicio 5
function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<"13")
	{
		alert("Usted tiene "+edadIngresada+" años y no es adolecente");
	}

	if(edadIngresada>"17")	
	{
		alert("Usted tiene "+edadIngresada+" años y no es adolecente");
	}
}
//FIN DE LA FUNCIÓN