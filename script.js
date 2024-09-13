let pantalla = document.getElementById('pantalla');
let operacionActual = '';
let resultadoActual = '';

function agregarNumero(numero) {
    if (operacionActual === '0') {
        operacionActual = numero;
    } else {
        operacionActual += numero;
    }
    actualizarPantalla();
}

function agregarOperacion(operador) {
    if (operacionActual !== '') {
        operacionActual += operador;
    }
    actualizarPantalla();
}

function agregarDecimal() {
    if (!operacionActual.includes('.')) {
        operacionActual += '.';
    }
    actualizarPantalla();
}

function limpiarPantalla() {
    operacionActual = '';
    resultadoActual = '';
    actualizarPantalla();
}

function borrar() {
    operacionActual = operacionActual.slice(0, -1);
    actualizarPantalla();
}

function actualizarPantalla() {
    pantalla.innerText = operacionActual || '0';
}

function calcular() {
    try {
        resultadoActual = eval(operacionActual);
        if (!isFinite(resultadoActual)) {
            throw new Error('Operación inválida');
        }
        pantalla.innerText = resultadoActual;
        operacionActual = resultadoActual.toString();
    } catch (error) {
        pantalla.innerText = 'Error';
        operacionActual = '';
    }
}
