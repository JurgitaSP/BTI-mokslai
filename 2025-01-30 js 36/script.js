//CRUD funkcionalumo ivardimnimas
//Create
//Reed
//Update
//Delete

//uzduociai atlikti reikalingas ne tik uzduoties pavadinimas, bet ir statusas, todel 
//naudosime duomenu tipa - objektas(sudarytas is keliu laukeliu)
// title: uzduoties pavadinimas
// isfinished : true - uzduotis pabaigta, false-dar aktyvi
//1. sukurti uzduociu ivedima, pavadinimas negali buti maziau nei 5 simboliai
//paimti injputo reiksme, paspaudus mygtuka, sukuriame nauja objekta, kur title yra 
//is ivesties laukelio, o statutsas, kai tik susikuria - false
//viska talpinsime i masyva

const uzduotys = [{
    title: "pabaigta uzduotis",
    isFinished: true,
}];

rodytiUzduotis();
//prisidedam i masyva viena pabaigta uzduoti pavyzdziui

// const uzduotiesIvedimoInputas = document.getElementById("task-Add-Field");
// const uzduotiesPridejimoMygtukas = document.getElementById("task-add-button");
// sutrumpinam i Objekta su dviem laukeliais
const uzduotiesPridejimas = {
    laukelis: document.getElementById("task-Add-Field"),
    mygtukas: document.getElementById("task-add-button"),
}
const nepabaigtuUzduociuSarasas = document.getElementById("tasks-active");
const pabaigtuUzduociuSarasas = document.getElementById("tasks-finished");

uzduotiesPridejimas.mygtukas.addEventListener("click", ()=>{
    const reiksme = uzduotiesPridejimas.laukelis.value;
    if(reiksme.length >= 5){
        uzduotys.push({title: reiksme, isFinished: false});
    }
    else alert("uzduoties pavadinimas turetu buti ne trumpesnis nei 5 simboliai")
    rodytiUzduotis();
});
//2. atvaizduoti aktyvias ir pabaigtas uzduotis
//uzduotys paskirstomos pagal isFinished laukeli, jei false, prideti i aktyviu sarasa
function rodytiUzduotis(){
const nepabaigtosUzduotys = uzduotys.filter((uzduotis)=>!uzduotis.isFinished);//arba !uzduotis.isFinished - nebaigta uzduotis
const pabaigtosUzduotys = uzduotys.filter((uzduotis)=>uzduotis.isFinished);

let nepabaigtuUzduociuHtml = "";
let pabaigtuUzduociuHtml = "";

nepabaigtosUzduotys.forEach((nepabaigtaUzduotis)=>{
    nepabaigtuUzduociuHtml += `<li><span>${nepabaigtaUzduotis.title}</span>
    <button>Istrinti</button>
    <button>Uzduotis atlikta</button></li>`;

});
pabaigtosUzduotys.forEach((pabaigtaUzduotis)=>{
    pabaigtuUzduociuHtml += `<li><span>${pabaigtaUzduotis.title}</span>
    <button>Istrinti</button>`;

});
console.log(nepabaigtuUzduociuHtml);
console.log(pabaigtuUzduociuHtml);
nepabaigtuUzduociuSarasas.innerHTML = nepabaigtuUzduociuHtml;
pabaigtuUzduociuSarasas.innerHTML = pabaigtuUzduociuHtml;
}