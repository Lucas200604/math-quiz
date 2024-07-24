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

let indiceSuma = 0;
const numSumas = prompt(`Ingrese la cantidad de sumas:`);
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

const sumas = generarSumas(numSumas);



// Genera sumas aleatorias y las guarda en arrays asociativos
function generarSumas(num) {
    const sumasLista = [];
    for (let i = 0; i < num; i++) {
        const a = Math.floor(Math.random() * (max - min)) + min;
        const b = Math.floor(Math.random() * (max - min)) + min;
        sumasLista.push({ a, b, result: a + b });
    }
    return sumasLista;
}


// Consulta si debe mostrar otra suma

function accesoSum() {
    if (indiceSuma < numSumas) {
        const { a, b } = sumas[indiceSuma];
        operationContainer.textContent = `${a} + ${b} = ?`;
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
    const { result } = sumas[indiceSuma];

    if (respuestaUsuario === result) {
        respuestasCorrectas++;  // Sumando 1 si es correcto
        mensaje.textContent = '¡Correcto!';
        mensaje.style.color = `#7DDA58`
    } else {
        respuestasIncorrectas++; // Sumando 1 si es incorrecto
        mensaje.textContent = `Incorrecto. La respuesta era ${result}.`;
        mensaje.style.color = `#E4080A`;
    }

    indiceSuma++;
    setTimeout(accesoSum, 1000);
}



window.onload = accesoSum;  //Cuando carga se ejecuta la funcion