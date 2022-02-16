/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let mensaje;
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	
	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		alert("Sexo incorrecto");
		sexoIngresado = prompt("Ingrese si es f o m");
	}
	if(sexoIngresado == "f")
	{
		mensaje="Su sexo es Femenino";
	}
	else
	{
		mensaje="Su sexo es Masculino";
	}

	

	txtIdSexo.value=mensaje;
}//FIN DE LA FUNCIÓN