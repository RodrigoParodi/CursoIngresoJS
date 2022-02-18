//Instruccion While
//Parodi Rodirog
//Ejercicio 04
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let mensaje;
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado<0 || numeroIngresado >9)
	{
		alert("El numero ingresado no es correcto");
		numeroIngresado = prompt("Porfavor ingrese un numero entre el 0 y el 9.");
	}

	mensaje="Su numero ingresado es "+numeroIngresado;

	document.getElementById('txtIdNumero').value = mensaje;
	
}//FIN DE LA FUNCIÓN 