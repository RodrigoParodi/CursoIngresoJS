//Instruccion
//Parodi Rodrigo
//Ejercicio 8
function mostrar()
{
	let edadIngresada;
	let estado;

	edadIngresada=document.getElementById('txtIdEdad').value;
	estado=document.getElementById('estadoCivil').value;

	edadIngresada=parseInt(edadIngresada);

	if(estado == "Soltero" && edadIngresada>17)
	{
		alert("Es soltero, tiene "+ edadIngresada+" años y no es menor");
	}
}//FIN DE LA FUNCIÓN