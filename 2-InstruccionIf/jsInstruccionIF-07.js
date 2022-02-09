//Instruccion
//Parodi Rodrigo
//Ejercicio 7
function mostrar()
{
	let edadIngresada;
	let estado;

	edadIngresada=document.getElementById('txtIdEdad').value;
	estado=document.getElementById('estadoCivil').value;

	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<18 && estado != "Soltero")
	{
		alert("Usted tiene "+edadIngresada+" Años y es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN