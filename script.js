
function encryptText() {
    var inputText = document.getElementById('inputTextArea').value;
    var resultTextArea = document.getElementById('result');
    var encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    resultTextArea.value = encryptedText;
    var inputElement = document.getElementById('inputTextArea');
    inputElement.value = '';
}

function decryptText() {
    var inputText = document.getElementById('inputTextArea').value;
    var resultTextArea = document.getElementById('result');
    var decryptedText = inputText
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
    resultTextArea.value = decryptedText;
    var inputElement = document.getElementById('inputTextArea');
    inputElement.value = '';
}

