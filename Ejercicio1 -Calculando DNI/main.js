// Escribe aquí tu codigo Javascript}
var letra =  ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 
				'D', 'X','B', 'N', 'J', 'Z', 'S', 
				'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var num = parseInt(prompt("Ingrese dni: "));
if(num>0 || num>=99999999){

	var user = prompt("Ingrese letra: ").toUpperCase();
	var resto = null;
	resto=num%23;

	if( user===letra[resto]){
		alert("Letra ingresada correcta!");
	}else{
		alert("Letra inválida")
	}
}else{
	alert("Numero invalido");
}

