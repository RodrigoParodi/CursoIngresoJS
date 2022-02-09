//Instruccion
//Parodi Rodrigo
//Ejercicio 10
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numeroRandom;
	let mensaje;

	numeroRandom=Math.floor(Math.random() * 11);

	if(numeroRandom>8)
	{
		mensaje="Su nota es un "+numeroRandom+" excelente";
	}
	else
	{
		if(numeroRandom <4)
		{
			mensaje="Su nota es un "+numeroRandom+" Vamos, la proxima se puede";
		}else
		{
			mensaje="Su nota es un "+numeroRandom+" Aprobado";
		}
	}

	alert(mensaje);
}
//FIN DE LA FUNCIÓN