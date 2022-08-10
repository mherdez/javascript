

// REFERNCIAS HTML
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
const btnPedirCarta = document.querySelector('#btnPedirCarta');
const btnDetener = document.querySelector('#btnDetener');
const imgCartas = document.querySelectorAll('img');
const imgCartasJugador = document.querySelector('.cartasJugador');
const imgCartasComputadora = document.querySelector('.cartasComputadora');
const puntosJugador = document.querySelectorAll('small')[0];
const puntosComputadora = document.querySelectorAll('small')[1];
const cartasJugador = document.querySelector('.cartasJugador');

// VARIABLES
let mazo = [];
let totalPuntosJugador = 0;
let totalPuntosComputadora = 0;

// EVENTOS
btnNuevoJuego.addEventListener('click', () => {
   nuevoJuego();
});

// OPTIMIZAR FUNCION (JUGADOR Y COMPUTADORA SON SIMILARES)
// OPTIMIZAR LA CREACION DE LA CARTA
btnPedirCarta.addEventListener('click', () => {
   const carta = crearCarta();
   totalPuntosJugador += valorCarta(carta);
   puntosJugador.textContent = totalPuntosJugador;
   if (totalPuntosJugador > 21) {
      btnDisabled();
      turnoComputadora();
   }
})

btnDetener.addEventListener('click', () => {
   btnDisabled();
   turnoComputadora();
})

// FUNCIONES
const crearMazo = () => {
   let especiales = ['A', 'J', 'Q', 'K'];
   let palo = ['H', 'S', 'D', 'C'];

   for (let n = 2; n <= 10; n++) {
      for (let p of palo) {
         mazo.push(n + p)
      }
   }
   for (let e of especiales) {
      for (let p of palo) {
         mazo.push(e + p);
      }
   }
   mazo = _.shuffle(mazo);
   // console.log(mazo)
}

const crearCarta = () => {
   const carta = document.createElement('img');
   const valor = pedirCarta();
   const src = `./assets/cartas/${valor}.png`;
   carta.src = src;
   cartasJugador.append(carta)
   return valor;
}

const pedirCarta = () => {
   return mazo.shift();
}

const valorCarta = (carta) => {
   let valor = carta.substring(0, carta.length - 1);
   if (isNaN(valor)) {
      valor = (valor === 'A') ? 11 : 10;
   } else {
      valor *= 1
   }
   return valor;
}

const btnDisabled = () => {
   btnNuevoJuego.removeAttribute('disabled');
   btnNuevoJuego.classList.remove('btn-disabled-red');
   btnNuevoJuego.classList.add('bg-red');
   btnPedirCarta.setAttribute('disabled', true);
   btnPedirCarta.classList.add('btn-disabled-blue');
   btnPedirCarta.classList.remove('bg-blue');
   btnDetener.setAttribute('disabled', true);
   btnDetener.classList.remove('bg-blue');
   btnDetener.classList.add('btn-disabled-blue');
}

const btnEnabled = () => {
   btnNuevoJuego.setAttribute('disabled', true);
   btnNuevoJuego.classList.add('btn-disabled-red');
   btnNuevoJuego.classList.remove('bg-red');
   btnPedirCarta.removeAttribute('disabled');
   btnPedirCarta.classList.remove('btn-disabled-blue');
   btnPedirCarta.classList.add('bg-blue');
   btnDetener.removeAttribute('disabled');
   btnDetener.classList.remove('btn-disabled-blue');
   btnDetener.classList.add('bg-blue');
}

const turnoComputadora = () => {
   let winPlayer = false;
   do {
      const carta = pedirCarta();
      imgCartasComputadora.innerHTML += `<img src="./assets/cartas/${carta}.png">`
      totalPuntosComputadora += valorCarta(carta);
      puntosComputadora.textContent = totalPuntosComputadora;
      if (totalPuntosJugador > 21) {
         winPlayer = false;
         break;
      }
      if (totalPuntosComputadora >= totalPuntosJugador && totalPuntosComputadora <= 21) {
         winPlayer = false;
         break;
      }
   } while (totalPuntosComputadora <= 21)
   if (totalPuntosComputadora > 21) {
      winPlayer = true;
   }
   const finJuego = setTimeout(() => {
      if (winPlayer) {
         document.querySelector('.mensaje').innerHTML = ' <img src="https://media.giphy.com/media/lnyPptAfGwHeTdoQDk/giphy-downsized-large.gif" alt=""><h2>Quieres volver a jugar? <span>SI</span>/<span>NO</span></h2>'
         const si = document.querySelectorAll('span')[0];
         const no = document.querySelectorAll('span')[1];
         si.addEventListener('click', () => {
            nuevoJuego();
         })
         no.addEventListener('click', () => {
            alert("Gracias por jugar Blackjack")
            location.reload();
         })
      } else {
         document.querySelector('.mensaje').innerHTML = ' <img src="https://media.giphy.com/media/9zXJzvI9NlUfO7ZICI/giphy.gif" alt=""><h2>Quieres volver a jugar? <span>SI</span>/<span>NO</span></h2>'
         const si = document.querySelectorAll('span')[0];
         const no = document.querySelectorAll('span')[1];
         si.addEventListener('click', () => {
            nuevoJuego();
         })
         no.addEventListener('click', () => {
            alert("Gracias por jugar Blackjack")
            location.reload();
         })
      }
   }, 1000)
}

const nuevoJuego = () => {
   console.clear();
   mazo = [];
   crearMazo();
   imgCartasJugador.innerHTML = '';
   imgCartasComputadora.innerHTML = '';
   totalPuntosJugador = 0;
   puntosJugador.textContent = totalPuntosJugador;
   totalPuntosComputadora = 0;
   puntosComputadora.textContent = totalPuntosComputadora;
   btnEnabled();
   document.querySelector('.mensaje').innerHTML = ''
}
// INICIO
btnDisabled()
crearMazo();

// SI EL JUGADOR TIENE MAS DE 21:
// ------- LA COMPUTADORA SOLO DEBERÁ SACAR UNA CARTA (GANA)
// SI EL JUGADOR NO TIENE MAS DE 21:
// --- LA COMPUTADORA SACARÁ CARTAS HASTA QUE SUCEDA ALGO DE LO SIGUIENTE:
//-------- QUE TENGA MAS DE 21 PUNTOS (PIERDE)
//-------- CUANDO TENGA MAS PUNTOS QUE EL JUGADOR (GANA)
