// Escribe aquí tu codigo Javascript
var array = ['Ana','Ester'];

function push(string){
	array.push(string);
}
do{
	var string =prompt("Ingresa un nombre a la lista");
	push(string);
	if(string===""){
		break;
	}
}while(string=!"")

for (name in array)
  document.write(array[name]+"</br>");


