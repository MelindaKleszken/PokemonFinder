const pokeImage = document.getElementById("poke-image");
const pokeName = document.getElementById("name");

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((inf) => {
        //console.log(data);
        DisplayData(inf);
});

//for update => when questionmark clicked => 1.reveal name 2. 1sec after show image of pokemon

const i = Math.floor(Math.random() * 20);
console.log(i);
//pokeName.innerHTML =  data.results[i].name;

const DisplayData = (inf) => {
    pokeName.textContent = inf.results[i].name;
}


