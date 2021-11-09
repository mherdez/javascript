
const pedirMarvel = async () => {
   const keys = '15185d17bb2060a2209ed2a86adec402b9ae33ef7953136e59996823f4685a74a20568f42';
   const hash = '98b197114d59feed5b80deba49145831';
   try {
      const resp = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=953136e59996823f4685a74a20568f42&hash=98b197114d59feed5b80deba49145831');
      const { data } = await resp.json();
      console.log(data.results)
   } catch (error) {
      console.log(error)
   }
}

const container = document.querySelector('.container');

const marvel = {
   listHeros: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=953136e59996823f4685a74a20568f42&hash=98b197114d59feed5b80deba49145831';

      fetch(urlAPI)
         .then(resp => resp.json())
         .then(({ data }) => {
            console.log(data)
            for (const hero of data.results) {
               const url = hero.thumbnail.path + '.' + hero.thumbnail.extension;
               if (url !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                  const h1 = document.createElement('h3');
                  h1.textContent = hero.name;
                  container.append(h1);

                  const img = document.createElement('img');
                  img.src = url;
                  container.append(img)
               }




            }
         });
   }
};


// pedirMarvel();
marvel.listHeros();