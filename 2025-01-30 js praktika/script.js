const button = document.getElementById("changeTextButton");

const tekstas = document.getElementById("myElement");

function changeText() {
    tekstas.innerHTML = "ketvirtadienis";
}
button.addEventListener("click", changeText);


const spalvosElemntai = document.getElementsByClassName("colorChange");
const buttonElementas = document.querySelector("#changeColorButton");

function pakeistiSpalva() {
    for (const elementas of spalvosElemntai) {
        elementas.style.color = "red";
    }

}

buttonElementas.addEventListener("click", pakeistiSpalva);



// const createButtonElement = document.querySelector("#createButtonButton");
// const buttonContainer = document.querySelectorAll("#buttonContainer");

// function sukurtiMygtuka() {
//     const naujas = document.createElement("button");
//     naujas.textContent = "naujas Mygtukas";
//     buttonContainer.appendChild(naujas);
// }
// createButtonElement.addEventListener("click", sukurtiMygtuka);

// <ul id="myList"> 
//   <li>Elemento 1</li>
// </ul>
// <button id="addListItemButton">Pridėti sąrašo elementą</button>  

const sarasoEl = document.querySelector("#myList");
const mygtukoEl = document.querySelector("#addListItemButton");
let count = 1;

function pridetiSarasoEl(){
    const naujassarasoEl = document.createElement("li");
    naujassarasoEl.innerText = `eilute ${count}`;
    count += 1;
    sarasoEl.appendChild(naujassarasoEl);
}
sarasoEl.addEventListener("click", pridetiSarasoEl);