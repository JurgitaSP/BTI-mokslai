//paspaudus mygtuka pakeisti teksta

const button = document.getElementById("changeTextButton");
const tekstas = document.getElementById("myElement");

function changeText() {
    tekstas.innerHTML = "ketvirtadienis";
}
button.addEventListener("click", changeText);

//mygtuko paspaudimu pakeisti teksto spalva

const spalvosElemntai = document.getElementsByClassName("colorChange");
const buttonElementas = document.querySelector("#changeColorButton");

function pakeistiSpalva() {
    for (const elementas of spalvosElemntai) {
        elementas.style.color = "red";
    }

}

buttonElementas.addEventListener("click", pakeistiSpalva);

//mygtuko paspaudimu sukurti nauja mygtuka

const createButtonElement = document.querySelector("#createButtonButton");
const buttonContainerElement = document.querySelector("#buttonContainer");

function sukurtiMygtuka() {
    const naujas = document.createElement("button");
    naujas.textContent = "Naujas Mygtukas";
    buttonContainerElement.appendChild(naujas);
}
createButtonElement.addEventListener("click", sukurtiMygtuka);


//mygtuko paspaudimu prideti elementa
const sarasoEl = document.querySelector("#myList");
const mygtukoEl = document.querySelector("#addListItemButton");
let count = 1;

function pridetiSarasoEl() {
    const naujassarasoEl = document.createElement("li");
    naujassarasoEl.innerText = `eilute ${count}`;
    count += 1;
    sarasoEl.appendChild(naujassarasoEl);
}
mygtukoEl.addEventListener("click", pridetiSarasoEl);

//mygtuko paspaudimu pasalinti elementa

const pasalintiElementa = document.getElementById("removeMe");
const pasalinimoMygtukoEl = document.getElementById("removeButton");

function pasalintiEl() {
    pasalintiElementa.remove();
}
pasalinimoMygtukoEl.addEventListener("click", pasalintiEl);


//mygtuko paspaudimu pasalinti visus elementus

const salinamiElementai = document.getElementsByClassName("removeClass");
const pasalinimoMygtukas = document.getElementById("removeAllButton");
// console.log(salinamiElementai);

function pasalintiVisus() {
for (let i = salinamiElementai.length -1; i >= 0; i--){
    salinamiElementai[i].remove();
}
    
}
pasalinimoMygtukas.addEventListener("click", pasalintiVisus);

//mygtuko paspaudimu sukeisti paveiksliukus

const paveiksliukoElement = document.getElementById("myImage");
const paveiksliukoKeitimoBtn = document.getElementById("changeSrcButton");
// console.log(paveiksliukoElement);
// console.log(paveiksliukoKeitimoBtn);

function sukeisti(){
    paveiksliukoElement.setAttribute("src", "./img/js.jpg")
}
paveiksliukoKeitimoBtn.addEventListener("click", sukeisti);



const myForm = document.getElementById("myForm");
// console.log(myForm);
function addName(event){
event.preventDefault();
const userInput = document.getElementById("name").value;
alert("forma pateikta " + userInput);
document.getElementById("name").value = "";
    }
myForm.addEventListener("submit", addName);