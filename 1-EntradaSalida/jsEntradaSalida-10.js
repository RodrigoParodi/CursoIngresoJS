/*
Rodrigo Parodi
e/s 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//let importe;
	//let importeFinal;
	//let descuento;

	//importe=parseInt(document.getElementById('txtIdImporte').value);

	//importeFinal=importe*25/100;

	//descuento=importe - importeFinal;

	//document.getElementById('txtIdResultado').value = descuento;

//EJERCICIO 10 BIS
//RODRIGO PARODI
//en el ejercicio 10 e/s
//lo anterior mas
//se debe pedir el % por prompt

	let importe;
	let importeFinal;
	let descuento;
	let porcentaje;

	importe=parseInt(document.getElementById('txtIdImporte').value);

	porcentaje=prompt("ingrese su porcentaje ");

	importeFinal=importe*porcentaje/100;

	descuento=importe - importeFinal;

	document.getElementById('txtIdResultado').value = descuento;
}

//'txtIdImporte'
//'txtIdResultado'