// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos el Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo.
function agregarAmigo() {
    const input = document.getElementById("amigo");  
    const nombre = input.value.trim();  
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (!amigos.includes(nombre)) {
        amigos.push(nombre);  
        actualizarLista();  
    } else {
        alert("Este nombre ya ha sido agregado.");
    }

    input.value = "";  
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  

    amigos.forEach((amigo) => {
        const li = document.createElement("li");  
        li.textContent = amigo;
        lista.appendChild(li); 
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para el sorteo.");
        return;
    }

    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El ganador es: <strong>${amigos[indiceGanador]}</strong> 🎉</li>`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];  // Vacía el array de amigos
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
}
