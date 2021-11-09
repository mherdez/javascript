
// Statements

let btnNuevo = document.querySelector('#btnNuevo');
let btnPedir = document.querySelector('#btnPedir');
let btnDetener = document.querySelector('#btnDetener');

const cardsPlayer = document.querySelector('#cardsPlayer');
const cardsComputer = document.querySelector('#cardsComputer');

let mazo = [];

// Events

btnNuevo.addEventListener('click', nuevoJuego);
btnPedir.addEventListener('click', pedirCartaJugador);
btnDetener.addEventListener('click', pedirCartaComputadora);

// Start

mazo = crearMazo();