
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
    'X-RapidAPI-Key': '1917ad3211msh4712239feeda776p1e22c8jsndc955214cb00'
  }}


fetch('https://the-sneaker-database.p.rapidapi.com/sneakers?limit=10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
