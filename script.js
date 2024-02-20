const choosingImage = document.getElementById("image");
const choosingContext = document.getElementById("context");
const defaultSrc = "https://promova.com/content/instruments_of_music_1b2a084691.png";
const defaultContext = "Hover over an image below to display here.";

function upDate(instrument){
    console.log("Upload this instrument");
    choosingImage.src = instrument.src;
    choosingContext.textContent = instrument.alt;
}

function undo(){
    console.log("Undo the upload");
    choosingImage.src = defaultSrc;
    choosingContext.textContent = defaultContext;
}