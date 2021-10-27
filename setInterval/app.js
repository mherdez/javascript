
(() => {
   'use strict';

const colors = ['red', 'green', 'blue', 'coral', 'yellow', 'indigo'];
let setBackground;
let stop = false;
let c = 0;
let co = '';

const h1 = document.querySelector('h1');
const btn = document.querySelector('.btn');
const body = document.body;

   body.addEventListener('click', () => {
      // if(co) {
      //    h1.innerText = co;
      // }
      // co==='' ? '' : h1.innerText = co;
      // co !== '' && (h1.innerText = co);
      co && (h1.innerText = co);
   })


   btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!stop) {
         btn.textContent = 'Pausar'
         setBackground = setInterval(() => {
            c = c < colors.length ? c : 0;
            // console.log(colors[c]);
            // document.body.style.backgroundColor = colors[c]
            co = `rgb(${numeroRnd()}, ${numeroRnd()}, ${numeroRnd()})`;
            document.body.style.backgroundColor = co;
            c++;
         }, 500);
      } else {
         clearInterval(setBackground);
         btn.textContent = 'Continuar'
      }
      stop = !stop;
   })
   
   btn.addEventListener('dblclick', () => {
      clearInterval(setBackground);
      document.body.style.backgroundColor = 'white'
      stop = false;
      c = 0;
      btn.textContent = 'Iniciar'
      h1.innerText = 'Colores'
      co = ''
   })

   const numeroRnd = (min = 0, max = 256) => {
      return parseInt(Math.random() * (max - min) + min);
    }

    
})();
