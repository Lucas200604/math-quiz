let operationContainer = document.getElementById("operation-container");
let pantallaQuiz = document.getElementById("pantalla-quiz");
let inputResult = document.getElementById("result-input");
let botonSiguiente = document.getElementById("submit");
let pantallaResultados = document.getElementById("pantalla-resultados");

let mensaje = document.getElementById('mensaje');  // Contenedor de mensaje incorrecto o correcto

let spanCorrectas = document.getElementById("correctas"); // Contenedor respuestas correctas
let spanIncorrectas = document.getElementById("incorrectas"); // Contenedor respuestas incorrectas
let spanPuntaje = document.getElementById("puntaje"); // Contenedor puntaje

let min = 1;
let max = 50;

let indiceMultiplicacion = 0;
const numMultiplicaciones = prompt(`Ingrese la cantidad de multiplicaciones:`);
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

const multiplicaciones = generarMultiplicaciones(numMultiplicaciones);



// Genera sumas aleatorias y las guarda en arrays asociativos
function generarMultiplicaciones(num) {
    const multiplicacionesLista = [];
    for (let i = 0; i < num; i++) {
        const a = Math.floor(Math.random() * (max - min)) + min;
        const b = Math.floor(Math.random() * (max - min)) + min;
        multiplicacionesLista.push({ a, b, result: a * b });
    }
    return multiplicacionesLista;
}


// Consulta si debe mostrar otra suma

function accesoMul() {
    if (indiceMultiplicacion < numMultiplicaciones) {
        const { a, b } = multiplicaciones[indiceMultiplicacion];
        operationContainer.textContent = `${a} x ${b} = ?`;
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
    const { result } = multiplicaciones[indiceMultiplicacion];

    if (respuestaUsuario === result) {
        respuestasCorrectas++;  // Sumando 1 si es correcto
        mensaje.textContent = '¡Correcto!';
        mensaje.style.color = `#7DDA58`
    } else {
        respuestasIncorrectas++; // Sumando 1 si es incorrecto
        mensaje.textContent = `Incorrecto. La respuesta era ${result}.`;
        mensaje.style.color = `#E4080A`;
    }

    indiceMultiplicacion++;
    setTimeout(accesoMul, 1000);
}



window.onload = accesoMul;  //Cuando carga se ejecuta la funcion
