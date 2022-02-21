/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos =0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	let max = 100;
	let min = 1;

	numeroSecreto=Math.floor(Math.random() * (max - min)) + min;

	alert("El juego a comenzado, Porfavor ingrese un numero y haga click en verificar");

}

function verificar()
{
	
	let numeroIngresado;
	let mensaje;				//ASIGNAR VARIABLES
	let mensaje2;
	let ganador;


	numeroIngresado=document.getElementById('txtIdNumero').value;   //NUMERO INGRESADO
	contadorIntentos= contadorIntentos + 1;          //CALCULAR INTENTOS

	
	if(numeroIngresado > numeroSecreto)         //PARA SABER SI ME PASE DEL NUMERO SECRETO O NO
	{
		mensaje="Te pasaste, el numero esta mas abajo";
	}
	else
	{
		if(numeroIngresado < numeroSecreto)
		{
			mensaje="Falta mas , el numero esta mas arriba";
		}
		else															//MENSAJE DE GANADOR
		{
			mensaje=" Ganaste el juego!!! Total de intentos : "+contadorIntentos;
			ganador=0;									//PARA PODER ENTRAR AL SWITCH CUANDO EL USUARIO GANE
		}
	}

	switch(ganador)
	{
		case 0:
			switch(contadorIntentos)						//MENSAJE DEPENDIENDO EN QUE INTENTO GANE
			{
				case 1:
					mensaje2="Usted es un psiquico!!!";
				break;
				case 2:
					mensaje2="Exelente percepcion!!!";
				break;
				case 3:
					mensaje2="Esto es suerte!!!";
				break;
				case 4:
					mensaje2="Excelente tecnica!!!";
				break;
				case 5:
					mensaje2="Usted esta en la media!!!";
				break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					mensaje2="Falta de tecnica!!!";
				break;
				default:
					mensaje2="Afortunado en el amor!!!";
				break;
			}
			alert(mensaje2);
		break;

		
	}
	

	document.getElementById('txtIdIntentos').value=contadorIntentos;
	
	alert(mensaje);
}//FIN