
function encryptText() {
    var inputText = document.getElementById('inputTextArea').value;
    if (inputText.trim() !== '') {
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
    document.getElementById('clickable-image').style.display = 'none';
    } else {
        var inputElement = document.getElementById('inputTextArea');
        inputElement.focus();
    }
}

function decryptText() {
    var inputText = document.getElementById('inputTextArea').value;
    if (inputText.trim() !== '') {
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
    document.getElementById('clickable-image').style.display = 'none';
    } else {
        var inputElement = document.getElementById('inputTextArea');
        inputElement.focus();
    }
}

document.querySelector('.button-tres').addEventListener('click', function() {
    var image = document.getElementById('clickable-image');
    image.style.display = 'none'; 
});

function convertToTextArea() {
    var image = document.getElementById('clickable-image');
    var textArea = document.getElementById('result');
    image.style.display = 'none';
    textArea.style.display = 'block';
    textArea.focus();
}


function hideImageAndFocusTextarea(event) {
    var image = document.getElementById('clickable-image');
    var textarea = document.getElementById('result');
    image.style.display = 'none';
    textarea.focus(); 
}

document.getElementById('clickable-image').onclick = hideImageAndFocusTextarea;

document.getElementById('result').addEventListener('blur', function() {
    var resultTextArea = document.getElementById('result');
    var image = document.getElementById('clickable-image');
    if (resultTextArea.value.trim() === '') {
        image.style.display = 'block'; 
    }
});

document.getElementById('result').onblur = showImageIfNoFocus;