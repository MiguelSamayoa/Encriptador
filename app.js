
var Resultado
function encriptar() {
    let input = document.getElementById('input').value;

    input = input.replace(/e/g, 'enter');
    input = input.replace(/i/g, 'imes');
    input = input.replace(/a/g, 'ai');
    input = input.replace(/o/g, 'ober');
    input = input.replace(/u/g, 'ufat');

    document.getElementById('output').innerText = input;
}


function desencriptar() {
    let input = document.getElementById('input').value;

    input = input.replace(/enter/g, 'e');
    input = input.replace(/imes/g, 'i');
    input = input.replace(/ai/g, 'a');
    input = input.replace(/ober/g, 'o');
    input = input.replace(/ufat/g, 'u');

    document.getElementById('output').innerText = input;
    console.log(input);

}


function copiar(){
    let output = document.getElementById('output').textContent;

    navigator.clipboard.writeText(output);
    
}