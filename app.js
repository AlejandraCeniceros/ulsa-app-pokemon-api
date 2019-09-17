const pokemonName =document.getElementById("pokemon-name");
const pokemonHeight = document.getElementById("pokemon-height");
const pokemonFrontImg = document.getElementById("pokemon-img-front");
pokemonName.innerText = "El nombre de mi pokemon es: "
 const pokemonApiUrl = 'https://pokeapi.co/api/v2/'

 // funcion para devolver informacion de una api: 

 let getPokemonData = async ()=> {   // 'async' hace una busqueda en segundo plano  
    const  respose = await  fetch (`${pokemonApiUrl} pokemon/1/`); // 'await pone en espera en lo que hace la busqueda / fetch es como un foreach llena todo
    //quiero que regrese un Json es un formato especial de objeto ej. ataques -> tipo agua-> daño...
    const data = await response.json();
    //console.log(data);
    const {name, height}= pokemonName;
    //pokemonName.innerText = data.name;
    pokemonName.innerText = name;
    pokemonHeight.innerText = `la altura es : ${height}`;
    pokemonFrontImg.scr = pokemonFrontImg
 };

 //llamar a la funcion para que se ejecute
 getPokemonData();