 /*
let btnGris = document.getElementById("gris");
let btnAzul = document.getElementById("azul");
let btnRojo = document.getElementById("rojo");
let btnPlata = document.getElementById("plata");
let imgChange = document.getElementById("imgChange");
let color = document.getElementById("color")


btnGris.onclick = function() {
   imgChange.src = src="./img/1-Boxer-ct-100-es-gris-grafito.png"

   color.innerText="Gris Grafeno"

};

btnAzul.onclick = function() {
   imgChange.src =src="./img/1-Boxer-ct-100-es-azul.png" 
   color.innerText="Azul"
}

btnRojo.onclick = function() {
   imgChange.src = src="./img/1-Boxer-ct-100-es-rojo.png"
   color.innerText="Rojo sangre"
}

btnPlata.onclick = function() {
   imgChange.src =  src="./img/1-Boxer-ct-100-es-gris.png"
   color.innerText="Plata"
}
*/



 
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

