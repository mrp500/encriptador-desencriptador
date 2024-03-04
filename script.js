
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
    document.getElementById('hideable-image').style.display = 'none';
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
    document.getElementById('hideable-image').style.display = 'none';
    } else {
        var inputElement = document.getElementById('inputTextArea');
        inputElement.focus();
    }
}

document.querySelector('.button-tres').addEventListener('click', function() {
    var image = document.getElementById('hideable-image');
    image.style.display = 'none'; 
});


function hideImageAndFocusTextarea(event) {
    var image = document.getElementById('hideable-image');
    var textarea = document.getElementById('result');
    image.style.display = 'none';
    textarea.focus(); 
}

document.getElementById('hideable-image').onclick = hideImageAndFocusTextarea;

document.getElementById('result').addEventListener('blur', function() {
    var resultTextArea = document.getElementById('result');
    var image = document.getElementById('hideable-image');
    if (resultTextArea.value.trim() === '') {
        image.style.display = 'block'; 
    }
});

document.getElementById('result').onblur = showImageIfNoFocus;

