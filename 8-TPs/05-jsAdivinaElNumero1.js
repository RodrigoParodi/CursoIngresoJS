/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;

function comenzar()
{
	let max = 100;
	let min = 1;
	
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor(Math.random() * (max - min)) + min;
	
	//alert(numeroSecreto );
	

}

function verificar()
{
	let numeroIngresado;
	
	numeroIngresado=document.getElementById('txtIdNumero').value;
	contadorIntentos = contadorIntentos + 1;

	if(numeroIngresado > numeroSecreto)
	{
		alert("Te pasaste, el numero esta mas abajo");
	}
	else
	{
		if(numeroIngresado < numeroSecreto)
		{
			alert("Falta mas , el numero esta mas arriba");
		}
		else
		{
			if(numeroIngresado == numeroSecreto)
			{
				alert("Felicidades, Ganaste el juego con un total de "+contadorIntentos+" intentos.");
			}
		}
	}
	document.getElementById('txtIdIntentos').value = contadorIntentos;
}