const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const tituloResultado = document.querySelector(".resultado__title");
const textoResultado = document.querySelector(".resultado__text");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function validarTexto(textArea) {
  let textoEscrito = document.querySelector(".text-area").value;
  let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù'1234567890]/g;
  let validador = textoEscrito.match(caracteres);

  if (validador || validador === "") {
    alert("Solo son permitidas letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function btnEncriptar() {
  if (textArea.value.trim() === "") {
    alert("Ningún mensaje fue encontrado, Ingrese texto");
    location.reload();
    return true;
  }
  if (!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    tituloResultado.style.display = "none";
    textoResultado.style.display = "none";
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["a", "ai"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["a", "ai"],
    ["u", "ufat"],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function btnCopiar() {}
function copy() {
  texto = document.querySelector(".mensaje");
  texto.select();
  document.execCommand("copy");
  inicial();
  limpiarCaja(".text-area");
  Swal.fire({
    icon: "success",
    title: "Copiado",
    text: "El texto ha sido copiado al portapapeles.",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Cerrar",
    timer: 3000, // Cierra automáticamente después de 3000 milisegundos (3 segundos)
    timerProgressBar: true, // Muestra una barra de progreso para el temporizador
  });
}
