const pokeImage = document.getElementById("poke-image");
const pokeName = document.getElementById("name");
const button = document.getElementById("reveal");

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((inf) => {
        //console.log(inf);
        DisplayData(inf);
});

//for update => when questionmark clicked => 1.reveal name 2. 1sec after show image of pokemon

//create random number for user; number will be used to return a pokemon name and image
const i = Math.floor(Math.random() * 20);
console.log(i);

const DisplayData = (inf) => {
    pokeName.textContent = inf.results[i].name;     
}

//////make sure to retireve the updated name not the default ....!!!!!!!
let newName = pokeName; 
console.log(newName);
let nameValue = newName.innerHTML;
console.log(nameValue);

fetch(`https://pokeapi.co/api/v2/pokemon/${newName}/`)
    .then((response) => response.json())
    .then((pic) => {
        DisplayImage(pic);
});

//retrieve image from sprites
const DisplayImage = (pic) => {
    console.log(pic);
    pokeImage.src = pic.sprites.front_shiny; 
    
}

//2. match image with name
//need to change questionamark url to pokemon specific url
button.addEventListener("click", ()=>{
    if (button.innerHTML == "Reveal") {
        button.innerHTML = "Another";

        //DisplayData(inf);
    }

});








