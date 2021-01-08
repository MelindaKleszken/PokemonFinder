const pokeImage = document.getElementById("poke-image");
const pokeName = document.getElementById("name");
const button = document.getElementById("reveal");


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
    const i = Math.floor(Math.random() * 20) + 1; 
    console.log(i);
    
    //TO UPDATE NAME AREA
    const DisplayData = (inf) => {
        pokeName.innerText = inf.results[i].name;     
        console.log(pokeName.textContent);
    }   
    //2. match image with name
    //need to change questionamark url to pokemon specific url
    //get the Pokemon image
    fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
    .then((response) => response.json())
    .then((pic) => {
        DisplayImage(pic);
        pokeImage.style.width = '17vh';
        
    });

    //retrieve image from sprites
    const DisplayImage = (pic) => {
        //console.log(pic);
        pokeImage.src = pic.sprites.front_shiny; 
    }

});








