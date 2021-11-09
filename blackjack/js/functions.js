
const crearMazo = () => {
   let cartas = [];
   let palo   = ['C','D','H','S'];
   let especiales = ['A','J','K','Q']
   for(let n = 2; n<=10; n++) {
      for(let p of palo) {
         cartas.push(n+p);
      }
   }
   for(let e of especiales) {
      for(let p of palo) {
         cartas.push(e+p);
      }
   }
   return _.shuffle(cartas);
}

const btnDisabled = ( disabled ) => {
   btnPedir.disabled   = disabled;
   btnDetener.disabled = disabled;
   if(disabled) {
      btnPedir.classList.add('bg-blue-disabled');
      btnDetener.classList.add('bg-blue-disabled');
   } else {
      btnPedir.classList.remove('bg-blue-disabled');
      btnDetener.classList.remove('bg-blue-disabled');
   }
}

//FIXME: Completar la función
const nuevoJuego = () => {
   mazo = crearMazo();
   cardsPlayer.innerHTML   = '';
   cardsComputer.innerHTML = '';
   btnDisabled(false);
   // setTimeout( () => {
   //    pedirCartaJugador();
   //    setTimeout( () => {
   //       pedirCartaComputadora();
   //       setTimeout( () => {
   //          pedirCartaJugador();
   //       }, 300)
   //    }, 300)
   // }, 100)
}

const pedirCarta = () => {
   const carta = mazo.shift();
   if(mazo.length === 0) {
      btnDisabled(true);
   }
   return carta;
}

const pedirCartaJugador = () => {
   const cardPlayer = pedirCarta();
   cardsPlayer.innerHTML += `<img class="card" src="./assets/cartas/${cardPlayer}.png">`;
}

const pedirCartaComputadora = () => {
   const valorCarta   = pedirCarta();
   const cardComputer = document.createElement('img');
   cardComputer.classList.add('card')
   cardComputer.src   = `./assets/cartas/${valorCarta}.png`;
   cardsComputer.append(cardComputer);
}

