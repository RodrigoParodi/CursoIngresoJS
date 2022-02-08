//Instruccion
//Parodi Rodrigo
//Ejercicio numero 2
function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>"17")
	{
		alert("Usted es mayor de edad y tiene "+edadIngresada+" años");
	}

}
//FIN DE LA FUNCIÓN