// Darbas su tekstu
// 1. Sukurti funkciją, kuri atiduoda pirmą pateikto teksto simbolį;

// f-ja tures priimti viena parametra

function pirmasSimbolis(tekstas){

    console.log(tekstas.charArt(0));
}
let rezultatas = pirmasSimbolis("sauleja");
console.log(rezultatas);


// 2. Sukurti funkciją, kuri atiduoda paskutinį pateikto teksto simbolį;
function paskutinisS(tekstas){
console.log(tekstas.charArt(tekstas.length -1 ));
}
let rezultatas2 = paskutinisS(keksiukai);
console.log(rezultatas2);

// 3. Sukurti funkciją, kuri pakeičia visas tekste pateiktas o raides į 0 (nulius)
function swap(tekstas){
tekstas = (tekstas.replaceAll("{o}"), "0");
}
let rezultatas3 = swap(kosmosas);
console.log(rezultatas3);

// 4. Sukurti funkciją, kuri atiduoda tekstą be paskutinio simbolio


// 5. Sukurti funkciją, kuri priimanti tekstą pakeičia pirmąsias dvi raides 
// vietomis

// 6. Sukurti funkciją, kuri gavusi datą formatu "2024-01-01" atiduoda metus "2024"

// 7. Sukurti funkciją, kuri gavusi datą tekstiniu formatu "2024-01-01" atiduoda
//  mėnesį pagal jo pavadinimą: "Sausis"

// 8. Sukurti funkciją, kuri priimant parametrą
