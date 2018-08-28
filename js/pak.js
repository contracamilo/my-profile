const baseApi = 'https://pokeapi.co/api/v2/' ;
const name = document.querySelector('h1');
const image = document.querySelector('img');
const datap = document.querySelector('p');

fetch(`${baseApi}pokemon/25/`)
    .then((response)=>{
        response.json()
        .then((pokemon)=>{
            name.textContent = pokemon.name;
            image.setAttribute('src', pokemon.sprites.front_default)
            datap.textContent = pokemon.weight;
            console.log(pokemon.sprites.front_default)
            console.log(pokemon.weight)
        })
    })
  