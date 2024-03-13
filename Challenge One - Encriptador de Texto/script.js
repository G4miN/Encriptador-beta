const toGetTextArea = document.querySelector(".text-area");
const mensaje = document.querySelector("#mensaje");
const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
var holdValueToDesEncrypt = "";

function btnEncriptador() {
    const textoEncriptado = encriptar(toGetTextArea.value)
    mensaje.value = textoEncriptado
    holdValueToDesEncrypt = textoEncriptado
    toGetTextArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptador() {

    if(holdValueToDesEncrypt === toGetTextArea.value){
        const textoEncriptado = desencriptar(toGetTextArea.value)
        mensaje.value = textoEncriptado
        toGetTextArea.value = "";
        holdValueToDesEncrypt = "";
    }

    const textoEncriptado = desencriptar(mensaje.value)
    toGetTextArea.value = textoEncriptado
    mensaje.value = "";
}

function desencriptar(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function btnCopiarTexto() {
    const START_OF_TEXT = 0;
    const END_OF_TEXT =  0;

    mensaje.setSelectionRange(START_OF_TEXT, END_OF_TEXT);
    mensaje.select();

    navigator.clipboard.writeText(mensaje.value).then(() => {
        alert("Texto copiado");
        mensaje.value = "";
    });
 }
