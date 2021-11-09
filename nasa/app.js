
const containerHTML = document.querySelector('.container'); 

const nasaAPIKey    = 'dnzBoxMmXfZhxNk0mdZ9F6LnW8JcdWv7rdPhpVrI';
const urlAPI        = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}`;

window.addEventListener('load', () => {
   
   fetch( urlAPI )
   .then( resp => resp.json() )
   .then( ({ url }) => {
      const imagenAPOD    = document.createElement('img');
      imagenAPOD.src      = url;
      containerHTML.append(imagenAPOD);
   })

})


