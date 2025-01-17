//DOM elementų manipuliavimas (mygtuko editorius)
// HTML’e sukurkite elementą button su id=my-button
// Pridėkite įvesties laukelį, kuriame būtų įrašomas mygtuko pavadinimas 
// (vidinis mygtuko tekstas), šalia jo mygtukas “pritaikyti”, ant kurio 
// paspaudus pasikeis my-button tekstas
// Pridėkite fono spalvos įvesties laukelį , šalia jo mygtukas “pritaikyti”, 
// ant kurio paspaudus pasikeis my-button fono spalva. 
// Stilius per js redaguojamas naudojant komandą:



const myButtonElement = document.querySelector("#myButton, value");
const myColorElement = document.querySelector("#my-color");
const changeBorderElement = document.querySelector("#borderPixels");


function textChange(){
    myButtonElement.innerHTML = "Pakeistas tekstas";
}

function colorChange(){
    myColorElement.style.colorChange = "red";
}
function 
// mygtukoElementas.style.fontSize = “10px”;