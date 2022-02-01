/*
Rodrigo Parodi
e/s 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreingresado;
	let edadingresada;
	nombreingresado= document.getElementById('txtIdNombre').value;
	edadingresada= document.getElementById('txtIdEdad').value;

	alert("su nombre es "+ nombreingresado +" y tiene "+ edadingresada);




}