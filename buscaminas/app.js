
const grid = document.querySelector('.grid');

for(let n=0; n < 100; n++) {
   const div = document.createElement('div');
   div.textContent = n + 1;
   grid.appendChild(div)
}