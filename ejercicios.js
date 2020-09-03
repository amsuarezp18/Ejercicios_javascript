// Ejercicio 1
function secret(messages, type, key){
	var value_return = []
    if( type == 'encrypt'){
        for ( let index = 0; index < messages.length; index++){	
              value_return.push(messages[index]+key);
			}
		}
	else if( type == 'decrypt'){
			for ( let index = 0; index < messages.length; index++){
				value_return.push(messages[index]-key);
			}
	
		}
		return value_return;
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

