

let baraja = [];

const crearBaraja = () => {
   for(let n=1; n <= 54; n++) {
      baraja.push(n);
   }
}

const crearTablero = () => {
   for (const b of baraja) {
      const carta = document.createElement('img');
      carta.src   = `./assets/loteria_mexicana/${b}.webp`;
      carta.setAttribute('onclick', `clickme(${b})`)
      document.querySelector('.container').append(carta);
   }
}

const clickme = (carta) => {
   console.log('me diste click', carta)
}

crearBaraja();
crearTablero();