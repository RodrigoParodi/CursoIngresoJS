/*
Parodi Rodrigo
e/s 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let resultadoSumado;

	sueldo=parseInt(document.getElementById('txtIdSueldo').value);
	
	resultado=sueldo*10/100;

	resultadoSumado=sueldo + resultado;

	document.getElementById('txtIdResultado').value=resultadoSumado;


	


	
}

//'txtIdSueldo'
//'txtIdResultado'