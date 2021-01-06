const pokeImage = document.getElementById("poke-image");
const pokeName = document.getElementById("name");

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
});


const displayData = (data) => {
    nev.textContent = data.name;
    //document.getElementById("nev").innerHTML = nev;
};








