

const flags = async () => {
   const resp = await fetch('http://api.countrylayer.com/v2/all/?access_key=ec0a54a20a6ff2562dbc958b874f9b62');
   const data = await resp.json();
   console.log(data)
}

flags();
