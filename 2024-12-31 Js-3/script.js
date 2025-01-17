const firstDiceNumberElement = document.querySelector("#first-dice-number");
const secondDiceNumberElement = document.querySelector("#second-dice-number");
const firstDiceNumberIsEvenElement = document.querySelector("#first-dice .is-even");
const secondDiceNumberIsEvenElement = document.querySelector("#second-dice .is-even");

const firstDiceNumberUntilElement = document.querySelector("#first-dice .first-dice-until-6");
const secondDiceNumberUntilElement = document.querySelector("#second-dice .second-dice-until-6");


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//panaudojimo pavyzdys. Panaudojama rand funkcija sugeneruoja atsitiktinį:
//skaičių nuo 1 iki 5  
// let iskritesSkaiciusNuo1Iki5 = rand(1, 5);
//skaičių nuo 7 iki 100  
// let iskritesSkaiciusNuo7Iki100 = rand(7, 100);

// console.log(iskritesSkaiciusNuo1Iki5);

// 1. Sugeneruokite skaičių nuo 1 iki 6 (taip imituojant kauliuko metimą).
// Jį atvaizduokite console.log'e tokiu formatu: "Iškrito kauliukas - 5"

let iskritesAkiuSkaicius = rand(1, 6);

console.log(`Iskrito kauliukas - ${iskritesAkiuSkaicius}`);

// 2. Jei iškrito kauliukas - 6          console.log’e() parašykite “Va bank!”
if (iskritesAkiuSkaicius == 6){
    console.log(`Va bank!`);
}
// 3. Jei iškrito kauliukas - 1    	    console.log’e() parašykite “Whoops!”
if (iskritesAkiuSkaicius == 1){
    console.log(`Whoops !`);
}
// 4. Jei iškrito lyginis kauliukas      html’e pridėtas div elementas turėtų įgauti 
// reikšmę “Lyginis”, priešingu atveju “Nelyginis”;
let firstIsEven;
if (iskritesAkiuSkaicius % 2 == 0){
    firstIsEven = "Lyginis";
} 
else {
    firstIsEven = "Nelyginis";
}
console.log(firstIsEven);
firstDiceNumberIsEvenElement.innerHTML = firstIsEven;

// 5. “Išmeskite” dar vieną kauliuką. Jei abu kauliukai buvo 6 - Išskleiskite 
// alert su pranešimu: “Vienas iš 36!”
let iskritesAkiuSkaicius2 = rand(1, 6);

console.log(`Iskrito kauliukas2 - ${iskritesAkiuSkaicius2}`);
if (iskritesAkiuSkaicius2 == 6){
    console.log(`Va bank!`);}

    if (iskritesAkiuSkaicius2 == 1){
        console.log(`Whoops !`);
    }   
    if (iskritesAkiuSkaicius2 % 2 == 0){
        console.log(`Lyginis`);
        secondDiceNumberIsEvenElement.innerHTML = "Lyginis";
    } 
    else {
        console.log(`Nelyginis`);
        secondDiceNumberIsEvenElement.innerHTML = "Nelyginis";
    }

if (iskritesAkiuSkaicius == 6 && iskritesAkiuSkaicius2 == 6){
    alert('Vienas is 36 !');
}
// 6. Sukurkite 2 div elementus. Jų tekstai:
// “Pirmojo kauliuko metimo akys: ?”
// “Antrojo kauliuko metimo akys: ?”
// Vietoje klaustukų - turi atsirasti išridentų akių skaičius.
// Jei pirmasis kauliukas buvo didesnis akių skaičiumi už antrąjį -  
// pirmąjį div nudažyti žaliai, antrąjį div - raudonai;
// Jei pirmasis kauliukas buvo mažesnis akių skaičiumi už antrąjį -
//  pirmąjį div nudažyti raudonai, antrąjį div - žaliai;
// Jei abu kauliukai turėjo vienodą akių skaičių - abu nudažyti oranžine/geltona spalva;
firstDiceNumberElement.innerHTML = iskritesAkiuSkaicius;
secondDiceNumberElement.innerHTML = iskritesAkiuSkaicius2;
if(iskritesAkiuSkaicius > iskritesAkiuSkaicius2){
    firstDiceNumberElement.style.color = "green";
    secondDiceNumberElement.style.color = "red";
}
else if (iskritesAkiuSkaicius < iskritesAkiuSkaicius2){
    firstDiceNumberElement.style.color = "red";
    secondDiceNumberElement.style.color = "green";
}
else {
    firstDiceNumberElement.style.color = "orange";
    secondDiceNumberElement.style.color = "orange";
}
firstDiceNumberUntilElement.innerHTML = 6 - iskritesAkiuSkaicius;
secondDiceNumberUntilElement.innerHTML = 6 - iskritesAkiuSkaicius2;

function mestikauliuka1(){
    iskritesAkiuSkaicius = rand(1, 6);
    console.log(`Iskrito kauliukas - ${iskritesAkiuSkaicius}`);
    if (iskritesAkiuSkaicius % 2 == 0){
        firstIsEven = "Lyginis";
    } 
    else {
        firstIsEven = "Nelyginis";
    }
    // const firstDiceNumberElement.innerHTML = iskritesAkiuSkaicius
    // firstDiceNumberIsEvenElement.innerHTML = firstIsEven;
    // firstDiceNumberUntilElement.innerHTML = 6 - iskritesAkiuSkaicius;
}