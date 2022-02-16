//Instruccion While
//Parodi Rodrigo
//Ejercicio 03
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada !="utn750")
	{
		alert("clave incorrecta");
		claveIngresada = prompt("Vuelva a ingresar la clave");
	}

	alert("Clave correcta");

}//FIN DE LA FUNCIÓN
