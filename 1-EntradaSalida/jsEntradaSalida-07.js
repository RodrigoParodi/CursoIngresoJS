/*
Rodrigo Parodi
e/s 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos
	let suma;

	numeroUno= document.getElementById('txtIdNumeroUno').value;
	numeroDos= document.getElementById('txtIdNumeroDos').value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);

	suma=numeroUno+numeroDos;

	alert("El resultado es "+suma);
}

function restar()
{
	let numeroUno;
	let numeroDos
	let resta;

	numeroUno= document.getElementById('txtIdNumeroUno').value;
	numeroDos= document.getElementById('txtIdNumeroDos').value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);

	resta=numeroUno-numeroDos;

	alert("El resultado es "+resta);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos
	let multiplicar;

	numeroUno= document.getElementById('txtIdNumeroUno').value;
	numeroDos= document.getElementById('txtIdNumeroDos').value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);

	multiplicar=numeroUno*numeroDos;

	alert("El resultado es "+multiplicar);
}

function dividir()
{
	let numeroUno;
	let numeroDos
	let dividir;

	numeroUno= document.getElementById('txtIdNumeroUno').value;
	numeroDos= document.getElementById('txtIdNumeroDos').value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);

	dividir=numeroUno/numeroDos;

	alert("El resultado es "+dividir);
}

//'txtIdNumeroUno'
//'txtIdNumeroDos'