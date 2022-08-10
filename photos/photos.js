
// REFERENCIAS HTML
const photos     = document.querySelector('#photos img')
const allPhotos  = document.querySelector('#allPhotos');
const check      = document.querySelector('#check');
const background = document.querySelector('.background');

// VARIABLES
let stop = false;
let changePhotos;

// FUNCIONES
photos.addEventListener('click', () => {
   if (!stop) {
      changePhotos = setInterval(async () => {
         const {url} = await fetch('https://picsum.photos/600/400');
         if(check.checked) {
            photos.src = url;
         }
         // background.scrollTop = '99999';
         allPhotos.innerHTML = `<img src="${url}" class="photosSmall" onclick="cambio('${url}') " title="${url}" ondblclick="visitar('${url}')"></img>` + allPhotos.innerHTML;
      }, 1500);
   } else {
      clearInterval(changePhotos);
      console.log('pause')
   }
   stop = !stop;
})

const cambio = (url) => photos.src = url;
const visitar = (url) => window.open(url);