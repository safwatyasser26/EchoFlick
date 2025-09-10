const fetch = require('node-fetch');

const url = 'https://web-production-9cf01.up.railway.app/item/get?api_key=2a7D8Xs3g32iluh9&media_type=movie&id=502416';

fetch(url)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
