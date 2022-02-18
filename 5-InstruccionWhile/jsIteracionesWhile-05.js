//Instruccion While
//Parodi Rodrigo
//Ejercicio 05
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let mensaje;
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado=sexoIngresado.toUpperCase();

	while(sexoIngresado!="F" && sexoIngresado!="M") 
	{
		alert("Sexo incorrecto");
		sexoIngresado = prompt("Ingrese si es f o m");
		sexoIngresado=sexoIngresado.toUpperCase();
	}
	if(sexoIngresado == "F")
	{
		mensaje="Su sexo es Femenino";
	}
	else
	{
		mensaje="Su sexo es Masculino";
	}

	

	txtIdSexo.value=mensaje;
}//FIN DE LA FUNCIÓN