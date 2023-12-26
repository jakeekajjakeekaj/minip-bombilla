const cambiarFoco = document.getElementById("cambiarFoco");
const cambiarInterruptor = document.getElementById("cambiarInterruptor");
const interruptor = document.querySelector(".interruptor-container");

const cambiarImagenes = ()=> {
    if(cambiarFoco.src.match("img/apagado-1.png") && cambiarInterruptor.src.match("img/off-or.png")) {
        cambiarFoco.src = "img/encendido-1.png";
        cambiarInterruptor.src = "img/on-or.png";
        document.body.style.background = '#888';
    } else {
        cambiarFoco.src = "img/apagado-1.png";
        cambiarInterruptor.src = "img/off-or.png";
        document.body.style.background = '#222'
    }
}

interruptor.addEventListener("click", cambiarImagenes);