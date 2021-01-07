const pokeImage = document.getElementById("poke-image");
const pokeName = document.getElementById("name");
const button = document.getElementById("reveal");

/*fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((inf) => {
        //console.log(inf);
        DisplayData(inf);
});*/

//for update => when questionmark clicked => 1.reveal name 2. 1sec after show image of pokemon



/*fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
    .then((response) => response.json())
    .then((pic) => {
        DisplayImage(pic);
});*/


//2. match image with name
//need to change questionamark url to pokemon specific url
button.addEventListener("click", ()=>{
    if (button.innerHTML == "Reveal") {
        button.innerHTML = "Another";
    }
    //get the pokemon API
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((inf) => {
        //console.log(inf);
        DisplayData(inf);
    });

    //GET THE RANDOM NUMBER TO GENERATE DATA
    const i = Math.floor(Math.random() * 20);
    
    //TO UPDATE NAME AREA
    const DisplayData = (inf) => {
        pokeName.innerText = inf.results[i].name;     
        console.log(pokeName.textContent);
    }   
    
    //get the Pokemon image
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then((response) => response.json())
    .then((pic) => {
        DisplayImage(pic);
    });

    //retrieve image from sprites
    const DisplayImage = (pic) => {
        //console.log(pic);
        pokeImage.src = pic.sprites.front_shiny; 
    }

});








