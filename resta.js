let operationContainer = document.getElementById("operation-container")
let pantallaQuiz = document.getElementById("pantalla-quiz")
let inputResult = document.getElementById("result-input")
let botonSiguiente = document.getElementById("submit")
let pantallaResultados = document.getElementById("pantalla-resultados")

let mensaje = document.getElementById('mensaje')  // Contenedor de mensaje incorrecto o correcto

let spanCorrectas = document.getElementById("correctas") // Contenedor respuestas correctas
let spanIncorrectas = document.getElementById("incorrectas") // Contenedor respuestas incorrectas
let spanPuntaje = document.getElementById("puntaje"); // Contenedor puntaje

let min = 1;
let max = 50;

let indiceResta = 0;
const numRestas = prompt(`Ingrese la cantidad de restas:`);
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

const restas = generarRestas(numRestas);




function generarRestas(num) {
    const restasLista = [];
    for (let i = 0; i < num; i++) {
        const a = Math.floor(Math.random() * (max - min)) + min;
        const b = Math.floor(Math.random() * (max - min)) + min;
        restasLista.push({ a, b, result: a - b });
    }
    return restasLista;
}




function accesoRes() {
    if (indiceResta < numRestas) {
        const { a, b } = restas[indiceResta];
        operationContainer.textContent = `${a} - ${b} = ?`;
        inputResult.value = '';
        mensaje.textContent = '';
    } else {
        pantallaQuiz.style.display = `none`;
        mensaje.textContent = '';
        pantallaResultados.style.display = `flex`;
        spanCorrectas.textContent = respuestasCorrectas; // Mostrando valor de correctas al usuario
        spanIncorrectas.textContent = respuestasIncorrectas; // Mostrando valor de incorrectas al usuario
        spanPuntaje.textContent = `${respuestasCorrectas * 10} ptos`; // Mostrar puntaje total
    }
}




function resultados() {
    const respuestaUsuario = parseInt(inputResult.value);
    const { result } = restas[indiceResta];

    if (respuestaUsuario === result) {
        respuestasCorrectas++;  // Sumando 1 si es correcto
        mensaje.textContent = '¡Correcto!';
        mensaje.style.color = `#7DDA58`
    } else {
        respuestasIncorrectas++; // Sumando 1 si es incorrecto
        mensaje.textContent = `Incorrecto. La respuesta era ${result}.`;
        mensaje.style.color = `#E4080A`;
    }

    indiceResta++;
    setTimeout(accesoRes, 1000);
}



window.onload = accesoRes;  //Cuando carga se ejecuta la funcion
