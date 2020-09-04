// Ejercicio 1
function secret(messages, type, key){

	if(type=='decrypt'){
		key *=-1
	  }
	
	for ( let index = 0; index < messages.length; index++){	
		messages[index] = messages[index] + key;
		}  
	
	return messages;
  }
	
// Prueba de ejercicio 1	
// secret([1, 2, 3, 1], 'encrypt', 1);
// secret([2, 3, 4, 2], 'decrypt', 1);

//---------------------------------------------------------------

// Ejericicio 2 ( Algoritmo de Euclides )
var mcd = (a, b) => {
    if ( b == 0) {
        return a;
    }

    return mcd(b, a % b);
};

// Prueba de ejercicio 2
// console.log(mcd(18,24));

