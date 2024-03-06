document.getElementById('result').addEventListener('blur', function() {
    var resultTextArea = document.getElementById('result');
    var image = document.getElementById('clickable-image');
    var button = document.querySelector('.button-tres');
    if (resultTextArea.value.trim() === '') {
        image.style.display = 'block';
        button.style.visibility = 'hidden';
    }
});

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
        document.querySelector('.button-tres').style.visibility = 'visible';
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
    document.querySelector('.button-tres').style.visibility = 'visible';
    document.getElementById('clickable-image').style.display = 'none';
    } else {
        var inputElement = document.getElementById('inputTextArea');
        inputElement.focus();
    }
}

document.getElementById('result').addEventListener('input', function() {
    var image = document.getElementById('clickable-image');
    var resultTextArea = document.getElementById('result');
    if (resultTextArea.value.trim() !== '') {
        image.style.display = 'none'; 
    } else {
        image.style.display = 'block'; 
    }
});

/*document.getElementById('result').addEventListener('input', function() {
    var button = document.querySelector('.button-tres');
    var resultTextArea = document.getElementById('result');
    if (resultTextArea.value.trim() !== '') {
        button.style.visibility = 'visible'; // Hacer visible el botón cuando se empiece a escribir en el área de texto
    } else {
        button.style.visibility = 'hidden'; // Ocultar el botón si el área de texto está vacía
    }
});*/

document.getElementById('result').addEventListener('input', function() {
    var image = document.getElementById('clickable-image');
    var button = document.querySelector('.button-tres');
    var resultTextArea = document.getElementById('result');
    if (resultTextArea.value.trim() !== '') {
        button.style.visibility = 'visible';
        image.style.display = 'none'; // Ocultar la imagen del detective si el área de texto tiene cualquier tipo de actividad
    } else {
        button.style.visibility = 'hidden';
        image.style.display = 'block'; // Mostrar la imagen del detective si el área de texto está vacía
    }
});

document.getElementById('result').addEventListener('change', function() {
    var image = document.getElementById('clickable-image');
    var button = document.querySelector('.button-tres');
    var resultTextArea = document.getElementById('result');
    if (resultTextArea.value.trim() !== '') {
        button.style.visibility = 'visible';
        image.style.display = 'none'; // Ocultar la imagen del detective si el área de texto tiene cualquier tipo de actividad
    } else {
        button.style.visibility = 'hidden';
        image.style.display = 'block'; // Mostrar la imagen del detective si el área de texto está vacía
    }
});