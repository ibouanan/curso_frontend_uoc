

//Listado de variables
var n1,n2,vsuma,i;
var pares,inpares
var array = [];

//Entrada de numeros
n1 = parseInt(prompt('Ingresar numero 1'));
n2 = parseInt(prompt('Ingresar numero 2'));
vsuma = n1 + n2;


//Funcion suma
function suma(n1,n2,vsuma) {
    vsuma = n1 + n2;
    mensaje_suma="La suma de los dos numeros es ";
    return  vsuma;
}

//Funcion imprimir numeros pares
function listapares(n1,n2,array) {
        
        for ( i = n1; i <= n2; i++) {
        if ((i % 2 === 0) !== 0) {
            array.push(i);
        } }
        if (n1 == n2) {
            if (n2 % i == 0) {
                mensaje_primos = "Los numeros introducidos son primos ";
            } else {
                mensaje_primos= `Solo el numero  ${n1}  es primo`;
            }
        } else {
            if (n2 % i == 0) {
                mensaje_primos = `Solo el numero  ${n2}  es primo`;
            } else {
                mensaje_primos = "Ninguno de los numeros es primo ";
            }
        }    
    return array;
    }
    
       

//Funcion identificar numeros primos
function numerosprimos(n1,n2){
       if (n1 % i == 0) {
        if (n2 % i == 0) {
            mensaje_primos = "Los numeros introducidos son primos ";
        } else {
            mensaje_primos= `Solo el numero  ${n1}  es primo`;
        }
    } else {
        if (n2 % i == 0) {
            mensaje_primos = `Solo el numero  ${n2}  es primo`;
        } else {
            mensaje_primos = "Ninguno de los numeros es primo ";
        }
    }    
    return mensaje_primos;
  } 
  
  //Funcion para saber si los numeros son pares
  function numerospares(n1, n2) {    
    if (n1 % 2 === 0) {
        if (n2 % 2 === 0) {
            mensaje_pares = "Los dos numeros son pares ";
        } else {
            mensaje_pares= `El numero  ${n1}  es par`;
        }
    } else {
        if (n2 % 2 === 0) {
            mensaje_pares = `El numero  ${n2}  es par`;
        } else {
            mensaje_pares = "Ninguno de los numero es par";
        }
    }   
    return mensaje_pares;
}

//Funcion para unir todos los mensajes
function concatenar() {
    let mensaje_concatenado = "La suma es "+ suma(n1,n2,vsuma) + "\n"  + numerospares(n1,n2) + "\n" + numerosprimos(n1,n2)  + "\n"+  "Los numeros pares intermedios son " +listapares( n1,n2,array)+ "\n";
    return mensaje_concatenado;
    }

//Salida de mensaje en alert
mensaje_alert = concatenar(); 
alert(mensaje_alert )
