let inputRojo = document.getElementById('rojo');
let inputVerde = document.getElementById('verde');
let inputAzul = document.getElementById('azul');

let textoRojo = document.getElementById('texto-rojo');
let textoVerde = document.getElementById('texto-verde');
let textoAzul= document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

function actualizarColor (rojo,verde,azul){
    let color = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = color;

}

inputRojo.addEventListener('change', (e)=>{
    rojo = e.target.value;
    textoRojo.textContent = rojo;
    actualizarColor(rojo,verde,azul)
})

inputAzul.addEventListener('change',(e)=>{
    azul = e.target.value;
    textoAzul.textContent = azul;
    actualizarColor(rojo, verde, azul);
})

inputVerde.addEventListener('change',(e)=>{
    verde = e.target.value;
    textoVerde.textContent = verde;
    actualizarColor(rojo,verde,azul);
})