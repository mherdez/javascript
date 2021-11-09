
   let mazo      = [];
   let memoria   = [];
   let turno1    = false;
   let turno2    = false;
   let verCarta1 = document.img;
   let verCarta2 = document.img;
   let pares     = 0;
   let posicion1 = 0;
   let intentos  = 0

   let container    = document.querySelector('#container');
   let intentosHTML = document.querySelector('h1 small span');

   const creaMazo = () => {
      const palo = ['C', 'D', 'H', 'S'];
      const especiales = ['A', 'Q', 'K', 'J'];

      for (let i = 2; i <= 10; i++) {
         palo.forEach((p) => {
            mazo.push(i + p);
         });
      }
      especiales.forEach((e) => {
         palo.forEach((p) => {
            mazo.push(e + p);
         });
      });
      mazo = _.shuffle(mazo)
      for (let m = 1; m <= 9; m++) {
         let carta = mazo.pop();
         memoria.push(carta)
         memoria.push(carta)
      }
      memoria = _.shuffle(memoria)
   }

   const creaCarta = () => {
      for (let row = 1; row <= 3; row++) {
         for (let col = 1; col <= 6; col++) {

            const posicion = `${row}${col}`;
            const carta = memoria.pop()
            const img = document.createElement('img');

            img.setAttribute('id', `${posicion}`);
            img.setAttribute('onclick', `mostrarCarta('${posicion}','${carta}')`);
            img.src = `./assets/cartas/grey_back.png`

            container.append(img)
         }
      }
   }

   const mostrarCarta = (posicion, carta) => {
      if (!turno1) {
         verCarta1 = document.getElementById(posicion);
         verCarta1.src = `./assets/cartas/${carta}.png`;
         turno1 = true;
         posicion1 = posicion;
      } else if (!turno2 && (posicion1 !== posicion)) {
         verCarta2 = document.getElementById(posicion);
         verCarta2.src = `./assets/cartas/${carta}.png`;
         turno2 = true;
         posicion = 0;
         const time = setTimeout(() => {
            if (verCarta1.src === verCarta2.src) {
               verCarta1.src = ``;
               verCarta2.src = ``;
               verCarta1.removeAttribute('onclick');
               verCarta2.removeAttribute('onclick');
               pares++;
               if (pares === 9) {
                  let nuevoJuego = confirm(`Felicidades, has ganado!, Lo hiciste en ${intentosHTML.textContent} intentos\n\nQuieres volver a jugar?`);
                  if (nuevoJuego) {
                     location.reload();
                  } else {
                     return;
                  }
               }
            } else {
               verCarta1.src = `./assets/cartas/grey_back.png`;
               verCarta2.src = `./assets/cartas/grey_back.png`;
            }
         }, 500)
         turno1 = false;
         turno2 = false;
         intentos++;
         intentosHTML.textContent = intentos;
      }
   }

   creaMazo()
   creaCarta();

