/*3.	
Parodi Rodrigo
TP e/s 03
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
	let centigrados;
	let mensaje;

	temperatura=document.getElementById('txtIdTemperatura').value;

	temperatura=parseInt(temperatura);

	centigrados=(temperatura-32)/1.8;

	mensaje=temperatura+"° Fahrenheit son "+centigrados.toFixed(0)+"° centigrados";

	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	let temperatura;
	let gradosFa;

	temperatura=document.getElementById('txtIdTemperatura').value;

	temperatura=parseInt(temperatura);

	gradosFa=(temperatura*1.8)+32;

	alert(temperatura+"° centigrados son "+gradosFa.toFixed(0)+"° grados fahrenheit");
}

//'txtIdTemperatura'