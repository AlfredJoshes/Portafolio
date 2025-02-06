let amigos = [];

function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement("div");
    notificacion.textContent = mensaje;
    notificacion.style.position = "fixed";
    notificacion.style.top = "20px";
    notificacion.style.right = "20px";
    notificacion.style.backgroundColor = "red";
    notificacion.style.color = "white";
    notificacion.style.padding = "10px";
    notificacion.style.borderRadius = "5px";
    document.body.appendChild(notificacion);
    setTimeout(() => notificacion.remove(), 2000);
}

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (!nombre) {
        mostrarNotificacion("Por favor, ingrese un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarNotificacion("Debe ingresar al menos un nombre antes de sortear.");
        return;
    }
    
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</p>`;
    
    // Reiniciar la lista después del sorteo
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}
