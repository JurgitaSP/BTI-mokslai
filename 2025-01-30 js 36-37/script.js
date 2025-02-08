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
//is ivesties laukelio, o statutsas, kai tik susikuria (jo reiksme) - false
//viska talpinsime i masyva


//prisidedam i masyva viena pabaigta uzduoti pavyzdziui

// const uzduotiesIvedimoInputas = document.getElementById("task-Add-Field");
// const uzduotiesPridejimoMygtukas = document.getElementById("task-add-button");
// sutrumpinam i Objekta su dviem laukeliais
const DOM = {
    uzduotiesPridejimoLaukelis: document.getElementById("task-Add-Field"),
    uzduotiesPridejimoMygtukas: document.getElementById("task-add-button"),
    nepabaigtuUzduociuSarasas: document.getElementById("tasks-active"),
    pabaigtuUzduociuSarasas: document.getElementById("tasks-finished"),
};
const uzduotys = gautiIssaugotasUzduotisIsLocalStorage();

rodytiUzduotis();

DOM.uzduotiesPridejimoMygtukas.addEventListener("click", () => {
    const reiksme = DOM.uzduotiesPridejimoLaukelis.value;
    if (reiksme.length >= 5) {
        uzduotys.push({ title: reiksme, isFinished: false });
        issaugotiUzduotisLocalStorage();
        rodytiUzduotis();
    }
    else alert("uzduoties pavadinimas turetu buti ne trumpesnis nei 5 simboliai");

});

//2. atvaizduoti aktyvias ir pabaigtas uzduotis
//uzduotys paskirstomos pagal isFinished laukeli, jei false, prideti i aktyviu sarasa

function rodytiUzduotis() {
    const nepabaigtosUzduotys = uzduotys.filter((uzduotis) => !uzduotis.isFinished);//arba !uzduotis.isFinished - nebaigta uzduotis
    const pabaigtosUzduotys = uzduotys.filter((uzduotis) => uzduotis.isFinished);

    let nepabaigtuUzduociuHtml = "";
    let pabaigtuUzduociuHtml = "";

    nepabaigtosUzduotys.forEach((nepabaigtaUzduotis) => {
        nepabaigtuUzduociuHtml += `<li>
        <span>${nepabaigtaUzduotis.title}</span>
    <button onclick ="istrintiUzduoti('${nepabaigtaUzduotis.title}')">Istrinti</button>
    <button onclick ="pabaigtiUzduoti('${nepabaigtaUzduotis.title}')">Uzduotis atlikta</button>
    </li>`;

    });

    pabaigtosUzduotys.forEach((pabaigtaUzduotis) => {
        pabaigtuUzduociuHtml += `<li>
        <span>${pabaigtaUzduotis.title}</span>
    <button onclick ="istrintiUzduoti('${pabaigtaUzduotis.title}')">Istrinti</button>
    </li>`;
    });

    DOM.nepabaigtuUzduociuSarasas.innerHTML = nepabaigtuUzduociuHtml;
    DOM.pabaigtuUzduociuSarasas.innerHTML = pabaigtuUzduociuHtml;
}

function istrintiUzduoti(title) {
    const uzduotiesIndeksas = uzduotys.findIndex(
        (uzduotis) => title.toLowerCase() == uzduotis.title.toLowerCase());//grazina skaiciu - indeksa
    if (uzduotiesIndeksas !== -1) { //jei i splicenurodysime -1, gausime klaida,be to gali istrinti
        //paskuti elementa
        uzduotys.splice(uzduotiesIndeksas, 1);
        rodytiUzduotis();
        issaugotiUzduotisLocalStorage();

    }
    else console.error("Trinamos uzduoties pavadinimas uzduociu masyve buvo nerastas");
}
//uzduotis is nepabaigtu uzduociu persikeltu i pabaigtas isfinished false i true
//paspaudus mygtuka "uzduotis atlikta", ji persikelia i uzbaigtu uzduociu sarasa
//atrandame pacia uzduoti, pakeciame false i true ir pridedam prie  masyvo

// 4. atnaujinti uzduoties statusa
function pabaigtiUzduoti(title){
    const uzduotis = uzduotys.find(
        (uzduotis) => title.toLowerCase() == uzduotis.title.toLowerCase()&&
        uzduotis.isFinished === false);

uzduotis.isFinished = true;
issaugotiUzduotisLocalStorage();
rodytiUzduotis();
}

function issaugotiUzduotisLocalStorage(){
localStorage.setItem("bandymas", JSON.stringify(uzduotys));
}

//gauti issaugotas uzduotis localStorage
function gautiIssaugotasUzduotisIsLocalStorage(){
    const visosUzduotys = localStorage.getItem("bandymas");//grazina arba string arba null (jei nerado)
    if(!visosUzduotys) return [];//jei nera uzduociu arba blogai nurodem rakta, grazina tuscia masyva
    const uzduociuMasyvas = JSON.parse(visosUzduotys);
    return uzduociuMasyvas;

    // ternary operatorius - atiduoda reiksme uz klaustuko, 
    // salyga ? reiksme jei tiesa : reiksme jei melas
    // return !visosUzduotys ? [] : JSON.parse(visosUzduotys);
}