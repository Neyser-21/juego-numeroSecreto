let contador = 1;
let numeroMaximo = 10;
//let numeroUsuario = verificarIntentoUser()
let numeroUsuario
let numeroSecreto;
// Array para almacenar los números sorteados
let numerosSorteados = []
function AsignarTextoElemento(elemento, texto){
    let elementosHtml = document.querySelector(elemento)
    elementosHtml.innerHTML = texto;

}
// Función para generar un número secreto
function generarNumeroSecreto() {
    // Genera un número aleatorio entre 1 y 10
    numeroSecreto = Math.floor(Math.random() * 10) + 1;

    if (numerosSorteados.length == numeroMaximo){

        AsignarTextoElemento('p','Lo sentimos llegaste al maximo de intentos. prueba mas tarde');

    } else {

        // Verifica si el número generado ya está en la lista de números sorteados
        if (numerosSorteados.includes(numeroSecreto)) {
            //includes es un método que verifica si un array contiene un elemento específico
            // Si el número ya está en la lista, llama a la función de nuevo para generar otro número
            return generarNumeroSecreto();
        } else {
            // Si el número no está en la lista, lo agrega a la lista de números sorteados
            numerosSorteados.push(numeroSecreto);
            // Retorna el número secreto generado
            return numeroSecreto;
        }

    }

}

function verificarIntentoUser(){
    //return numeroUsuario = parseInt(document.getElementById('valorUsuario').value)
    numeroUsuario = parseInt(document.getElementById('valorUsuario').value)
    console.log(numeroUsuario); 

    if (numeroSecreto == numeroUsuario){
        AsignarTextoElemento('p', `acertaste en ${contador} ${contador > 1 ? "veces" : "vez"}`);
        //de esta manera se activa el boton para poder usar 
        document.getElementById('reiniciar').removeAttribute('disabled');
        //document.querySelector('#reiniciar').removeAttribute('disale');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    } 

    else if (numeroUsuario > numeroSecreto){
        AsignarTextoElemento('p', 'el numero esperado es menor');
    } else {
        AsignarTextoElemento('p', 'el numero es mayor');
    }

    contador ++;
    reiniciarJuego();
    return;

}

//funcion que reinicia el juego para volver a jugar al acertar
function reiniciarJuego(){
    document.querySelector("#valorUsuario").value = '';
}

function nuevoJuego(){
    //limiar por completo el imput
    reiniciarJuego();

    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //nuevo numero secreto
    generarNumeroSecreto();
    //nuevamente desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.querySelector('#intentar').removeAttribute('disabled');


}

//llamamos a la funcion y agragamos el elemento h1, y texto p
condicionesIniciales();

//asignamos una funcion con los mensajes que se mostraran 
function condicionesIniciales(){
    AsignarTextoElemento('h1','juego adivina el numero');
    AsignarTextoElemento('p','indica un numero del 1 al 10');
    AsignarTextoElemento(`p`,`indica un numero del 1 al ${numeroMaximo}`);
    generarNumeroSecreto();
    contador = 1
}
