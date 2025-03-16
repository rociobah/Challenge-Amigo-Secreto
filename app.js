/**
 * Lista donde se guardarán los nombres
 */
let amigos = [];

/**
 * Agrega un nuevo amigo al array amigos para ser sorteado.
 * Verificar que el campo del nombre no esté vacío antes de agregarlo y actualizar lista.
 */
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
  
    if (nombreAmigo.trim() === "") {
      alert("Por favor, ingrese un nombre");
    } else {
      amigos.push(nombreAmigo); //Agregar a lista
      document.querySelector("#amigo").value = ""; //Limpiar campo de entrada
      actualizarListaAmigo(); //Llamar función
    }
}
/**
 * actualizar DOM
 */
function actualizarListaAmigo() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = ""; //Limpiar lista existente
  
    for (let index = 0; index < amigos.length; index++) {
      const element = amigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = element;
      listaAmigos.appendChild(listaHTML); //insertar nodo en el DOM
    }
}
/**
 * Verificar que haya un nombre antes de sortear
 * Sorteo aleatorio de amigo
 * Muestra del resultado
 */
function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
        alert("Por favor, ingrese un nombre antes de sortear");
    } else {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = "El amigo sorteado es " + amigos[indiceAmigo];
    }
}
