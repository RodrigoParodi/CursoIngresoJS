/* 
Rodrigo Parodi
e/s 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreingresado;
	nombreingresado = prompt("ingrese su nombre", "Rodrigo");
	document.getElementById('txtIdNombre').value= "su nombre es "+ nombreingresado;

}

