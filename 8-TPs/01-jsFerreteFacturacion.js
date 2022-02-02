/*
Parodi Rodrigo
e/s TP 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let primerPrecio;
	let segundoPrecio;
	let tercerPrecio;
	let precioTotal;

	primerPrecio=document.getElementById('txtIdPrecioUno').value;
	segundoPrecio=document.getElementById('txtIdPrecioDos').value;
	tercerPrecio=document.getElementById('txtIdPrecioTres').value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	precioTotal=primerPrecio + segundoPrecio + tercerPrecio;

	alert("Su total es $"+precioTotal);
}
function Promedio () 
{
	let primerPrecio;
	let segundoPrecio;
	let tercerPrecio;
	let precioTotal;
	let Promedio;

	primerPrecio=document.getElementById('txtIdPrecioUno').value;
	segundoPrecio=document.getElementById('txtIdPrecioDos').value;
	tercerPrecio=document.getElementById('txtIdPrecioTres').value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	precioTotal=primerPrecio +segundoPrecio + tercerPrecio;

	Promedio=precioTotal/3;

	alert("El promedio es $"+ Promedio);
}
function PrecioFinal () 
{
	let primerPrecio;
	let segundoPrecio;
	let tercerPrecio;
	let precioTotal;
	let iva;
	let precioFinal;

	primerPrecio=document.getElementById('txtIdPrecioUno').value;
	segundoPrecio=document.getElementById('txtIdPrecioDos').value;
	tercerPrecio=document.getElementById('txtIdPrecioTres').value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	precioTotal=primerPrecio + segundoPrecio + tercerPrecio;

	iva=precioTotal*21/100;

	precioFinal=precioTotal + iva;

	alert("Su precio es $"+ precioFinal);

	
}


//'txtIdPrecioUno'
//'txtIdPrecioDos'
//'txtIdPrecioTres'